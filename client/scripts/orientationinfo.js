Template.orientationinfo.helpers({
    orientTimes: function() {
      var orientationTimes = [];
    }
});

Template.orientationinfo.onCreated(function() {
  // reactive variable for storing orientatino time
  // on client before inserting into Mongo
  this.orientTime = new ReactiveVar;
  orientTime = [];
});

Template.orientationinfo.events({
    'click td': function(event) {
        var preferredTimes = function() {
            var array = [];
            var el = event.target.parentElement.children[0]
            var time = event.target.parentElement.children[0].innerHTML;
            var node = event.target;

            for (var i = 0; node !== null; i++) {
                node = node.previousSibling;
            }

            // key is based on position of child element
            var days = {
                4: 'Monday',
                6: 'Tuesday',
                8: 'Wednesday',
                10: 'Thursday',
                12: 'Friday'
            }
            var str = days[i] + " " + time;
            // ignore clicks on time column
            if (days[i] === undefined) {} else if (orientTime.indexOf(str) !== -1) {
                var index = orientTime.indexOf(days[i] + " " + time);
                orientTime.splice(index, 1);
                event.target.classList.remove("orientation-time-selected");
            } else {
               console.log('there')
                if (orientTime.length < 3) {
                   
                    // add time to reactive var 
                    orientTime.push(days[i] + " " + time)

                    // change TD color to represent selection
                    // event.target.style.background = "#136194";
                    event.target.classList.add("orientation-time-selected");
                    console.log(orientTime)
                } else {
                    console.log('max times selected');
                }
            }
            console.log(orientTime);
        };
    },
    'click .set-times': function() {
      console.log(orientTime);
      var currentUser = Meteor.userId()
      Meteor.call('updateOrientationTimes', currentUser, orientTime);
    },
    'submit #pickTime': function() {
        event.preventDefault();
        var currentUser = Meteor.userId();

        Meteor.call('updateOrientation', currentUser, times);
    }
});