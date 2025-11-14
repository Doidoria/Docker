import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import api from '../api/axiosConfig'; // 새로운 api 인스턴스 임포트
const Login  = ()=>{
    const [username ,setUsername] = useState()
    const [password ,setPassword] = useState()
    const navigate = useNavigate();
  // useEffect에서 API 검증 호출
  useEffect(() => {
    const validateToken = async () => {
      try {
        // 토큰 유효성 검증을 위한 별도 엔드포인트 호출
        const resp = await axios.get("/validate", {
          withCredentials: true,
        });
        console.log("토큰 검증 성공:", resp);
        // navigate("/"); // 성공 시 / 경로로 이동
      } catch (error) {
        console.log("토큰 검증 실패:", error);
        // 비정상 응답 시 아무 동작도 하지 않음 (현재 페이지 유지)
      }
    };
    validateToken();
  }, [navigate]); // navigate를 의존성 배열에 추가

    //
    // 로그인 처리 함수
    const handleLogin = async () => {
        try {
            const resp = await api.post(
                "/login",
                { username, password },
                { headers: { "Content-Type": "application/json" } }
            );
            alert("로그인 성공:", resp.data);
            // navigate("/"); // 성공 시 / 경로로 이동
        } catch (error) {
            console.error("로그인 실패:", error.response ? error.response.data : error);
            alert("로그인 실패! 다시 시도해주세요."); // 실패 시 메시지 표시
        }
    };
    return (
        <>
            <h1>LOGIN PAGE</h1>
            Username : <input type="text" name="username"     onChange={e=>setUsername(e.target.value)} /><br />
            Password : <input type="password" name="password" onChange={e=>setPassword(e.target.value)} /><br />
            <button onClick={handleLogin}>로그인</button>
        </>
    )
}
export default Login