import '../css/Navbar.css'
import '../css/UniversalClasses.css'
import '../pages/Agents'
import {Link} from 'react-router-dom';
import Agents from '../pages/Agents';


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
                    <Link to="/nlp_module" style={{ backgroundColor:"#ac9bc0", color:"white", zIndex:"9"}} >
                    
                    <li >
                        
                        NLP Module
                        </li>
                        </Link>
                    
                        <a href="https://medium.com/aiforexistence" target="_blank" 
                        style={{zIndex:"11", backgroundColor:"#d6b53d",color:"white"}}>
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
