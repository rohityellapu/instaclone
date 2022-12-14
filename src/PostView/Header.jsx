import { Link } from 'react-router-dom'
export default function Header({ setForm }) {
    return (
        <header>
            <Link to='/'>
                <div className="logo">
                    <img src={ require('../images/logos/image1.jpg') } alt="logo" />
                </div>
            </Link>
            <div className="camera" onClick={ () => setForm(prev => !prev) }>
                <img src={ require('../images/logos/camera.png') } alt="camera" />
            </div>
        </header>
    )
}