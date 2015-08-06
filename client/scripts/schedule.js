Template.schedule.helpers({
  pairedWith: function() {
    var id = Meteor.userId();
    var providerId = Pairings.findOne({clientId: id}).providerId;
    return Users.findOne({_id: providerId});

  },
  isNotProvider: function() {
    var id = Meteor.userId();
    return Users.find({"profile.credential" : {$exists: false}});
    }
});