// 전체 중 하나의 아이템의 객체를 의미
//항목에 대한 설계도
class TodoItem {
  constructor(title, dueDate){
    this.title = title;
    this.dueDate = dueDate;
    this.completed = false;
  }
  
  //항목의 완료 여부를 토글하는 메소드
  toggleCompleted() {
    this.completed = !this.completed;
  }
}

export default TodoItem;
  