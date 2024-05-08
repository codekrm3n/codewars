// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

// Notes

//     The first argument can be an empty string
//     In languages with no distinct character data type, the second argument will be a string of length 1



//P: string, letter, can be empty
//R: Number of characters in string
//E: ("Hello", 'o'); // returns 1
//   ('',      'z') // returns 0
//P: on string filter how many letters it contains return length

function strCount(str, letter){  
    return Array.from(str).filter((char) => letter == char).length
}

