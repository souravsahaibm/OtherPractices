// JS Object variable
var jsobj = {
    FirstName: "Sourav",
    LastName: "Saha",
    Roll: 24,
    isStudent: true
}
console.log('JS Object:', jsobj);
console.log('Object FirstName:', jsobj.FirstName);

// Change object property value
jsobj.LastName = "Roy";
console.log('JS Object after LastName value change:', jsobj);
console.log('Object LastName:', jsobj.LastName);

// Add a new property in Object
jsobj.MiddleName = "Kumar";
console.log('JS Object after add new property:', jsobj);
console.log('Object MiddleName:', jsobj.MiddleName);

// Delete a property from Object
delete jsobj.MiddleName;
console.log('JS Object after delete MiddleName property:', jsobj);