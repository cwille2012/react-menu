import React from 'react'
import SensorAPI from '../api-sensors'
import { Link } from 'react-router-dom'

const Sensor = (props) => {
  console.log(props.match.params.id)
  const sensor = SensorAPI.get(
    String(props.match.params.id)
  )
  console.log(sensor)
  if (!sensor) {
    return <div>Sorry, but the sensor was not found</div>
  }
  return (
    <div>
      <h1>{sensor.id}</h1>
      <h4>Sensor Name: {sensor.name}</h4>
      <h4>Sensor Group: {sensor.group}</h4>
      <h4>Sensor Location: {sensor.location}</h4>
      <h4>Sensor Coordinates: {sensor.long}, {sensor.lat}</h4>
      <h4>Sensor Status: {sensor.status}</h4>
      <h4>Sensor ID: {sensor.id}</h4>


      <Link to='/sensors'>Back</Link>
    </div>
  )
}

export default Sensor
