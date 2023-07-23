// DESCRIPTION:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
  
}


//My Solution
function paperwork(n, m) {
  if(n > 0 && m > 0){
    return n * m
  } else {
    return 0
  }
}


//CodeWars best Practice
function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
  }


//CodeWars
function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m;
}


  //CodeWars
  paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m