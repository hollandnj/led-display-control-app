import React, {PropTypes} from 'react';
import DepartureListRow from './DepartureListRow';

const DepartureList = ({departures}) => {
  let row = 1;
  return (
    <table className="table">
      <thead>
        <tr>
          <th/>
          <th>Route Number</th>
          <th>Mode</th>
          <th>Platform</th>
          <th>Destination</th>
          <th>Scheduled</th>
          <th>Time to arrival</th>
        </tr>
      </thead>
      <tbody>
        {departures.map(departure =>
          <DepartureListRow key={departure.id} departure={departure} rowNumber={row++} />
        )}
      </tbody>
    </table>
  );
};

DepartureList.propTypes = {
  departures: PropTypes.array.isRequired
};

export default DepartureList;
