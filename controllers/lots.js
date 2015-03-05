auctionHouse.LotsController = Ember.ObjectController.extend({
  showLotItems: false,
  actions: {
    toggleLotItems: function(){
        if (this.showLotItems === false) {
          this.set('showLotItems', true);
        } else {
        this.set('showLotItems', false);
        showLotItems = true;
      }
    }
  }
});
