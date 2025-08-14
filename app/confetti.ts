import confetti from "canvas-confetti";

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function popConfetti() {
  confetti({
    angle: randomInRange(35, 155),
    spread: randomInRange(60, 80),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 },
  });
}
