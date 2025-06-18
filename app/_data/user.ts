import { verifySession } from "../_lib/session"
import { db } from '@/config/db'
import { users } from '@/config/schema'
import { taintUniqueValue } from "next/dist/server/app-render/rsc/taint"
import { cache } from 'react'
import { eq } from 'drizzle-orm';

export async function getUser() {
  const session = await verifySession();

  const data = await db.query.users.findMany({
    where: eq(users.id, session.userId),
    columns: {
      name: true,
      email: true,
      password: true,
      sessionToken: true,
    },
  });

  const user = data[0];
  const filteredUser = userDTO(user);
  return filteredUser;
}


type UserDTO = {
  name: string;
  email: string;
};


function userDTO(user: {
  name: string | null;
  email: string;
  password: string;
  sessionToken: string | null;
}): UserDTO {
  taintUniqueValue(
    'Do not pass a user password or session token to the client.',
    user,
    user.password, // proteção extra
  );
  if (user.sessionToken) {
    taintUniqueValue(
      'Do not pass a user session token to the client.',
      user,
      user.sessionToken,
    );
  }


  return {
    name: user.name ?? 'Usuário',
    email: user.email,
  };
}
