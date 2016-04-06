Template.Tasks.helpers({
  tasks: ()=> {
    return Tasks.find({},{
      sort: {dueDate: 1}
    });
  }
});
Template.Tasks.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('tasks');
  });
});
