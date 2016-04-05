Template.NewTask.helpers({
  class: ()=> {
    var id = FlowRouter.getParam('id');
    var currentClass = Classes.findOne({_id: id});
    var name = currentClass.name;
    $('input[name="class"]').val(name);
    $('input[name="classID"]').val(id);
    return Classes.findOne({_id: id});
  }
});

Template.NewTask.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('singleClass', id);
  });
});
