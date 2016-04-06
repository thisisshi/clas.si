Template.Task.events({
  'click .fa-trash':function(){
    Meteor.call('deleteTask', this._id);
  }
})
