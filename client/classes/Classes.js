Template.Classes.helpers({
  classes: ()=> {
    return Classes.find({});
  }
});

Template.Classes.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('classes');
  });
});
