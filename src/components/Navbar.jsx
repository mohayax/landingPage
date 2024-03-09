import logo  from '../assets/logo.svg'


const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            <div className="pt-2">
                <img src={logo} alt="" />
            </div>
            <div className="hidden md:flex space-x-6">
                <a href="#">Pricing</a>
                <a href="#">Product</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Community</a>
            </div>

            <a href="" className="hidden md:block bg-brightRed
             rounded-full baseline text-white p-3 px-6 pt-2 hover:bg-brightRedLight">Get Started</a>
        </div>
    </nav>
  )
}

export default Navbar