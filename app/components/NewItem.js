import React from 'react';

import AddItemStore from '../stores/AddItemStore';
import AddItemActions from '../actions/AddItemActions';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddItemStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddItemStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddItemStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var name = this.state.name.trim();
    var upc = this.state.upc;
    var manu = this.state.manu;

    if (!name) {
      AddItemActions.invalidName();
      this.refs.nameTextField.getDOMNode().focus();
    }

    if (!upc) {
      AddItemActions.invalidUPC();
    }


    if (!manu) {
      AddItemActions.invalidManu();
    }

    if (name && upc && manu) {
      AddItemActions.addCharacter(name, upc, manu);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add UPC Item</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>Item Name</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddItemActions.updateName} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.upcValidationState}>
                    <label className='control-label'>UPC Code</label>
                    <input type='text' className='form-control' ref='upcTextField' value={this.state.upc}
                           onChange={AddItemActions.updateUPC} autoFocus/>
                  </div>
                  <div className={'form-group ' + this.state.manuValidationState}>
                    <label className='control-label'>UPC Code</label>
                    <input type='text' className='form-control' ref='upcTextField' value={this.state.upc}
                           onChange={AddItemActions.updateUPC} autoFocus/>
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItem;