import { NavLink } from "react-router-dom"
import { ThemeButton } from "./ThemeButton"
const buttonStyle = {
    textDecoration: 'none', color: '#B7674C',
    letterSpacing: '0.5rem',
    fontSize: '1.5rem'
}



export const Header = () => {
    return (<>
        <header className="header">
            <ThemeButton />
            <div className="nav-buttons">
                <button className="header-button"><NavLink to='/' style={buttonStyle}>Home</NavLink></button>


                <button className="header-button"><NavLink to='my-goals' style={buttonStyle}>My Goals</NavLink></button>



                <button className="header-button" ><NavLink to='overview' style={buttonStyle}>Overview</NavLink></button>
            </div>
        </header >

    </>)
}