import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';

function Todo() {

    const [inputData,setInputData]=useState('');
    const [items,setItems]=useState([]);

       const addItems =()=>{
        if(inputData){
            setItems([...items , inputData]);
            setInputData('');
        }

        }
        const deleteItem=(id)=>{
                    const updatedItems=items.filter((elem,ind)=>{
                        return ind!==id;
                })
                setItems(updatedItems);
                
        }
            const removeAll = ()=>{
                setItems([]);
                 }

  return (
    <>
    <div className='main-div'>
        <h1>Add to do list</h1>
    
    <div className='add-item'>
    <input type="text" id="" placeholder="enter a task"  value={inputData} onChange={(e)=>{setInputData(e.target.value)}}/>
    <button className="myButton" onClick={addItems}>Click Me</button>
    </div>


    <div className="showItems">
          {  items.map((elem,ind) => {
                    return (
                        <div className="eachItem" key={ind}>
                        <h3>{elem }</h3> 
                        <button className="delete" onClick={()=>deleteItem(ind)}>delete</button>
                        
                    </div>
                    )
                })
                
                
                }

            
    </div>

    <div className="remove">
        <button className="remove-btn" onClick={()=>removeAll()} >Remove All</button></div>
    </div>
    </>
  );
}

export default Todo;
