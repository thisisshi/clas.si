Template.Class.events({
  'click .fa-trash':function(){
    Meteor.call('deleteClass', this._id);
  }
})

Template.Class.helpers({
  isAuthor: function(){
    var user = Meteor.user();
    var id = user._id;
    console.log(id);
    return this.author === id;
  }
})
