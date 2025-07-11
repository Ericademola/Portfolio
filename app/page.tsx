'use client'
import Image, { StaticImageData } from 'next/image'
import mypic from '../public/images/mypic.jpeg'
import {reviews, works} from '../constants'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import StackSlider from '@/components/StackSlider';
import Model from '@/components/Model'
import Nav from '@/components/Nav'
import { EmailIcon, LinkedinIcon, XIcon } from '@/public/Icons'
import Link from 'next/link'
import { technologies } from '../constants'
export interface IWork {
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
  const [typedWord, setTypedWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [mobile, setMobile] = useState<boolean | undefined>();
  const typingSpeed = 150;

  const wordsToType = useMemo(() => [
    "Adeyemi Eric Ademola", 
    "A Software Developer",
  ], []);
  
  const typeWriter = useCallback(() => {
    if (charIndex < wordsToType[wordIndex]?.length) {
      setTypedWord(prev => prev + wordsToType[wordIndex][charIndex]);
      setCharIndex(prev => prev + 1);
    } else if (wordIndex < wordsToType.length - 1) {
      setTimeout(() => {
        setTypedWord('');
        setCharIndex(0);
        setWordIndex(prev => prev + 1);
      }, typingSpeed * 2);
    } else {
      setTimeout(() => {
        setTypedWord('');
        setCharIndex(0);
        setWordIndex(0);
      }, typingSpeed * 2);
    }
  }, [wordIndex, charIndex, wordsToType]);

  useEffect(() => {
    if (wordsToType.length > 0) {
      const timer = setTimeout(typeWriter, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [typedWord, wordsToType, typeWriter]);

  const isMobile = useMediaQuery({
    query: "(min-width: 640px)",
  });

  useEffect(() => {
    if (isMobile) {
      setMobile(isMobile);
    }
  }, [isMobile]);

  const handleProjectDetails = ({work}: {work: IWork}) => {
    setIsShowModel(true);
    setWork(work);
  }

  return (
  <main className='dark:bg-slate-800 relative overflow-x-hidden bg-[url(../public/images/nightsky.jpg)] no-repeat bg-cover h-full'>
    <div className='min-h-[100vh] flex justify-between flex-col'>
      <div className='fixed top-0 left-0 w-full z-10 bg-[#243c5a]'>
        <Nav />
      </div>
      <div >

        <div className='flex flex-col-reverse md:flex-row justify-between items-center px-4 gap-12 md:gap-4 mt-48'>

          <div className='w-full md:w-[50%]'>
            <div className='max-md:text-center'>
              <h3 className='mb-2 font-extrabold text-[white]'>Hello there!, I'm</h3>
              <h1 className='text-[1.5rem] md:text-[2rem] lg:text-[4rem] font-bold text-[white]'>
                <span className='border-b-[4px] border-[blue]'>{typedWord}</span><span className='text-[blue]'>/</span>
              </h1>
              <p className='text-[1.5rem] text-[white]'><span className='font-bold'>Passionate Developer</span> who loves creating new projects and learning new technologies</p>
            </div>
            <section className='pt-5 justify-around flex items-center' id="#connect">
              <div>
                <Link 
                href='https://docs.google.com/document/d/1fYQR1V3ZiHF0sgxrq5OShiLa1XOmU0V2ZbpEjmRtKd8/edit?tab=t.0' 
                target='_blank'
                className='m-auto p-3 border-[2px] text-2xl text-[white] font-semibold border-[#243c5a] rounded-md'>
                  RESUME
                </Link>
              </div>

              <div className='p-5 flex gap-4 mt-2 text-[white]'>
                <Link 
                href="https://www.linkedin.com/in/adeyemiademola/"
                target='_blank' 
                className='no-underline font-medium text-[14px]'
                >
                  <div className='border-[2px] border-[#243c5a] px-2 py-2 rounded-[5px] w-fit m-auto'>
                    <LinkedinIcon />
                  </div>
                </Link>

                <Link
                href="https://twitter.com/Adeyemi50273182" 
                target='_blank' 
                className='no-underline font-medium text-[14px]'
                >
                  <div className='border-[2px] px-2 py-2 rounded-[5px] w-fit border-[#243c5a] m-auto'>
                    <XIcon />
                  </div>
                </Link>

                <Link href="mailto:ademolaadeyemieric@gmail.com"
                className='no-underline font-medium text-[14px]'
                >
                  <div className='border-[2px] px-2 py-2 rounded-[5px] border-[#243c5a] w-fit m-auto'>
                    <EmailIcon />
                  </div>
                </Link>
              </div>
            </section>
          </div>

          <div className="w-full md:w-[50%]">
            <Image src={mypic} alt='' 
            className='m-auto w-[150px] h-[150px] md:w-[450px] md:h-[450px] rounded-ss-[400px] rounded-se-[0px] rounded-ee-[400px] rounded-es-[400px] object-cover'/>
          </div>
           
        </div>

      </div>
      <StackSlider />
    </div>

    <div className='min-h-[100vh] w-fit m-auto' id="about">
      <h1 className='text-[50px] md:text-[100px] lg:text-[125px] leanding-[10px] font-bold text-[white] pl-4'>ABOUT ME</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 items-center w-fit m-auto px-[5%] md:px-[4%]">
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
        <div className="animate-[moveDiagonally_5s_ease-in-out_infinite] order-1 md:order-2 h-fit w-fit m-auto">
          <Image src="/images/cartondev.png" alt="" width={`${mobile ? 500 : 300}`} height={100} />
        </div>
      </div>
    </div>

    <div className='items-center pt-10' id="projects">
      <h2 className='text-center font-semibold text-[50px] text-[white]'>Projects</h2>
      <div className='gap-x-10 gap-y-6 mt-7 grid grid-cols-1 md:grid-cols-2 px-[5%] md:px-[4%]'>
        { 
          works && works.map((work, i) =>  
          <div 
            className='w-full pointer-cursor hover:bg-gradient-to-b from-[rgba(225,200,0,0.1)] hover:w-full rounded-b-lg pointer-events-auto flex flex-col md:flex-row gap-2' 
            key={i}
          >
            <Image src={work.image} alt=''
              className='w-full min-w-[50%] h-[150px] rounded-lg hover:rounded-none object-contain cursor-pointer'
              onClick={() => handleProjectDetails({ work })}
            />
            <div className='w-full'>
              <h3 className='text-[#000] dark:text-white'>{work.project}</h3>
              <p className='text-[gray] leadingh-6' style={{ whiteSpace: "pre-line", lineHeight: "20px" }}>
                {
                  work.Description.length > 100
                  ? work.Description.slice(0, 100) + "..."
                  : work.Description
                } 
              </p>

              <div className='my-4'>
                <h3 className='text-[#000] dark:text-white mb-2'>Technologies</h3>
                <div className='flex gap-2 items-center'>
                  {
                    work.technologies && work.technologies.map((tech, i) =>
                      <div key={i} className='flex gap-2 items-center'>
                        {technologies.find(t => t.name === tech)?.logo && (
                          <Link href={technologies.find(t => t.name === tech)?.website as string} target="_blank" rel="noopener noreferrer" className='text-[gray]'>
                            <Image src={technologies.find(t => t.name === tech)?.logo} alt='' className='w-6 h-6' />
                          </Link>
                        )}
                      </div>
                    )
                  }
                </div>
              </div>

              {work.link && (
                <>
                  {/* <h3 className='text-[#000] dark:text-white'>Link</h3> */}
                  <a href={`${work.link}`} target="_blank" rel="noopener noreferrer" className='text-white font-semibold'>Visit site</a>
                </>
              )}
            </div>
          </div> 
        )}
      </div>
      <hr className='border-[white] mt-[50px]'/>
    </div>

    <footer className='hn-[80vh] pt-[80px]'>

      <div className='w-full flex justify-around'>
        <div className='mx-[5%] md:mx-[4%] md:w-2/3 leading-10 rounded-[20px] md:rounded-[25px] lg:rounded-[50px] text-center bg-[purple] py-4 px-4 md:py-8 md:px-8 lg:py-12 lg:px-14'>
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
        <p className='text-[14px] font-medium text-[white]'>Made with &#128151; by Adeyemi using NextJs</p>
      </div>
    </footer>

    {
      isShowModel &&
      <Model setIsShowModel={setIsShowModel} work={work}/>
    }

  </main>
  )
}


