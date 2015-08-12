Meteor.methods({
  // Client onboard methods
  updateBasicForm: function(currentUser, age, height, weight) {
    console.log(currentUser)
    var docId = Docs.findOne({userId: currentUser})._id
    Docs.update(docId,{$set: {basicInfo: [age, height, weight]}});
  },
  updateWeightDigestionForm: function(currentUser, weightComfort, weightGoal, conditions, digestiveIssues, bowelMovements) {
    var docId = Docs.findOne({userId: currentUser})._id;
    
    Docs.update(docId, {$set: {weight: [
      weightComfort,
      weightGoal,
      conditions,
      digestiveIssues,
      bowelMovements
      ]}});
  },

  updateMedsForm: function(currentUser, medications, supplements) {
      var docId = Docs.findOne({userId: currentUser})._id;

      Docs.update(docId, {$set: {medications: [
      medications,
      supplements,
      ]}});
  },

  updateAllergiesForm: function(currentUser, allergies, mdDiets) {
    var docId = Docs.findOne({userId: currentUser})._id;

    Docs.update(docId, {$set: {allergies: [
      allergies, 
      mdDiets
      ]}});
  },

  updateHonorcode: function(currentUser, policy) {
    var docId = Docs.findOne({userId: currentUser});

    Docs.update(docId, {$set: {honorcode: policy}});
  },

  updateOrientationTimes: function(currentUser, orientTime) {
    var docId = Docs.findOne({userId: currentUser})._id;

    Docs.update(docId, {$set : {orientationTime: orientTime}});
  },

  // Admin methods
  pair: function() {


  }
});