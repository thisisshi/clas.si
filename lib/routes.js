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
      BlazeLayout.render("HomeLayout");
    }
});

FlowRouter.route('/classes', {
    name:"classes",
    action(){
      BlazeLayout.render("MainLayout", {main: 'Classes'});
    }
});

FlowRouter.route('/tasks', {
    name:"tasks",
    action(){
      BlazeLayout.render("MainLayout", {main: 'Tasks'});
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
