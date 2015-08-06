Template.nav.events({
'click .logout': function(){
  Meteor.logout(function() {
    Router.go('/');
  });
}
});