import './Header.scss'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';



export default function Header(){
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return(
        <>
            <header className={scrolled ? 'scrolled header' : 'header'}>
                <div className='header__logo'>
                    <NavLink to="/"> <img src={logo} alt="English Easy to Learn" className='header__logo_img'/> </NavLink>
                    <NavLink to="/"> <span>English Easy to Learn</span></NavLink>
                    
                </div>
                <nav className='header__menu'>
                    <ul>
                        <li className='header__menu_item'><NavLink to="/">Главная страница</NavLink></li>
                        <li className='header__menu_item'><NavLink to="/tablewithwords">Список всех слов</NavLink></li>
                        <li className='header__menu_item'><NavLink to="/learning">Карточки для изучения</NavLink></li>
                    </ul>
                    
                </nav>
            
            </header>
        </>
    )

}