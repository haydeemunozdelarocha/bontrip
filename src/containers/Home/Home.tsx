import * as React from 'react';
import { Header } from '../../components/Header/Header';
import { Slideshow } from '../../components/Slideshow/Slideshow';
import {CityAutocomplete} from '../../components/CityAutocomplete/CityAutocomplete';
import { injectIntl } from 'react-intl'
import {IHomeProps} from "./Home.I";
import {FormEvent} from "react";
import {GlobalStore} from "../../redux/GlobalStore";
import {citiesThunks} from "../../redux/cities/cities.thunks";
import {Navigation} from "../../helpers/Navigation";

const images = require('../../slideshow.json');

export const Home: React.FC<IHomeProps> = (props) => {
    const placeholder = props.intl.messages.placeholders.city_autocomplete;
    const placeholders = props.intl.messages.placeholders.city_array;

    const onSelect = (event: FormEvent, data: any) => {
        GlobalStore.dispatch(citiesThunks.saveCity(data.suggestion) as any);
        Navigation.goTo('/newtrip');
    };

    return (
        <div className="cover-page-layout">
            <Header isTransparent={true} />
            <Slideshow isFullscreen={true} images={images.home} />
            <div className="l-page-overlay">
                <CityAutocomplete
                    animatedPlaceholderWords={placeholders}
                    placeholder={placeholder}
                    onSelect={onSelect}
                />
            </div>
        </div>
    );
};

export default injectIntl(Home);
