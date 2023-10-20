import React, {useState} from 'react';

function App() {

   const [count, setCount] = useState(0)
   const [value, setValue] = useState('Введите текст')

   function increment() {
    setCount(count + 1)
   }

   function decrement() {
    setCount(count - 1)
   }
    
  return (
    <div className='App'>
      <h1>{count}</h1>
      <h1>{value}</h1>
      <input
          type = 'text'
          value = {value}
          onChange = {event => setValue(event.target.value)}>
      </input>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
}

export default App;