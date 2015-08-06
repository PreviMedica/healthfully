Template.schedule.helpers({
  pairedWith: function() {
    var id = Meteor.userId();
    var providerId = Pairings.findOne({clientId: id}).providerId;
    return Users.findOne({_id: providerId});

  }
});