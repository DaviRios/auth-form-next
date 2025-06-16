import { verifySession } from "../_lib/session";

export default async function Dashboard() {
    const session =  await verifySession()
    const role = session?.role

    if(role === 'admin'){
        return <AdminDashboard/>
    }

    return <UserDashboard/>
    
}

function AdminDashboard(){

}


function UserDashboard(){
    
}