import airplane from "./images/airplane.svg"
import shield from "./images/shield.svg"
import instagram from "./images/instagram.svg"
import facebook from "./images/facebook.svg"



const TopBar = () =>{
    return(
        <div className="flex-initial">
        <p><img className="w-1" src={airplane} alt="Airplane icon" /> FREE SHIPPING</p>
        <p> <img className="w-1" src={shield} alt="Shield icon" /> 100% SECURE SHOPPING</p>
        <div>
        <img src={instagram} alt="Instagram icon" />
        <img src={facebook} alt="Facebook icon" />
        </div>

        
        </div>
    )
}

export default TopBar