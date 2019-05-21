import React from 'react'
import avatar from "../../resources/avatar.png";

export default function Avatar() {
  return (
    <div style={{marginBottom: '20px', marginTop: '20px'}}>
      <img src={avatar} style={{height: 'auto', width: '100%'}} alt="头像"/>
      {/* <span style={{color: '#838383', display: 'block', textAlign: 'center', marginBottom: '10%'}}>名称</span> */}
    </div>
  )
}
