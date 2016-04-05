Tasks = new Mongo.Collection("tasks");

Tasks.allow({
  insert:function(userId, doc){
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
    label: "Class"
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

Tasks.attachSchema(taskSchema);
