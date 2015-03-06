auctionHouse.addLots = DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  id: DS.attr(),
  // items: DS.hasMany('items',{async: true})
});
