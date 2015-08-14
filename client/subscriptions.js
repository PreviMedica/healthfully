Meteor.subscribe('docs', Meteor.userId());

// Admin subscriptions
Meteor.subscribe('clientRecords', Meteor.userId());
Meteor.subscribe('clientDocs', Meteor.userId());