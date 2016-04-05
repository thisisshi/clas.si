Meteor.publish('classes', function(){
  return Classes.find({author: this.userId});
});
Meteor.publish('singleClass', function(id){
  check(id, String);
  return Classes.find({_id: id});
});
Meteor.publish('tasks', function(){
  return Tasks.find({author: this.userId});
});
Meteor.publish('singleTask', function(id){
  check(id, String);
  return Tasks.find({_id: id});
});
