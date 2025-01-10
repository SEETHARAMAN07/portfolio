import Taxiimag from "../assests/taxi.png";
import cabimg from "../assests/cab.png";
import ardimg from "../assests/arduino.png";
import empimg from "../assests/emp.png";

export default function Projects() {
  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[150px] font-bold">
            PROJECTS
          </h1>
          <p>These are some of the best projects done during the academics</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {/* Project 1 */}
          <div className="relative w-64 h-64 border-4 border-gray-500 rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-full object-cover" src={Taxiimag} alt="Taxi Booking" />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">The Taxi Booking System, developed in C++ using OOP's principles. Its modular design facilitates efficient management of user accounts, vehicle details, and bookings, effectively.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative w-64 h-64 border-4 border-gray-500 rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-full object-cover" src={cabimg} alt="Cab Booking" />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">The Cab Booking System was developed in Java using NetBeans, enhancing coding and project management efficiency. It streamlines the booking process for a seamless user experience.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative w-64 h-64 border-4 border-gray-500 rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-full object-cover" src={ardimg} alt="Arduino Project" />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">This Arduino project protects agricultural fields with sensors and give and alerts while security failed.</p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="relative w-64 h-64 border-4 border-gray-500 rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-full object-cover" src={empimg} alt="Employee Management" />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">The Employee Management application utilizes HTML, CSS, JavaScript, Node.js, Angular, and MongoDB for a dynamic interface and efficient processing, streamlining employee management and boosting organizational efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
