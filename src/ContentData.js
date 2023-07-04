import React from 'react'

function ContentData(props) {
  return (
    <>
        <button className={props.BtnStyle}>
            <div>{props.img}</div>
            <h6>{props.title}</h6>
            <span>{props.author}</span>
        </button>
    </>
  )
}

export default ContentData