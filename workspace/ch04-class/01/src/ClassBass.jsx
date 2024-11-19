import { Component } from "react";

class ClickMe extends Component {
  // state / setState 는 부모에(Component) 정의되어 있는 이름
  // 상태는 state 변수 하나만 사용 가능해서 여러개의 상태를 관리하려면 객체로 지정
  // 함수형에서는 state 변수를 여러개 지정 가능(useState 훅)
  state = { count: 0 };

  render() {
    return (
      <div>
        클릭 횟수 X 5 : 15
        <button>클릭</button>
      </div>
    );
  }
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>01 클래스 컴포넌트</h1>
        <ClickMe level={2} />
        <ClickMe level={5} />
      </div>
    );
  }
}
