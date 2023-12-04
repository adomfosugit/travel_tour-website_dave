import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container  relative z-30 py-1">

      <Link href="/">
        <div className="h-[200px] flex">

        <Image src='/vectorize.svg' alt="logo" width={200} height={200}/>
        
        </div>
      
      </Link>

    

      

    
    </nav>
  )
}

export default Navbar