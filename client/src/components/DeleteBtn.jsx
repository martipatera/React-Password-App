import React from 'react'

function DeleteBtn(props, index) {// posilam pres props id kazdeho hesla

    const fetchData = async () =>{
        try{
            const response = await fetch(`http://localhost:3000/api/delete_data/${props.id}`,{//deletnu podle id -> backend 
                method: "delete",
                headers:{
                    "Content-Type": "application/json"
                }

            })
            const data = await response.json()
            console.log(data)


        }
        catch(error){
            console.log(error)

        }
        
    }

    const handleDelete = ()=>{
        fetchData()
    }

  return (
      <button className={`border-2 border-black text-lg font-semibold rounded-full p-3 m-3 hover:scale-105 transition-all ${props.index % 2 === 0 ? "bg-zinc-500" : "bg-zinc-400"}`} onClick={handleDelete}>Delete</button>
  )
}

export default DeleteBtn
