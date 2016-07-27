import { blogs } from "../../data"
import moment from "moment";
import _ from "lodash";

function ArchiveController(){

 let vm = this;

 init();

 vm.displayBlogs = (year) => {
   year.opened = !year.opened;
 }

 function init(){

   let sortedBlogs = sortDates(blogs);
   let orderedBlogs = sortedBlogs.map(function(year){
      return year[1].sort(compareBlogDates);
   })
    orderedBlogs = orderedBlogs.sort(compareOrderedBlogDates)
    vm.blogs = orderedBlogs;
    console.log(orderedBlogs)
  }

  function sortDates(blogList){
    let blobJect = {}
    for (let i = 0; i < blogList.length; i++){
      let yearString = `Created Year: ${blogList[i].created_at.slice(7, 11)}`;
      if (blobJect[yearString]){
        blobJect[yearString].push(blogList[i]);
      }else {
        blobJect[yearString] = [];
        blobJect[yearString].push(blogList[i]);
      }
    }
    let blogSet = _.toPairsIn(blobJect)
    return blogSet;
  }

  function compareOrderedBlogDates(blogOne, blogTwo){
    let firstMoment = moment(blogOne[0].created_at)
    let secondMoment = moment(blogTwo[0].created_at)
    if (firstMoment.isAfter(secondMoment)){
      return -1;
    }else if(firstMoment.isBefore(secondMoment)){
      return +1;
    }else {
      return 0;
    }
  }

  function compareBlogDates(blogOne, blogTwo){
    let firstMoment = moment(blogOne.created_at)
    let secondMoment = moment(blogTwo.created_at)
    if (firstMoment.isAfter(secondMoment)){
      return -1;
    }else if(firstMoment.isBefore(secondMoment)){
      return +1;
    }else {
      return 0;
    }
  }

}
ArchiveController.$inject = [];

export { ArchiveController };
