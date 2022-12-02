// import React,{useState} from 'react';

// const App = ()=> {
//   const [data,setData]= useState(0)
//   console.warn(data)
//   return (
//     <div>
//       <h1>useState Hook {data}</h1>
//       <button onClick={()=>setData(data +1)}>update data</button>
//     </div>
//   );
// };

// export default App;
import './App.css'
import React,{useEffect,useState} from 'react';
function App(){
  const [count,setCount]= useState(0)
  const [counter,setCounter]= useState(0)
  useEffect(() =>{
  console.warn("useEffect")
},[count])
useEffect(() =>{
  console.warn("work")
},[counter])
  return (
    <div className='App'>
      <h1>useEffect in React {count}</h1>
      <button onClick={()=>setCount(count +1)}>update Counter</button>
      <h1>work {counter}</h1>
      <button onClick={()=>setCounter(counter +1)}>work update</button>
    </div>
  );
};

export default App;
