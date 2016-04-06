if(Meteor.isClient){
  Accounts.onLogin(function(){
    FlowRouter.go('tasks');
  });

  Accounts.onLogout(function(){
    FlowRouter.go('home');
  });
}

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
    name:"home",
    action(){
      if(Meteor.userId()){
        FlowRouter.go('tasks');
      }
      BlazeLayout.render("HomeLayout", {main: 'Home'});
    }
});

FlowRouter.route('/about', {
    name:"about",
    action(){
      BlazeLayout.render("MainLayout", {main: 'About'});
    }
});

FlowRouter.route('/settings', {
  name: "settings",
  action(){
    BlazeLayout.render("MainLayout", {main: 'Settings'});
  }
})

FlowRouter.route('/classes', {
    name:"classes",
    action(){
      BlazeLayout.render("MainLayout", {main: 'Classes'});
    }
});

FlowRouter.route('/class/new', {
    name:"newClass",
    action(){
      BlazeLayout.render("MainLayout", {main: 'NewClass'});
    }
});

FlowRouter.route('/tasks', {
    name:"tasks",
    action(){
      BlazeLayout.render("MainLayout", {main: 'Tasks'});
    }
});

FlowRouter.route('/tasks/:id', {
    name:"tasks",
    action(){
      BlazeLayout.render("MainLayout", {main: 'NewTask'});
    }
});

FlowRouter.route('/class/:id', {
    name:"class",
    action(){
      BlazeLayout.render("MainLayout", {main: 'ClassSingle'});
    }
});

FlowRouter.route('/task/:id', {
    name:"task",
    action(){
      BlazeLayout.render("MainLayout", {main: 'TaskSingle'});
    }
});

FlowRouter.route('/chat/:id', {
  name:"chat",
  action(){
    BlazeLayout.render("MainLayout", {main: 'chat'});
  }
});
