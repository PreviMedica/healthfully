Template.clientView.helpers({
  client: function() {
    var userId = Router.current().params._id;
    return Users.findOne({_id: userId});
  },
  clientDocs: function() {
    var userId = Router.current().params._id;
    return Docs.findOne({userId: userId});
  }
});

Template.clientView.events({
  'click h2': function() {
    console.log(Router.current().params._id);
  }
});
