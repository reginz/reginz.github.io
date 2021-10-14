import '../css/Navbar.css'
import '../css/UniversalClasses.css'
import {Link} from 'react-router-dom';


function Navbar() {
    

        return (
            <div className="navbar-container">
                <div className="desktop-nav">
                <ul className="nav-ul">
                    
                <Link to="/"style={{zIndex:"11", backgroundColor:"#464647"}}>
                    <li >
                        
                        <img src="./logo/ai_logo_white.webp"/>
                        </li>
                    </Link>
                    <Link to="/academy"style={{zIndex:"11", backgroundColor:"#d6b53d", color:"white"}}>
                    <li >
                        
                    Our Academy
                        </li>
                    </Link>
                    <a href="https://brieferr.com" target="_blank" 
                        style={{ backgroundColor:"#ac9bc0", color:"white", zIndex:"9"}}>
                    <li >
                        
                        Brieferr
                        </li>
                        </a>
                    
                        <a href="https://medium.com/aiforexistence" target="_blank" 
                        style={{zIndex:"11", backgroundColor:"#b1b1b2",color:"white"}}>
                    <li >
                        
                        Blog 
                        </li>
                    </a>
                        <a href="https://forum.aiforexistence.com/" target="_blank" 
                        style={{zIndex:"11", backgroundColor:"#58ba91",color:"white"}}>
                    <li >
                        
                        Forum
                        </li>
                    </a>
                </ul>
                </div>
                
                
            </div>
        );
    
}

export default Navbar;
