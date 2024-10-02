import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenuAddFill } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import { TiUserAdd } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../../assets/Social verb 191,189.png";
const Navbar = () => {
    const Links = [
        { name: 'Home', link: '/' },
        { name: 'Who We Are', link: '/' },
        { name: 'Services', link: '/' },
        { name: 'Portfolio', link: '/' },
        { name: 'News & Archive', link: '/' },
        { name: 'Contact', link: '/' }
    ];

    const [open, setOpen] = useState(false);

    return (

        <div className="w-full bg-transparent fixed top-0 left-0 z-50 object-cover border-b-4 border-gray-200">
            <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                    <img className="lg:w-auto lg:h-20 md:w-auto md:h-11 w-auto h-11" src={logo} alt="not fount" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex md:items-center">
                    {Links.map((link, index) => (
                        <li key={index} className="md:ml-8 text-xl lg:text-xl md:text-sm ">
                            <a href={link.link} className="text-white hover:text-gray-400 duration-500">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Avatar */}
                <div className="relative lg:hidden md:hidden group -mt-11 ml-[170px]">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 p-2 shadow absolute hidden group-hover:block">
                        <li><a><span className="text-2xl"><TiUser /></span>login</a></li>
                        <li><a> <span className="text-2xl"><TiUserAdd /></span>Register</a></li>
                    </ul>
                </div>

                {/* Mobile Menu Toggle */}
                <div
                    onClick={() => setOpen(!open)}
                    className={`text-3xl absolute right-8 top-6 cursor-pointer md:hidden z-50 ${open ? 'text-white' : 'text-white'}`}
                >
                    {open ? <IoClose /> : <RiMenuAddFill />}
                </div>

                {/* Mobile Menu */}
                <ul
                    className={`md:hidden fixed top-0 left-0 w-full h-screen text-white font-semibold  bg-purple-900 p-10 pt-20 transition-all duration-500 ease-in-out z-40 ${open ? 'opacity-100' : 'opacity-0 -z-10'
                        }`}
                >
                    {Links.map((link, index) => (
                        <li key={index} className="text-xl lg:text-xl my-7">
                            <a href={link.link} className="text-white  hover:text-gray-400 duration-500">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Avatar and SignIn */}
                <div className="lg:flex lg:items-center lg:gap-4 md:flex md:items-center hidden gap-2">
                    <div className="relative group ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow absolute hidden group-hover:block">
                            <li><a>Name</a></li>
                        </ul>
                    </div>

                    <Link to="/login">
                        <button className="md:px-6 btn btn-outline border-2 md:py-3 md:rounded-lg lg:rounded-xl text-white">
                            SignIn
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;