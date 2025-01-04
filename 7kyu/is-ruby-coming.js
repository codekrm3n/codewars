// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

//     true if at least one Ruby developer has signed up; or
//     false if there will be no Ruby developers.

// For example, given the following input array:

// var list1 = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
//   ];

//   your function should return true.

//   Notes:
  
//       The input array will always be valid and formatted as in the example above.


//array of objects with string
// return true if 'Ruby' is in it
// //var list1 = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
//   ]; => true
//Use


  function isRubyComing(list) {
    return list.some((e) => e.language === 'Ruby')
  }


  //Codewars
  function isRubyComing(list) {
    return list.some(developer => developer.language === "Ruby");
  }


  //Codewars
  function isRubyComing(list) {
    return list.find(x => x.language == 'Ruby') ? true : false;   
  }


//Codewars
function isRubyComing(list) {
    return list.filter(el => el.language == 'Ruby').length != 0;
  }