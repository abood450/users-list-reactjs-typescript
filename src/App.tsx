import { useEffect, useState } from "react";
import { Show } from "./components/Show";
import { UsersList } from "./components/UsersList"
import axios from "axios";
import type IUser from "./interfaces/IUser";


function App() {
 const [users , setUsers] = useState< IUser[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 

  const getUsers : () => Promise<void> = async (numberOfUsers : number =1 ) => {
    try{
       const response = await axios.get(`https://randomuser.me/api/?results=${numberOfUsers}&nat=us,ca`);
       const data = response.data.results;
       console.log(data);
       setUsers(data);
       setLoading(false);
    }catch(error){
      setLoading(false);
      console.log(error);
      setError((error as Error).message);
    
    }
  }


  useEffect(() => {
      getUsers();
  },[])

  return (
    <>
    <h2 className="text-center my-4">Liste des utilisateurs </h2>
    <Show onSubmit={getUsers}/>
    {loading && <p className="text-center m-5 ">Chargement...</p>}
    {!loading && error && (<div className="w-50 m-auto text-center alert alert-danger" role="alert">
     {error}</div>)}
    {!loading && users && <UsersList users={users}/>}
    
    </>
  )
}

export default App
