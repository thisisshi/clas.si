Template.Tasks.helpers({
  tasks: () => {
    return Tasks.find({}, {
      sort: {
        dueDate: 1
      }
    });
  }
});
Template.Tasks.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var user = Meteor.user();
    var email = user.emails[0].address;
    self.subscribe('tasks', email);
  });
});
