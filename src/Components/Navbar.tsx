import Logo from "@/assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import User from "@/assets/user.jpg";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/hook";
import { logoutUser } from "@/hooks/Auth";

type Props = {}

type NavbarFeatures = {
    name: string;
    link: string;
}

const NavList: Array<NavbarFeatures> = [
    {
        name: "Tournament",
        link: "/tournament"
    },
    {
        name: "Fixture",
        link: ""
    },
    {
        name: "Score",
        link: ""
    },

]

const Navbar = (props: Props) => {

    const [isOpen, useIsOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.user)
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    handleShow(true);
                } else handleShow(false);
            });
        };
    }, []);

    return (
        <nav>
            <div className={`fixed top-0 w-full z-30 pt-6 pb-4 ease-in transition-all ${show ? "bg-blue-60" : ""}`}>
                <div className="mx-auto w-5/6">
                    <div className="w-full gap-16 flex items-center justify-between">
                        {/* LOGO */}
                        <img onClick={() => navigate("/dashboard")} className="h-16 cursor-pointer" src={Logo} alt="Live Football" />

                        {/* FEATURES */}
                        <div className="w-full flex items-center justify-between text-lg">

                            {/* TOOURNAMENT FIXTURES SCORE */}
                            <div className="gap-16 flex items-center justify-between">
                                {NavList.map((eachMap: NavbarFeatures, index) => (
                                    <Link key={index} to={eachMap.link} className="transition duration-500 hover:text-indigo-600">{eachMap.name}</Link>
                                ))}

                            </div>

                            {/* USER SETTINGS DROPDOWN*/}
                            <button onClick={() => useIsOpen(!isOpen)} className="relative bg-indigo-500 hover:bg-indigo-600 px-10 py-2 rounded-md">
                                <div className="flex items-center justify-between gap-3 z-50 relative">
                                    <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white">
                                        <img className="h-full w-full object-cover" src={User} alt="user" />
                                    </div>

                                    <p className="text-white">{user.name}</p>
                                </div>

                                {isOpen ? <>
                                    <div onClick={() => useIsOpen(!isOpen)} className="fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-black opacity-50 cursor-default"></div>
                                    <div className="bg-white rounded-lg text-sm py-2 w-48 mt-3 shadow-xl absolute right-0 text-left">
                                        <Link to="#" className="block px-4 py-2 hover:bg-indigo-500 hover:text-white">Profile</Link>
                                        <Link to="/"
                                            onClick={() => {
                                                dispatch(logoutUser());
                                                localStorage.removeItem("authTokens");
                                            }
                                            }
                                            className="block px-4 py-2 hover:bg-indigo-500 hover:text-white">Logout</Link>
                                    </div></>
                                    : <></>}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar