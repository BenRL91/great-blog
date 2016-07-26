function config($stateProvider, $urlRouterProvider){
  $stateProvider
   .state("root", {
     abstract: true,
     templateUrl: "templates/root.tpl.html"
   })
   .state("root.dashboard", {
     url: "/",
     templateUrl: "templates/dashboard.tpl.html"
    //  controller: "DashBoardCtrl"
   })
  //  .state("root.details", {
  //    url: "/:id",
  //    templateUrl: "templates/detail.tpl.html",
  //    controller: "DetailCtrl"
  //  })

   $urlRouterProvider.otherwise("/")
}

export { config };
