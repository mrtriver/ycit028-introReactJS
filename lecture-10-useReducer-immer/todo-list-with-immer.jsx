

const initialState = [
        { id: 123, activityName: "Learn React" },
        { id: 456, activityName: "Learn Immer" },
        { id: 789, activityName: "Learn Hookss" },
      ];



function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);


  const listItems = todos.map((todo) => (
    <li key={todo.id}>{todo.activityName}</li>
  ));

  function handleClick() {
    const inputValue = document.getElementById("todo-input");
    dispatch({ type: "add", payload: inputValue.value });
  }
  return(
  <div>
    <ol>{listItems}</ol> 
    <input id="todo-input" />
    <button onClick={handleClick}>Add todo</button>
  </div>

  )

}

function reducer(state, action) { 
    console.log("action: ", action);

    //console.log("immer producer", immer.produce );
    switch (action.type) {
        case "add": 
        //return [...state, { id: Date.now(), activityName: action.payload }]; THIS IS THE OLD WAY
        
        
        //WIHT immer, we no longer have to worry about accidentally mutating the array 
        const newState = immer.produce(state, draftState => {
            draftState.push({ id: Date.now(), activityName: action.payload });
        })
        return newState;
    }
 }

