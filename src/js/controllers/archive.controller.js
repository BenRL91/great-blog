//Import libraries//
import moment from "moment";
import _      from "lodash";

function ArchiveController(blogs){

 let vm = this;

 init();
//Toggles the current shown status of the blogs in each year's list//
 vm.displayBlogs = (year) => {
   year.opened   = !year.opened;
 }

 vm.showYear = (year) => {
   vm.currentYear = year
   vm.currentBlogs = vm.blogs.filter(function(blog){
      return blog[0].created_at.slice(7, 11) === year;
   })
   vm.currentBlogs = vm.currentBlogs[0];
 }
 function init(){

   let sortedBlogs = sortDates(blogs);
   let orderedBlogs = sortedBlogs.map(function(year){
      return year[1].sort(compareBlogDates);
   })
    orderedBlogs = orderedBlogs.sort(compareOrderedBlogDates)
    vm.blogs = orderedBlogs;
    vm.currentYear = "";
    // console.log(orderedBlogs)
  }
//Returns an array containing one array for each of the different years blogs were created//
  function sortDates(blogList){
    let blobJect = {}
    for (let i = 0; i < blogList.length; i++){
      let yearString = `Created Year: ${blogList[i].created_at.slice(7, 11)}`;
      /*Adds the current object to the existing property year that matches*/
      if (blobJect[yearString]){
        blobJect[yearString].push(blogList[i]);
      }else {
        /*If there isn't a property with the year created yet
        creates a new property and adds the current object to
        that property*/
        blobJect[yearString] = [];
        blobJect[yearString].push(blogList[i]);
      }
    }
    //Convert object to array using lodash method//
    let blogSet = _.toPairsIn(blobJect)
    return blogSet;
  }


//Brings the most recent dates to the beginning in a nested array of blogs//
  function compareOrderedBlogDates(blogOne, blogTwo){
    let firstMoment  = moment(blogOne[0].created_at)
    let secondMoment = moment(blogTwo[0].created_at)
    if (firstMoment.isAfter(secondMoment)){
      return -1;
    }else if(firstMoment.isBefore(secondMoment)){
      return +1;
    }else {
      return 0;
    }
  }


//Brings the most recent dates to the top of a single array of blogs//
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

ArchiveController.$inject = ["blogs"];

export { ArchiveController };
