import React from "react";

export default function () {

    const content = {
        quickLinks: [
            { link: 'https://unlocking-miniatures.fitzmuseum.cam.ac.uk/', title: 'Home' },
            { link: 'https://unlocking-miniatures.fitzmuseum.cam.ac.uk/collections', title: 'Collections' },
            { link: 'https://unlocking-miniatures.fitzmuseum.cam.ac.uk/about', title: 'About' },
            { link: 'https://unlocking-miniatures.fitzmuseum.cam.ac.uk/blog', title: 'Blog' },
        ],
        contact: [
            { line: "portraitminiatures [at] fitzmuseum.cam.ac.uk" },
            { line: "The Fitzwilliam Museum" },
            { line: "University of Cambridge" }
        ],
    }

    return (
        <div className="footer">
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
                <div className="footer--copyright-codes">
                    <div>Content: <a
                        href="https://creativecommons.org/licenses/by-nc/4.0/"
                        target="__blank"
                        rel="noopener">CC-BY-NC</a></div>
                    <div>Metadata: <a
                        href="https://creativecommons.org/licenses/by-nc/4.0/"
                        target="__blank"
                        rel="noopener">CC-BY-NC</a></div>
                    <div>Images: <a
                        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                        target="__blank"
                        rel="noopener">CC-BY-NC-ND</a></div>
                    <div>Code: <a
                        href="https://www.gnu.org/licenses/gpl-3.0.en.html"
                        target="__blank"
                        rel="noopener">GPL-V3</a></div>
                </div>
            </div>
            <div className="footer--copyright">
                <span>© 2022 The University of Cambridge</span>
                <span><a
                    target="__blank"
                    rel="noopener"
                    href="https://www.information-compliance.admin.cam.ac.uk/data-protection/general-data">Privacy policy</a></span>
                <span>Website by <a
                    href="https://www.olamalu.com/"
                    target="__blank"
                    rel="noopener"
                >www.olamalu.com</a></span>
            </div>
        </div>
    )
}
