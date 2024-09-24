import { useRef, useState} from "react";


const App = () => {

  const inputRef =useRef(null);
  const [data,setData]=useState([]);



  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={()=>{
        setData([...data,inputRef.current.value])
        }}>Submit</button>
        {data.map((item,index)=>{
          return <h2 key={index}>{item}</h2>
        })}
    </div>
  )
}

export default App






