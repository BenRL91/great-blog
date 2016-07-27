import { blogs } from "../../data"
import moment from "moment";
import _ from "lodash";

function DashboardController(){
  let vm = this;

  init();

  function init(){
    vm.blogs = _.sampleSize(blogs, 5)
  }
}

DashboardController.$inject = [];

export { DashboardController };
