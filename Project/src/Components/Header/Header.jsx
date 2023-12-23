import './Header.scss'
import logo from '../../assets/logo.png'

export default function Header(){
    return(
        <>
            <header className='header'>
                <div className='header__logo'>
                    <img src={logo} alt="English Easy to Learn" className='header__logo_img'/>
                    <span>English Easy to Learn</span>
                </div>
                <nav className='header__menu'>
                    <ul>
                        <li className='header__menu_item'><a>Главная страница</a></li>
                        <li className='header__menu_item'><a>Список всех слов</a></li>
                        <li className='header__menu_item'><a>Карточки для изучения</a></li>
                    </ul>
                    
                </nav>
            
            </header>
        </>
    )

}