Template.makePairing.events({
  'submit form': function(event) {
    event.preventDefault();
    var client = event.target.client.value;
    var provider = event.target.provider.value;
    console.log(client, provider);

    Pairings.insert({
      clientId: client,
      providerId: provider
    });
  }
});

Template.makePairing.helpers({
  clientList: function(){ 
    return Users.find({"profile.credential" : {$exists: false}});
  },
  providerList: function() {
    return Users.find({"profile.credential" : {$exists: true} });
  }
});