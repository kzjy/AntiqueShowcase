import React from 'react'
import headerDesign from '../../images/headerCropped.png';

export default function Header() {
  return (
    <div style={headerStyle}>
      <img style={imgStyle} src={headerDesign} alt=""></img>
      <i style={{display: 'block'}}>我是一个收藏家</i>
    </div>
  )
}

const headerStyle = {
  marginTop: '50px',
  textAlign: 'center',
  position: 'relative',
}

const imgStyle = {
  width: '80%',
  height: 'auto',
  minWidth: '350px'
}

