Template.Class.events({
  'click .fa-trash-o': function() {
    Meteor.call('deleteClass', this._id);
  },
  'click .fa-pencil': function() {
    Session.set('editClass', !Session.get('editClass'));
  },
  'click .fa-trash': function(){
    var user = Meteor.user();
    var email = user.emails[0].address;
    console.log(email);
    Meteor.call('removeFromClass', this._id, email)
  }
})

Template.Class.helpers({
  isAuthor: function() {
    var user = Meteor.user();
    var id = user._id;
    return this.author === id;
  },
  updateClassId: function(){
    return this._id
  }
})
