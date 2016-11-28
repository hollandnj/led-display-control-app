import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BusList from './BusList';
import {browserHistory } from 'react-router';

class BusesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {buses} = this.props;

    return (
      <div>
        <h1>Buses</h1>
        <BusList buses={buses} />
      </div>
    );
  }
}

BusesPage.propTypes = {
  buses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    buses: state.buses
  };
}

export default connect(mapStateToProps)(BusesPage);
