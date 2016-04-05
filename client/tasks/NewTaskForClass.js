Template.NewTaskForClass.helpers({
  task: ()=> {
    var id = FlowRouter.getParam('id');
  }
});
Template.NewTaskForClass.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
  });
});
