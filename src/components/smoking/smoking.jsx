import { useState } from "react";
import style1 from '/home/fakher/CODI/SHRC/front/src/App.module.css'



const Smoking = (props)=> {

const[state,setState]=useState({
      edit_mode: false,
        id: props.id,
        name: props.name,
      
})


   const toggleEditMode = () => {
        let edit_mode = !state.edit_mode;
        setState((prevState)=>({
            ...prevState,
            edit_mode,
          }));
    }

    const handleChange = (event) => {
        let {  value } = event.target;
     setState((prevState)=>({
            ...prevState,
            name:value,
          }));
    }

    

const    handleSubmit = (event) => {
        event.nativeEvent.preventDefault();
        let { id, updateSmoking } = props;
        let { name } = state;
        updateSmoking(name,id);
        toggleEditMode();
    }
    const    handleDelete = () => {
  
        let { id, deleteSmoking } = props;
       
        deleteSmoking(id);
       
    }

   const handleReset = (event) => {
        event.nativeEvent.preventDefault();
        let { name  } = props;
        setState({ name });
        toggleEditMode();
    }

   const renderEditMode = () => {
   
        return (
            <div className="contact_card">
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <div>
                        <input className={style1.inputFATable}
                            required
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={state.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                       
                    </div>
                    <button className={style1.btnFATable} type="reset" >cancel</button>
                    <button className={style1.btnFATable} type="submit">update smoking</button>
                </form>
            </div>
        )
    }

   const renderViewMode = () => {
        let {name } = props;
        return (
            <div className="contact_card">
                <p>{name}</p>
            
                 <button className={style1.btnFATable} onClick={handleDelete} >x</button>
          
                
                <button className={style1.btnFATable} onClick={toggleEditMode}>edit</button>
            </div>
        )
    }

        let { edit_mode } = state;

        if (edit_mode) return renderEditMode();
        else return renderViewMode();
    
}
export default Smoking;