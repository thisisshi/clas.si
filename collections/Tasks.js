Tasks = new Mongo.Collection("tasks");

Tasks.allow({
  insert:function(userId, doc){
    return !!userId;
  }, remove:function(userId, doc){
    return !!userId;
  }
});

taskSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Task Name"
  },
  class: {
    type: String,
    label: "Class",
    autoform:{
      type: "hidden"
    }
  },
  classID: {
    type: String,
    label: "Class ID",
    autoform: {
      type: "hidden"
    }
  },
  highPriority: {
    type: Boolean,
    label: "High Priority"
  },
  dueDate: {
    type: Date,
    label: "Due Date"
  },
  author:{
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt:{
    type: Date,
    label:"Created At",
    autoValue: function(){
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
  deleteTask:function(id){
    Tasks.remove(id);
  }
});

Tasks.attachSchema(taskSchema);
