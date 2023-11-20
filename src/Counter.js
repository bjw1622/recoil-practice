import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { countState } from "./atom";

const Counter = () => {
  // 다른 파일에 있는 아톰 읽기
  const [count, setCount] = useRecoilState(countState);
  console.log(count);
  // 아톰 읽기 전용
  console.log(useRecoilValue(countState));
  // 아톰 값 변경
  const plusCount = () => {
    setCount((pre) => pre + 1);
  };
  // 아톰 값 변경
  const minusCount = () => {
    setCount((pre) => pre - 1);
  };
  // 아톰 값 디폴트로 초기화
  const initBtn = useResetRecoilState(countState);

  return (
    <>
      <button onClick={plusCount}>+</button>
      <div>{count}</div>
      <button onClick={minusCount}>-</button>
      <button onClick={initBtn}>초기화</button>
    </>
  );
};

export default Counter;
