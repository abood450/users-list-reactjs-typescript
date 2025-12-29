import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import type IUser from "../interfaces/IUser";

type IProps = {
  user : IUser
}


export const User :React.FC<IProps>  = ({user}) => {
  return (
    <>

   <div className="card w-100 mb-3">
  <div className="card-body shadow d-flex align-items-center gap-4">
    <div style={{width: "80px" , height:"80px"}} className="rounded-circle">
        <img src={user.picture.large} alt={user.name.title} className="w-100 h-100 object-fit-cover rounded-circle"/>
    </div>
    <div>
        <h5 className="card-title">{`${user.name.first } ${ user.name.last}`}</h5>
         <p> <MdEmail size={17}/>  {user.email}</p>
         <p> <FaLocationDot size={17}/> {`${user.location.country} - ${user.location.state} , ${user.location.city}`} </p>
        <p><FaPhoneAlt size={17}/>  {user.phone}</p>
    </div>

  </div>
</div>




    
    </>
  )
}
