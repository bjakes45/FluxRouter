import React from 'react';

import AddItemStore from '../stores/AddItemStore';
import AddItemActions from '../actions/AddItemActions';

class NewItem extends React.Component {
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
    var size = this.state.size;

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

    if (!size) {
      AddItemActions.invalidSize();
    }

    if (name && upc && manu && size ) {
      AddItemActions.addItem(name, upc, manu, size);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'><h4><b>Add UPC Item</b></h4></div>
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
                    <label className='control-label'>Manufacturer</label>
                    <input type='text' className='form-control' ref='manuTextField' value={this.state.manu}
                           onChange={AddItemActions.updateManu} autoFocus/>
                  </div>

                  <div className={'form-group ' + this.state.sizeValidationState}>
                    <label className='control-label'>Case Size</label>
                    <input type='text' className='form-control' ref='sizeTextField' value={this.state.size}
                           onChange={AddItemActions.updateSize} autoFocus/>
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='panel display'>
              Instructions:
            </div>
          </div>          
        </div>
      </div>
    );
  }
}

export default NewItem;