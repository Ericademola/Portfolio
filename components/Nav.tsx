import Hamburger from '@/public/Hamburger'
import ArrowDownV from '@/public/ArrowDownV'
import { useState } from 'react';
import Image from 'next/image'
import mypic from '../public/images/mypic.jpeg'
import { useMediaQuery } from 'react-responsive'

const Nav = () => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

    const isMobile = useMediaQuery({
        query: "(min-width: 640px)",
    });

    const handleMenu = () => {
        setIsShowMenu((prev) => !prev)
    }

    return (
        <nav className='flex gap-5 items-center p-5 text-[white]'>
    
            <Image src={mypic} alt=''
            className='w-[40px] h-[40px] rounded-full'/>
            <h2 className='font-[cursive] text-[30px]'>&lt; A E A / &gt;</h2>

            <div className='ml-auto flex gap-2 items-center'>
            <div className='text-[white] flex gap-5 ml-auto max-sm:flex-col max-sm:hidden'>
                <a href="https://www.cakeresume.com/s--YVVLxMd653WV6--xgGjYHg--/ademola-adeyemi" className='no-underline decoration-[white] "bg-black hover:bg-rgb(0, 102, 255) hover:underline'><h5>Resume</h5></a>
                <a href="#projects" className='no-underline decoration-[white] "bg-black hover:bg-rgb(0, 102, 255) hover:underline'><h5>Projects</h5></a>
            </div>
            {
                !isMobile && isShowMenu &&
                <div className='text-[white] flex gap ml-auto max-sm:flex-col md:hidden absolute top-14 right-2 border-[white] border-[2px] rounded p-2'>
                <a href="https://www.cakeresume.com/s--YVVLxMd653WV6--xgGjYHg--/ademola-adeyemi" className='no-underline decoration-[white] "bg-black hover:bg-rgb(0, 102, 255) hover:underline'><h5>Resume</h5></a>
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
            </div>
            
        </nav>
    )
}
export default Nav