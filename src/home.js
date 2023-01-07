import React from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Image from './img1.png';
import './Pro.css';
import { Menubar } from './menubar';

export function Home(){
    return(
        <>

        <div className='container-fluid'>
            <Menubar/>  
            <div className='row'>
                
                    <div className='col-lg-6 text-center'>
                        <img className='pic' src={Image} />
                    </div>

                    <div className='col-lg-6'>
                        <div className='card1'>
                        <h2 className='name'>VISHNU PRASATH </h2>
                        <h4>Full Stack Developer</h4>
                        </div>
                    </div>

                
            </div>
        </div>

      



        </>
    );
}