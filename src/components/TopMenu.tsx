import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem'

export default function TopMenu() {
    return (
        <div className='h-12 fixed bg-white left-0 top-0 right-0 z-30 border border-y-1 border-solid border-slate-400 flex flex-row-reverse '>
            <Image src={'/img/logo.png'} className='h-[100%] w-[100px]' alt='logo'
                width={0} height={0} sizes='100vh' />
            <TopMenuItem title='Booking' pageRef='/booking' />
            <TopMenuItem title='About' pageRef='/about'/>
        </div>
    )
}