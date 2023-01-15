import React from 'react';

const Options = ({title, options, moveOption}) => {
    return (
        <div className="options">
            <div className="options__title">{title}</div>
            <ul className="options__list">
                {
                    options.map(({id,name}) => 
                    <li key={id}><button className="options__list-item">{name}</button></li>)
                }
            </ul>
        </div>
    );
}

export default Options;