Template.Classes.helpers({
  classes: () => {
    return Classes.find({});
  }
});

Template.Classes.onRendered(function() {
  var self = this;
  self.autorun(function() {
    var user = Meteor.user();
    var email = user && user.emails && user.emails[0].address;
    self.subscribe('classes', email);
  });
});
