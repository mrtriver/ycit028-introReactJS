

function App() {
    //const [count, setCount] = useState(0);
    //reducer,differnt from useState, has two parameters: the current state and the action
    const [count, dispatch] = useReducer(reducer, 0) //reducer is a function that takes in the current state and returns a new state
    
    return (
      <div>
       
        Count is {count}
        <button onClick={()=>dispatch("increment")}>Increment</button>
        <button onClick={()=>dispatch("decrement")}>Decrement</button>
        <button onClick={()=>dispatch("reset")}>Reset</button>
      </div>
    );
  }

  function reducer(state, action){
switch(action){          //action is a string
    case "increment": return state + 1;
    case "decrement": return state - 1;
    case "reset": return 0;
}

  }