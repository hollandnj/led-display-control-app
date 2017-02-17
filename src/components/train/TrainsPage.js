import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TrainList from './TrainList';

class TrainsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {trains} = this.props;

    return (
      <div>
        <h1>Trains</h1>
        <TrainList trains={trains} />
      </div>
    );
  }
}

TrainsPage.propTypes = {
  trains: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    trains: state.trains
  };
}

export default connect(mapStateToProps)(TrainsPage);
