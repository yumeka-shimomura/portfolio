var typed = new Typed(".text", {
  strings: ["Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Technical Bars
document.querySelectorAll(".progress-line span").forEach((bar, index) => {
  const widths = [90, 85, 70, 60]; // HTML, CSS, JS, GitHub
  setTimeout(() => {
    bar.style.width = widths[index] + "%";
  }, 500);
});

// Radial Bars
document.querySelectorAll(".radial-bar .progress").forEach((circle) => {
  const percent = circle.getAttribute("data-percent");
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  setTimeout(() => {
    circle.style.strokeDashoffset = offset;
  }, 500);
});

document.querySelectorAll(".path").forEach((circle) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const percent = circle.getAttribute("data-percent");
  const offset = circumference - (circumference * percent) / 100;

  circle.style.strokeDasharray = circumference;

  function animateCircle() {
    // 初期状態に戻す
    circle.style.strokeDashoffset = circumference;

    // アニメーション開始
    setTimeout(() => {
      circle.style.transition = "stroke-dashoffset 1.5s ease-out";
      circle.style.strokeDashoffset = offset;
    }, 300);

    // アニメーション後にリセットして再スタート
    setTimeout(() => {
      circle.style.transition = "none";
      animateCircle(); // 再帰的に呼び出してループ
    }, 100 + 2500 + 400); // 200ms 遅延 + 1.5s アニメーション + 0.5s 待機
  }

  animateCircle(); // 最初に1回
});
