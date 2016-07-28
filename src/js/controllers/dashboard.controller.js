//Import libraries//
import moment from "moment";
import _ from "lodash";

function DashboardController(blogs){
  let vm = this;

  init();

  function init(){
    //Gets any 5 random blogs from all of the blogs available//
    vm.blogs = _.sampleSize(blogs, 5)
  }
}

DashboardController.$inject = ["blogs"];

export { DashboardController };
