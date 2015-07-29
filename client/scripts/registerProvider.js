Template.registerProvider.events({
  'submit form': function(event) {
    event.preventDefault();
    var firstName = event.target.firstName.value;
    var lastName = event.target.firstName.value
    var email = event.target.email.value;
    var password = event.target.password.value;
    var credential = event.target.credential.value;
    var licenses = event.target.licenses.value;
    var street = event.target.street.value;
    var zip = event.target.zip.value;
    var state = event.target.state.value;

    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        credential: credential,
        licenses: licenses,
        street: street,
        zip: zip,
        state: state
      }
    }, function(error){
      if (error) {
        console.log(error)
      } else {
        //route somehwere
      }
    });
  }
});