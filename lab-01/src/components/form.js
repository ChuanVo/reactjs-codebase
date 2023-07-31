import { useState } from "react"

function Form(props) {
  const [name, setName] = useState('chuan')
  const [age, setAge] = useState(0)

  function handleChange(event) {
    setName(event.target.value)
  }

  console.log('=>>> ', props)

  const propName = props.name
  const propAge = props.age

  return (
    <div>
      <label>Nhập tên: 
        <input type='text' value={name} onChange={handleChange}/>
      </label>

      <div>Tên của bạn là: {propName}</div>
    </div>
  )
}

export default Form