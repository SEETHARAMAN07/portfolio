import ResumeImg from '../assests/resume.png';

export default function Resume() {
    return (
        <section className="flex flex-col md:flex-row bg-secondary px-5 items-center justify-center" id='resume'>
            <div className="py-5 md:w-1/2 flex justify-end">
                <img className="w-[400px]" src={ResumeImg} alt="" />
            </div>
            <div className="md:w-1/2 flex flex-col items-center text-center">
                <h1 className="text-4xl text-white border-b-4 border-[#0000FF] mb-5 w-[140px] font-bold">
                    RESUME
                </h1>
                <p className="text-white pb-2">
                    You can view my resume{' '}
                    <a className="btn" href="www.google.com">
                        Download
                    </a>
                </p>
            </div>
        </section>
    );
}
