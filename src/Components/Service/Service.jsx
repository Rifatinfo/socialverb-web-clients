import { useEffect, useState } from "react";
import ServiceCart from "../ServiceCart/ServiceCart";

const Service = () => {
    const [service, serviceCart] = useState([]);
    console.log(service);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                serviceCart(data);
            })
    }, [])
    return (
        <div className="">
            <div className="bg-[#DD0429]">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row  gap-6 md:items-center lg:items-center text-[#ffbdc8] font-federo">
                        <div className="w-1/2 mt-10">
                            <p className="text-xl">Our Services</p>
                            <p className="text-6xl">We Shape the Perfect solution</p>
                        </div>
                        <div className="w-1/2 text-xl text-[#ffbdc8] mt-10">
                            <p>We are committed to providing our customers with not service while offering our emod tempor incididunt ut labore employees the best training.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9">
                        {
                            service.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
