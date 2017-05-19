import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const DepartureListRow = ({departure, rowNumber}) => {
  let timeMinutes = Math.round(departure.timeToStation / 60);
  return (
    <tr>
      <td>{rowNumber}</td>
      <td>{departure.lineName}</td>
      <td>{departure.mode}</td>
      <td>{departure.platformName}</td>
      <td><Link to={'/departure/' + departure.id}>{departure.destinationName}</Link></td>
      <td>{departure.scheduled}</td>
      <td>{departure.expected}</td>
      <td>{timeMinutes}</td>
    </tr>
  );
};

DepartureListRow.propTypes = {
  departure: PropTypes.object.isRequired,
  rowNumber: PropTypes.number.isRequired
};

export default DepartureListRow;
