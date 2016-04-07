Meteor.publish('classes', function(email){
  return Classes.find({members:{$elemMatch:{email:email}}});
});
Meteor.publish('singleClass', function(id){
  check(id, String);
  return Classes.find({_id: id});
});
Meteor.publish('tasks', function(email){
  var classIDs = [];
  var allClasses = Classes.find({members:{$elemMatch:{email:email}}},{_id:1}).forEach(function(obj){
    classIDs.push(obj._id);
  });
  return Tasks.find({classID: {$in: classIDs}})
});
Meteor.publish('singleTask', function(id){
  check(id, String);
  return Tasks.find({_id: id});
});
Meteor.publish('messages', function(id){
  return Messages.find({classID: id});
});
Meteor.publish(null, function() {
    return Meteor.users.find({_id: this.userId}, {fields: { emails: 1, profile: 1 } });
});
