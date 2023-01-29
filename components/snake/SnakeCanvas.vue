<script lang="ts" setup>
const heightRatio = 1;
const canvasElement = ref(null);
const widthCanvas = ref(0);
const heightCanvas = ref(0);

const onCalculateSizeCanvas = () => {
  widthCanvas.value = canvasElement.value?.width;
  heightCanvas.value = widthCanvas.value * heightRatio;
  console.log(
    "canvasElement.value=",
    canvasElement,
    widthCanvas.value,
    heightCanvas.value
  );
  return heightCanvas.value;
};

onMounted(() => {
  onCalculateSizeCanvas();
  window.addEventListener("resize", onCalculateSizeCanvas);
  window.addEventListener("keyup", onChangeDirection);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onCalculateSizeCanvas);
  window.removeEventListener("keyup", onChangeDirection);
});

const state = reactive({
  speed: 0,
  maxSpeed: 200,
  step: 100,
  widthSquare: 1000,
  heightSquare: 1000,
  stop: false,
  direction: 0,
  snakeParts: [43, 42, 41, 40],
  interval: 500,
});
const vDraw = {
  mounted: (canvasElement, binding) => {
    const { heightSquare, widthSquare, step, snakeParts } = binding.value;

    var ctx = canvasElement.getContext("2d");
    ctx.clearRect(0, 0, widthSquare, heightSquare);

    ctx.fillStyle = "#1e293b";
    ctx.rect(0, 0, widthSquare, heightSquare);
    ctx.fill();

    ctx.lineWidth = 1;
    ctx.strokeStyle = "#0f172a";
    let oneStep = widthSquare / step;
    for (let i = 0; i <= step; i++) {
      ctx.beginPath(); // Начинает новый путь
      ctx.moveTo(i * oneStep, 0); // Передвигает перо в точку (30, 50)
      ctx.lineTo(i * oneStep, widthSquare); // Рисует линию до точки (150, 100)
      ctx.stroke();
    }
    oneStep = heightSquare / step;
    for (let i = 0; i <= step; i++) {
      ctx.beginPath(); // Начинает новый путь
      ctx.moveTo(0, i * oneStep); // Передвигает перо в точку (30, 50)
      ctx.lineTo(widthSquare, i * oneStep); // Рисует линию до точки (150, 100)
      ctx.stroke();
    }

    // ctx.fillStyle = "#d946ef";
    // ctx.font = "20px Arial";
    // ctx.fillText(speed, x - 10, y);
    // ctx.fillStyle = "silver";
    // ctx.font = "15px Arial";
    // ctx.fillText("км/ч", x - 10, y + 10);

    // ctx.beginPath();
    // ctx.lineWidth = 10;
    // ctx.strokeStyle = "#dddddd50";
    // ctx.arc(x, y, r, 0.8 * Math.PI, 1.8 * Math.PI, false);
    // ctx.stroke();

    // ctx.moveTo(x, y);
    // ctx.beginPath();
    // ctx.strokeStyle = "green";
    // ctx.arc(x, y, r, 0.8 * Math.PI, koof * Math.PI, false);
    // ctx.stroke();
  },
};
const vSnake = {
  mounted: (el, binding) => {},
  updated: (el, binding) => {
    const { widthSquare, step, snakeParts, heightSquare } = binding.value;
    var ctx = el.getContext("2d");
    ctx.clearRect(0, 0, widthSquare, heightSquare);
    let oneStep = widthSquare / step;
    // draw start snake
    for (let part of snakeParts) {
      const y = parseInt(part / step);
      const x = part % step;
      // console.log(part, step, "x=", x, "y=", y);
      ctx.fillStyle = "#84cc16";
      ctx.fillRect(x * oneStep, y * oneStep, oneStep, oneStep);
      // ctx.fill();
    }
  },
};

const onChangeDirection = (e: KeyboardEvent) => {
  switch (e.key) {
    case "ArrowLeft":
      state.direction = -1;
      break;
    case "ArrowRight":
      state.direction = 1;
      break;
    case "ArrowDown":
      state.direction = state.step;
      break;
    case "ArrowUp":
      state.direction = -state.step;
      break;
    default:
      break;
  }
};

const onChangeSnakePosition = () => {
  state.snakeParts.pop();
  state.snakeParts.unshift(state.snakeParts[0] + state.direction);
};
const interval = setInterval(onChangeSnakePosition, state.interval);
</script>

<template>
  <div class="relative mx-auto max-w-screen-sm">
    <canvas
      ref="canvasElement"
      :width="state.widthSquare"
      :height="state.heightSquare"
      :style="[`height: ${heightCanvas}px`]"
      class="absolute w-full"
      v-draw="state"
    ></canvas>
    <canvas
      :width="state.widthSquare"
      :height="state.heightSquare"
      :style="[`height: ${heightCanvas}px`]"
      class="absolute w-full"
      v-snake="state"
    ></canvas>
  </div>
</template>
