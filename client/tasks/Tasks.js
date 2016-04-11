Template.Tasks.helpers({
  tasks: () => {
    return Tasks.find({}, {
      sort: {
        dueDate: 1
      }
    });
  },
  classes: () =>{
    return Classes.find({});
  }
});
Template.Tasks.onRendered(function() {
  var self = this;
  self.autorun(function() {
    var user = Meteor.user();
    var email = user.emails[0].address;
    self.subscribe('tasks', email);
    self.subscribe('classes', email);
  });
});
