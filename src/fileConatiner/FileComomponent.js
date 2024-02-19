import React, { useState } from 'react'

const FileComomponent = ({list,handleAdd,handleDelete}) => {
    const[showForm,setShowForm] = useState(false);
    const[fileName,setFileName] = useState(false);
    const [showAccordian,setShowAccordian] = useState(false)
    const handleFileNameChange =(e) =>{
        let obj = {
            id: Date.now(),
            fileName:fileName,
            child:[]
        }
       handleAdd(obj,list.id);
       setFileName("");
       setShowForm(false);
    }
    const handleFileDelete = () =>{
        handleDelete(list.id)
    }
  return (
    <div className='card'>
      
        <div className={list.child.length===0?"header-disable":"header"} onClick={()=>setShowAccordian(!showAccordian)}>{list.fileName}{list.child.length!==0? "👇":" ⛔ "}</div>

        {showForm &&
        <div>
            <input type="text" onChange={(e)=>setFileName(e.target.value)}/>
            <button onClick={(e)=>handleFileNameChange(e)}>Add</button>
            <button onClick={()=>setShowForm(false)}>Cancel</button>
            </div>
        }
    
        <div className='buttonContainer'>
        <button onClick={()=>setShowForm(true)}>Add New file</button>
        <button onClick={()=>handleFileDelete()}>Delete</button>
        </div>
        {
            showAccordian &&  <div className='p-20'>
            {list?.child?.length>0 && list?.child?.map((item)=>{
                return <FileComomponent list={item} handleAdd={handleAdd} handleDelete={handleDelete}/>
            })}
            </div>
        }
       
    </div>
  )
}

export default FileComomponent