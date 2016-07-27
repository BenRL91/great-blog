import { blogs } from "../../data"
import moment from "moment";
import _ from "lodash";

function compareBlogDates(blogOne, blogTwo){
  let firstMoment = moment(blogOne.created_at)
  let secondMoment = moment(blogTwo.created_at)
  if (firstMoment.isAfter(secondMoment)){
    return -1;
  }else if(firstMoment.isBefore(secondMoment)){
    return +1;
  }
    else {
    return 0;
  }
}
function DashboardController(){
  let vm = this;

  init();

  function init(){
    let orderedBlogs = blogs.sort(compareBlogDates)
    vm.blogs = _.sampleSize(orderedBlogs, 5)
    console.log(orderedBlogs)

  }
}

DashboardController.$inject = [];

export { DashboardController };
