import { IWork } from "@/app/page";
import { ArrowWithTailNext, ArrowWithTailPrev } from "@/public/Icons";
import Image from 'next/image'
import Link from "next/link";
import { useRef } from "react";
import { technologies } from '../constants'

const Model = ({setIsShowModel, work}: {setIsShowModel: (value: boolean) => void; work?: IWork}) => {

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
        <div className="fixed w-full h-full bg-[#000] bg-opacity-50 top-0 left-0 md:pt-[5%]">
            <div className="bg-white md:rounded-lg rounded-ee-lg rounded-es-lg shadow-lg p-3 w-full md:w-1/2 md:m-auto">
                <h2 className="text-2xl leading-0 mb-4 text-blue-500">{work?.project}</h2>
                <div className='max-h-[192px] min-h-[50px] overflow-y-auto'>
                    <p className='text-gray-500' style={{ whiteSpace: "pre-line", lineHeight: "20px" }}>
                    {work?.Description}
                    </p>
                </div>
                {work?.link && (
                    <p className='text-[black] font-semibold text-xl pt-2'>
                        Project link: <a href={work?.link as string} target="_blank" className='text-[blue]'>{work?.link}</a>
                    </p>
                )}
                <div className='my-4'>
                    <h3 className='text-[black] font-semibold text-xl mb-2'>Technologies</h3>
                    <div className='flex gap-2 items-center'>
                    {
                        work && work?.technologies?.map((tech, i) =>
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
                            work.pictures.length > 1 &&
                            <span                             
                            onClick={() => {
                            sideScroll(picWrapper.current, 25, 300, -40);
                            }}>
                            <ArrowWithTailPrev />
                            </span>
                        }
                    <div className='flex gap-2 bg-white items-center rounded-[20px] py-2 px-[10px] m-auto'>
                        {
                            work && work?.pictures?.map((_i, j) =>
                                <div className='bg-[#E0E2E4] h-[8px] w-[8px] rounded-full' key={j}></div>
                            )
                        }
                    </div>
                    {
                        work && work?.pictures &&
                        work.pictures.length > 1 &&
                        <span 
                            onClick={() => {
                                sideScroll(picWrapper.current, 25, 300, +40);
                                }}>
                            <ArrowWithTailNext />
                        </span>
                    } 
                    </div>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setIsShowModel(false)}>Close</button>
            </div>
        </div>
    )
}
export default Model