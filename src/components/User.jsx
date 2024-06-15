import { useSearchParams } from "react-router-dom";
import { getDataAtom } from "../lib/store";
import { useAtom } from "jotai";

const User = () =>{
    const [data] = useAtom(getDataAtom);
    return (
        <div>
            {
                data.map((item,id) =>(
                    <div id={id}>
                        <h2>{item.name}</h2>
                        <h2>{item.username}</h2>
                        <p>{item.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default User;