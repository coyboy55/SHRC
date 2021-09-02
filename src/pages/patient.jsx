import { useEffect, useState } from "react";
import {FormLabel} from '@material-ui/core'
const TestFetching = () => {

    const [state,setState]=useState([])

    
let obj=[
    {
firstName:'mariam'
    },
    {
firstName:'fakher'
    },
    {

    },
]

const getPatients=async()=>{
let url='http://localhost:8080/patient';
 let response=await fetch(url);
let data=await response.json();
let patients=data.result;
setState(patients);


}

    
    useEffect(()=>{
getPatients();
    },[])

    console.log(state);
 let list = state.map((item)=>(
     

    <div class='div'>
    <p>Name :{item.firstName} {item.lastName}</p>
    <p>Age :{item.age}  Blood :{item.blood}</p>

    <p>motherName :{item.motherName}</p>


</div>
     
 )
 )
    return ( 
        <>

            <header>
                <p></p>
            </header>
            <boody>

{list}        

</boody>
        </>
     );
}
 
export default TestFetching;