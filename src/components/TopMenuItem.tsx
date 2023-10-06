import Link from "next/link"
import styles from "./topmenu.module.css"

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
    return (
        <Link href={pageRef} className='w-[150px] font-primary text-center my-auto text-xs text-black hover:text-black active:text-black '>
            {title}
        </Link>
    )

}