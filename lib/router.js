Router.configure({
  layoutTemplate: 'main',
  loadingTemplate: 'loading'
});

Router.route('/schedule', function() {
  this.render('schedule');
});

Router.route('/', function() {
   this.render('landing');
});


// need to protect this rout and its subscribe
Router.map(function() {
  this.route('admin', {
    onBeforeAction: function(pause) {
      if (Meteor.user().profile.isAdmin != undefined) {
        this.render('admin');
      } else {
        this.render('schedule');
      }
    }
  });
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
        this.render('basicinfo');
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
      case docs.labinfo:
        this.render('labinfo');
        break;
      case docs.orientationTime: 
        this.render('orientationinfo');
        break;
      case docs.honorcode:   
        this.render('honorcodeinfo');
        break;
      default:
        this.render('orientationinfo');
        break;
      }
  } else {
    this.render('loading');
  }
});

// Router.route('/admin/client-view/:_id', function() {
//   this.render('clientView');
// }); 

Router.map(function() {
  this.route('clientView', {
    path: '/admin/client-view/:_id',
    template: 'clientView',
    waitOn: function() {
      Meteor.subscribe('clientPairings', Meteor.userId());
    }
  });
});