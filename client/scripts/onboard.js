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
});