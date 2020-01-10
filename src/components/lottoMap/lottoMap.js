import React from 'react';

class LottoMap extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }
}

export default LottoMap; 