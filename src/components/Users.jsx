import { usersAtom } from "../lib/store";
import { useAtom } from "jotai";
import {useState } from "react";
import uniqid from "uniqid"
import { useRef } from "react";

const Users = () =>{
    const [users, setUsers] = useAtom(usersAtom);
    const [id, setId] = useState();
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [updateName, setUpdateName] = useState('');
    const [updateEmail, setUpdateEmail] = useState('')
    const inputRef = useRef();
    const labelRef = useRef();
    const updateButtonRef = useRef();

    const addUser = (event) =>{
        event.preventDefault();
        console.log('hello')
        if(name && email){
            setUsers((users) => [...users,{id:uniqid(),name:name,email:email}])
        }
        setName('');
        setEmail('');
        inputRef.current.focus();
    }
    const deleteAllUsers = () =>{
        labelRef.current.click()
    }
    const deleteUser = (targetId) =>{
       const newUsers =  users.filter((user) => user.id != targetId)
       setUsers(newUsers);
    }

    const updateHandler = (targetId) =>{
        setId(targetId)
        updateButtonRef.current.click();
       const targetUser = users.filter(user => user.id === targetId)
       setUpdateName(targetUser[0].name);
       setUpdateEmail(targetUser[0].email);
    }
    const finalUpdate = () =>{
       const index = users.findIndex(user => user.id === id)
       users[index].name = updateName;
       users[index].email = updateEmail;
       setUsers([...users]);
    }

    return(
        <>
        <div className=" flex justify-center">
            <form>
                <div className="flex flex-col">
                    <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" className="input input-bordered input-accent w-full max-w-xs" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="input input-bordered input-accent w-full max-w-xs" />
                    <button type='submit' onClick={(e) => addUser(e)} className="btn btn-outline btn-accent max-w-xs">Create</button>
                </div>
            </form>
        </div>
        <button onClick={deleteAllUsers} className="btn btn-outline btn-accent max-w-xs">Delete all users</button>
            <div className="user-container flex flex-wrap gap-2 justify-center">
                {users.map((user,id) =>(
                    <div key={id} className="card border-b-purple-700 border-2 w-96 shadow-xl">
                    <div className="card-body">
        
                    <h2 className="card-title">{user.name}</h2>
                    <p>{user.email}</p>
                    <div className="card-actions justify-end">

                        <button onClick={() => updateHandler(user.id)} className="btn btn-outline btn-accent max-w-xs">Update</button>
                        <button onClick={()=> deleteUser(user.id)} className="btn btn-outline btn-accent max-w-xs">Delete</button>
                    </div>
                    </div>
                </div>
                )).reverse()}
            </div>

           
            <label ref={labelRef} htmlFor="my_modal_6" className="btn hidden">open modal</label>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">This modal works with a hidden checkbox!</p>
                <div className="modal-action">
                <label onClick={() => setUsers([])} htmlFor="my_modal_6" className="btn bg-red-500">Delete</label>
                <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div>
            </div>
            </div>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button ref={updateButtonRef} className="btn hidden" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

<div className="modal-box">
    <form className="flex flex-col items-center">
        <input id="name" value={updateName} onChange={(e) => setUpdateName(e.target.value)} type="text" placeholder="Name" className="input input-bordered input-accent w-3/4" />
        <input id="email" value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered input-accent w-3/4" />
    </form>

    <div className="modal-action">
      <form method="dialog">
        <button onClick={() => finalUpdate()} className="btn btn-primary mr-2">Primary</button>
        <button className="btn btn-outline btn-error">Close</button>
      </form>
    </div>
  </div>

</dialog>
        </>
    )
}
export default Users;