import alt from '../alt';
import AddItemActions from '../actions/AddItemActions';

class AddItemStore {
  constructor() {
    this.bindActions(AddItemActions);
    this.name = '';
    this.upc = '';
    this.manu = '';
    this.size = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.upcValidationState = '';
    this.manuValidationState = '';
    this.sizeValidationState = '';
  }

  onAddItemSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddItemFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateUPC(event) {
    this.upc = event.target.value;
    this.upcValidationState = '';
  }

  onUpdateManu(event) {
    this.manu = event.target.value;
    this.manuValidationState = '';
  }
   
  onUpdateSize(event) {
    this.size = event.target.value;
    this.sizeValidationState = '';
  } 

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.helpBlock = 'Please enter a Item name.';
  }

  onInvalidUPC() {
    this.upcValidationState = 'has-error';
  }
  
  onInvalidManu() {
    this.manuValidationState = 'has-error';
  }

  onInvalidSize() {
    this.sizeValidationState = 'has-error';
  }
}

export default alt.createStore(AddItemStore);