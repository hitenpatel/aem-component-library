import React from 'react';
import './Text.scss';

const Text = ({attributes, textContent}) => {
    const {id} = attributes;
    const dataAttributes = {};
    attributes.data.map(i => {
        dataAttributes[i] = '';
        return true;
    })

    return <div {...dataAttributes} id={id} dangerouslySetInnerHTML={{__html: textContent}}/>;
}

export default Text;