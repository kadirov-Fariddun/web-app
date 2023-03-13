import React from 'react';

export default function MatchInfo({ children }) {
    return (
        <div className="match-info">
            <div className="tp">
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    )
}
