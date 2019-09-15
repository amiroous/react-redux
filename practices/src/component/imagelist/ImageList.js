import React from 'react';

import './ImageList.css';
import Image from "./Image";

const ImageList = (props) => {

    const renderImages = () => props.images.map((image) => (
        <Image key={image.id} image={image} />
    ));

    return (
        <div className="ui basic segment image-list">
            { renderImages() }
        </div>
    );
};

export default ImageList;
