Classes = new Mongo.Collection("classes");

Classes.allow({
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

MeetingDates = new SimpleSchema({
  monday: {
    type: Boolean,
    label: "Monday",
    autoform:{
      class:"checkbox"
    }
  },
  tuesday: {
    type: Boolean,
    label: "Tuesday",
    autoform:{
      class:"checkbox"
    }
  },
  wednesday:{
    type: Boolean,
    label: "Wednesday",
    autoform:{
      class:"checkbox"
    }
  },
  thursday:{
    type: Boolean,
    label: "Thursday",
    autoform:{
      class:"checkbox"
    }
  },
  friday:{
    type: Boolean,
    label: "Friday",
    autoform:{
      class:"checkbox"
    }
  }
});

homeworkAutoDue = new SimpleSchema({
  monday: {
    type: Boolean,
    label: "Monday",
    autoform:{
      class:"checkbox"
    }
  },
  tuesday: {
    type: Boolean,
    label: "Tuesday",
    autoform:{
      class:"checkbox"
    }
  },
  wednesday:{
    type: Boolean,
    label: "Wednesday",
    autoform:{
      class:"checkbox"
    }
  },
  thursday:{
    type: Boolean,
    label: "Thursday",
    autoform:{
      class:"checkbox"
    }
  },
  friday:{
    type: Boolean,
    label: "Friday",
    autoform:{
      class:"checkbox"
    }
  }
});

ClassSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Class Name"
  },
  professor: {
    type: String,
    label: "Professor Name"
  },
  professorEmail:{
    type: String,
    label: "Professor Email",
    regEx: SimpleSchema.RegEx.Email
  },
  meetingDates: {
    type: MeetingDates,
    label: "Class Meeting Days",
    autoform:{
      class: "checkbox"
    }
  },
  members: {
    type: [String],
    label: "Group Member Emails"
  },
  hwDueDay: {
    type: homeworkAutoDue,
    label: "Homework Is Typically Due On:"
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
  deleteClass:function(id){
    Classes.remove(id);
  }
});

Classes.attachSchema(ClassSchema);
