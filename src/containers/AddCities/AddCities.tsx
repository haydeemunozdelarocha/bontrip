import * as React from 'react';
import { connect } from 'react-redux';
import { MapWrapper } from '../../components/Map/Map';
import { Sidepanel } from '../../components/Sidepanel/Sidepanel';
import { Header } from '../../components/Header/Header';
import CityDatesForm from '../../components/CityDatesForm/CityDatesForm';
import { createGetActiveCity, createGetCities, createGetCityColors } from '../../redux/cities/cities.selectors';
import { createGetDirections } from '../../redux/directions/directions.selectors';
import { IReduxState } from '../../redux/GlobalStore';
import { IAddCitiesProps } from './AddCities.I';

export const AddCities: React.FC<IAddCitiesProps> = (props) => {
    const { selectedCities, activeCity, cityColors, directions } = props;

    return (
        <div>
            <Header hasNavigation={false} isTransparent={false} />
            <Sidepanel index={1} image={'/images/map.png'} orientation="left">
                <CityDatesForm colors={cityColors} cities={selectedCities} activeCityId={activeCity.id} />
            </Sidepanel>
            <MapWrapper directions={directions} isLoaded={false} location={[activeCity.coordinates.lat, activeCity.coordinates.lng]} markersData={selectedCities} />
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

export default connect(mapStateToProps)(AddCities);
