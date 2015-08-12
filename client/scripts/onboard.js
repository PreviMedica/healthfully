Template.onboard.helpers({
    onboardStatus: function() {
        var currentUser = Meteor.userId()
        var docs = Docs.findOne({ userId: currentUser });
        var form1 = document.getElementById('basic-information');
        var form2 = document.getElementById('weight-digestion');
        var form3 = document.getElementById('meds');
        var form4 = document.getElementById('allergies');
        var orientation = document.getElementById('orientation');
        var welcome = document.getElementById('welcome');
        var honorcode = document.getElementById('honorcode')
        


    }
});

Template.onboard.events({
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
    }
});
