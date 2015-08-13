// Client Publications

// Onboarding 

Meteor.publish('docs', function(currentUser) {
  return Docs.find({userId: currentUser});
});


// Admin 
Meteor.publish('clientRecords', function(currentUser) {
  if (currentUser.profile.isAdmin) {
     return Users.find();
  }
});