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
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const { t, i18n } = useTranslation();

    const handleTrans = (code) => {
        console.log(code)
        i18n.changeLanguage(code);
    };

    const menuOptions = [
        {
            link: "/#",
            text: "Home",
            icon: <IoMdHome />
        },
        {
            link: "/#nosotros",
            text: t('nosotros'),
            icon: <IoIosInformationCircleOutline />
        },
        {
            link: "/#contacto",
            text: t("contacto"),
            icon: <IoIosCall />
        },
        {
            link: "/#sumate",
            text: t('sumate'),
            icon: <IoIosContacts />
        },
    ]

    return (
        <nav>
            <div className='nav-logo-container'>
                <Logo />
            </div>
            <div className='navbar-links-container' >
                <a href='/#'>Home</a>
                <a href='/#nosotros'>{t('nosotros')}</a>
                <a href='/#contacto'>{t('contacto')}</a>
                <a href='/#sumate'>{t('sumate')}</a>
                <button className='navbar-translate-buttons' onClick={() => handleTrans('es')}><FlagArg /></button>
                <button className='navbar-translate-buttons' onClick={() => handleTrans('en')}><FlagUsa /></button>
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
                                    <ListItemText><a href={item.link} style={{ textDecoration: 'None', color: 'black' }}>{item.text}</a></ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <ListItem key='translate-buttons' disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <button className='navbar-translate-buttons' onClick={() => handleTrans('es')}>
                                        <FlagArg />
                                    </button>
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <button className='navbar-translate-buttons' style={{ border: 0 }} onClick={() => handleTrans('en')}>
                                        <FlagUsa />
                                    </button>
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}

export default Navbar
