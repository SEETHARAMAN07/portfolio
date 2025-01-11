
import myphoto from "../assests/myphoto.png";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Hero() {
  return (
    <section className="flex flex-col  md:flex-row px-5  py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex-col">
        <h1 className="w-1/2 text-white text-6xl font-hero">
          Hi,
          <br />
          I am <span className="text-black">V </span>SeethaRaman
          <p className="text-2xl">Im a Computer Science Student</p>
        </h1>
        <div className="flex py-10">
          <a href="www.google.com" className="pr-5 hover:text-white">
            <AiOutlineTwitter size={40} />
          </a>
          <a href="www.google.com" className="pr-5 hover:text-white">
            <AiOutlineFacebook size={40} />
          </a>
          <a href="https://www.google.com/search?q=instagram&rlz=1C1CHBF_enIN1020IN1020&oq=instagram+&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDQgBEAAYgwEYsQMYgAQyDQgCEAAYgwEYsQMYgAQyCggDEAAYsQMYgAQyDAgEEAAYQxiABBiKBTIKCAUQABixAxiABDIKCAYQABixAxiABDIGCAcQRRg80gEINDEzMmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" className="pr-5 hover:text-white">
            <AiOutlineInstagram size={40} />
          </a>
          <a href="https://www.linkedin.com/in/ram-v-88188a247/" className="pr-5 hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <div className="relative w-80 h-80">
    <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-dashed animated-border"></div>
   
    <img 
      src={myphoto} 
      alt="Sample" 
      className=" w-full h-full rounded-full object-cover object-[center_5%]"
    />
     </div>
    </section>
  );
}
