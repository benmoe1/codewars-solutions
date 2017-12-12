function bouncingBall(h,  bounce,  window) {
   if(h < 0 || bounce >= 1 || bounce < 0 || window >= h) {
  return -1};

let i = -1;

while (h>window){
h*=bounce;
i += 2;
}
return i;
 }
 console.log(bouncingBall(3, 0.66, 1.5)) // 3
 console.log(bouncingBall(3, 1, -1)) // -1