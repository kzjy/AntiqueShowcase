import React from 'react'
import avatar from "../../images/avatar.png";

export default function Avatar() {
  return (
    <div>
      <img src={avatar} style={{margin: '10%', height: 'auto', width: '80%', borderRadius: '50%'}} alt="头像"/>
      <span style={{color: '#838383', display: 'block', textAlign: 'center', marginBottom: '10%'}}>自由客</span>
    </div>
  )
}
