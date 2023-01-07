import React from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Logo1 from './html logo.png';
import Logo2 from './css logo.png';
import Logo3 from './javascript logo.png';
import Logo4 from './react logo.png';
import Logo5 from './node logo.png';
import Logo6 from './mysql logo.png';

import './Pro.css';

export function Skill(){
    return(
            <>
            <div className='container-fluid skill'>
                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <h2 className='text-center'>Skills</h2>
                    </div>
                </div>
                <div className='row mt-4 text-center'>
                    <div className='col-lg-2'>
                        <h3><b>Front End</b></h3>
                    </div>
                    <div className='col-lg-10 d-flex '>
                        <div className='col-lg-1'>&nbsp;</div>
                    <div className='col-lg-2'><img className='pic2' src={Logo1} />
                        <p className='text'>HTML</p></div>
                        <div className='col-lg-2'><img className='pic2' src={Logo2} />
                        <p className='text'>CSS</p></div>
                        <div className='col-lg-2'><img className='pic2' src={Logo3} />
                        <p className='text'>JavaScript</p></div>
                        <div className='col-lg-2'><img className='pic2' src={Logo4} />
                        <p className='text'>ReactJS</p></div>
                        <div className='col-lg-1'>&nbsp;</div>
                    </div>
                </div>
                <div className='row mt-5 text-center'>
                    <div className='col-lg-2'>
                        <h3><b>Back End</b></h3>
                    </div>
                    <div className='col-lg-10 d-flex'>
                    <div className='col-lg-3'>&nbsp;</div>    
                    <div className='col-lg-2'><img className='pic2' src={Logo5} />
                        <p className='text'>NodeJS</p></div>
                    <div className='col-lg-2'><img className='pic2' src={Logo6} />    
                        <p className='text'>MySQL</p></div>
                    </div>
                    <div className='col-lg-3'>&nbsp;</div> 
                </div>

            </div>
            </>
    );
}