import React, { memo } from "react";

const PureFunction =() => {
    const [count, setCount] = React.useState(0);

    const changeState=() => {
        setCount((a) => a+1);
    };

    return( 
    <div>
    {console.log("Function component re-render")}
    <h1>Hello!!!</h1>
    <button onClick={changeState}>Hello</button>
    <span>{count}</span>
    </div>
    );
}
export default memo (PureFunction);
