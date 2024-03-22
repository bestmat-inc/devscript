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

To instantiate a class, `myClass = new class_name(constructor_paramater_values);`

### Inheritance
Inheritance allows a class to inherit properties and methods from another class.
```devscript
    class ParentClass {
    // properties and methods
    }

    class ChildClass extends ParentClass {
    // additional properties and methods
    }
```

### Polymorphism
Polymorphism allows methods to behave differently based on the object they are called on.

```devscript
   class ClassName {
     method() {
       // method implementation
     }
   }

   class SubClassName extends ClassName {
     method() {
       // overridden method implementation
     }
   }
```

***Example***
```devscript
    class Animal {
    speak() {
    // generic animal sound
    }
   }

    class Dog extends Animal {
    speak() {
    // dog specific sound
    }
   }

    class Cat extends Animal {
    speak() {
    // cat specific sound
    }
   }
```

### Encapsulation
Encapsulation hides the internal state of an object and restricts direct access to it.
```devscript
    class MyClass {
  private _myPrivateField: Type;

  constructor(myPrivateField: Type) {
    this._myPrivateField = myPrivateField;
  }

  get myPrivateField() {
    return this._myPrivateField;
  }

  set myPrivateField(value: Type) {
    this._myPrivateField = value;
  }
 }
```
### Abstraction
Abstraction hides the implementation details and only shows the necessary features of an object.
```devscript
    abstract class AbstractClass {
    abstract abstractMethod(): ReturnType;
   }
```
***Example***
```devscript
    abstract class Shape {
    abstract area(): number;
   }

    class Circle extends Shape {
    constructor(private radius: number) {
    super();
   }

    area(): number {
    return Math.PI * this.radius * this.radius;
   }
  }
```

### Composition
Composition allows objects to be constructed using other objects.

```devscript
    class ClassA {
    // properties and methods
   }

    class ClassB {
    classAInstance: ClassA;

    constructor(classAInstance: ClassA) {
    this.classAInstance = classAInstance;
   }

   // other class-specific functionality
  }
```

***Example***

```devscript
    class Engine {
    start() {
    // code here
    }
   }

    class Car {
    engine: Engine;

    constructor(engine: Engine) {
    this.engine = engine;
    }

    startCar() {
    this.engine.start();
    // other car-specific functionality
    }
   }
```

### Object:
```devscript
myObject = {
  "key": value,
  ...
};
```
### Generics
Generics allow types (classes and interfaces) to be parameterized by other types.
```devscript
   fn: myFunction<T>(arg: T) {
     // code here
   };
```

### Interfaces
Interfaces define a contract for classes to implement.
```devscript
    interface MyInterface {
      method1();
      method2(param: Type);
    }
```

# Import/Export
To import a file, use `imp "file_address";` and to export a file, use `exp values_to_export;`





---
