import * as React from 'react';
import { connect } from 'react-redux';
import ReactMapboxGl, {ZoomControl, Marker, Layer, Source} from "react-mapbox-gl";
import SVG from 'react-inlinesvg';
import {IMapProps} from "./Map.I";
import {GlobalStore} from "../../redux/GlobalStore";
import {citiesThunks} from "../../redux/cities/cities.thunks";
import {CityService} from "../../services/CityService";

const Map = ReactMapboxGl({
  accessToken: process.env.BONTRIP_MAP_KEY,
});

const MapWrapper: React.FunctionComponent<IMapProps> = ({markersData, location, directions}): React.ReactElement => {
  const setMarker = (map, event) => {
    const {lng, lat} = event.lngLat;

    CityService.byCoordinates(lng, lat).then((city) => {
      GlobalStore.dispatch(citiesThunks.saveCity(city) as any);
    });
  };

  const renderMarkers = () => {
    return markersData.map((markerInfo, i) => (
      <Marker
      coordinates={[markerInfo.coordinates.lat, markerInfo.coordinates.lng]}
      key={`marker-${i}`}
      onClick={() => alert(markerInfo.color)}
      anchor={'bottom'}

      offset={[0, 0]}>
      <div style={{color: markerInfo.color}}>
        <SVG   onLoad={(src, hasCache) => console.log(src, hasCache)}
               id="map-marker" src="/images/marker.svg" preProcessor={code => code.replace(/fill=".*?"/g, `fill="currentColor"`)}/>
      </div>
    </Marker>));
  };

  const renderDirections = () => {
    return directions.map((directionsInfo, i) => {
      return (
        <React.Fragment>
          <Source key={`route-source${i}`} id={`directions-source-${i}`} tileJsonSource={{
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: directionsInfo.geometry.coordinates
              }
            }
          }} />
          <Layer
            sourceId={`directions-source-${i}`}
            key={`route-layer${i}`}
            type={"line"}
            paint={{
              'line-color': '#2144b7',
              'line-width': 3,
              'line-opacity': 1
            }}
            layout={{
              'line-join': 'round',
              'line-cap': 'round'
            }}>
          </Layer>
        </React.Fragment>
      )
    });
  }

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
      onClick={(map, event) => setMarker(map, event)}
      center={location}
    >
      {renderDirections()}
      {renderMarkers()}
      <ZoomControl position={'bottom-right'}/>
    </Map>
  );
}

export default MapWrapper;
