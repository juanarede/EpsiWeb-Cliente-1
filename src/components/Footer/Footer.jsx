import React from 'react'
import LogoWithe from '../../assets/img/logoWithe.png'
function Footer() {
  return (
    <>
    <div style={{paddingTop:"2rem",paddingBottom:"1rem"}} className='bg-black d-flex justify-content-center align-items-center'>
        <h6 className='text-gray-500' style={{color:"#fff"}}>Hecho por <a href='https://epsiweb.com/' style={{cursor:"pointer"}}><img style={{width:"6rem"}} src={LogoWithe} alt="logo epsiweb"/></a></h6>
        </div>
    </>
  )
}

export default Footer