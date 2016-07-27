import { blogs } from "../../data"

function DashboardController(){
  let vm = this;
  init();

  function init(){
    vm.blogs = blogs

  }
}

DashboardController.$inject = [];

export { DashboardController };
