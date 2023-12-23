import './Footer.scss'
import logo from '../../assets/logo.png'

export default function Footer(){
    return(
        <>
            <footer className='footer conteiner'>
                <div>2023 @English-Easy-Learn</div>
                <img src={logo} alt="English Easy to Learn"  className='footer__logo'/>
                <div>Разработано Светланой Мочеговой</div>
            </footer>
        </>
    )

}