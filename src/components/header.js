import React from "react";

export default function () {
    const mainMenu = [
        { link: 'https://unlocking-miniatures.fitzmuseum.cam.ac.uk/', title: 'Home' },
        { link: 'https://unlocking-miniatures.fitzmuseum.cam.ac.uk/collections', title: 'Collections' },
        { link: 'https://unlocking-miniatures.fitzmuseum.cam.ac.uk/terminology', title: 'Terminology' },
        { link: 'https://unlocking-miniatures.fitzmuseum.cam.ac.uk/about', title: 'About' },
        { link: 'https://unlocking-miniatures.fitzmuseum.cam.ac.uk/blog', title: 'Blog' },
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
