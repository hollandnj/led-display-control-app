import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const BusListRow = ({bus, rowNumber}) => {
  let timeMinutes = Math.round(bus.timeToStation / 60);
  return (
    <tr>
      <td>{rowNumber}</td>
      <td>{bus.lineName}</td>
      <td><Link to={'/bus/' + bus.id}>{bus.destinationName}</Link></td>
      <td>{timeMinutes}</td>
    </tr>
  );
};

BusListRow.propTypes = {
  bus: PropTypes.object.isRequired,
  rowNumber: PropTypes.number.isRequired
};

export default BusListRow;
