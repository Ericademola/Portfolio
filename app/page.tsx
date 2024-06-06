'use client'
import Image, { StaticImageData } from 'next/image'
import mypic from '../public/images/mypic.jpeg'

import EmailIcon from '@/public/EmailIcon'
import LinkedinIcon from '@/public/LinkedinIcon'
import XIcon from '@/public/XIcon'
import {works, skills} from '../constants'
import { useRef, useState } from 'react'
import ArrowWithTailNext from '@/public/ArrowWithTailNext'
import ArrowWithTailPrev from '@/public/ArrowWithTailPrev'

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
  const [work, setWork] = useState<IWork>();

  const reviews = [
    {
      comment: `The development process was well thought out — our app has been performant and stable, making it much easier for us to manage with limited resources. I'd definitely recommend working with Adeyemi!`,
      name: 'AMOS OLUSUMI',
      organization: 'NAIJACODEPADI'
    },
    // {
    //   comment: `The service we received balanced Timmy's great development skills alongside an ability to understand what would be the most appropriate solution for our marketplace.`,
    //   name: 'DANIEL BYRES',
    //   organization: 'VETZONE'
    // }, 
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

  return (
  <main className='dark:bg-slate-800 relative'>
    <div className='h-[100vh] bg-[url(../public/images/nightsky.jpg)]'>
      <nav className='flex gap-5 items-center mb-10 p-5'>
        <Image src={mypic} alt=''
          className='w-[40px] h-[40px] rounded-full'/>
        <h2 className='font-[cursive] text-[30px]'>&lt; A E A / &gt;</h2>
        <div className='flex gap-5 ml-auto'>
          {/* <a href="#connect" className='no-underline decoration-[#50d71e] "bg-black hover:bg-rgb(0, 102, 255)'><h5>Connect</h5></a> */}
          {/* <a href="#projects" className='no-underline decoration-[#50d71e] "bg-black hover:bg-rgb(0, 102, 255)'><h5>Projects</h5></a> */}
          <a href="#stack" className='no-underline decoration-[#50d71e] "bg-black hover:bg-rgb(0, 102, 255)'><h5>Stack & Projects</h5></a>
        </div>
      </nav>
      {/* <div className='m-auto w-3/4 text-left rounded-[10px] bg-[#2bafe734] shadow-lg shadow-black-500/40'> */}

          <div className="text-center">
            <Image src={mypic} alt=''
            className='m-auto w-[150px] h-[150px] rounded-ss-[400px] rounded-se-[0px] rounded-ee-[400px] rounded-es-[400px]'/>
            <h3 className='mb-2 font-extrabold'>Hello there!, I'm</h3>
            <h1 className='text-[4rem]'>Adeyemi Ademola</h1>
            <p className='text-[1.5rem] '><span className='font-bold'>Passionate Developer</span> who loves creating new projects and learning new technologies</p>
          </div>

          <section className='pt-5 justify-around flex items-center' id="#connect">
            <div>
              <button className='m-auto px-5 py-4 border-4 text-2xl  font-semibold border-[#243c5a] rounded'>RESUME</button>
            </div>

            <div className='p-5 flex gap-4 mt-2'>
              <a 
              href="https://www.linkedin.com/in/adeyemi-ademola-7982a1192/"
              target='_blank' 
              className='no-underline font-medium text-[14px]'
              >
                <div className='bg-white bordmer-[1px] border-[blue] px-2 py-2 rounded-full w-fit m-auto'>
                  <LinkedinIcon/>
                </div>
                LinkedIn
              </a>
              <a 
              href="https://twitter.com/Adeyemi50273182" 
              target='_blank' 
              className='no-underline font-medium text-[14px]'
              >
                <div className='bg-white border-[1px] px-2 py-2 rounded-full w-fit  m-auto'>
                  <XIcon/>
                </div>
                Twitter
              </a>
              <a 
              href="" 
              // ademolaadeyemieric@gmail.com
              className='no-underline font-medium text-[14px]'
              >
                <div className='bg-[#fff] border-[1px] border-[red] px-2 py-2 rounded-full w-fit m-auto'>
                  <EmailIcon />
                </div>
                Email
              </a>
            </div>
          </section>

          <div className=''>
          <div className='flex gnap-2 items-center h-fit overflow-x-auto' style={modalPic} ref={picWrapper}>
            { 
              skills && skills.map((skill, i) =>
                <div className='flex gap items-center w-[200px]' key={i}>
                  <Image 
                  src={skill.logo} 
                  alt='logo'
                  className='w-[40px] h-[40px] rounded-full'/>
                  <span className='text-2xl font-semibold'>
                    {skill.name}
                  </span>
                </div>
              )
            }
          </div>
        </div>


       
    </div>

    <div className='h-[100vh] w-fit m-auto'>
      <h1 className='text-[100px] font-bold text-[green] pl-4' >ABOUT ME</h1>

      <div className='flex items-center justify-center'>
        <div className='w-[50%]'>
          <p className='text-[14px] font-normal text-[white]'>A skilled and creative frontend developer with years of experience in web development. Known for designing and implementing user-friendly, responsive, and visually appealing websites and web applications. Proficient in a range of frontend technologies and frameworks. Passionate about creating seamless user experiences and staying updated on the latest industry trends..</p>
        </div>
        <Image src="/images/cartondev.png" alt="" width={500} height={200} />
      </div>

    </div>

    <div className='items-center mt-10'id="#projects">
      <h2 className='text-center font-semibold text-[20px]'>Projects</h2>
      <div className='gap-x-10 gap-y-6 mt-7 grid grid-cols-2'>
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
    </div>

    <hr className='border-[white] my-[50px]'/>

      <footer className='h-[80vh]'>

      <div className=' my-1s4 w-full flex justify-around'>

            <div className='w-2/3 leading-10 rounded-full text-center bg-[purple] py-12 px-14'>
            <Image src="/images/cartondev.png" alt="quote photo" width={100} height={100} className='rounded-full bg-slate-800 border border-[purple] m-auto mt-[-100px]' />
              <p className='text-sm leading-6'>
                With a keen interest in computer science, my unique strength lies in problem-solving. I excel at dissecting unconventional and imaginative concepts, devising strategies to bring them to fruition.
                After years of operating independently, I possess agility and the ability to swiftly adapt. I've successfully introduced expansive, internationally recognized projects, each with the imperative need for seamless operation from day one, which underscores my appreciation for reliability and performance.                  
                Moreover, I pride myself on being an effective communicator and collaborator. I recognize that the 'how' isn't always the primary concern; what truly matters is a job well executed and delivered punctually
              </p>
              <h1 className='text-lg font-semibold'>john</h1>
              <h1 className='text-lg font-semibold'>facebook</h1>

            </div>

          </div>
              
          <hr className='border-[white] my-5'/>
            
          <div className='text-center pb-4'>
            <p className='text-[14px] font-medium'>Made with &#128151; by Adeyemi using NextJs</p>
          </div>
      </footer>


    

    <div className={isShowModel ? 'fixed w-full h-full bg-[#000] bg-opacity-20 top-0 left-0 pt-[5%]' : 'fixed w-full h-full bg-[#000] bg-opacity-20 top-0 left-0 pt-[15%] hidden'}>
      <div className="bg-white rounded-lg shadow-lg p-3 w-1/2 m-auto">
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


