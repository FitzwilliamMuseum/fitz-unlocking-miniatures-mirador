import React from "react";

export default function () {
    const mainMenu = [
        { link: '/', title: 'Home' },
        { link: '/collections', title: 'Collections' },
        {
            link: 'https://miniatures.fitz.ms/view/?manifestId[]=https://miniatures.fitz.ms/iiif/3868/manifest.json',
            title: 'Mirador demo'
        }
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
