import confetti from "canvas-confetti";

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function popConfetti(num: number) {
  // launch a few confetti from the left edge
  confetti({
    particleCount: 3 * num,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 3 * num,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
  });
}
