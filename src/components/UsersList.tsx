import { useState } from "react";
import type IUser from "../interfaces/IUser";
import { User } from "./User";
import { IoSearch } from "react-icons/io5";
import {sortBy} from "sort-by-typescript";

type IProps ={
  users : IUser[]
}

export const UsersList : React.FC<IProps> = ({users}) => {
  const [searchTerm , setSearchTerm ] = useState<string>("");
  console.log(searchTerm);


  const filtredUsers : IUser[]  = searchTerm === "" 
  ? users 
  : users.filter((user) : boolean =>{
    const fullname = `${user.name.first} ${user.name.last}`;
    return fullname.toLocaleLowerCase().includes(searchTerm.trim().toLocaleLowerCase());
  })



  return (
    <>
       <form>
            <div className="container">
              <div className="mb-3 w-100">
    
               <div className="d-flex position-relative">
                   <input type="text"  className="form-control me-2" placeholder="Entrer Nom Utilisateur"
                   value={searchTerm}
                   onChange={(e :  React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                   />
                   <IoSearch  className="position-absolute" style={{right:"15px", top:"10px"}}/>
              </div>
             </div>
          </div>
        </form>


{filtredUsers.length !== users.length && (
    <div className="text-center">
      <span >Affichage de {filtredUsers.length} de {users.length} utilisateurs</span>
      <button onClick={() => setSearchTerm("")} className="btn text-primary">Afficher Tous</button>
    </div>)}

    <div className="container">
      <div className="row">
        {users && filtredUsers.sort(sortBy("name.first")).map((user : IUser) => (
             <div key={user.login.uuid} className="col-12 col-lg-6 ">
                   <User user={user}/>
              </div>
        ))}
              
       </div>

      </div>
    </>
  )
}
