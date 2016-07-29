import moment from "moment";

function generateDates(blogList){
  for (let i = 0; i < blogList.length; i++){
    let randomMonth = Math.floor(Math.random()* (new Date().getMonth() + 1));
    let randomDay   = Math.floor(Math.random()*29);
    let randomYear  = Math.floor(1989 +  Math.random()* 28);

    let m = randomMonth
    let d = randomDay;
    let y = randomYear <= 1999 ? 2016 : randomYear;
    blogList[i].created_at = moment().month(m).date(d).year(y).format(`MMM DD YYYY`)
    if (blogList[i].created_at === "Dec 31 2016"){
      blogList[i].created_at = "Jul 20 2001"
    }
  }
    return blogList;
}

function generatePics(blogList){
  for (let i = 0; i < blogList.length; i++){
    blogList[i].preview = picSet[i % picSet.length];
 }
}

function generateViews(blogList){
  for (let i = 0; i < blogList.length; i++){
    blogList[i].views = Math.floor(Math.random()*10000)
  }
}

function generateComments(blogList){
  for (let i = 0; i < blogList.length; i++){
    blogList[i].comments = Math.floor(Math.random()*2000)
  }
}

function generateShares(blogList){
  for (let i = 0; i < blogList.length; i++){
    blogList[i].shares = Math.floor(Math.random()*5000)
  }
}

function generateTitles(blogList){
  for (let i = 0; i < blogList.length; i++){
    blogList[i].title = titleSet[i % titleSet.length];
  }
}
function generateSummaries(blogList){
  for (let i = 0; i < blogList.length; i++){
    blogList[i].summary = summarySet[i % summarySet.length];
  }
}

let picSet = ["../images/wood_1.jpeg", "../images/wood_2.jpeg", "../images/wood_3.jpeg", "../images/wood_4.jpeg", "../images/wood_5.jpg", "../images/wood_8.jpeg", "../images/wood_7.jpg", "../images/wood_6.jpeg", "../images/wood_10.jpeg", "../images/wood_9.jpeg", "../images/wood_11.jpeg", "../images/wood_12.jpeg", "../images/campfire.jpeg" ]

let titleSet = ["My Title", "My Long Title", "My Even Longer Title", "My Super Duper Long Title", "My Longest Title Ever Created In History"];

let summarySet = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit eur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ];

let blogs = [];
for (let i = 0; i < 1000; i++){
  blogs.push({});
}


/* Generates dummy data every page load to ensure dynamic data support */

generateDates(blogs);
generatePics(blogs);
generateViews(blogs);
generateComments(blogs);
generateShares(blogs);
generateTitles(blogs);
generateSummaries(blogs);

export  { blogs };
