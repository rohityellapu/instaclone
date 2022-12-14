import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';
export default function LandingPage() {
    return (
        <>
            <main>
                <section className="img">
                    <img src={ require('../images/landing.jpg') } alt='landingpage' />
                </section>
                <section className="name-landing">
                    <h1>10x Team 04</h1>
                    <Link to='/postview'><button>Enter</button></Link>
                </section>
            </main>
        </>
    )
}
