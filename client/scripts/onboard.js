Template.onboard.helpers({
  onboardStatus: function() {
    var currentUser = Meteor.userId()
    var docs =  Docs.findOne({userId: currentUser});
    var form1 = document.getElementById('basic-information');
    var form2 = document.getElementById('weight-digestion');
    var form3 = document.getElementById('meds');
    var form4 = document.getElementById('allergies');
    var orientation = document.getElementById('orientation');
    var welcome = document.getElementById('welcome');

    switch (null) {
      case docs.basicInfo:
        form1.style.display = "block";
        form2.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "none";
        orientation.style.display="none";
        break;
      case docs.weight:
        form1.style.display = "none";
        form2.style.display = "block";
        form3.style.display = "none";
        form4.style.display = "none";
        orientation.style.display="none";
        break;
      case docs.medications:
        form1.style.display = "none";
        form2.style.display = "none";
        form3.style.display = "block";
        form4.style.display = "none";
        orientation.style.display="none";
        break;
      case docs.other:
        form1.style.display = "none";
        form2.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "block";
        orientation.style.display="none";
        break;
      default:
        form1.style.display = "none";
        form2.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "none";
        welcome.style.display = "none"
        orientation.style.display="block";
        break;
    }

  }
});

Template.onboard.events({
  'submit #basic-information': function() {
    event.preventDefault();
    var age = event.target.age.value;
    var height = event.target.height.value;
    var weight = event.target.weight.value;
    var currentUser = Meteor.userId();
    var docId = Docs.findOne({userId: currentUser})._id
    
    Docs.update(docId,{$set: {basicInfo: [age, height, weight]}});

  },
  'submit #weight-digestion': function() {
    event.preventDefault();
    var weightComfort = event.target.weightComfort.value;
    var weightGoal = event.target.weightGoal.value;
    var conditions = event.target.medicalConditions.value;
    var digestiveIssues = event.target.digestiveIssues.value;
    var bowelMovements = event.target.bowelMovements.value;
    var currentUser = Meteor.userId();
    var docId = Docs.findOne({userId: currentUser})._id;
    
    Docs.update(docId, {$set: {weight: [
      weightComfort,
      weightGoal,
      conditions,
      digestiveIssues,
      bowelMovements
      ]}});
  },
  'submit #meds': function() {
    event.preventDefault();
    var medications = event.target.medications.value;
    var supplements = event.target.supplements.value;
    var currentUser = Meteor.userId();
    var docId = Docs.findOne({userId: currentUser})._id;

    Docs.update(docId, {$set: {medications: [
      medications,
      supplements,
      ]}});
  },
  'submit #allergies': function() {
    event.preventDefault();
    var allergies = event.target.allergies.value;
    var mdDiets = event.target.mdDiets.value;
    var currentUser = Meteor.userId();
    var docId = Docs.findOne({userId: currentUser})._id;

    Docs.update(docId, {$set: {other: [
      allergies, 
      mdDiets
      ]}});
  },
  'submit #pickTime': function() {
    event.preventDefault();
    // some time of DB insert
    Router.go('/schedule');
  }
});