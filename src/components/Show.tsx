import { useState } from "react"

type IProps = {
  onSubmit : (numberOfUsers?: number) => Promise<void>
}

export const Show : React.FC<IProps> = ({onSubmit}) => {
   
  const [count , setCount] = useState<number>(1);

  return (
    <>
    <form onSubmit = {(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(count);
    }}>
        <div className="container">
<div className="mb-3 w-100">
  <label htmlFor="exampleInputNbusers1" className="form-label">Nombre des utilisateurs à afficher</label>
 <div className="d-flex ">
     <input type="number"  className="form-control me-2" id="exampleInputNbusers1"
      min={1}
      max={100}
      value={count}
      onChange={(e : React.ChangeEvent<HTMLInputElement>) => setCount(parseInt(e.target.value)) }
    
     />
   <button type="submit" className="btn btn-primary">Afficher</button>
 </div>
</div>
</div>




    </form>

    </>
  )
}
