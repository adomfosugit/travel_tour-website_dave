import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  
}

const CampSite = ({ backgroundImage, title, subtitle }: CampProps) => {
  return (
    <div className="ring-2 ring-blue-800 p-2 m-2 rounded-lg flex flex-col" >
      <div className="h-[200px] w-[200px]">

      <Image src={backgroundImage} width={300} height={300} alt="picture" className="mb-2 h-full rounded-lg w-full"/>
      </div>
     <p className="text-black font-bold">{title}</p>
    </div>
  )
}

const Camp = () => {
  return (
    <section className=" relative flex flex-col lg:-mb-[300px]">
      <h2 className="bold-40 ">Our Services</h2>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-2 overflow-x-auto lg:h-[400px] xl:h-[640px] ">
        <CampSite 
          backgroundImage="/visa.jpg"
          title="Visa Application"
          subtitle=""
        />
        <CampSite 
          backgroundImage="/school.jpg"
          title="School Application"
          subtitle=""
          
        />
        <CampSite 
          backgroundImage="/bank.jpg"
          title="Bank Statement"
          subtitle=""
          
        />
        <CampSite 
          backgroundImage="/passport.jpg"
          title="Passport"
          subtitle=""
        
        />
        <CampSite 
          backgroundImage="/cert.jpg"
          title="Birth Certificate"
          subtitle=""
          
        />
        <CampSite 
          backgroundImage="/acc.jpg"
          title="Canada Accomodation"
          subtitle=""
        
        />
      </div>

      
    </section>
  )
}

export default Camp