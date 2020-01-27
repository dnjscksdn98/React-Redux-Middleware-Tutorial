const myLogger = store => next => action => {
  console.log(action);
  const result = next(action); // 액션을 다음 미들웨어로 전달한다. 만약 없다면 리듀서한데 전달한다.
  console.log("\t", store.getState());
  return result;
};

export default myLogger;
