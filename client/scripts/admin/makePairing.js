Template.makePairing.events({
  'submit form': function(event) {
    event.preventDefault();
    var client = Router.current().params._id;
    var providerId = event.target.provider.value;
    // this is fragile // this doesn't work.
    var providerTitle = event.target.provider.firstChild.nextSibling.nextSibling.innerHTML;
    var role = event.target.role.value;
    console.log(event.target.provider.);

    // Meteor.call('pair', client, providerId, providerTitle, role);
  },
  'click .unpair': function() {
    event.preventDefault();
    var userId = Router.current().params._id;
    var providerId = (this.providerId);
    Meteor.call('unpair', userId, providerId);
  }
});

Template.makePairing.helpers({
  clientList: function(){ 
    return Users.find({"profile.credential" : {$exists: false}});
  },
  currentClient: function() {
    return Router.current().params._id;
  },
  providerList: function() {
    return Users.find({"profile.credential" : {$exists: true}});
  },
  pairings: function() {
    var userId = Router.current().params._id;
    return Pairings.findOne({userId: userId}).pairings;
  }
});