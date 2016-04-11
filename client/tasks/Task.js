Template.Task.events({
  'click .fa-trash-o': function() {
    Meteor.call('deleteTask', this._id);
  },
  'click .fa-pencil' : function(){
    console.log("hello");
    Session.set('editMode', !Session.get('editMode'));
  }
})
Template.Task.helpers({
  momentFormat: function(time) {
    if ((moment().local() - moment(time).add(5, 'hour')) < 2400) {
      return moment(time).add(5, 'hour').fromNow();
    } else {
      return moment(time).add(5, 'hour').format("MM-DD-YYYY");
    }
  },
  updateTaskId: function() {
    return this._id;
  }
});
Template.Task.onRendered(function() {
  var self = this;
  self.autorun(function() {
    var user = Meteor.user();
    var email = user.emails[0].address;
    self.subscribe('tasks', email);
    self.subscribe('classes', email);
  });
});
