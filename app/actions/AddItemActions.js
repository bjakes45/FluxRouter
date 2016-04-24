import alt from '../alt';

class AddItemActions {
  constructor() {
    this.generateActions(
      'addItemSuccess',
      'addItemFail',
      'updateName',
      'updateUPC',
      'updateManu',
      'updateSize',
      'invalidName',
      'invalidUPC',
      'invalidManu',
      'invalidSize'     
    );
  }

  addItem(name, upc, manu, size) {
    $.ajax({
      type: 'POST',
      url: '/api/items',
      data: { name: name, upc: upc, manu: manu, size: size,
      }
    })
      .done((data) => {
        this.actions.addItemSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addItemFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddItemActions);