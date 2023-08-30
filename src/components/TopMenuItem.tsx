import Link from "next/link"
import styles from "./topmenu.module.css"

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
    return (
        <Link href={pageRef} className='w-[120px] text-center my-auto text-xs text-slate-400 font-sans hover:text-black active:text-black '>
            {title}
        </Link>
    )

}