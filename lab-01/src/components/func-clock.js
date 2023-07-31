import { useState, useEffect } from "react"

function FuncClass() {
  console.log('Khoi tao')
  const [date, setDate] = useState(new Date())
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    console.log('useEffect with empty dependencies')
  })

  useEffect(() => {
    console.log('useEffect with []')
  }, [])

  useEffect(() => {
    console.log('useEffect with [toggle]')
  }, [date])

  // useEffect(() => {
  //   // code effect
  //   console.log('useEffect')
  //   const intervalId = setInterval(() => {
  //     setDate(new Date());
  //   }, 1000);

  //   // clean up
  //   return function () {
  //     console.log('Cleanup')

  //     clearInterval(intervalId)
  //   }
  // }, [date]) // empty, [], [date]


 function handleClick() {
  setToggle(!toggle)
 }

  
  console.log('Render')
  return(
    <div className='clock'>
      <button onClick={handleClick}>Click me</button>
      <h1>Hello, I am Clock</h1>
      <h2>Now is {date.toLocaleTimeString()}.</h2>
    </div>
  )
}

export default FuncClass