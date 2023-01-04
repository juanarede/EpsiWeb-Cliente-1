import React from 'react'
import LogoBlack from '../../assets/img/logoblack.png'
function Footer() {
  return (
    <>
        <h6 className='text-gray-500' style={{color:"#000"}}>Hecho por <a href='https://epsiweb.com/' style={{cursor:"pointer"}}><img style={{width:"6rem"}} src={LogoBlack} alt="logo epsiweb"/></a></h6>
    </>
  )
}

export default Footer