import React, {PropTypes} from 'react';
import BusListRow from './BusListRow';

const BusList = ({buses}) => {
  let row = 1;
  return (
    <table className="table">
      <thead>
        <tr>
          <th/>
          <th>Route Number</th>
          <th>Destination</th>
          <th>Time to arrival</th>
        </tr>
      </thead>
      <tbody>
        {buses.map(bus =>
          <BusListRow key={bus.id} bus={bus} rowNumber={row++} />
        )}
      </tbody>
    </table>
  );
};

BusList.propTypes = {
  buses: PropTypes.array.isRequired
};

export default BusList;
