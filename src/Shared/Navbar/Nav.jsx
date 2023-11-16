'use client';
import { Avatar, DarkThemeToggle, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Nav = () => {
    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
    }
    return (
        <Navbar fluid rounded className=' text-white fixed z-10 w-full opacity-80 bg-black'>
            <Navbar.Brand >
                <div className=' flex flex-col items-center justify-center'>
                    <span className=" text-center text-2xl tracking-widest dark:text-white family">POPULAR</span>
                    <h3 className="text-center tracking-widest" >RESTAURANT</h3>
                </div>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <DarkThemeToggle></DarkThemeToggle>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to='/' active>
                    <p className=' text-white'>Home</p>
                </Link>
                <Link to='/menu'><p className=' text-white'>Menu</p></Link>
                <Link to='/shop'><p className=' text-white'>Our Shop</p></Link>
                <Link ><p className=' text-white'>Pricing</p></Link>
                <Link ><p className=' text-white'>Contact</p></Link>
                {user ?
                    <button onClick={handleLogOut} className=' text-white'>LogOut</button>
                    :
                    <Link to={'/logIn'}><p className=' text-white'>LogIn</p></Link>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Nav;