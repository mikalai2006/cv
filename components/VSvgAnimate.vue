<template>
  <div>
    <svg>
      <polygon
        stoke-width="1"
        stroke="currentColor"
        :points="points[indexAnimate].value"
      ></polygon>
    </svg>
    {{ indexAnimate }}
  </div>
</template>

<script lang="ts" setup>
const points = [
  // { 
  //   value: [
  //     "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369", 
  //     "70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369",
  //   ],
  // },
  { value: "70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369" },
  { value: "70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369" },
  { value: "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369" },
];

const indexAnimate = ref(0);
let time = 1000;
const diff = 30;
const minTime = 0;
const maxTime = 1000;
function easeInOutQuad(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
  return (-c / 2) * (--t * (t - 2) - 1) + b;
}
// for (let i = 0, len = diff; i <= len; i++) {
setInterval(() => {
  console.log("change Timer", indexAnimate.value, points.length - 1, time);
  indexAnimate.value === points.length - 1
    ? (indexAnimate.value = 0)
    : (indexAnimate.value += 1);
}, time);
// time = easeInOutQuad(i, minTime, maxTime, diff);
// }

const changePoints = () => {};
</script>
