//Import libraries
import moment from "moment";
import _ from "lodash";

function PopularController(blogs){
  let vm = this;
vm.showMostViewed = () => {
   let sortedBlogs = blogs.sort(getMostViewed);
   vm.currentPopular = sortedBlogs.slice(0,10);
   vm.currentPopularAttr = "views"

}
vm.showMostCommented= () => {
  let sortedBlogs = blogs.sort(getMostCommented);
  vm.currentPopular = sortedBlogs.slice(0,10);
  vm.currentPopularAttr = "comments"

}
vm.showMostShared = () => {
  let sortedBlogs = blogs.sort(getMostShared);
  vm.currentPopular = sortedBlogs.slice(0,10);
  vm.currentPopularAttr = "shares"

}
  init();
  function init(){
   vm.currentPopular = blogs.sort(getMostViewed).slice(0, 10);
   vm.currentPopularAttr = "views"
  }

}

function getMostCommented(blogOne, blogTwo){
  if (blogOne.comments > blogTwo.comments){
    return -1;
  }else if(blogOne.comments < blogTwo.comments){
    return +1;
  }else {
    return 0;
  }
}
function getMostViewed(blogOne, blogTwo){
  if (blogOne.views > blogTwo.views){
    return -1;
  }else if(blogOne.views < blogTwo.views){
    return +1;
  }else {
    return 0;
  }
}
function getMostShared(blogOne, blogTwo){
  if (blogOne.shares > blogTwo.shares){
    return -1;
  }else if(blogOne.shares < blogTwo.shares){
    return +1;
  }else {
    return 0;
  }
}


PopularController.$inject = ["blogs"];

export { PopularController };
