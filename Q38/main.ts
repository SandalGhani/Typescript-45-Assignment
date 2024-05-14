//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(cityName:string, country:string='Pakistan'){
    console.log(`${cityName} is in ${country}`);
    
}

//calling function with default country value
describe_city("Karachi");

//calling function with different values
describe_city("Muscat", "Oman");

//again calling function with different values
describe_city("London", "UK")