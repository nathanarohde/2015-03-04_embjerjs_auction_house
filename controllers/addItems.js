auctionHouse.AddItemsController = Ember.ObjectController.extend({

  actions:{
    addItem: function() {
      items.addObject({title:this.newItemTitle, artist:this.newArtistTitle, info:this.newItemInfo, img:newItemImg, id: items.length +1})
    }
  }

});
