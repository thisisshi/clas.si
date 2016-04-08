Messages = new Mongo.Collection("messages");

Messages.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  },
  remove: function(userId, doc) {
    return !!userId;
  }
});

MessageSchema = new SimpleSchema({
  message: {
    type: String,
    label: "Message",
    autoform: {
      class: "nostyle chat-input"
    }
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

Meteor.methods({
  deleteMessage: function(id) {
    Messages.remove(id);
  }
});

Messages.attachSchema(MessageSchema);
