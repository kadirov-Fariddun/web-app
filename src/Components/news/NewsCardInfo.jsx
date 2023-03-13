import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Preloader from '../home/Preloader';

export default function NewCardInfo({ children }) {
    // const URL = 'https://ligaeuropa.pythonanywhere.com/api/v1';

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     async function getData(http) {
    //         await axios.get(`${URL}/${http}`)
    //             .then((data) => {
    //                 setData(data.data);
    //             })
    //     };
    //     getData('news');
    // }, []);

    return (
        <>
            <div className="news-card-info">
                <div className="tp">
                    <div className="container">
                        {/* <Preloader data={data} /> */}
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
