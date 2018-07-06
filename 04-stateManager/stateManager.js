var SM = (function(){

	var _currentState = undefined,
		_reducer = null,
		_listeners = [],
		__init_action = '@@INIT_ACTION';

	function getState(){
		return _currentState;
	}

	function subscribe(listener){
		_listeners.push(listener);
	}

	function triggerChange(){
		_listeners.forEach(listener => listener());
	}

	function dispatch(action){
		let newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, __init_action);
		return {
			getState,
			subscribe,
			dispatch
		};
	}

	return { createStore };

})();