import search from "./image/search.svg"
import user from "./image/user.svg"
import box from "./image/box.svg"
import cart from "./image/cart.svg"

const ProfileSearch = () =>{

    return(
        <div className="border-y flex">
            <h1 className="font-bold text-3xl ml-16 my-3">Obs Store</h1>
            <div className="relative mx-auto">
                <input className="mt-2 px-4 py-2 border rounded-lg w-72" placeholder="Search..." type="text" />
                <button className="absolute right-4 top-0 bottom-0">
                    <img src={search} className="w-4 mx-auto my-auto pointer-events-none"/>
                </button>
            </div>
            <div className="flex relative top-4 right-20 space-x-8 ">
                <img src={box} className="w-6 hover:bg-pink-300 h-6 rounded-lg cursor-pointer"/>
                <img src={user} className="w-6 h-6 hover:bg-pink-300 rounded-lg cursor-pointer"/>
                <img src={cart} className="w-6 h-6 hover:bg-pink-300 rounded-lg cursor-pointer"/>
            </div>
        </div>
    )
}

export default ProfileSearch
