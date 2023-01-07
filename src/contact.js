import React from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Icon1 from './linkedin.png';
import Icon2 from './githublogo.png';
import './Pro.css';


export function Contact(){
    return(
        <>
        <div className='container-fluid text-center contact'>
            <div className='row mt-4'>
                <div className='col-lg-12'>
                  <h3 className='text-center'><b>Contact details</b></h3>  
                  <a href='https://www.linkedin.com/in/vishnuprasath02/'><img className='icon'  src={Icon1} /></a>&nbsp;&nbsp;
                  <a href='https://github.com/Vishnu0208'><img className='icon' src={Icon2}/></a>&nbsp;&nbsp;
                  
                  <p className='n1 mt-3'>Vishnu Prasath : 9944351942</p>
                  
                  
                </div>
            </div>
        </div>
        </>
    );
}