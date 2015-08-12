Template.labinfo.events({
'submit form': function(event) {
  event.preventDefault();
  var currentUser = Meteor.userId();

  var cholestrol = event.target.cholestrol.value;
  var triglycerides = event.target.triglycerides.value;
  var ldl = event.target.ldl.value;
  var hdl = event.target.hdl.value;
  var fastingGlucose = event.target.fastingglucose.value;
  var hba1c = event.target.hba1c.value;
  var crp = event.target.crp.value;
  var bpsystolic = event.target.bpsystolic.value;
  var dpdiastolic = event.target.bpdiastolic.value;

  Meteor.call('updateLabValue', currentUser, cholestrol, triglycerides, ldl, hdl, fastingGlucose, hba1c, crp, bpsystolic, bpdiastolic );
}
});