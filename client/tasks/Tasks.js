Template.Tasks.helpers({
  tasks: ()=> {
    return Tasks.find({});
  }
});
Template.Tasks.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('tasks');
  });
});
