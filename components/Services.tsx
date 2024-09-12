import react from 'react'
import servicedata from "../public/services.json"
import Image from 'next/image'

const Services = () => {

    const {section} = servicedata;

    return (

        <div className = "text-white flex flex-col gap-12">
            <div className = "flex flex-col place-items-center md:place-items-start">
                <p className = "text-blue-300 mb-3">Services</p>
                <p className = "text-xl">Our Services</p>
                <p>Tailored To Your Needs</p>
            </div>
           

            <section className = "grid grid-cols-2 gap-x-3  items-center gap-y-20  text-sm md:grid-cols-3 md:gap-x-16 justify-items-center">

                {section.map((item)=> (

                    <div key = {item.id} className = "flex flex-col place-items-center text-center h-full max-w-[12rem] gap-5">

                        <Image src = {item.image} width = {30} height = {30} alt={item.content} />
                        <p className = "font-bold text-sm">{item.content}</p>
                        <p className = "text-xs">{item.subtext}</p>

                    </div>

                ))}
            </section>
        </div>

    );
}

export default Services;
