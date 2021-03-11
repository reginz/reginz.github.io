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
                    
                    <li style={{zIndex:"11", backgroundColor:"#464647"}}>
                        <Link to="/">
                        <img src="./logo/ai_logo_white.webp"/>
                        </Link>
                    </li>
                    
                    
                    <li style={{ backgroundColor:"#d6b53d", color:"white", zIndex:"9"}}>
                        <Link to="/datacollection" style={{color:"white", textDecoration: "none"}} >
                        Crowdsource Data Collection
                        </Link>
                        </li>
                        <li 
                    style={{backgroundColor: " #545e65", zIndex:"10"}}>
                         <Link to="/agents" style={{color:"white", textDecoration: "none"}}>
                         Intelligent Agents
                         </Link>
                    </li>
                    <li style={{backgroundColor:"#58ba91", color:"white", marginRight:"0",  zIndex:"8"}}>
                        <Link to="/modeltransfer" style={{color:"white", textDecoration: "none"}}>
                        Context Free Model Transfer
                        </Link>
                        </li>
                </ul>
                </div>
                
            </div>
        );
    
}

export default Navbar;