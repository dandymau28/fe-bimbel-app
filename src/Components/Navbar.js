import { NavLink } from "react-router-dom"

const navigations = [
 { name: "Home", link: "/" },
 { name: "Login", link: "/login" }   
]

const Navbar = () => {
    return (
        <>
        <nav className="bg-gray-800">
            <div className="relative px-2 py-2">
                <div className="flex space-x-4">
                    {
                        navigations.map((item) => (
                            <NavLink to={item.link} key={item.name}>
                                <div className="px-2 py-1 text-gray-200 hover:bg-gray-400 rounded-md">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar