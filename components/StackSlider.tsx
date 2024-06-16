import Image from 'next/image'
import {skills} from '../constants'

const StackSlider = () => {
    return (
        <div className="animate-[runSlider_5s_linear_infinite]">
            <ul className="w-max flex list-none tracking-[1px]">
                {skills.map((skill, i) => (
                    <li key={i} className="mr-6 w-fit flex items-center justify-start p-[10px]">
                        <Image 
                        src={skill.logo} 
                        alt='logo'
                        className='w-[50px] h-[50px] rounded-full mr-[10px]'/>
                        <span className='text-2xl font-semibold text-[white]'>
                            {skill.name}
                        </span>            
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default StackSlider