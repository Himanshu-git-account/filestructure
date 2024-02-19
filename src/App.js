
import { useState } from 'react';
import './App.css';
import FileComomponent from './fileConatiner/FileComomponent';
import { useFile } from './fileConatiner/useFile';
import {treeList} from './fileStructuture'

function App() {
  const {addFile,deleteFile} = useFile();
   const [tree,setTree] =useState(treeList)
  const handleAdd= (obj,id) =>{
    setTree(addFile(obj,id,tree));
  }
  const handleDelete =(id)=>{
    setTree(deleteFile(id,tree))
  }
  return (
    <div className='container'>
      <FileComomponent list={tree} handleAdd={handleAdd} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
