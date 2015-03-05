auctionHouse.AuctionRoute = Ember.Route.extend({
  model: function() {
    return stockAuction;
  },
  renderTemplate: function() {
    this.render({outlet:'lot'})
  }
});
