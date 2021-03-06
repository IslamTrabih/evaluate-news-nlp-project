// babel-polyfill to solve ReferenceError: regeneratorRuntime is not defined
import "babel-polyfill"

// Import the js file to test
import { handleSubmit, sendUrl, getDataUpdatePage, dataList } from "../src/client/js/formHandler"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the form submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function defined or not", () => {
        // Define the input for the function, if any, in the form of variables/array
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(handleSubmit).toBeDefined()
    })

    test('Testing the sendUrl() function defined or not', () => {
        expect(sendUrl).toBeDefined()
    })
    

    test('Testing the getDataUpdatePage() function defined or not', () => {
        expect(getDataUpdatePage).toBeDefined()
    })

    test('Testing the dataList() function defined or not', () => {
        expect(dataList).toBeDefined()
    })

})