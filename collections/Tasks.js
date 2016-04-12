Tasks = new Mongo.Collection("tasks");

Tasks.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  remove: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

Message = new SimpleSchema({
  message: {
    type: String,
    label: "Message"
  },
  classID: {
    type: String,
    label: "classID",
    autoform: {
      type: "hidden"
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
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
      autoform: {
        type: "hidden"
      }
  },
  description: {
    type: String,
    label: "Description",
    optional: true
  },
  comments: {
    type: [Message],
    label: "Comments",
    optional: true,
    autoform: {
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
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
  deleteTask: function(id) {
    Tasks.remove(id);
  },
  timezoneGuess: function() {
    return moment.tz.guess();
  }
});

Tasks.attachSchema(taskSchema);
