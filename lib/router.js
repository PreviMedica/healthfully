Router.configure({
  layoutTemplate: 'main'
});

Router.route('/schedule', function() {
  this.render('schedule')
});