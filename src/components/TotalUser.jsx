import { useAtom } from "jotai";
import { usersAtom } from "../lib/store";

const TotalUser = () =>{
    const [users, setUsers] = useAtom(usersAtom);
    return(
        <>
        <h1>Our total user {users.length} </h1>
        </>
    )
}

export default TotalUser;