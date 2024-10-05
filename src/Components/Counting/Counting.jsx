import CountUp, { useCountUp } from "react-countup";

const Counting = () => {
    useCountUp({
        ref: 'counter',
        enableScrollSpy: true,

    });
 
return (
    <div className="">
        <div className="text-black grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-6  p-5">
            <div className="space-y-3 p-4 text-center  bg-white rounded-lg shadow-lg hover:bg-[#DD0429] hover:text-white ">
                <img className="mx-auto text-center w-16 h-16" src="https://cdn-icons-png.flaticon.com/512/2972/2972201.png" alt="" />
                <div className="content" />
                <CountUp  className="text-5xl font-federo font-bold" end={1500} delay={100} enableScrollSpy />
                <p className="font-federo text-xl">Projects Completed</p>
            </div>
            <div className="space-y-3  p-4 text-center bg-white rounded-lg shadow-lg hover:bg-[#DD0429] hover:text-white">
                <img className="mx-auto text-center w-16 h-16" src="https://cdn-icons-png.flaticon.com/512/2292/2292261.png" alt="" />
                <div className="content" />
                <CountUp  className="text-5xl font-federo font-bold" end={50} enableScrollSpy />
                <p className="font-federo text-xl">Active Clients</p>
            </div>
            <div className="space-y-3 text-center p-4 bg-white rounded-lg shadow-lg hover:bg-[#DD0429] hover:text-white">
                <img className="mx-auto w-16 h-16" src="https://cdn-icons-png.flaticon.com/512/1904/1904425.png" alt="" />
                <div className="content" />
                <CountUp  className="text-5xl font-federo font-bold" end={50} enableScrollSpy />
                <p className="font-federo text-xl">Satisfied Clients</p>
            </div>
            <div className="space-y-3 text-center p-4 bg-white rounded-lg shadow-lg hover:bg-[#DD0429] hover:text-white">
                <img className="mx-auto w-16 h-16" src="https://cdn-icons-png.flaticon.com/512/1828/1828506.png" alt="" />
                <div className="content" />
                <CountUp className="text-5xl font-federo font-bold" end={20} enableScrollSpy />
                <p className="font-federo text-xl">Expert Teams</p>
            </div>

        </div>
    </div>
);
};

export default Counting;
