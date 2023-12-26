import React, { useState } from 'react'

export default function CRUD() {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])

    const addData = () => {
        if(!inputData){

        }else{
            const data = [...items, inputData];
            setItems(data)
            console.log(data);
            setInputData('')
        }       
    }

    const deleteItem = (id) => {
        console.log(id);
        const updatedData = items.filter((ele,ind)=>{
            return id !== ind;
        })
        console.log(updatedData);
        setItems(updatedData)
    }
  return (
    <>
      <h1>React CRUD</h1>
      <div>
        <input type='text' placeholder='Write something...' value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
      <button onClick={addData}>ADD</button>
      </div>
      {
        items.map((ele, ind)=>{
            return(
             <>
      <div key={ind}>
      <span>{ele}</span>
      <button onClick={()=>deleteItem(ind)}>Delete</button>
      <button>update</button>
      </div>
             </>
            )
        })
      }
      
    </>
  )
}
