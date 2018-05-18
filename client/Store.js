import Api from './Api'
import actions from './actions'

window.Api = Api;

class Store {

  constructor(initialState = {}) {
    this.state = initialState;
    this.onChangeCallbacks = [];
  }

  getState(key) {
    if (key) {
      return this.state[key];
    }
    return this.state
  }

  setState(key, value) {
    this.state[key] = value;
    this.emitChange();
  }

  onChange(callback) {
    this.onChangeCallbacks.push(callback);
  }

  emitChange() {
    this.onChangeCallbacks.forEach(callback => {
      callback();
    })
  }

  /**
   * dispatch
   * Used to trigger an event throughout the application with a given action.
   * ex.
   *   store.dispatch({ action: actions.LOAD_UPDATES })
   */
  dispatch(action) {
    switch (action.type) {
      case actions.LOAD_UPDATES:
        Api.get('getUpdates')
          .then(updates => {
            this.setState('updates', updates);
          })
          .catch(err => console.error('err?', err))
        break;
    }
  }

}

export default Store;
