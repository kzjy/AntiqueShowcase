import React from 'react'
import headerDesign from '../../resources/headerNew.png';

export default function Header() {



  return (
    <div style={headerStyle}>
      <img style={imgStyle} src={headerDesign} alt=""></img>
      <i className="header-quote" style={{ display: 'block', marginTop: '5%', marginBottom: '15%'}}>
      <span style={{left:'30%'}}>
        "古之人，如陈玉石于市肆，瑕瑜不掩。<div className="header-quote-break-one"/> 今之人，
        <div className="header-quote-break-two"/>
        如货古玩于时贾，真伪难知."
      </span>
      </i>
    </div>
  )
}

const headerStyle = {
  marginTop: '30px',
  textAlign: 'center',
  position: 'relative',
}

const imgStyle = {
  width: '80%',
  height: 'auto',
  minWidth: '350px'
}

