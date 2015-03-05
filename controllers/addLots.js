auctionHouse.AddLotsController = Ember.ArrayController.extend({
  itemController: 'lots',

  actions:{
    addLot: function() {
      stockAuction.addObject({title:this.newLotTitle, owner:this.newLotOwner, id:stockAuction.length + 1, items:[ ]})
    }
  }
});
