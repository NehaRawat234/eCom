import { Link } from "react-router-dom"

export default function Home() {
    return <>
        <h1>Home</h1>
        <div>
            <div><Link to="/home">Home</Link></div>
            <div><Link to="/product">Product</Link></div>
            <div><Link to="/login">Login</Link></div>
            <div><Link to="/cart">Cart</Link></div>
        </div>
    </>
}