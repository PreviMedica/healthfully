Template.registerClient.events({
    'submit .register': function(event) {
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
                Router.go('dashboard')
            }
        });
    }
});
