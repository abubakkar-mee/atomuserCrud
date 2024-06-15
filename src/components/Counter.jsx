import React from 'react'
import {countAtom} from "../lib/store";
import { useAtom } from 'jotai';

const Counter = () => {
    const [count, setCount] = useAtom(countAtom);
  return (
    <>
    <h2>Counter is now {count} </h2>
    <button onClick={() => setCount((count) => count + 1)}>add by 1</button>
    <button onClick={() => setCount((count) => count - 1)}>minus by 1</button>
    <button onClick={() => setCount((count) => count +100)}>add by 100</button>
    <button onClick={() => setCount((count) => count -100)}>minus by 100</button>
    <button onClick={() => setCount((count) => count / 2)}>divide by 2</button>
    <button onClick={() => setCount((count) => count / 5)}>divide by 5</button>
    <button onClick={() => setCount((count) => count / 10)}>divide by 10</button>
    <button onClick={() => setCount((count) => count * 2)}>multiply by 2</button>
    <button onClick={() => setCount((count) => count * 5)}>multiply by 5</button>
    <button onClick={() => setCount((count) => count * 100)}>multiply by 100</button>
    <button onClick={() => setCount(0)}>Reset</button>

    </>
  )
}

export default Counter