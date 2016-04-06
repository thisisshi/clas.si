Template.Class.events({
  'click .fa-trash':function(){
    Meteor.call('deleteClass', this._id);
  }
})
