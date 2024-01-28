import blogLogo from "../../assets/images/blogger.png";
import personWithLaptop from '../../assets/images/landing_page.png'
const LandingPage = () => {
  return (
    <>
      <div className="main__container mt-8">
        <header className="flex justify-between w-[80%] mx-auto">
          <img src={blogLogo} alt="blog logo" className="blog__logo" />
          <div className="flex">
            <button className="flex justify-center rounded-md border border-gray-900 w-[150px] px-3 py-2 mr-2 text-sm font-semibold leading-6 shadow-sm hover:bg-gray-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950">
              Login
            </button>
            <button className="flex justify-center rounded-md bg-gray-900 w-[150px] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950">
              Register
            </button>
          </div>
        </header>
        <section className="flex justify-between w-[80%] mx-auto">
          <div className="flex flex-col justify-between w-[45%] h-80 my-20">
            <div>
              <h1 className="text-5xl my-4">
                Empower Your Voice, Ignite Conversations.
              </h1>
              <p className="text-gray-700">
                Explore a platform where your thoughts take center stage.
                Engage, inspire, and be heard in a community that values your
                unique perspective.
              </p>
            </div>
            <div>
              <button className="flex justify-center rounded-md bg-gray-900 w-[150px] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex w-72 h-72 rounded-full bg-yellow-400 my-32 mr-28 relative">
            <img src={personWithLaptop} alt="Person with laptop" className="object-cover"/>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
