let current;

function randomQ() {
  return questions[Math.floor(Math.random()*questions.length)];
}

function startFill(rate) {
  current = randomQ();
  document.getElementById("menu").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  let text = current.a.split("");
  let masked = text.map(c => Math.random() < rate ? "＿" : c).join("");
  document.getElementById("question").innerText = current.q + "\n\n" + masked;
}

function startWrite(timed) {
  current = randomQ();
  document.getElementById("menu").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("question").innerText = current.q;
  if (timed) {
    let t = prompt("請輸入秒數", 60);
    setTimeout(check, t*1000);
  }
}

function check() {
  let user = document.getElementById("answer").value;
  let hit = 0;
  current.k.forEach(k => { if (user.includes(k)) hit++; });
  document.getElementById("result").innerText =
    hit/current.k.length >= 0.6 ? "✅ 意思正確" : "❌ 未達標準";
}
