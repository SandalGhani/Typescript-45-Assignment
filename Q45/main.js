//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car(manufacturer, model) {
    var moreOptions = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        moreOptions[_i - 2] = arguments[_i];
    }
    var carObject = {
        manufacturer: manufacturer,
        model: model,
    };
    //adding additional options to the carObject
    moreOptions.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        carObject[key.trim()] = value.trim();
    });
    return carObject;
}
//calling function
var myCar = car("Honda", "Civic", "Color: black", "Year: 2024");
//printing to check, if all data stored correctly in carobject
console.log(myCar);
