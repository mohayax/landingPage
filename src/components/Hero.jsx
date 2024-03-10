import heroImg from '../assets/illustration-intro.svg'

const Hero = () => {
  return (
    <section>
        <div className="container flex flex-col-reverse md:flex-row 
        space-y-0 md:space-y-0 mt-10 mx-auto items-center px-6">
            <div className="flex flex-col md:w-1/2 space-y-12 mb-32">
              <h1 className="font-bold md:text-left max-w-md text-4xl text-center md:text-5xl">
                Bring everyone together to build better products
              </h1>
              <p className="text-center md:text-left max-w-sm text-darkGrayishBlue">
              Manage makes it simple for software teams to plan day-to-day tasks
               while keeping the larger team goals in view.
              </p>
              <div className="flex justify-center md:justify-start">
              <a href="" className="bg-brightRed
              rounded-full baseline text-white p-3 px-6 pt-2 hover:bg-brightRedLight">Get Started</a>
              </div>
            </div>
            <div className="flex md:w-1/2">
              <img src={heroImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero