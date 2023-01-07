import React from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Image1 from './Screen 1.png';
import Image2 from './Screen 2.png';
import Image3 from './github .png';
import './Pro.css';
import Carousel from 'react-bootstrap/Carousel';



export function Certificate(){
    return(
            <>
            <div className='container-fluid certificate'>
                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <h2 className='text-center mt-5'>My Certificates</h2>
                    </div>
                </div>
                <div>
                    <div className='row mt-4'>
                        
                        {/* <div className='col-lg-4'>
                            <img className='pic1' src={Image1} />
                        </div>
                        <div className='col-lg-4'>
                            <img className='pic1' src={Image2} />
                        </div>
                        <div className='col-lg-4'>
                            <img className='pic1' src={Image3} />
                        </div> */}
                        
                        <Carousel className='w-75 car'>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Image1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Image2}
                            alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Image3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>

                    </div>
                </div>
            </div>
            </>
    );
}