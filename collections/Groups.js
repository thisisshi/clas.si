Groups = new Mongo.Collection("groups");

Groups.allow({
  insert:function(userId, doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  },
  remove: function(userId, doc){
    return !!userId;
  }
});

GroupSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Class Name"
  },
  classID: {
    type: String,
    label: "Class ID"
  },
  memberIDs: {
    type: [String],
    label: "Member IDs"
  },
  memberEmails:{
    type: [String],
    label: "Member Emails"
  }
})

Groups.attachSchema(GroupSchema);
