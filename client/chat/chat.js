Template.Chat.helpers({
  messages: ()=> {
    var id = FlowRouter.getParam('id');
    $('input[name="classID"]').val(id);
    return Messages.find({});
  }
});

Template.Chat.onCreated(function(){
  var self = this;
  console.log('hello');
  self.autorun(function(){
    self.subscribe('messages');
  });
});
