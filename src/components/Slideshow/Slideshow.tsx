import * as React from 'react';
import { Fade } from 'react-slideshow-image';
import { ISlideshowProps } from './Slideshow.I';

const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: false,
    arrows: false,
    pauseOnHover: true,
};

export const Slideshow: React.FC<ISlideshowProps> = (props) => {
    const { images } = props;

    return (
        <Fade {...properties}>
            {images.map((image, i) => (
                <div className="slideshow__item" key={i} style={{ backgroundImage: `url(${image})` }}></div>
            ))}
        </Fade>
    );
};
