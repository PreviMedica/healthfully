Template.onboard.helpers({
  onboardStatus: function() {
    var currentUser = Meteor.userId()
    var docs =  Docs.findOne({userId: currentUser});

    switch (null) {
      case docs.basicInfo:
         return "1";
        break;
      case docs.weight:
        return "2";
        break;
      case docs.medications:
        return "3";
        break;
      case docs.other:
        return "4";
        break;
      default: 
        return "default"
        break;
    }

  }
});