import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory } from 'react-router';
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
        <div className="panel panel-primary">
          <div className="panel-heading">
            <div className="panel-title">
              <DisplayRow key="a00" text={displayFeed.feed.description} />
            </div>
          </div>
          <div className="panel-body">
          {displayFeed.feed.items.map(item =>
            <DisplayRow key={item.id} text={`${item.lineName} ${item.destinationName} ${item.expectedArrival}`} />
          )}
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
