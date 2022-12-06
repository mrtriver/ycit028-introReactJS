import { useState } from "react";

export function App() {
    const [count, setCount] = useState(0);  //count reads, and setCount writes, useState(0) is the starting idx
    return (
        <div>
            Hello World
            <div>
                <button onClick={()=>{
                    setCount(count + 1);
                }}>Click to increase</button>
                <div>{count}</div>
            </div>
        </div>
    )
}
