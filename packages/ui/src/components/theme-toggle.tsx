import { Button } from "../components/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        const saved = localStorage.getItem("theme")
        if (saved) {
            setTheme(saved)
            document.documentElement.classList.toggle("dark", saved === "dark")
        }
    }, [])

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark"
        setTheme(next)
        localStorage.setItem("theme", next)
        document.documentElement.classList.toggle("dark", next === "dark")
    }

    return <Button variant="outline" size="sm" onClick={toggle}>
        Toggle Theme
    </Button>
}