import './Footer.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <>
            <footer className='footer conteiner'>
                <div>2023 @English-Easy-Learn</div>
                <Link to="/"><img src={logo} alt="English Easy to Learn"  className='footer__logo'/></Link>
                <div>Разработано Светланой Мочеговой</div>
            </footer>
        </>
    )

}