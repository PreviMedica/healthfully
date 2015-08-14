Template.registerClient.events({
    'submit form': function(event) {
        event.preventDefault();
        var firstName = event.target.firstName.value;
        var lastName = event.target.lastName.value;
        var email = event.target.email.value;
        var password = event.target.password.value;

        Accounts.createUser({
          email: email,
          password: password,
          profile : {
            firstName: firstName,
            lastName: lastName
          }
        }, function(error) {
            if (error) {
                console.log(error);
            } else {
                Router.go('schedule');
                var userId = Meteor.userId();
                Docs.insert({
                    userId: userId,
                    basicInfo: null,
                    weight: null,
                    medications: null,
                    allergies: null,
                    labinfo: null, 
                    orientationTime: null,
                    honorcode: null, 
                });
                Pairings.insert({
                    userId: userId,
                    pairedTo: []
                });
            }
        });
    }
});
