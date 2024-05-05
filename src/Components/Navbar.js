import React, { useState } from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'
import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    List
} from '@mui/material'
import { IoMdHome, IoIosInformationCircleOutline, IoIosCall, IoIosContacts } from "react-icons/io";
import FlagArg from '../Assets/FlagArg.jsx';
import FlagUsa from '../Assets/FlagUSA.jsx'
import Logo from '../Assets/Logo'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            link: "/#",
            text: "Home",
            icon: <IoMdHome />
        },
        {
            link: "/#nosotros",
            text: "Nosotros",
            icon: <IoIosInformationCircleOutline />
        },
        {
            link: "/#contacto",
            text: "Contacto",
            icon: <IoIosCall />
        },
        {
            link: "/#",
            text: "Súmate al equipo",
            icon: <IoIosContacts />
        }
    ]
    return (
        <nav>
            <div className='nav-logo-container'>
                {/* <h1 className='home-custom-logo'>sq<span className='custom-logo-underline'>u</span>ab</h1> */}
                <Logo />
            </div>
            <div className='navbar-links-container' >
                <a href='/#'>Home</a>
                <a href='/#nosotros'>Nosotros</a>
                <a href='/#contacto'>Contacto</a>
                <a href='/#'>Súmate al equipo</a>
                <a href='/#'><FlagArg /></a>
                <a href='/#'><FlagUsa /></a>
            </div>
            <div className='navbar-menu-container'>
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
                <Box
                    sx={{ width: 250 }}
                    role='presentation'
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText><a href={item.link} style={{textDecoration: 'None', color: 'black'}}>{item.text}</a></ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}

export default Navbar
