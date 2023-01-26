import React, {useState} from 'react';

const Counter = () => {
    
    const [likes, setLikes] = useState(0);

    function Increment () {
        setLikes(likes +1)
      }
    function Decrement () {
      setLikes(likes - 1)
    }

    return (
        <div>
            <h1><strong>{likes}</strong></h1>

            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
