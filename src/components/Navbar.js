import './Navbar.css'
import './UniversalClasses.css'
import './pages/Agents'
import {Link} from 'react-router-dom';
import Agents from './pages/Agents';


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
                    
                    <Link to="/datacollection" style={{ backgroundColor:"#d6b53d", color:"white", zIndex:"9"}} >
                    
                    <li >
                        
                        Crowdsource Data Collection
                        </li>
                        </Link>
                       
                        <Link to="/agents" style={{backgroundColor: " #545e65",color:"white",  zIndex:"10"}}>
                        <li>
                        
                         Intelligent Agents
                         </li>
                         </Link >
                   
                         <Link to="/modeltransfer" style={{backgroundColor:"#58ba91", color:"white", marginRight:"0",  zIndex:"8"}}>
                    <li >
                        
                        Context Free Model Transfer
                        </li>
                        </Link>
                        
                </ul>
                </div>
                
            </div>
        );
    
}

export default Navbar;