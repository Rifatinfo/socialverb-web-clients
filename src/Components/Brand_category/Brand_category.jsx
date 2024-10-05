import { useEffect, useState } from "react";

const Brand_category = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    return (
        <div className="max-w-6xl mx-auto mt-32">
            <div className="text-center space-y-3 ">
                <p className="uppercase text-[#DD0429]">recent projects</p>
                <h1 className="uppercase text-5xl font-federo">work showcase</h1>
                <div className="text-center md:flex lg:flex md:gap-5 lg:gap-5  md:items-center lg:items-center md:justify-center lg:justify-center uppercase font-federo ">
                    <p className="hover:underline hover:text-[#DD0429]">All ({projects.length})</p>
                    <p className="hover:underline hover:text-[#DD0429]">Apps</p>
                    <p className="hover:underline hover:text-[#DD0429]">Branding</p>
                    <p className="hover:underline hover:text-[#DD0429]">Photography</p>
                    <p className="hover:underline hover:text-[#DD0429]">Web Design</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 mt-7">
                {projects.map((project) => (
                    <div key={project.id} className="relative group">

                        {/* Background Image */}
                        <div
                            className="relative h-96  bg-cover bg-center opacity-70"
                            style={{ backgroundImage: `url(${project.image_url})` }}
                        >
                            {/* Set the z-index to ensure the image is above the text */}
                            <img src={project.image_url} alt={project.title} className="opacity-0 z-10" />
                        </div>

                        {/* Hidden Text Div to Show on Hover bg-black bg-opacity-75 */}
                        <div
                            className="absolute space-y-4 inset-0 bg-[#DD0429] bg-opacity-100 flex flex-col justify-center items-center z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <h1 className="text-white text-center uppercase font-federo">{project.category}</h1>
                            <p className="text-white text-center text-3xl font-bold uppercase font-federo">{project.title}</p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Brand_category;
