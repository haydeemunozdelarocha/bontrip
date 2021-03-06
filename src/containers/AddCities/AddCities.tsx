import * as React from 'react';
import { connect } from 'react-redux';
import { MapWrapper } from '../../components/Map/Map';
import { Sidepanel } from '../../components/Sidepanel/Sidepanel';
import { Header } from '../../components/Header/Header';
import { CityDatesForm } from '../../components/CityDatesForm/CityDatesForm';
import { createGetActiveCity, createGetCities, createGetCityColors } from '../../redux/cities/cities.selectors';
import { createGetDirections } from '../../redux/directions/directions.selectors';
import { IReduxState } from '../../redux/GlobalStore';
import { IAddCitiesProps } from './AddCities.I';
import { injectIntl } from 'react-intl'

export const AddCities: React.FC<IAddCitiesProps> = (props) => {
    const { selectedCities, activeCity, cityColors, directions } = props;
    const cityDatesFormTitle = props.intl.messages.forms.city_dates_form_title;
    const initialLocation = activeCity ? [activeCity.coordinates.lat, activeCity.coordinates.lng] : [-73.935242, 40.730610];
    return (
        <div>
            <Header hasNavigation={false} isTransparent={false} />
            <Sidepanel index={1} image={'/images/map.png'} orientation="left">
                <CityDatesForm title={cityDatesFormTitle} colors={cityColors} cities={selectedCities} activeCityId={activeCity ? activeCity.id : ''} />
            </Sidepanel>
            <MapWrapper directions={directions} isLoaded={false} location={initialLocation} markersData={selectedCities} />
        </div>
    );
};

const mapStateToProps = (state: IReduxState) => {
    const selectedCities = createGetCities();
    const activeCity = createGetActiveCity();
    const cityColors = createGetCityColors();
    const directions = createGetDirections();

    return {
        selectedCities: selectedCities(state),
        activeCity: activeCity(state),
        cityColors: cityColors(state),
        directions: directions(state),
    };
};

export default injectIntl(connect(mapStateToProps)(AddCities));
