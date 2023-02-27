import { useState } from "react";

const list = [];


function TodoList(){

    const[item, setItem] = useState(list);
    const[name,setname] = useState('');

    function handleChange (e){
       setname(e.target.value)
    }

    function handleAdd(){ 
       const arr = item.concat({value:name,key: item.length, status:false});
       setItem(arr);
       setname('');
    }

    const handleStatus  = (obj)=>{

        const new_arr = JSON.parse(JSON.stringify(item));
        new_arr.forEach((a,index)=>{
            
            if(a.key === obj.key){
                new_arr[index] = {...a, status:!obj.status};
            }
        })
        setItem(new_arr);


        //  setItem((prevData) => {
        //     const newData = JSON.parse(JSON.stringify(prevData));
        //     newData.forEach((a,index)=>{
        //         if(a.key === obj.key){
        //             newData[index] = {...a,status:!obj.status};   
        //         }
        //     })
        //     return newData;
        // });


    
        // the below command to be used to remove the selected item itself and update the key value

            
            // const updateList = item.filter(a => a.key !== obj.key);
            // updateList.forEach((a,index)=>{
            //     console.log(a.key);
            //     updateList[index]={...a,key:index};
            // })

            // setItem(updateList);


    

    }

    
   
    
  
  console.log('parent render');
    return(
        <>
             <input type="text" value={name} onChange={handleChange}>
             </input>
             <button onClick={handleAdd}>
                add
             </button>
            
            <div>
                {item.map((items)=>(
                        
                      <DisplayItems key={items.key} list={items} onPress={handleStatus}/>
                     
                ))}
                
            </div>
             
        </>
            
    );
}

function DisplayItems(props){
     
    // const [status,setStatus] = useState(props.status)
    console.log('child render');
    return(
        <>
            <h1> {props.list.key} . {props.list.value} </h1>
            {/* <button onClick={()=>{
                props.onPress(props.list);
                setStatus(!status);
                }}>
                     {status? 'Inactive' : 'active'}
              </button> */}

            {props.list.status? <button >done</button> : <button onClick={()=>props.onPress(props.list)}>mark completed</button>}
        </>
        
    );
}

export default TodoList;

