function App_with_useState() {
  const [count, setCount] = useState(0);
  console.log("immer", window.immer);
  return (
    <div>
      // this is the same as setCount(count+1)
      <h1>useReducer example {count}</h1>
      <button onClick={() => setCount((state) => state + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
//Now, convert the above code to useReducer to improve performance

