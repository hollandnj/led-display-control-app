import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import {browserHistory } from 'react-router';
import DisplayRow from './DisplayRow';

class DisplayPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {displayFeed} = this.props;

    return (
      <div>
        <h1>Display</h1>
        <p>This emulates the LED matrix display</p>
        <p>and is not complete</p>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <div className="panel-title">
              <DisplayRow key="a00" text={"Description"} />
            </div>
          </div>
          <div className="panel-body">

            <DisplayRow key="a01" text ={"Row 1"} />
            <DisplayRow key="a02" text ={"Row 2"} />
          </div>
        </div>
      </div>
    );
  }
}

DisplayPage.propTypes = {
  displayFeed: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    displayFeed: state.displayFeed
  };
}

export default connect(mapStateToProps)(DisplayPage);
