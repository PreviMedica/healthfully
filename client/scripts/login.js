Template.login.events({
  'submit form': function() {
    event.preventDefault()
    var email = event.target.email.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(email, password, function(e) {
      if (e) {
        console.log(e);
      } else {
        Router.go('schedule');
      }
    });
  }
});
