function login() {
  const id = document.getElementById("userid").value;
  const pw = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  // 회원가입 때 저장된 회원 목록
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // 로그인 성공 여부 확인
  const user = users.find(
    user => user.id === id && user.password === pw
  );

  if (user) {
    // 🔥 로그인 성공 확인 코드
    console.log("로그인 성공:", id);
    alert("로그인 성공!");

    // 로그인 상태 저장
    localStorage.setItem("loginUser", id);

    // 👉 로그인 성공 후 이동
    location.href = "main.html";
  } else {
    msg.innerText = "아이디 또는 비밀번호가 틀렸습니다";
  }
}
