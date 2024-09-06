
import './App.css'
import Header from './Header'
import Footer from './Footer'
import banner from './assets/img1.jpg'
import cardimg1 from './assets/card1.jpg'
import cardimg2 from './assets/card2.jpg'
import cardimg3 from './assets/card3.jpeg'
import cardimg4 from './assets/card4.png'
import teethImg from './assets/teeth.webp'
import dentalImg from './assets/Dental.jpg'

function App() {
 
  return (
    <>
     <Header/>
     <img className='banner mb-5' src={banner} alt="" />
    
     <h2 data-aos="fade-up" className='my-5'> About Us</h2>
     <br /> <hr /> <br />
    
    <button id='dispnone' className='stickybtn btn btn-warning'>Book an <br /> Appointment</button>  
     <div data-aos="fade-up"  className="d-flex text-center mt-1">
      <div className="col-3">
        <h6>200000+</h6>
        <b>Satisfied Patients</b>
      </div>
      <div className="col-3">
      <h6>10000+</h6>
      <b>Implants Placed</b>
      </div>
      <div className="col-3">
      <h6>1000+</h6>
      <b>Invisalign Placed</b>
      </div>
      <div className="col-3">
         <h6>7+</h6>
      <b>Branches</b>
      </div>
     </div>
     <h1 className='my-5'>Advanced Dental Care for All Ages : <br />
     The Best Dental Clinic in Calicut , Kochi, and Thrissur</h1>
     <p className=' display text-center'>Welcome to Denta Tiny, the best dental clinic in Calicut, Kochi, and Thrissur. With fully equipped, 
      state-of-the-art infrastructure and expert practitioners, we offer you the finest modern dental care and comprehensive oral rehabilitation. Your smile is our priority!</p>

         <h2 className='my-5   data-aos="fade-up" '> Our Services</h2>
         <h6 style={{  backgroundColor:' rgb(205, 177, 50'}} className='call'> 📞+91 3456789070 <br /><br /> 0484 3434344</h6>
     
    <div className="   d-flex">
    <div className=" card custom-card  shadow col-3 " style={{ width: '18rem' }}>
      <img src={cardimg1} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">Cosmetic Treatment</h5>
        <p className="card-text">
        it's the foundation of lasting, beautiful smiles. Our dedication to excellence in Periodontics
        it embodies the fusion of dental expertise.
        </p>
        <a href="#" className="btn btn-success">View More</a>
      </div>
    </div>

<div className=" card custom-card  col-3 shadow" style={{ width: '18rem' }}>
<img src={cardimg2} className="card-img-top" alt="Card image" />
<div className="card-body">
  <h5 className="card-title">Orthodontic Treatment</h5>
  <p className="card-text">
  Our orthodontic treatments are crafted with precision and care, ensuring that each patient receives personalised care 
  tailored to their unique needs. 
  </p>
  <a href="#" className="btn btn-success">View More</a>
</div>
</div>

<div className=" card custom-card  col-3 shadow" style={{ width: '18rem' }}>
      <img src={cardimg3} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">Pedodontics Dentistry</h5>
        <p className="card-text">
        pedodontists understands the unique needs of children and strives to create a comfortable  environment 
        for every young patient . </p>
        <a href="#" className="btn btn-success">View More</a>
      </div>
    </div>

    <div className=" card custom-card  col-3 shadow" style={{ width: '18rem' }}>
      <img src={cardimg4} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">Fixed Restorative Treatment</h5>
        <p className="card-text">
        providing fixed restorations in dentistry, offering personalised treatment plans tailored to each patient's needs by professional Doctors. 
        </p>
        <a href="#" className="btn btn-success">View More</a>
      </div>
    </div>
    </div> <br />
<div className="d-flex container mt-4">
<div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="col-6 ps-2">
  <h1>Leading the Way in Dental Brilliance: The Best Dental Clinic in Calicut & Kochi</h1>
  <p className='nonetext'>Leading the Way in Dental Brilliance: The Best Dental Clinic in Calicut & Kochi
Experience the epitome of dental luxury at Mother Dental, the leading dental hospital in Calicut and Ernakulam, where we redefine excellence in dental care to match international standards. Nestled as the apex of dental brilliance in South India,
 Mother Dental boasts cutting-edge infrastructure and an array of specialized services tailored to meet your every dental need.</p>
 <p>From fundamental oral hygiene to intricate cosmetic enhancements, restorative treatments, and preventive care, our holistic approach ensures comprehensive dental wellness. Whether it’s aligners, orthodontics, or surgical interventions, our commitment to affordability never compromises
   the quality of care, delivered with unwavering dedication and accountability.</p>
</div>
<div className=" teethImg col-6 px-3">
<img style={{width:"100%"}} src={teethImg} alt="" />
</div>
</div>

<h2 >Why Choose Us</h2>
<h4 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className='my-4'> We believe in providing your child with the best treatment and education on maintaining optimal <br />
  oral hygiene, setting the foundation for healthy habits that will benefit them well into adulthood.
  At tiny teeth, we have</h4>
<div className="d-flex my-5">
<div className="col-1"></div>
<div className="col-4 pt-3">
 
  <img  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={dentalImg} alt="" className='w-100'  />
</div>
<div className="col-1"></div>
<div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="col-6  mt-5 pe-3">
  <h4 >Expert Pediatric Doctors</h4>
  <p className='text-center'>Our pediatric dentist have specialised in kids dentistry & 
    have experience of 13+ years.</p>
    <h4 >Trained & Experienced Staff</h4>
  <p className='text-center'>Our staff is trained in managing and taking care of our little patients and their parents.</p>
    <h4 >Sedation Dentistry</h4>
  <p className='text-center'>If pain and discomfort is what worries you, then no poblem! We have sedation
     dentistry that allows painless treatment.</p>

</div>
</div>
    <hr />
     
      <Footer/>
    
    </>
  )
}

export default App
