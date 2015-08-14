// Client Publications

// Onboarding 

Meteor.publish('docs', function(currentUser) {
  return Docs.find({userId: currentUser});
});


// Admin 
Meteor.publish('clientRecords', function(currentUser) {
  if (Users.findOne({_id: currentUser}).profile.isAdmin) {
     return Users.find();
  }
});

Meteor.publish('clientDocs', function(currentUser) {
  if (Users.findOne({_id: currentUser}).profile.isAdmin) {
    return Docs.find();
  }
});

Meteor.publish('clientPairings', function(currentUser) {
  if (Users.findOne({_id: currentUser}).profile.isAdmin) {
    return Pairings.find()
  }
});