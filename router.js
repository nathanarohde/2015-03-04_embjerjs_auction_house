auctionHouse.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('auction');
  this.resource('addLots');
});
