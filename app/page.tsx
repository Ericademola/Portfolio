'use client'
import Image, { StaticImageData } from 'next/image'
import mypic from '../public/images/mypic.jpeg'
import EmailIcon from '@/public/EmailIcon'
import LinkedinIcon from '@/public/LinkedinIcon'
import XIcon from '@/public/XIcon'
import {works} from '../constants'
import { useRef, useState } from 'react'
import ArrowWithTailNext from '@/public/ArrowWithTailNext'
import ArrowWithTailPrev from '@/public/ArrowWithTailPrev'
import { useMediaQuery } from 'react-responsive'
// import Hamburger from '@/public/Hamburger'
// import ArrowDownV from '@/public/ArrowDownV'
import StackSlider from '@/components/StackSlider';

interface IWork {
  image: StaticImageData
  project: string;
  Description: string;
  pictures: string[] | StaticImageData[];
  link?: string;
  technologies: string[]
} 

export default function Home() {
  const [isShowModel, setIsShowModel] = useState<boolean>(false);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [work, setWork] = useState<IWork>();

  const isMobile = useMediaQuery({
    query: "(min-width: 640px)",
  });

  const reviews = [
    {
      name: 'AMOS OLUSUMI',
      organization: 'NAIJACODEPADI',
      comment: `The development process was well thought out — our app has been performant and stable, making it much easier for us to manage with limited resources. I'd definitely recommend working with Adeyemi!`,
    },
  ]

  const handleProjectDetails = ({work}: {work: IWork}) => {
    setIsShowModel(true);
    setWork(work);
  }

  const modalPic = {
    overflow: 'hidden',
    width: '100%',
}

  const picWrapper = useRef<HTMLDivElement>(null!);

  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
    ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
    // setLeftArrow(true);
  };

  // const handleMenu = () => {
  //   setIsShowMenu((prev) => !prev)
  // }

  return (
  <main className='dark:bg-slate-800 relative overflow-y-hidden'>
    <div className='h-[100vh] bg-[url(../public/images/nightsky.jpg)] flex justify-between flex-col'>
      <nav className='flex gap-5 items-center p-5'>
        <Image src={mypic} alt=''
          className='w-[40px] h-[40px] rounded-full'/>
        <h2 className='font-[cursive] text-[30px]'>&lt; A E A / &gt;</h2>
{/* 
        <div className='ml-auto flex gap-2 items-center'>
          <div className='flex gap-5 ml-auto max-sm:flex-col max-sm:hidden'>
            <a href="" className='no-underline decoration-[white] "bg-black hover:bg-rgb(0, 102, 255) hover:underline'><h5>Resume</h5></a>
            <a href="#projects" className='no-underline decoration-[white] "bg-black hover:bg-rgb(0, 102, 255) hover:underline'><h5>Projects</h5></a>
          </div>
          {
            !isMobile && isShowMenu &&
            <div className='flex gap ml-auto max-sm:flex-col md:hidden absolute top-14 right-2 border-[white] border-[2px] rounded p-2'>
              <a href="" className='no-underline decoration-[white] "bg-black hover:bg-rgb(0, 102, 255) hover:underline'><h5>Resume</h5></a>
              <a href="#projects" className='no-underline decoration-[white] "bg-black hover:bg-rgb(0, 102, 255) hover:underline'><h5>Projects</h5></a>
            </div>
          }

          <div className='ml-auto sm:hidden'>
            { !isShowMenu &&
              <span onClick={handleMenu}>
                <Hamburger />
              </span>
            }

            { isShowMenu &&
              <span onClick={handleMenu}>
                <ArrowDownV />
              </span>
            }

          </div>
        </div> */}
        
      </nav>
      <div>
        <div className="text-center">
          <Image src={mypic} alt=''
          className='m-auto w-[150px] h-[150px] rounded-ss-[400px] rounded-se-[0px] rounded-ee-[400px] rounded-es-[400px]'/>
          <h3 className='mb-2 font-extrabold'>Hello there!, I'm</h3>
          <h1 className='text-[1.5rem] md:text-[2rem] lg:text-[4rem] font-bold'>Adeyemi Ademola</h1>
          <p className='text-[1.5rem] '><span className='font-bold'>Passionate Developer</span> who loves creating new projects and learning new technologies</p>
        </div>

        <section className='pt-5 justify-around flex items-center' id="#connect">
          <div>
            <a href='' className='m-auto px-5 py-4 border-4 text-2xl  font-semibold border-[#243c5a] rounded'>RESUME</a>
          </div>

          <div className='p-5 flex gap-4 mt-2'>
            <a 
            href="https://www.linkedin.com/in/adeyemiademola/"
            target='_blank' 
            className='no-underline font-medium text-[14px]'
            >
              <div className='bg-white border-[2px] border-[blue] px-2 py-2 rounded-[5px] w-fit m-auto'>
                <LinkedinIcon/>
              </div>
              LinkedIn
            </a>
            <a 
            href="https://twitter.com/Adeyemi50273182" 
            target='_blank' 
            className='no-underline font-medium text-[14px]'
            >
              <div className='bg-white border-[1px] px-2 py-2 rounded-[5px] w-fit  m-auto'>
                <XIcon/>
              </div>
              Twitter
            </a>
            <a 
            href="" 
            // ademolaadeyemieric@gmail.com
            className='no-underline font-medium text-[14px]'
            >
              <div className='bg-[#fff] border-[1px] border-[red] px-2 py-2 rounded-[5px] w-fit m-auto'>
                <EmailIcon />
              </div>
              Email
            </a>
          </div>
        </section>
      </div>
      <StackSlider />
    </div>

    <div className='min-h-[100vh] w-fit m-auto bg-[url(../public/images/nightsky.jpg)]'>
      <h1 className='text-[50px] md:text-[100px] lg:text-[125px] leanding-[10px] font-bold text-[white] pl-4' >ABOUT ME</h1>

      <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-5 items-center w-fit m-auto px-[5%] md:px-[15%]">
        <div className="order-2 md:order-1 w-fit">
          <p className='text-[20px] font-normal text-[white]'>
            With a keen interest in computer science, my unique strength lies in problem-solving. 
            I excel at dissecting unconventional and imaginative concepts, devising strategies to bring them to fruition.
            After years of operating independently, I possess agility and the ability to swiftly adapt.
            Proficient in a range of frontend technologies and frameworks. 
            Passionate about creating seamless user experiences and staying updated on the latest industry trends. 
            I've successfully introduced expansive projects, each with the imperative need for seamless operation from day one, 
            which underscores my appreciation for reliability and performance.                  
            Moreover, I pride myself on being an effective communicator and collaborator. 
            I recognize that the 'how' isn't always the primary concern; what truly matters is a job well executed and delivered punctually.
          </p>
        </div>
        {/* <div> */}
        <div className="order-1 md:order-2 mfd:mt-12 h-fitw-fit m-auto">
          <Image src="/images/cartondev.png" alt="" width={`${isMobile ? 500 : 300}`} height={100} />
        </div>
      </div>

    </div>

    <div className='items-center pt-10 bg-[url(../public/images/nightsky.jpg)]' id="#projects">
      <h2 className='text-center font-semibold text-[50px]'>Projects</h2>
      <div className='gap-x-10 gap-y-6 mt-7 grid grid-cols-1 md:grid-cols-2'>
        { 
          works && works.map((work, i) =>  
          <div 
            className='w-[90%] m-auto pointer-cursor hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:w-full rounded-b-lg pointer-events-auto' 
            key={i}
          >
            <Image src={work.image} alt=''
              className='w-full min-w-[50%] h-[150px] rounded-lg hover:rounded-none object-contain cursor-pointer'
              onClick={() => handleProjectDetails({ work })}
            />
            <div className='pl-1'>
              <h3 className='text-[#000] dark:text-white'>{work.project}</h3>
              <p className='text-[gray]' style={{ whiteSpace: "pre-line", lineHeight: "15px" }}>
                {
                  work.Description.length > 100
                  ? work.Description.slice(0, 100) + "..."
                  : work.Description
                } 
              </p>
              {work.link && <a href={`${work.link}`} target="_blank" rel="noopener noreferrer" className='text-[gray]'>Visit site</a>}
            </div>
          </div> 
        )}
      </div>
      <hr className='border-[white] mt-[50px]'/>

    </div>


      <footer className='hn-[80vh] pt-[80px] bg-[url(../public/images/nightsky.jpg)]'>

      <div className=' my-1s4 w-full flex justify-around'>

            <div className='w-2/3 leading-10 rounded-[20px] md:rounded-[25px] lg:rounded-[50px] text-center bg-[purple] py-4 px-4 md:py-8 md:px-8 lg:py-12 lg:px-14'>
              <Image src="/images/cartondev.png" alt="quote photo" width={100} height={100} className='rounded-full bg-slate-800 border border-[purple] m-auto mt-[-80px]' />
              <p className='text-sm leading-6'>
                {reviews[0].comment}
              </p>
              <h1 className='text-lg font-semibold'>{reviews[0].name}</h1>
              <h1 className='text-lg font-semibold'>{reviews[0].organization}</h1>
            </div>

          </div>
              
          <hr className='border-[white] my-5'/>
            
          <div className='text-center pb-4'>
            <p className='text-[14px] font-medium'>Made with &#128151; by Adeyemi using NextJs</p>
          </div>
      </footer>


    

    <div className={isShowModel ? "fixed w-full h-full bg-[#000] bg-opacity-20 top-0 left-0 md:pt-[5%]" : "hidden"}>
      <div className="bg-white md:rounded-lg rounded-ee-lg rounded-es-lg shadow-lg p-3 w-full md:w-1/2 md:m-auto">
        <h2 className="text-2xl leading-0 mb-4 text-blue-500">{work?.project}</h2>
        <div className='max-h-[192px] min-h-[50px] overflow-y-auto'>
          <p className='text-gray-500' style={{ whiteSpace: "pre-line", lineHeight: "15px" }}>
            {work?.Description}
          </p>
        </div>
        <p className='text-[black] pt-2'>
          Project link: <i className='text-[blue]'>{work?.link}</i>
        </p>
        <p className="text-gray-500">Technologies: 
          { 
            work && work?.technologies?.map((technology, i) =>
            <i  className='pl-2' key={i}>
              {technology}{i === work?.technologies.length - 1 ? '.' : ','}
            </i>
          )}
        </p>
        <div className='bg-[#f1f1f1] p-2'>
          <div className='flex gap-2' style={modalPic} ref={picWrapper}>
            { 
              work && work?.pictures?.map((pic, i) =>
                <Image src={pic} alt=''
                  className='w-full w-[100%] h-[150px] object-contain'
                  key={i}
                />
            )}
          </div>
          <div className='flex justify-between mt-2'>
            {
              work && work?.pictures &&
              work.pictures.length > 2 &&
              <span                             
                onClick={() => {
                sideScroll(picWrapper.current, 25, 300, -40);
              }}>
                <ArrowWithTailPrev/>
              </span>
            }
            <div className='flex gap-2 bg-white items-center rounded-[20px] py-2 px-[10px] m-auto'>
              {
                work && work?.pictures?.map((i, j) =>
                <div className='bg-[#E0E2E4] h-[8px] w-[8px] rounded-full' key={j}></div>
              )}
            </div>
            {
                work && work?.pictures &&
                work.pictures.length > 2 &&
              <span 
                onClick={() => {
                  sideScroll(picWrapper.current, 25, 300, +40);
                  }}>
                <ArrowWithTailNext/>
              </span>
            } 
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setIsShowModel(false)}>Close</button>
      </div>
    </div>
  </main>
  )
}


