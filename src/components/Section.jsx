import React from 'react';

const Section = ({ id, title, children }) => {
    return (
        <section id={id} className="section-container fade-in">
            <h2 className="section-title">{title}</h2>
            <div className="section-content">
                {children}
            </div>
        </section>
    );
};

export default Section;
