
const ServiceCart = ({service}) => {
    const {project_no, title, icon} = service;
    return (
        <div className="flex justify-around items-center bg-white lg:p-12 font-federo font-bold mb-8">
            <div>
                <p className="text-xl text-[#ffbdc8]">{project_no}</p>
                <p className="text-3xl hover:text-[#DD0429]">{title}</p>
            </div>
            <div>
                <img className="h-16 w-16" src={icon} alt="" />
            </div>
        </div>
    );
};

export default ServiceCart;

