import React from 'react'


function DeleteAllBtn() {

    const deleteAll = async() =>{
        try{
            const responseApi = await fetch("https://react-password-app.onrender.com/api/delete_all",{ //fetch backend server pro vymazani vseho
                method: "delete", 
                headers:{
                    "Content-Type": "application/json" //musi byt takto
                }
                    
            })

            const data = await responseApi.json()

        }
        catch(err){
          console.log(err)


        }
    }

  return (
    <div>
      <button className='border border-white text-xl font-semibold rounded-full p-5 my-5 hover:scale-105  bg-primary-600 hover:bg-primary-700 scale-105 transition-all active:bg-primary-500 active:transition-colors"' onClick={deleteAll}>Delete All</button>
    </div>
  )
}

export default DeleteAllBtn
