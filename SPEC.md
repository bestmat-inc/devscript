# DevScript Syntax:
This file remarks the syntax of this programming language.

1. **String:** Series of characters => "string"
2. **Number:** A four byte integer => -2,147,483,648 to 2,147,483,647
3. **Compber:** An eight byte integer => -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
4. **Float:** Stores fractional numbers => Sufficient for storing 6 to 7 decimal digits
5. **Boolean:** Stores true or false values => true/false
6. **Emoji:** Stores emojis => All UTF-8 supported emojis

### Variables
A variable can be declared by the format: `variable_name = variable_value;`.

**Optional type-based variable declration:** To declare a variable with strict-type checking, the syntax is `variable_name: data_type = variable_value;`

### Functions
A block of code designed to perform some code is function. The structure of a function is the following:

```devscript
fn: function_name(parameter: type, ..., parameter: type){
  // code to be executed
  return value_to_be_returned; // return statement
};
```
### Enums
Structure of enum:
```devscript
enum: enum_name: type (
  lorem = 1,
  ipsum,
  dolor,
  sit = 2,
  amet
);
```

### Arrays
An array can be appended to a variable. **Index of the array starts with 1 instead of 0.**
```devscript
myArray: type = [value, ..., value];
```

### Tuple (Immutable Arrays)
```devscript
myTuple: type = (value, ..., value);
```

Tuples are immutable unlike arrays.

### Class (OOP):
To create a new class, the following is the syntax:
```devscript
class class_name {
  public constructor (parameter1, ...){
    this.parameter1 = parameter1;
  }

  public method () {
    ...
  }

  private private_method () {
    ...
  }
}
```

To use a class, `myClass = new class_name(constructor_paramater_values);`

Processes such as inheritance, polymorphism will be added later on.

### Object:
```devscript
myObject = {
  "key": value,
  ...
};
```

# Import/Export
To import a file, use `imp "file_address";` and to export a file, use `exp values_to_export;`





---
