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
    var honorcode = document.getElementById('honorcode')

    switch (null) {
      case docs.basicInfo:
        form1.style.display = "block";
        form2.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "none";
        orientation.style.display = "none";
        honorcode.style.display = "none";
        break;
      case docs.weight:
        form1.style.display = "none";
        form2.style.display = "block";
        form3.style.display = "none";
        form4.style.display = "none";
        orientation.style.display="none";
        honorcode.style.display = "none";
        break;
      case docs.medications:
        form1.style.display = "none";
        form2.style.display = "none";
        form3.style.display = "block";
        form4.style.display = "none";
        orientation.style.display="none";
        honorcode.style.display = "none";
        break;
      case docs.allergies:
        form1.style.display = "none";
        form2.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "block";
        orientation.style.display="none";
        honorcode.style.display = "none";
        break;
      case docs.honorcode:
        form1.style.display = "none";
        form2.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "block";
        orientation.style.display="none";
        honorcode.style.display = "none";
        break;
      default:
        form1.style.display = "none";
        form2.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "none";
        welcome.style.display = "none"
        orientation.style.display="block";
        honorcode.style.display = "none";
        break;
    }
  },
  orientationTime: function() {
    //booked?
  }
});

Template.onboard.events({
  'submit #basic-information': function() {
    event.preventDefault();
    var age = event.target.age.value;
    var height = event.target.height.value;
    var weight = event.target.weight.value;
    var currentUser = Meteor.userId();
    
    
    Meteor.call('updateBasicForm', currentUser, age, height, weight);

  },
  'submit #weight-digestion': function() {
    event.preventDefault();
    var weightComfort = event.target.weightComfort.value;
    var weightGoal = event.target.weightGoal.value;
    var conditions = event.target.medicalConditions.value;
    var digestiveIssues = event.target.digestiveIssues.value;
    var bowelMovements = event.target.bowelMovements.value;
    var currentUser = Meteor.userId();

    Meteor.call('updateWeightDigestionForm', currentUser, weightComfort, weightGoal, conditions, digestiveIssues, bowelMovements);
},
  'submit #meds': function() {
    event.preventDefault();
    var medications = event.target.medications.value;
    var supplements = event.target.supplements.value;
    var currentUser = Meteor.userId();
    
    Meteor.call('updateMedsForm', currentUser, medications, supplements);

  },
  'submit #allergies': function() {
    event.preventDefault();
    var allergies = event.target.allergies.value;
    var mdDiets = event.target.mdDiets.value;
    var currentUser = Meteor.userId();

    Meteor.call('updateAllergiesForm', currentUser, allergies, mdDiets);

  },
  'submit #honorcode-form': function() {
    event.preventDefault();
    var policy = event.target.noShowPolicy.value;
    var currentUser = Meteor.userId();

    Meteor.call('updateHonorcode', currentUser, policy);

  },
  'submit #pickTime': function() {
    event.preventDefault();
    var currentUser = Meteor.userId();

    Meteor.call('updateOrientation', currentUser, times);
  },
  'click td': function(event) {
    var time = event.target.parentElement.children[0].innerHTML
    var node = event.target
    var preferredDays = function() { 
    for (var i = 0; node !== null ; i++) {
      node = node.previousSibling;
    }
    var days = {
      4 : 'Monday',
      6 : 'Tuesday',
      8 : 'Wednesday',
      10 : 'Thursday',
      12 : 'Friday'
    }
    console.log(days[i], time)

  }();
  }
});
