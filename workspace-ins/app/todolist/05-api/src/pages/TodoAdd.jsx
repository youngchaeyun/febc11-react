import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function TodoAdd() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onSubmit', // 최초 검증 시점, default onSubmit
    reValidateMode: 'onChange', // 재검증 시점, default onChange
    criteriaMode: 'firstError', // 검증 에러가 발생할 경우 errors 객체의 필드 속성에 첫 오류 하나만 포함하거나(firstError) 전부 포함(all), default firstError
    defaultValues: {
      name: '',
      email: '',
      cellphone: '010',
    }
  });

  // handleSubmit에서 검증을 통과할 경우 호출됨
  const onSubmit = (item) => {
    console.log('서버에 전송', item);
  };

  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form onSubmit={ handleSubmit(onSubmit) }>
          <label htmlFor="title">제목 :</label>
          <input 
            type="text" 
            id="title" 
            autoFocus
            { ...register('name', {
              required: '제목을 입력하세요.',
            }) }
          />
          <br/>
          <label htmlFor="content">내용 :</label>
          <textarea 
            id="content" 
            cols="23" rows="5"
            { ...register('content', {
              required: '내용을 입력하세요.',
            }) }
          />
          <br/>
          <Link to="/list/1">추가</Link>
          <Link to="/list">취소</Link>
        </form>
      </div>
    </div>
  );
}

export default TodoAdd;