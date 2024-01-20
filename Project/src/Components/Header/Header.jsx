import './Header.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <>
            <header className='header'>
                <div className='header__logo'>
                    <Link to="/">
                        <img src={logo} alt="English Easy to Learn" className='header__logo_img'/>
                        <span>English Easy to Learn</span>
                    </Link>
                </div>
                <nav className='header__menu'>
                    <ul>
                        <li className='header__menu_item'><Link to="/">Главная страница</Link></li>
                        <li className='header__menu_item'><Link to="/tablewithworlds">Список всех слов</Link></li>
                        <li className='header__menu_item'><Link to="/learning">Карточки для изучения</Link></li>
                    </ul>
                    
                </nav>
            
            </header>
        </>
    )

}