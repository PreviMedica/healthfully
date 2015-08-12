// Client Publications

// Onboarding Publications

Meteor.publish('docs', function(currentUser) {
  return Docs.find({userId: currentUser});
});