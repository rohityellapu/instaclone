
import { useEffect, useState } from 'react';
import './Postview.css';
import Header from './PostView/Header';
import Card from './PostView/Card';
const Postview = () => {
    let [d, setd] = useState([])
    useEffect(() => {
        fetch('http://localhost:3004/data')
            .then(data => data.json())
            .then(data => {
                setd(data)
            })
    }, [])



    console.log('outside fetch', d)

    return (
        <div className="App">
            <Header />
            { d.map((ele, index) => {
                return (
                    <Card
                        key={ index }
                        name={ ele.name }
                        location={ ele.location }
                        img={ require('' + ele.PostImage) }
                        description={ ele.description }
                        likes={ ele.likes }
                        date={ ele.date }
                    />
                )
            }) }
        </div>
    );
}

export default Postview;
