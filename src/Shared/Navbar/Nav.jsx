'use client';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';


const Nav = () => {
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
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active>
                    <p className=' text-white'>Home</p>
                </Navbar.Link>
                <Navbar.Link ><p className=' text-white'>About</p></Navbar.Link>
                <Navbar.Link ><p className=' text-white'>Services</p></Navbar.Link>
                <Navbar.Link ><p className=' text-white'>Pricing</p></Navbar.Link>
                <Navbar.Link ><p className=' text-white'>Contact</p></Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Nav;