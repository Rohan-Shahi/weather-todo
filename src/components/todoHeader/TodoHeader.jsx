import React from 'react'
import './style.scss'

export default function TodoHeader() {
  return (
   <>
    <div className="header-container">
        <button>ADD TODO</button>
        <select id="status">
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
        </select>
    </div>
   </>
  )
}
