import React, { useEffect, useState } from 'react'


const list = JSON.parse(localStorage.getItem('data'))
console.log(list);

export default function CRUD() {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState(list)
    const [toggle, setToggle] = useState(true)
    const [isEdit, setIsEdit] = useState(null)

    const addData = () => {
        if(!inputData){

        }else if(inputData && !toggle){
          setItems(
            items.map((ele)=>{
              if(ele.id === isEdit){
                return {...ele, name:inputData}
              }
              return ele
            })
          )
          setToggle(true)
          setInputData('')
          setIsEdit(null)
        }
        else{
          const inputAllData = {id:new Date().getTime().toString(),name:inputData}
            // const data = [...items, inputAllData];
            setItems([...items, inputAllData])
            setInputData('')
        }       
    }

    const deleteItem = (id) => {
        const updatedData = items.filter((ele)=>{
            return id !== ele.id;
        })
        console.log(updatedData);
        setItems(updatedData)
    }

    const editItem = (id) =>{
      // console.log(id);
      const editData = items.find((ele)=>{
        return id === ele.id;
      })
      console.log(editData);
      setToggle(false)
      setInputData(editData.name)
      setIsEdit(id)
    }


    useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(items))
    },[items])

    const removeAll = () => {
        setItems([])
    }

  return (
    <>
      <h1>React CRUD</h1>
      <div>
        <input type='text' placeholder='Write something...' value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
        {
          toggle 
      ? <button onClick={addData}>ADD</button>
      :
      <button onClick={addData}>Update</button>
      
        }
      </div>
      {
        items.map((ele)=>{
            return(
             <>
      <div key={ele.id}>
      <span>{ele.name}</span>
      <button onClick={()=>deleteItem(ele.id)}>Delete</button>
      <button onClick={()=>editItem(ele.id)}>update</button>
      </div>
             </>
            )
        })
      }
      <div>
        <button onClick={removeAll}>Remove All</button>
      </div>
      
    </>
  )
}
