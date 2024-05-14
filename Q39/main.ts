/* City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */

function city_country(cityName:string, country:string):string {
    return `${cityName}, ${country}`
}

//1. calling function & print the return value
console.log(city_country("Karachi", "Pakistan"));

//2. calling function & print the return value
console.log(city_country("Muscat", "Oman"));

//3. calling function & print the return value
console.log(city_country("London", "UK"));