import airplane from "./images/airplane.svg"
import shield from "./images/shield.svg"
import instagram from "./images/instagram.svg"
import facebook from "./images/facebook.svg"



const TopBar = () =>{
    return(
        <>
        <div className="flex justify-center mt-3.5 mb-8  ">
        <img className="w-6 align-middle" src={airplane} alt="Airplane icon" /><p className="text-pink-400 ml-2 mr-8"> FREE SHIPPING</p>
        <img className="w-6 align-middle" src={shield} alt="Shield icon" /><p className="ml-2">  100% SECURE SHOPPING</p>
        
        </div>
        <div className="flex absolute top-3.5 left-20 space-x-8 ">
            
        <img className="w-6 hover:bg-pink-300 rounded-lg cursor-pointer" src={instagram}  alt="Instagram icon" />

        <img className="w-6 hover:bg-pink-300 rounded-lg cursor-pointer" src={facebook}  alt="Facebook icon" />
    </div>
    </>
        
        
    )
}

export default TopBar