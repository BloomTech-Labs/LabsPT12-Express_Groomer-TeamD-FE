import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { GeoJsonLayer } from 'deck.gl';
import Geocoder from 'react-map-gl-geocoder';
import EGmarker from '../../../assets/EGmarker.png';
import { Button, Card, Typography } from '@material-ui/core';

const token = process.env.REACT_APP_TOKEN;

class SearchableMap extends Component {
  state = {
    viewport: {
      latitude: 25.76444044442845,
      longitude: -80.21152646141613,
      zoom: 13.2237329154881,
    },
    searchResultLayer: null,
    showPopup: true,
  };

  mapRef = React.createRef();

  handleViewportChange = viewport => {
    this.setState({
      viewport,
    });
    console.log('viewport', viewport);
  };
  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides,
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: 'search-result',
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10,
      }),
    });
  };

  render() {
    const { viewport, searchResultLayer } = this.state;
    console.log('marker', this.props.marker);

    const { showPopup } = this.state;

    return (
      <div style={{ height: '85vh', width: '100vw' }}>
        <ReactMapGL
          ref={this.mapRef}
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          width="100%"
          height="85vh"
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={token}
        >
          {this.props.marker.map(marker => {
            return (
              <Marker latitude={marker.latitude} longitude={marker.longitude}>
                <button
                  className="marker-btn"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({
                      searchResultLayer: marker,
                    });
                  }}
                >
                  <img src={EGmarker} height="50px" width="50px" alt="marker" />
                </button>
              </Marker>
            );
          })}

          {this.state.searchResultLayer ? (
            <Card>
              {showPopup && (
                <Popup
                  latitude={this.state.searchResultLayer.latitude}
                  longitude={this.state.searchResultLayer.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => this.setState({ showPopup: false })}
                  anchor="top"
                >
                  <div className="marker-results">
                    <Typography align="center" className="business-heading">
                      {this.state.searchResultLayer.business_name}
                    </Typography>
                    <img
                      src={this.state.searchResultLayer.profile_picture}
                      alt="groomer-marker"
                    />
                    <Typography>
                      {this.state.searchResultLayer.formatted_address}
                    </Typography>
                  </div>
                  <div align="center">
                    <Button size="medium" variant="contained">
                      Book Me!
                    </Button>
                  </div>
                </Popup>
              )}
            </Card>
          ) : null}

          <Geocoder
            mapRef={this.mapRef}
            onResult={this.handleOnResult}
            onViewportChange={this.handleGeocoderViewportChange}
            mapboxApiAccessToken={token}
            position="top-left"
          />
        </ReactMapGL>
      </div>
    );
  }
}

export default SearchableMap;
