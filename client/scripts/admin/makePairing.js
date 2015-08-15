Template.makePairing.events({
  'submit form': function(event) {
    event.preventDefault();
    var client = Router.current().params._id;
    var providerId = event.target.provider.value;
    // this is hacky
    var providerTitle = event.target.provider.firstChild.nextSibling.nextSibling.innerHTML;
    var role = event.target.role.value;
    console.log(client, providerTitle);

    Meteor.call('pair', client, providerId, providerTitle, role);
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