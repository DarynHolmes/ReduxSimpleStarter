import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map ( weather => weather.main.temp );
    const pressures = cityData.list.map ( weather => weather.main.pressure );
    const humidities = cityData.list.map ( weather => weather.main.humidity );
    const { lon, lat } = cityData.city.coord;

    return (
      
      <tr key={name}>
        <td><Map lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color="orange" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="blue" units="hpa" />
        </td>
        <td>
          <Chart data={humidities} color="green" units="%" />
        </td>
      </tr>
    );
  }

  render() {

    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hpa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map(this.renderWeather) }
          </tbody>
        </table>
      );

  }

}

function mapStateToProps({ weather }) { // pull off state.weather

  return { weather }; // same as { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);