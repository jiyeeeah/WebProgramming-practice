//클래스 정의하기
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`안녕하세요, ${this.name}입니다.`);
  }
}

//객체 생성하기
const person1 = new Person("Kim", 24);
console.log(person1.name);
person1.sayHello();

//객체 생성하기2
const person2 = new Person("Jim", 24);
console.log(person2.name);
person2.sayHello();