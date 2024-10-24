import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const ThemeButton = () => {
    const { theme, changeTheme } = useContext(ThemeContext)
    return (
        <div className="theme-button-div">
            <button onClick={(() => changeTheme('dark'))} className="theme-button dark">Dark</button>
            <button onClick={(() => changeTheme('light'))} className="theme-button light">Light</button>
            <button onClick={(() => changeTheme('colored'))} className="theme-button colored">Color</button>

        </div>
    )
}