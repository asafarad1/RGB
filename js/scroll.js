// control parameters //
let leg_factor = 0.4;
let threshold = 0;
let tickTimeout_time = 150;

// general parameters //
let lastKnownScrollPosition = 0;
let diff = 0;
let R_leg_factor = 1;
let G_leg_factor = 1 + leg_factor;
let B_leg_factor = 1 + (2 * leg_factor);
let leg_R = 0;
let leg_G = 0;
let leg_B = 0;
let tickTimeout = null;
let ticking = false;

const a2_title = document.querySelector('.a2_title');

const R = document.querySelectorAll(".R");
const G = document.querySelectorAll(".G");
const B = document.querySelectorAll(".B");

function channel_leg(scrollDiff) {
    leg_R = (scrollDiff * R_leg_factor).toString()+"px";
    leg_G = (scrollDiff * G_leg_factor).toString()+"px";
    leg_B = (scrollDiff * B_leg_factor).toString()+"px";
    R.forEach((userItem) => {
      userItem.style.top = leg_R;
    });
    G.forEach((userItem) => {
      userItem.style.top = leg_G;
    });
    B.forEach((userItem) => {
      userItem.style.top = leg_B;
    });
}

document.addEventListener("scroll", (event) => {
  diff = window.scrollY - lastKnownScrollPosition;
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      clearTimeout( tickTimeout );
      if (Math.abs(diff) >= threshold) {
        channel_leg(-diff);
        tickTimeout = setTimeout( () => channel_leg( 0 ), tickTimeout_time );
      } else {
        channel_leg(0);
      }
      ticking = false;
    });
    ticking = true;
  }

  console.log('lastKnownScrollPosition: '+lastKnownScrollPosition);
  console.log('a2_title: ' + a2_title.scrollTop);
});