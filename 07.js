// Stack and Heap memory in javascript
// Primitive data types are stored in stack memory
// Reference data types are stored in heap memory
// Stack memory is faster than heap memory
// Primitive data types are immutable (cannot be changed)
// Reference data types are mutable (can be changed)
// When we assign a primitive data type to a variable, the value is stored in the stack memory
// When we assign a reference data type to a variable, the reference (address) is stored in the stack memory and the actual object is stored in the heap memory
// When we copy a primitive data type to another variable, a new copy of the value is created in the stack memory
// When we copy a reference data type to another variable, a new reference (address) is created in the stack memory pointing to the same object in the heap memory
// When we change the value of a primitive data type, a new value is created in the stack memory
// When we change the value of a reference data type, the object in the heap memory is changed
// Example:
let num1 = 10; // num1 is stored in stack memory with value 10
let num2 = num1; // num2 is stored in stack memory with value 10 (copy of num1)
num2 = 20; // num2 is changed to 20, num1 is still 10
console.log(num1); // 10
console.log(num2); // 20        
let obj1 = { name: "John" }; // obj1 is stored in stack memory with reference to object in heap memory
let obj2 = obj1; // obj2 is stored in stack memory with reference to same object in heap memory
obj2.name = "Doe"; // obj2 is changed, obj1 is also changed
console.log(obj1.name); // Doe
console.log(obj2.name); // Doe
// In conclusion, primitive data types are stored in stack memory and are immutable, while reference data types are stored in heap memory and are mutable.  

// Non primitive data types are stored in heap memory
// Non primitive data types are mutable (can be changed)
// When we assign a non primitive data type to a variable, the reference (address) is stored in the stack memory and the actual object is stored in the heap memory
// When we copy a non primitive data type to another variable, a new reference (address) is created in the stack memory pointing to the same object in the heap memory
// When we change the value of a non primitive data type, the object in the heap memory is changed
// Example:
let arr1 = [1, 2, 3]; // arr1 is stored in stack memory with reference to array in heap memory
let arr2 = arr1; // arr2 is stored in stack memory with reference to same array in heap memory
arr2.push(4); // arr2 is changed, arr1 is also changed
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
// In conclusion, non primitive data types are stored in heap memory and are mutable.       