import React from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Pro.css';

export function Education(){
    return(
            <>
                <div className='container-fluid education'>
                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <h2 className='text-center mt-5'>Education Details</h2>
                    </div>
                </div>
                <div>
                    <div className='row mt-5 text-center'>
                        
                        <div className='col-lg-4'>
                            <h4><b>Full Stack Development Course</b></h4>
                            <p>KGiSL MicroCollege - 2022</p>
                        </div>
                        <div className='col-lg-4'>
                            <h4><b>Diploma in ECE</b></h4>
                            <p>Government Polytechnic college - 2022</p>
                            <p>Percentage - 79%</p>
                        </div>
                        <div className='col-lg-4'>
                            <h4><b>SSLC</b></h4>
                            <p>Government model higher sec school - 2019</p>
                            <p>Percentage - 71%</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            </>
    );

}