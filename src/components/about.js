import AboutImg from '../assests/aboutme.png';

export default function About()
{
    return <section id="about" className="flex flex-col md:flex-row bg-secondary px-5">
        <div className=' py-5 md:w-1/2 flex px-10 justify-center'>
            <img className='' src={AboutImg} alt=""/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className="flex-col justify-center">
            <h1 className="text-4xl text-white border-b-4 border-[#0000FF] mb-5 w-[170px] font-bold">About me</h1>
            <p className='text-white pb-2'>Hello, my name is Seetharaman, and I am currently pursuing a degree in Computer Science Engineering at Mepco Schlenk Engineering College in Sivakasi. I have a strong passion for exploring new technologies and continuously enhancing my skill set in the ever-evolving field of computer science.</p>
            <p className='text-white pb-2'>As a dedicated and creative thinker, I thrive on solving complex problems and developing innovative solutions. My academic journey has equipped me with a solid foundation in various programming languages and technologies, including C, C++, and Java. Additionally, I have gained practical experience in web development and SQL, which has further honed my technical abilities.</p>
            <p className='text-white pb-2'>I am committed to leveraging my skills in software development and problem-solving to contribute effectively to projects and collaborate with teams. I am eager to embrace new challenges and opportunities that will allow me to grow both personally and professionally in the tech industry.

</p>
            </div>
        </div>
    </section>

}