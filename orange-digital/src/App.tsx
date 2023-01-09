import React, { useEffect, useState } from 'react';
import './App.css';
import { WebSite } from './types';
import MainService from './services/MainService';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
    const [data, setData] = useState<WebSite>();
    useEffect(() => {
        MainService().then(
            (response: WebSite) => {
                console.log(response);
                setData(response);
            }
        )
    }, [])
    return (
        <div >
            <Header UserDetails={data?.UserDetails}></Header>
            <Body VideoDetails={data?.VideoDetails} PicturesDetails={data?.PicturesDetails}></Body>
        </div>
    );
}

export default App;
