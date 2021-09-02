import { useEffect, useState } from "react";

const CreatePatient = () => {

    const [tool,setTool]=useState('');

let handleCreate=()=>{
    let url='http://localhost:8080/patient';


}

let handleChange=(e)=>{
let value=e.target.value
setTool(value);
}
    return ( <>
    <input onChange={handleChange} type='text'/>

    <button value='create'/>
    </>
     );
}
 
export default CreatePatient;