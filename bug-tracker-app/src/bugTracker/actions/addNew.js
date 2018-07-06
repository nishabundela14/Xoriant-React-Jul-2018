function addNew(bugName){
	let newBug = {
		name : bugName,
		isClosed : false,
		createdAt : new Date()
	};
	let action = { type : 'ADD_NEW', payload : newBug};
	return action;
}
export default addNew;