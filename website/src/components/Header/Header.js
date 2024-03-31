import ButtonContact from "../Buttons/ButtonContact/ButtonContact"
import Logo from "../Logo/Logo"
import Menu from "../Menu/Menu"
import "./Header.css"

function Header(){
    return (

        <div className="component-header"> 
            <Logo />
            <Menu />
            <ButtonContact />
        </div>
    )
}

export default Header