import React, { useState } from 'react';
import './App.css';
function Accordion({ title, body, linkUrl }) {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="App">
            <div className="accordion">
                <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
                    <div className="accordion-header-icon">
                        <h2>{title}</h2>
                        <div className="accordion-indicator">
                            {isOpen ? "close" : "open"}
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <>
                        <div className="flexContainer">
                            <div classname="imageContainer">
                                {linkUrl.map(product => (
                                    <img src={product.url} alt="Avatar" classname="image" />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Accordion;
