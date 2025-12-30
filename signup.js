let idChecked = false;

function resetCheck() {
  idChecked = false;
  document.getElementById("msg").innerText = "";
}

function checkId() {
  const id = document.getElementById("userid").value;
  const msg = document.getElementById("msg");

  if (!id) {
    msg.innerText = "아이디를 입력하세요";
    msg.style.color = "red";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const exist = users.find(user => user.id === id);

  if (exist) {
    msg.innerText = "이미 사용 중인 아이디입니다";
    msg.style.color = "red";
    idChecked = false;
  } else {
    msg.innerText = "사용 가능한 아이디입니다";
    msg.style.color = "green";
    idChecked = true;
  }
}

function signup() {
  const id = document.getElementById("userid").value;
  const pw1 = document.getElementById("password").value;
  const pw2 = document.getElementById("password2").value;
  const msg = document.getElementById("msg");

  if (!idChecked) {
    msg.innerText = "아이디 중복확인을 해주세요";
    msg.style.color = "red";
    return;
  }

  if (!id || !pw1 || !pw2) {
    msg.innerText = "모든 항목을 입력하세요";
    msg.style.color = "red";
    return;
  }

  if (pw1 !== pw2) {
    msg.innerText = "비밀번호가 서로 다릅니다";
    msg.style.color = "red";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push({ id, password: pw1 });

  localStorage.setItem("users", JSON.stringify(users));

  alert("회원가입 완료!");
  location.href = "login.html";
}
