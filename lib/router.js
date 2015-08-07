Router.configure({
  layoutTemplate: 'main'
});

Router.route('/schedule', function() {
  this.render('schedule');
});

Router.route('/', function() {
   this.render('landing');
});

Router.route('/admin', function() {
  this.render('admin');
});

Router.route('/profile', function() {
  this.render('profile');
});

Router.route('/onboard', function() {
  this.render('onboard');
});