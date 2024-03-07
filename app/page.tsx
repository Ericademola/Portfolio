/* eslint react/no-unescaped-entities */
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
  <main className='p-5 dark:bg-slate-800 relative'>
     {/* fixed inset-0 flex items-center justify-center z-50'> */}
    <nav className='flex gap-5 items-center mb-20'>
      <Image src={mypic} alt=''
        className='w-[50px] h-[50px] rounded-full'/>
      <h2>Adeyemi Eric Ademola</h2>
      <div className='flex gap-5 ml-auto'>
        {/* <a href="#connect" className='no-underline decoration-[#50d71e] "bg-black hover:bg-rgb(0, 102, 255)'><h5>Connect</h5></a> */}
        {/* <a href="#projects" className='no-underline decoration-[#50d71e] "bg-black hover:bg-rgb(0, 102, 255)'><h5>Projects</h5></a> */}
        <a href="#stack" className='no-underline decoration-[#50d71e] "bg-black hover:bg-rgb(0, 102, 255)'><h5>Stack & Projects</h5></a>
      </div>
    </nav>
    <div className='m-auto w-3/4 text-left rounded-[10px] bg-[#2bafe734] shadow-lg shadow-black-500/40'>
      <div className="leading-5 p-5 text-black">
        <h1 className='mb-2.5 font-extrabold'>Hi, I'm Ademola.</h1>
        <p className='text-[14px] font-normal text-[gray]'>A skilled and creative frontend developer with years of experience in web development. Known for designing and implementing user-friendly, responsive, and visually appealing websites and web applications. Proficient in a range of frontend technologies and frameworks. Passionate about creating seamless user experiences and staying updated on the latest industry trends..</p>
      </div>
    </div>

    {/* <section className='w-fit m-auto text-center grid grid-cols-2 gap-y-8 gap-x-10 my-20'> */}
    <section className='w-fit m-auto text-center my-20'>
      {
        reviews && reviews.map((review, i) => 
        <div className='w-[400px] text-center' key={i}>   
          <p className='text-[13px]'>{review.comment}</p>
          <h6 className='text-[blue]'>{review.name} — {review.organization}</h6>
        </div>)
      }
    </section>

    <hr className='border-black my-5'/>

    <div className='mt-2.5 text-center'>
      <h2 className='text-[rgb(45, 6, 3)] font-semibold text-[1rem]' id="stack">STACK</h2>
      <div className='flex justify-evenly pt-5'>
        <p className='text-[rgb(0, 0, 2)] font-bold'>TYPESCRIPT</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>JAVASCRIPT</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>REACT.JS</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>ANGULAR</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>NEXT.JS</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>TAILWINDCSS</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>ANT DESIGN</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>IONIC</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>ZUSTAND</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>AXIOS</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>REACT QUERY</p>
      </div>
    </div>

    <hr className='border-black my-3'/>
    
    <div className='items-center mt-10'id="#projects">
      <h2 className='text-center font-semibold text-[1.5rem]'>Projects</h2>
      <div className='gap-x-10 gap-y-6 mt-7 grid grid-cols-3'>
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
   
      <hr className='border-black my-5'/>

    <div className='my-14 w-full flex justify-around'>
      <div className='w-2/5 leading-10'>
        <h1 className='text-lg font-semibold' id="#connect">So why work with me?</h1>
        <p className='text-sm leading-6'>
          With a keen interest in computer science, my unique strength lies in problem-solving. I excel at dissecting unconventional and imaginative concepts, devising strategies to bring them to fruition.
          After years of operating independently, I possess agility and the ability to swiftly adapt. I've successfully introduced expansive, internationally recognized projects, each with the imperative need for seamless operation from day one, which underscores my appreciation for reliability and performance.                  
          Moreover, I pride myself on being an effective communicator and collaborator. I recognize that the 'how' isn't always the primary concern; what truly matters is a job well executed and delivered punctually
        </p>
      </div>
      <div>
        <Image src={mypic} alt=''
          className='w-[320px] h-[310px] mt-2 rounded-ss-[600px] rounded-se-[0px] rounded-ee-[600px] rounded-es-[600px]'/>
      </div>
    </div>
        
    <hr className='border-black my-5'/>
      
    <section className='pt-5 justify-around flex' id="#connect">
      <div className='w-4/6'>
        <h2 className='font-semibold text-[1.5rem]'>Let's Chat</h2>
        <p className='text-[14px] font-medium'>Need an experienced frontend developer to help out? <br/>Send me an email to discuss in more detail. Alternatively connect with me elsewhere on the web →</p>
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


