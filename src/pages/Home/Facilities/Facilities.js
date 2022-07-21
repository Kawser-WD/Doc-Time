import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/kid-dentist-chair-concept-health-medicine-examination-treatment-teeth-children-medical-checkup-oral-cavity-instruments-213633398.jpg'
const Facilities = () => {
    return (
        <div style={{marginTop:'100px'}}>
            <div style={{backgroundColor:'#03A9F4',height:'200px'}}>
               <div style={{paddingTop:'30px'}}>
               <h4 className='d-flex justify-content-center' style={{fontSize:'30px',fontWeight:'bold',color:'#fff'}}>Make your dream smile a reality!</h4>
                <p className='d-flex justify-content-center' style={{color:'#fff'}}>Call us or book your appointment today</p>
                <div className='d-flex justify-content-center'>
              <Link to='/appointment'>  <button className='btn' style={{backgroundColor:'#00d2d3', color:'#fff'}}>Book Appointment</button></Link>
                </div>
               </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <img src={image} style={{width:'100%'}} alt=""/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                    <div class="container overflow-hidden">
                    <div class="row">
                        <div class="col-6">
                        <div>
                        <h5 style={{fontWeight:'bold', fontSize:'20px'}}>Highly trained dental team</h5>
                        <p style={{fontWeight:'normal', color:'gray'}}>In a dental practice, teamwork generally means being able to create a professional yet fun environment while delivering top-notch patient care.</p>
                        </div>
                        </div>
                        <div class="col-6">
                        <div>
                        <h5 style={{fontWeight:'bold', fontSize:'20px'}}>
                        Extensive line of dental services</h5>
                        <p style={{fontWeight:'normal', color:'gray'}}>In a dental practice, teamwork generally means being able to create a professional yet fun environment while delivering top-notch patient care.</p>
                        </div>
                        </div>
                        <div class="col-6">
                        <div>
                        <h5 style={{fontWeight:'bold', fontSize:'20px'}}>
                        Advanced dental treatment facilities and equipment</h5>
                        <p style={{fontWeight:'normal', color:'gray'}}>In a dental practice, teamwork generally means being able to create a professional yet fun environment while delivering top-notch patient care.</p>
                        </div>
                        </div>
                        <div class="col-6">
                        <div>
                        <h5 style={{fontWeight:'bold', fontSize:'20px'}}>
                        Guaranteed results and brighter smiles</h5>
                        <p style={{fontWeight:'normal', color:'gray'}}>In a dental practice, teamwork generally means being able to create a professional yet fun environment while delivering top-notch patient care.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;