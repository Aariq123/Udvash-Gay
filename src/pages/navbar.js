import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import { useContext } from 'react';
import { MainContext } from './context';
import { Button, IconButton } from '@mui/material';

const Navbar = () => {
    const { menuOpen, openMenu,  setMenuOpen } = useContext(MainContext)

    return (
        <div className='container'>
            <div className='py-4 w-full flex justify-between items-center'>
                <div >
                    <Link to='/'>
                        <img className='scale-75 sm:scale-100' src={require('../resources/Udvash-Logo.webp')} alt="" />
                    </Link>
                </div>
                <div onClick={openMenu} className={menuOpen ? 'hidden' : 'block md:hidden'}>
                    <MenuIcon fontSize="large"></MenuIcon>
                </div>

                <div  className={menuOpen ? 'block md:hidden' : 'hidden'}>
                    <IconButton onClick={()=>setMenuOpen(false)}><p className='font-bold text-2xl'>x</p></IconButton>
                </div>

                <div className={`gay absolute top-0 ${menuOpen ? 'right-2/4' : 'right-full'} border-2 border-black md:border-none md:static flex flex-col z-20 bg-white md:flex-row w-2/4 md:w-5/12 md:h-full justify-between`}>
                    <Link className='gay py-6  pl-4 md:p-0' to='/'>Home</Link>
                    <Link className='gay py-6 border-t-2 border-slate-200 md:border-none pl-4 md:p-0' to='/contact'>Contact</Link>
                    <Link className='gay py-6 border-t-2 border-slate-200 md:border-none pl-4 md:p-0' to='/about'>About</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;