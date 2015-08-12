Template.basicinfo.helpers({

});

Template.basicinfo.events({
      'submit #basic-information': function() {
        event.preventDefault();
        var age = event.target.age.value;
        var height = event.target.height.value;
        var weight = event.target.weight.value;
        var currentUser = Meteor.userId();

        Meteor.call('updateBasicForm', currentUser, age, height, weight);

    }
})