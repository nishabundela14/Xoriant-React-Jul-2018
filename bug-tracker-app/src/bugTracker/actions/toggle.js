function toggle(bugToToggle){
	let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
	let action = { type : 'UPDATE', payload : {oldBug : bugToToggle, newBug : toggledBug}};
	return action;
}
export default toggle;