Classes = new Mongo.Collection("classes");

Classes.allow({
  insert:function(userId, doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

MeetingDates = new SimpleSchema({
  monday: {
    type: Boolean,
    label: "Monday"
  },
  tuesday: {
    type: Boolean,
    label: "Tuesday"
  },
  wednesday:{
    type: Boolean,
    label: "Wednesday"
  },
  thursday:{
    type: Boolean,
    label: "Thursday"
  },
  friday:{
    type: Boolean,
    label: "Friday"
  }
});

homeworkAutoDue = new SimpleSchema({
  monday: {
    type: Boolean,
    label: "Monday"
  },
  tuesday: {
    type: Boolean,
    label: "Tuesday"
  },
  wednesday:{
    type: Boolean,
    label: "Wednesday"
  },
  thursday:{
    type: Boolean,
    label: "Thursday"
  },
  friday:{
    type: Boolean,
    label: "Friday"
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
    label: "Professor Email"
  },
  meetingDates: {
    type: MeetingDates,
    label: "Class Meeting Days"
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

Classes.attachSchema(ClassSchema);
