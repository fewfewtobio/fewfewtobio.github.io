import { useState, useRef } from 'react'

function App() {
  const productRef = useRef()

  const handleAdd = (e) => {
    console.log(productRef.current.value)
  }

  return (
    <>
      <div>Product Name:</div>
      <div>
        <input type="text" ref={productRef}/>
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  )
}

export default App