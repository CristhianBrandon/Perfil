import React from 'react'
import imagen from "../assets/Vector.png"
const Buttons = () => {
  return (
    <div className='buttons' >
        <button>follow</button>
        <button>
            <img src={imagen} alt="" />
        </button>
    </div>
  )
}

export default Buttons