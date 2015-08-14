Template.clientView.helpers({
  client: function() {
    var userId = Router.current().params._id;
    return Users.findOne({_id: userId});

  }
});

Template.clientView.events({
  'click h2': function() {
    var userId = Router.current().params._id;
    console.log(userId);
  }

});