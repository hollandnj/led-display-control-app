import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TrainListRow = ({train, rowNumber}) => {
  //let timeMinutes = Math.round(bus.timeToStation / 60);
  return (
    <tr>
      <td>{rowNumber}</td>
      <td>{train.platformName}</td>
      <td><Link to={'/train/' + train.id}>{train.destinationName}</Link></td>
      <td>{train.std}</td>
      <td>{train.etd}</td>
    </tr>
  );
};

TrainListRow.propTypes = {
  train: PropTypes.object.isRequired,
  rowNumber: PropTypes.number.isRequired
};

export default TrainListRow;
