Template.clientList.helpers({
  clients: function() {
    return Users.find({"profile.credential": {$exists: false}});
  }
});

Template.clientList.events({

});