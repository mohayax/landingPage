import logo  from '../assets/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            <div className="pt-2">
                <img src={logo} alt="" />
            </div>
            <div className="hidden md:flex space-x-6">
                <a className='hover:text-darkGrayishBlue' href="#">Pricing</a>
                <a className='hover:text-darkGrayishBlue' href="#">Product</a>
                <a className='hover:text-darkGrayishBlue' href="#">About Us</a>
                <a className='hover:text-darkGrayishBlue' href="#">Careers</a>
                <a className='hover:text-darkGrayishBlue' href="#">Community</a>
            </div>

            <a href="" className="hidden md:block bg-brightRed
             rounded-full baseline text-white p-3 px-6 pt-2 hover:bg-brightRedLight">Get Started</a>
        </div>
    </nav>
  )
}

export default Navbar