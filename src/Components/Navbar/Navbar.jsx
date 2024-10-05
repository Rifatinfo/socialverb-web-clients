import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenuAddFill } from "react-icons/ri";
import { TiUser, TiUserAdd } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../../assets/Social verb 191,189.png";

const Navbar = () => {
    const Links = [
        { name: 'Home', link: '/' },
        { name: 'Who We Are', link: '/who-we-are' },
        { name: 'Services', link: '/services' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'News & Archive', link: '/news-archive' },
        { name: 'Contact', link: '/contact' }
    ];

    const [open, setOpen] = useState(false);
    const [navbarBg, setNavbarBg] = useState("bg-transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg("bg-black");
            } else {
                setNavbarBg("bg-transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`w-full fixed top-0 left-0 z-50 border-b-2 border-gray-200 transition-colors duration-300 ${navbarBg}`}>
            <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
                {/* Logo */}
                <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                    <img className="lg:w-auto lg:h-20 md:w-auto md:h-11 w-auto h-11" src={logo} alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex md:items-center">
                    {Links.map((link, index) => (
                        <li key={index} className="font-rubik md:ml-8 text-xl lg:text-xl md:text-sm">
                            <Link to={link.link} className="text-white hover:text-gray-400 duration-500">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Avatar */}
                <div className="relative lg:hidden md:hidden group -mt-11 ml-[170px]">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Avatar"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 p-2 shadow absolute hidden group-hover:block">
                        <li><Link to="/login"><span className="text-2xl"><TiUser /></span>Login</Link></li>
                        <li><Link to="/register"><span className="text-2xl"><TiUserAdd /></span>Register</Link></li>
                    </ul>
                </div>

                {/* Mobile Menu Toggle */}
                <div
                    onClick={() => setOpen(!open)}
                    className={`text-3xl absolute right-8 top-6 cursor-pointer md:hidden z-50 ${open ? 'text-white' : 'text-white'}`}
                    aria-label="Menu Toggle"
                >
                    {open ? <IoClose /> : <RiMenuAddFill />}
                </div>

                {/* Mobile Menu */}
                <ul
                    className={`md:hidden fixed top-0 left-0 w-full h-screen text-white font-semibold bg-purple-900 p-10 pt-20 transition-all duration-500 ease-in-out z-40 ${open ? 'opacity-100' : 'opacity-0 -z-10'}`}
                >
                    {Links.map((link, index) => (
                        <li key={index} className="font-rubik text-xl lg:text-xl my-7">
                            <Link to={link.link} className="text-white hover:text-gray-400 duration-500">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Avatar and SignIn */}
                <div className="lg:flex lg:items-center lg:gap-4 md:flex md:items-center hidden gap-2">
                    <div className="relative group">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User Avatar"
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
