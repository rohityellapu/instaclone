
import { useEffect, useState } from 'react';
import './Postview.css';
import Header from './Header';
import Card from './Card';
import Form from './Form';
import axios from 'axios';
const apiURL = 'https://instaclone-backend-rndh.onrender.com/post';
const Postview = () => {
    let [data, setdata] = useState([])

    let [isForm, setForm] = useState(false);
    useEffect(() => {
        async function fetchData() {

            await axios.get(apiURL)
                .then((data) => setdata(data.data.posts))
                .catch(e => console.log(e));

        }
        fetchData();
    }, [isForm, data])

    return (
        <div className="App">
            <Header setForm={ setForm } />
            { isForm ? <Form setForm={ setForm } /> : data.map(post => {
                return <Card
                    key={ post.id }
                    name={ post.name }
                    location={ post.location }
                    description={ post.description }
                    img={ post.PostImage }
                    likes={ 20 }
                    date={ post.createdAt.toString().split('T')[0] }

                />
            }) }
        </div>
    );
}

export default Postview;
