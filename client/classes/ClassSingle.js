Template.ClassSingle.helpers({
  class: ()=> {
    var id = FlowRouter.getParam('id');
    return Classes.findOne({_id: id});
  },
  tasks: ()=> {
    var id = FlowRouter.getParam('id');
    return Tasks.find({classID: id});
  }
});

Template.ClassSingle.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('singleClass', id);
    self.subscribe('classTasks', id);
  });
});
