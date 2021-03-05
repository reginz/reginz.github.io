import './UniversalClasses.css'
import './pages/Agents'
import {Link} from 'react-router-dom';
import Agents from './pages/Agents';
import './NavData.css';

function NavData() {
    

        return (
            <div className="navbar-container">
                <div className="data-nav">
                <ul className="nav-ul">
                    
                <li style={{zIndex:"8",
                 backgroundColor:" #464647"}}>
                        <Link to="/" >
                        <img src="./logo/ai_logo_white.png"/>
                        </Link>
                    </li>
                    
                   
                    <li style={{ backgroundColor:"#d6b53d", color:"white", zIndex:"9", boxShadow: "7px 5px 10px -16px  rgb(34, 34, 34)"}}>
                        <Link to="/datacollection" style={{color:"white", textDecoration: "none"}} >
                        Crowdsource Data Collection
                        </Link>
                        </li>
                        <li 
                    style={{backgroundColor: "#545e65", zIndex:"10"}}>
                         <Link to="/agents"className="data-li" style={{color:"white", textDecoration: "none"}}>
                         Intelligent Agents
                         </Link>
                    </li>
                    <li className="data-li" style={{backgroundColor:"#58ba91", color:"white", marginRight:"0",  zIndex:"8"}}>
                        <Link to="/modeltransfer" style={{color:"white", textDecoration: "none"}}>
                        Context Free Model Transfer
                        </Link>
                        </li>
                </ul>
                </div>
                
            </div>
        );
    
}

export default NavData;