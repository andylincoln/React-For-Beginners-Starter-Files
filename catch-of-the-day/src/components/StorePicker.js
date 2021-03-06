import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // Fix null this problem for custom methods
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    // First grab the text from the box
    // console.log("You changed the URL");

    const storeId = this.storeInput.value;
    // console.log(`Going to ${storeId}`);
    // second, transition from '/' to '/store/:storeId'
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    // this.goToStore.bind(this) allows 'this' to become the 'StorePicker' component
    // This seems similar to making a Java method static
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()}
        ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
export default StorePicker;
