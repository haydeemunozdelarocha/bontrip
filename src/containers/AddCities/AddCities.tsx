import * as React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import MapWrapper from '../../components/Map/Map';
import Sidepanel from '../../components/Sidepanel/Sidepanel';
import CityDatesForm from '../../components/CityDatesForm/CityDatesForm';
import {Dispatch} from "redux";
import {City} from "../../models/City";
import {createGetActiveCity, createGetCities, createGetCityColors} from "../../redux/cities/cities.selectors";
import {createGetDirections} from "../../redux/directions/directions.selectors";

interface IAddCitiesProps {
  selectedCities: City[];
  dispatch: Dispatch;
  activeCity: City;
  cityColors: string[];
  directions: any;
}

class AddCities extends React.Component<IAddCitiesProps> {
  public render(): React.ReactNode {

    const {selectedCities, activeCity, cityColors, directions} = this.props;
    return (
      <div>
        <Header hasNavigation={false} isTransparent={false}/>
        <Sidepanel index={1} image={'/images/map.png'} orientation="left">
          <CityDatesForm colors={cityColors} cities={selectedCities} activeCityId={activeCity.id}/>
        </Sidepanel>
        <MapWrapper directions={directions} isLoaded={false} location={[activeCity.coordinates.lat, activeCity.coordinates.lng]}  markersData={selectedCities}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const selectedCities = createGetCities();
  const activeCity = createGetActiveCity();
  const cityColors = createGetCityColors();
  const directions = createGetDirections();

  return {
    selectedCities: selectedCities(state),
    activeCity: activeCity(state),
    cityColors: cityColors(state),
    directions: directions(state)
  };
};

export default connect(mapStateToProps)(AddCities);
