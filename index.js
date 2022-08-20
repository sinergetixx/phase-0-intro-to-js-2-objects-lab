// Write your solution in this file!

const employee = {
    name: "Walter White",
    streetAddress: "308 Negra Arroyo Lane"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

    return obj;
}

function deleteFromEmployeeByKey(employee, key){
    const employeeUpdate = { ...employee };

    delete employeeUpdate[key]
    
    return employeeUpdate
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}