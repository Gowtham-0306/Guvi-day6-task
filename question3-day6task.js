class Person {
    // Constructor to initialize the person with name, age, and gender, cpurse, instuite
    constructor(name, age, gender,course,instituite) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.course=course;
        this.instituite=instituite;
    }
  
    // Method to get details of the person
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender} , course: ${this.course} , instituite: ${this.instituite}`;
    }
  }
  
  
  // Create a new object for person class
  const john = new Person("John Doe", 25, "Male", "FSD" , "GUVI");
  
  // Get and print details of the person
  console.log(john.getDetails());
  



//   o/p
//   Name: John Doe, Age: 25, Gender: Male , course: FSD , instituite: GUVI