// probably a really hacky solution but it works
function WhatIsTheTime(timeInMirror) {
  let hours = parseInt(timeInMirror.substr(0, 2));
  let minutes = parseInt(timeInMirror.substr(3, 4));

  if (hours < 6 && minutes < 30 && minutes !== 0 || hours < 6 && minutes > 30 && minutes !== 0 || hours > 6 && hours < 11 && minutes < 30 && minutes !== 0 || hours > 6 && hours < 11 && minutes >= 30 && minutes !== 0) {
    hours = 11 - hours;
  } else if (hours !== 12 && minutes === 0) {

    hours = 12 - hours;
  } else if (hours === 12 && minutes !== 0) {
    hours = hours - 1;
  } else if (hours === 11) {
    hours = hours + 1;
  }  
  else if (hours === 6) {
    hours = hours - 1;
  }

  if (minutes !== 0) {
    minutes = 60 - parseInt(minutes);
  }

  if (hours < 10 && minutes < 10) {
    return `0${hours}:0${minutes}`;
  } else if (hours < 10) {
    return `0${hours}:${minutes}`;
  } else if (minutes < 10) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
}
console.log(WhatIsTheTime('08:30')) // 03:30
console.log(WhatIsTheTime('11:15')) // 12:45
console.log(WhatIsTheTime('11:03')) // 12:57
console.log(WhatIsTheTime('11:22')) // 12:38
console.log(WhatIsTheTime('12:02')) // 11:58
console.log(WhatIsTheTime('06:42')) // 05:18
console.log(WhatIsTheTime('12:43')) // 11:17
console.log(WhatIsTheTime('11:59')) //12:01
console.log(WhatIsTheTime('11:30')) // 12:30
console.log(WhatIsTheTime('12:00')) // 12:00
console.log(WhatIsTheTime('07:48')) // 04:12
console.log(WhatIsTheTime('10:18')) // 01:42
console.log(WhatIsTheTime('09:38')) // 02:22
console.log(WhatIsTheTime('09:24')) // 02:36
console.log(WhatIsTheTime('02:38')) // 09:22
console.log(WhatIsTheTime('04:05')) // 07:55
console.log(WhatIsTheTime('01:43')) // 10:17
console.log(WhatIsTheTime('01:02')) // 10:58
console.log(WhatIsTheTime('02:07')) // 09:53
console.log(WhatIsTheTime('04:44')) // 07:16
console.log(WhatIsTheTime('04:00')) // 08:00
console.log(WhatIsTheTime('06:00')) // 06:00
console.log(WhatIsTheTime('01:18')) // 10:42
console.log(WhatIsTheTime('01:29')) // 10:31
console.log(WhatIsTheTime('05:28')) // 06:32
console.log(WhatIsTheTime('03:23')) // 08:37