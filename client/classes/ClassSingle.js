Template.ClassSingle.helpers({
  class: ()=> {
    var id = FlowRouter.getParam('id');
    return Classes.findOne({_id: id});
  }
});

Template.ClassSingle.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('singleClass', id);
  });
});
