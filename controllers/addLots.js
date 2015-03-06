auctionHouse.AddLotsController = Ember.ArrayController.extend({
  itemController: 'lots',

  actions:{
    addLot: function() {
      var newLot = this.store.createRecord('addLots', {
        title:this.get('newLotTitle'),
        owner:this.get('newLotOwner'),
        id:stockAuction.length +1,
        items: [ ]
      });

      newLot.addLot();
      this.transitionToRoute('lots');
      // stockAuction.addObject({title:this.newLotTitle, owner:this.newLotOwner, id:stockAuction.length + 1, items:[ ]})
    }
  }
});
