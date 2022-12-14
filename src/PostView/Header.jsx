import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <Link to='/'>
                <div className="logo">
                    <img src={ require('../images/logos/image1.jpg') } alt="logo" />
                </div>
            </Link>
            <div className="camera">
                <img src={ require('../images/logos/camera.png') } alt="camera" />
            </div>
        </header>
    )
}