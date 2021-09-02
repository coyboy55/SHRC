import { useState } from "react";
import style from '/home/fakher/CODI/SHRC/front/src/App.module.css'

const AddSmoking  =(props)=> {
const [name,setName]=useState('');
    

   let handleSubmit = (event) => {
        event.nativeEvent.preventDefault();

        props.createSmoking(name);
    }

  let  handleChange = (event) => {
      let value = event.target.value;
  setName(value);
  
    }

        return (
            <form className={style.AddTable} onSubmit={handleSubmit}>

                <div>
                    <input className={style.inputFATable}
                        required
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>


                <button className={style.btnFATable} type="submit">add smoking</button>

            </form>
        )
    
}
export default AddSmoking;