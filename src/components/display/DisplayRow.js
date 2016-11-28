import React, {PropTypes} from 'react';

const DisplayRow = ({text}) => {
  return (
    <div>{text}</div>
  );
};

DisplayRow.propTypes = {
  text: PropTypes.string.isRequired
};

export default DisplayRow;
