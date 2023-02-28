import React from 'react';

export default function Preloader(props) {
    const preloader = document.querySelector('.preloader');

    if (props.data) {
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 2100);

    }

    return (
        <>
            <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

