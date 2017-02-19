import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import DepartureList from './DepartureList';

class DeparturesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {departures} = this.props;

    return (
      <div>
        <h1>Departures</h1>
        <DepartureList departures={departures} />
      </div>
    );
  }
}

DeparturesPage.propTypes = {
  departures: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    departures: state.departures
  };
}

export default connect(mapStateToProps)(DeparturesPage);
