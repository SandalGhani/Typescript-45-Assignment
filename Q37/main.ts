//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string="large", message:string="I love TypeScript") {
    console.log(`The size of the T-shirt is ${size}, and ${message}.`)
}

//calling function with default values
make_shirt()

//calling function with medium size with the default message
make_shirt('medium')

//calling function with any size with different message
make_shirt('small', 'I love JavaScript')