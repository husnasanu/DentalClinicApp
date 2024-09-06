import React from 'react'

const Footer = () => {
  return (
    <>
   
   <div className="d-flex">
   <div className='col-4 mt-5' style={{ display: 'flex', flexDirection: 'column', paddingLeft:'100px' }}>
    <h3>Links</h3>
    <a className='mb-4' href="">Home</a>
    <a className='mb-4' href="">About</a>
    <a className='mb-4' href="">Services</a>
    <a className='mb-4' href="">Contact Us</a>
    </div>
    <div className="col-4">
      <h4>Dental Solutions</h4>
        <p className='nonetext' style={{paddingTop:"80px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus itaque esse aliquid libero, ab, consequuntur culpa odio
             ratione recusandae dolorem, commodi corrupti numquam. Minima eum commodi perferendis autem dolor?</p>
             <h6 className='text-center'><i class="fa-solid fa-phone"></i> +91 3456789070 <br /><br /> 0484 3434344</h6>
    </div>
    <div className='col-4 mt-5' style={{ display: 'flex', flexDirection: 'column', paddingLeft:'100px' }}>
    <h3>Connect with Us</h3>
    <a className='mb-4' href=""><i class="fa-brands fa-facebook"></i></a>
    <a className='mb-4' href=""><i class="fa-brands fa-twitter"></i></a>
    <a className='mb-4' href=""><i class="fa-brands fa-instagram"></i></a>
    <a className='mb-4' href=""> <i class="fa-solid fa-envelope"></i>  denta@gmail.com</a>
    </div>
   </div>
    </>
  )
}

export default Footer