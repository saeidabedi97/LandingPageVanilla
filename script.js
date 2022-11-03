//Hero page elements needed for animations
let header1 = document.querySelector("h1");
let tryText = document.getElementById("downloadText");
let googlePlayIcon = document.getElementById("googlePlayIcon");
let appStoreIcon = document.getElementById("appStoreIcon");
let appImage1 = document.getElementById("appImage1");

//story page elements needed for animations
let header2 = document.querySelector("h2");
let storyParagraph = document.getElementById("storyDetails");

//feature section elements needed for animations
let header3 = document.querySelector("h3");
let feature1 = document.getElementById("feature-1");
let feature2 = document.getElementById("feature-2");
let feature3 = document.getElementById("feature-3");

//app demo section elements needed for animations
let header4 = document.querySelector("h4");
let step1Demo = document.querySelector(".step1-demo");
let step2Demo = document.querySelector(".step2-demo");
let step3Demo = document.querySelector(".step3-demo");

//team section elements needed for animations
let header5 = document.querySelector("h5");
let member1 = document.getElementById("team1");
let member2 = document.getElementById("team2");
let member3 = document.getElementById("team3");

function heroSectionAnimation() {
  let tl = gsap.timeline();
  tl.from(header1, { opacity: 0, duration: 0.5 });
  tl.from(tryText, { opacity: 0, y: 40, duration: 0.5 });
  tl.from(googlePlayIcon, { opacity: 0, y: 80, duration: 0.5 });
  tl.from(appStoreIcon, { opacity: 0, y: 80 });
  tl.from(appImage1, { opacity: 0, x: 40, duration: 0.5 });
}

function storySectionAnimation() {
  let tl2 = gsap.timeline({ scrollTrigger: header2 });

  tl2.from(header2, {
    opacity: 0,
    y: -40,
    duration: 0.5,
  });

  tl2.from(storyParagraph, {
    opacity: 0,
    x: -40,
    duration: 0.5,
  });
}

function featureSectionAnimation() {
  let tl3 = gsap.timeline({ scrollTrigger: header3 });
  tl3.from(header3, {
    opacity: 0,
    y: -40,
    duration: 0.5,
  });

  tl3.from(feature1, {
    opacity: 0,
    y: 40,
    duration: 0.5,
  });
  tl3.from(feature2, {
    opacity: 0,
    y: 40,
    duration: 0.5,
  });
  tl3.from(feature3, {
    opacity: 0,
    y: 40,
    duration: 0.5,
  });
}

function appDemoSectionAnimation() {
  let tl4 = gsap.timeline({ scrollTrigger: step1Demo, start: "top top" });
  tl4.from(header4, { opacity: 0, x: -40, duration: 0.5 });
  tl4.from(step1Demo, { opacity: 0, x: -40, duration: 0.5 });
  tl4.from(step2Demo, { opacity: 0, x: -40, duration: 0.5, delay: 1 });
  tl4.from(step3Demo, { opacity: 0, x: -40, duration: 0.5, delay: 2 });
}

function teamSectionAnimation() {
  let tl5 = gsap.timeline({ scrollTrigger: header5 });

  tl5.from(header5, { opacity: 0, x: -40, duration: 0.5 });
  tl5.from(member1, { opacity: 0, x: -40, duration: 0.5 });
  tl5.from(member2, { opacity: 0, x: -40, duration: 0.5 });
  tl5.from(member3, { opacity: 0, x: -40, duration: 0.5 });
}
heroSectionAnimation();
storySectionAnimation();
featureSectionAnimation();
appDemoSectionAnimation();

teamSectionAnimation();
