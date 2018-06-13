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
            if (updates.length === 0) {
              this.setState('end', true);
              return;
            }
            this.setState('updates', updates);
            this.setState('visible');
          })
          .catch(err => console.error('err?', err))
        break;
        case actions.LOAD_MORE: 
          const offset = this.state.visible + 10;

          Api.get('getUpdates', { offset })
            .then(updates => {
              if (! updates.length) {
                this.setState('end', true);
                return;
              }

              this.setState('updates', [...this.state.updates, ...updates]);
              this.setState('visible', offset);
            });
            break;
    }
  }
}

export default Store;
