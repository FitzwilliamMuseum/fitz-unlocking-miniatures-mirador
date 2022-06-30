import React from "react";

export default function () {
    const mainMenu = [
        { link: '/', title: 'Home' },
        { link: '/collections', title: 'Collections' },
        { link: 'http://miniatures.fitz.ms/mirador-demo/', title: 'Mirador demo' }
    ]
    return (
        <React.Fragment>
            <ul className="main-menu">
                {mainMenu.map((item) => (
                        <li key={item.link}><a href={item.link}>{item.title}</a></li>
                ))}
            </ul>
        </React.Fragment>
    )
}