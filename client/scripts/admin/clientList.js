Template.clientList.helpers({
  clients: function() {
    return Users.find();
  }
});