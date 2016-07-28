function config($stateProvider, $urlRouterProvider){
  $stateProvider
   .state("root", {
     abstract: true,
     templateUrl: "templates/root.tpl.html",
     controller: "LayoutCtrl as vm"
   })
   .state("root.dashboard", {
     url: "/",
     templateUrl: "templates/dashboard.tpl.html",
     controller: "DashboardCtrl as vm"
   })
   .state("root.archive", {
     url: "/archive",
     templateUrl: "templates/archive.tpl.html",
     controller: "ArchiveCtrl as vm"
   })

   $urlRouterProvider.otherwise("/")
}

export { config };
