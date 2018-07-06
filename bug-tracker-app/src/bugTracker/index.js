import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import bugActionCreators from './actions';

import BugSort from './views/BugSort';
import BugStats from './views/BugStats';
import BugList from './views/BugList';
import BugEdit from './views/BugEdit';

class BugTracker extends Component{
	render(){
		let { bugs, toggle, addNew, removeClosed } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

//State extraction 
function mapStateToBugTrackerProps(storeState){
	let bugs = storeState.bugsData;
	return { bugs : bugs };
}

//action creation
function mapDispatchToBugTrackerProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;	
}

export default connect(
	mapStateToBugTrackerProps,
	mapDispatchToBugTrackerProps
)(BugTracker);


