import React from "react";

export default function () {

    const content = {
        quickLinks: [
            { link: '/', title: 'Home' },
            { link: '/collections', title: 'Collections' }
        ],
        contact: [
            { line: "The Fizwilliam Museum" },
            { line: "University of Cambridge" }
        ],
        footerLogos: [
            { image_src: '../../content/assets/main-banner-image.png', image_alt: 'Logo' }
        ],
        socialMedia: [
            { type: 'twitter', url: 'https://www.twitter.com/fitzwilliam', 'title': '@FitzProjectHandle' },
            { type: 'youtube', url: 'https://www.twitter.com/fitzwilliam', 'title': 'on YouTube' },
        ]
    }

    return (
        <div className="footer">
            <div className="footer--social-media">
                {content.socialMedia.map(item => (<a href={item?.url}>{item.title}</a>))}
            </div>
            <div className="footer--main">
                <div className="footer--quick-links">
                    <h4>Quick links</h4>
                    <ul>{content.quickLinks.map(item => (
                        <li><a href={item?.link}>{item.title}</a></li>
                    ))}</ul>
                </div>
                <div className="footer--contact">
                    <h4>Contact</h4>
                    <ul>{content.contact.map(item => (
                        <li>{item?.line}</li>
                    ))}</ul>
                </div>
                <div className="footer--logo">
                </div>
            </div>
            <div className="footer--copyright">
                <a href="#">Copyright University of Cambridge</a>
                <a href="#">Privacy policy</a>
            </div>
        </div>
    )
}
