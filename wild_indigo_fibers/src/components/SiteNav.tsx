import { Link } from "react-router-dom"

export default function SiteNav () {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}