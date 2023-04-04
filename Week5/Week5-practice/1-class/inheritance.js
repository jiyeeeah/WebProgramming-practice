//부모 클래스 정의하기
class Animal {
  constructor(name) {// constructor-객체를 만들때 초기값을 만들어 줄 수 있는 용도
    this.name = name;
  }

  speak() {
    console.log(`${this.name}이(가) 소리를 냅니다.`);
  }
}

//자식 클래스 정의하기
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name}이(가) 멍멍 짖습니다.`);
  }

  fetch() {
    console.log(`${this.name}이(가) 공을 가져옵니다.`);
  }
}

//객체 생성하기
const dog = new Dog("뽀삐");
dog.speak();
dog.fetch();

//(내가) 자식 클래스 정의하기
class Butterfly extends Animal {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name}이(가) 살랑살랑 날아다닙니다.`);
  }

  sit() {
    console.log(`${this.name}이(가) 꽃 위에 사뿐히 앉습니다.`);
  }
}

//나비 객체 생성하기
const butterfly = new Butterfly("니바");
butterfly.fly();
butterfly.sit();