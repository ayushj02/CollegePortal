import React from 'react'

const NoticeBoard = (props) => {
    
  return (
    <>
        <div className="notice">
            <h3>Notice By : {props.fname}</h3>
            <h4>Title : {props.title}</h4>
            <h4>Desc : {props.msg}</h4>
        </div>
    </>
  )
}

export default NoticeBoard