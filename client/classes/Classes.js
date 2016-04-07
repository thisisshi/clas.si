Template.Classes.helpers({
  classes: ()=> {
    return Classes.find({});
  }
});

Template.Classes.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var user = Meteor.user();
    var email = user.emails[0].address;
    self.subscribe('classes', email);
  });
});
