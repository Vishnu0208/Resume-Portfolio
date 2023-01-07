import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import 'react-scroll';
import { Link } from 'react-scroll';

export function Menubar() {
    return (
        <>
            <div className='mt-2'>
                <Navbar expand="md">
                    <Container>
                        <Navbar.Brand href="#home" className='txt1mnbr' >VISHNU PRASATH R</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <ul className='navbar-nav'>

                                <li className='nav-item active'>
                                        <Link spy={true} smooth={true} duration={1000} to='home' className='m-3'>Home</Link>
                                </li>
                                <li className='nav-item active'>
                                        <Link spy={true} smooth={true} duration={1000} to='education' className='m-3'>Education</Link>
                                </li>
                                <li className='nav-item active'>
                                        <Link spy={true} smooth={true} duration={1000} to='skills' className='m-3'>Skills</Link>
                                </li>
                                        
                                <li className='nav-item active'>
                                        <Link spy={true} smooth={true} duration={1000} to='certification' className='m-3'>Certification</Link>
                                </li>
                                <li className='nav-item active'>
                                        <Link spy={true} smooth={true} duration={1000} to='contact' className='m-3'>Contact</Link>
                                </li>
                                    
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}