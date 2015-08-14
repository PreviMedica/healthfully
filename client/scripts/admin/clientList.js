Template.clientList.helpers({
  clients: function() {
    return Users.find();
  }
});

Template.clientList.events({
  'click #client':function(e) {
    console.log(e.target.dataset.id);
  }
});