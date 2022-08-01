import { useState } from "react";

const Counter = () => {
    const [ like, setLike ] = useState(0);
    return (
        <div>
            <h2>{like}</h2>
            <button onClick={() => setLike(like + 1)}>Increment</button>
            <button onClick={() => setLike(like - 1)}>Decrement</button>
        </div>
    )
}

export default Counter
