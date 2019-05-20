import React from 'react'
import headerDesign from '../../images/headerNew.PNG';

export default function Header() {
  return (
    <div style={headerStyle}>
      <img style={imgStyle} src={headerDesign} alt=""></img>
      <i style={{display: 'block', marginTop: '5%'}}>这里加一些字</i>
    </div>
  )
}

const headerStyle = {
  marginTop: '100px',
  textAlign: 'center',
  position: 'relative',
}

const imgStyle = {
  width: '80%',
  height: 'auto',
  minWidth: '350px'
}

