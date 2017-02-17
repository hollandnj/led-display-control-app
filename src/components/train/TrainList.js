import React, {PropTypes} from 'react';
import TrainListRow from './TrainListRow';

const TrainList = ({trains}) => {
  let row = 1;
  return (
    <table className="table">
      <thead>
        <tr>
          <th/>
          <th>Platform</th>
          <th>Destination</th>
          <th>Scheduled</th>
          <th>Est. Departure</th>
        </tr>
      </thead>
      <tbody>
        {trains.map(train =>
          <TrainListRow key={train.id} train={train} rowNumber={row++} />
        )}
      </tbody>
    </table>
  );
};

TrainList.propTypes = {
  trains: PropTypes.array.isRequired
};

export default TrainList;
