export const useFile = ()=>{
    const addFile= (obj,id,tree)=>{
       
        if(tree.id===id){
            return tree.child.push(obj)
        }
        const updatedTree= tree.child.map(item=>{
           return addFile(obj,id,item)
        })
        
        return {...tree, child:updatedTree}
    }
    const deleteFile= (id,tree)=>{
        
        if(tree.id===id){
            return tree.child.filter((item)=>item.id!==id)
        }
        const updatedTree= tree?.child?.map(item=>{
           return deleteFile(id,item)
        })
        
        return {...tree, child:updatedTree}
    }
    return {addFile,deleteFile}
}