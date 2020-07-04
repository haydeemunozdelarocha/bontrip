import * as React from 'react';
import { Header } from '../../components/Header/Header';
import { Slideshow } from '../../components/Slideshow/Slideshow';
import { CityAutocomplete } from '../../components/CityAutocomplete/CityAutocomplete';

const images = require('../../slideshow.json');
const placeholders = ['Tokyo', 'Paris', 'Munich', 'Hong Kong', 'Mexico City', 'Sao Paolo', 'Beijing', 'Madrid'];

export const Home: React.FC = () => {
    return (
        <div className="cover-page-layout">
            <Header isTransparent={true} />
            <Slideshow isFullscreen={true} images={images.home} />
            <div className="l-page-overlay">
                <CityAutocomplete animatedPlaceholderWords={placeholders} />
            </div>
        </div>
    );
};

export default Home;
