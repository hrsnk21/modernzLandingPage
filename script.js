Shery.imageEffect(".backArea",{style:5 ,config:{"a":{"value":1.83,"range":[0,30]},
"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},
"aspect":{"value":2.2520868113522536},"ignoreShapeAspect":{"value":true},
"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},
"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},
"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},
"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},
"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},
"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},
"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},
"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},
"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},
"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":6.11,"range":[0,100]}}, gooey:true});

var hs = document.querySelectorAll(".elem h1");
var index = 0;

document.querySelector(".main").addEventListener("click", function() {

  hs.forEach((heading, i) => {
    if (i === index + 1 || i === index + 6 || i === index + 11) {
      heading.style.opacity = 1;
    } else {
      heading.style.opacity = 0;
    }
  });

  index++;

  if (index === 5) {
    location.reload();
  }
});


