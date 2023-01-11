import React from 'react'
import './outputRow.css'

const OutputRow = props => {
  return (
    <div>
        <input type="text" className='screen' style={props.textSize} value={props.value}/>
    </div>
  )
}

export default OutputRow;