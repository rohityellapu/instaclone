import { Link } from 'react-router-dom';
import './Header.css';
export default function Header({ setForm }) {
    return (
        <header>
            <Link to='/'>
                <div className="logo">
                    <img src='https://img.icons8.com/clouds/512/instagram-new--v3.png' alt="logo" />
                </div>
            </Link>
            <div className="logo-name">
                <h1>InstaClone</h1>
                <h4>by Rohit Yellapu</h4>
            </div>
            <div className="camera" onClick={ () => setForm(prev => !prev) }>
                <img src="https://img.icons8.com/ios-filled/512/camera.png" alt="camera" />
            </div>
        </header>
    )
}