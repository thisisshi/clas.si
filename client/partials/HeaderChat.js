Template.HeaderChat.helpers({
  class: ()=>{
    var id = FlowRouter.getParam('id');
    return Classes.findOne({_id: id});
  }
});

Template.HeaderChat.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleClass',id)
  });
});
