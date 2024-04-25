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
import Logo from './Icons/squab-2.png'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon: <IoMdHome />
        },
        {
            text: "Nosotros",
            icon: <IoIosInformationCircleOutline />
        },
        {
            text: "Contacto",
            icon: <IoIosCall />
        },
        {
            text: "Súmate al equipo",
            icon: <IoIosContacts />
        }
    ]
    return (
        <nav>
            <div className='nav-logo-container'>
                <img src={Logo} alt='' />
            </div>
            <div className='navbar-links-container' >
                <a href=''>Home</a>
                <a href=''>Nosotros</a>
                <a href=''>Contacto</a>
                <a href=''>Súmate al equipo</a>
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
                                    <ListItemText>{item.text}</ListItemText>
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
