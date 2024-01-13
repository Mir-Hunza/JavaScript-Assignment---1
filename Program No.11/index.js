// Question No.11 "Iterate through the properties of an object using a for-in loop."

let myObject = {
  name: "John",
  age: 25,
  city: "New York",
  occupation: "Developer"
};

for (let key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(`${key}: ${myObject[key]}`);
  }
}
