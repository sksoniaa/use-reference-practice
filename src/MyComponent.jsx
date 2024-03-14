import React, {useState, useEffect, useRef} from "react"


export default function MyComponent() {

  const inputRef1 = useRef(null) // return an object
  const inputRef2 = useRef(null) // return an object
  const inputRef3 = useRef(null) // return an object

  useEffect(() => {
    console.log('component rendered');
  })

  function handleClick1() {
    console.log(inputRef1.current.focus());
    inputRef1.current.style.backgroundColor = "pink"
    inputRef2.current.style.backgroundColor = ""
    inputRef3.current.style.backgroundColor = ""

  }

  function handleClick2() {
    console.log(inputRef2.current.focus());
    inputRef2.current.style.backgroundColor = "pink"
    inputRef1.current.style.backgroundColor = ""
    inputRef3.current.style.backgroundColor = ""

  }

  function handleClick3() {
    console.log(inputRef3.current.focus());
    inputRef3.current.style.backgroundColor = "pink"
    inputRef2.current.style.backgroundColor = ""
    inputRef1.current.style.backgroundColor = ""

  }



  return(
    <>
      <button onClick={handleClick1}>Click me 1</button>
      <input ref={inputRef1}/>

      <button onClick={handleClick2}>Click me 2</button>
      <input ref={inputRef2}/>

      <button onClick={handleClick3}>Click me 3</button>
      <input ref={inputRef3}/>
    </>
  )
}