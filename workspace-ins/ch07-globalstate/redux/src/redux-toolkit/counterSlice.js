import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: 'myCounter', // 슬라이스 이름(액션 타입의 접두사로 사용됨)
  initialState: { count: 5, date: new Date().toString() }, // 초기 상태
  reducers: {
    countUp: (state, action ) => {
      // immer 라이브러리를 내부적으로 사용하기 때문에 state를 직접 수정해도 됨
      state.count += action.payload.step;
    },
    countDown: (state, action ) => {},
    countReset: (state, action ) => {},
  }
});

export default counterSlice;