'user server'

import { db } from "@/config/db";
import { verifySession } from "../_lib/session"
import { users } from "@/config/schema"; 
import { eq } from "drizzle-orm";

export async function banUser() {
  const session = await verifySession();

  const user = await db.query.users.findFirst({
    where: eq(users.id, session.userId), 
  });

  if (user?.role !== 'admin') {
    return { error: 'Unauthorized' };
  }

}
