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
  this.layout('onboard');
  var currentUser = Meteor.userId();
  this.subscribe('docs', currentUser).wait();
  if (this.ready()) {
    var docs = Docs.findOne({userId: currentUser});
     switch (null) {
        case docs.basicInfo:
        break;
      case docs.weight:
        this.render('weightinfo');
        break;
      case docs.medications:
        this.render('medsinfo');
        break;
      case docs.allergies:
        this.render('allergiesinfo');
        break;
      case docs.orientationTime: 
        this.render('orientationinfo');
        break;
      case docs.honorcode: 
        this.reader('honorcode');
        break;
      default:
        this.render('orientationinfo');
        break;
      }
  } else {
    this.render('loading');
  }
});