import react from 'react'
import servicedata from "../public/services.json"
import Image from 'next/image'

const Services = () => {

    const {section} = servicedata;

    return (

        <div className = "text-white">
            <p>Services</p>
            <p>Our Services</p>
            <p>Tailored To Your Needs</p>

            <section>

                {section.map((item)=> (

                    <div key = {item.id}>

                        <Image src = {item.image} width = {100} height = {100} alt={item.content} />
                        <p>{item.content}</p>
                        <p>{item.subtext}</p>

                    </div>

                ))}
            </section>
        </div>

    );
}

export default Services;
