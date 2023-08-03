const partElements = document.querySelectorAll(".part");
const main = document.querySelector(".main");

const observer = new IntersectionObserver(
  (entires) => {
    entires.forEach((entry) => {
      // console.log(entry);
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve;
    });
  },
  {
    threshold: 1,
    /*rootMargin: "-100px"*/
  }
);
//console.log(observer);
//console.log("Helllo");

const lastDivObsever = new IntersectionObserver((entries) => {
  console.log("Heyyy");
  console.log(entries);
  const lastDiv = entries[0];
  if (!lastDiv.isIntersecting) return;
  loadNewCards();
  lastDivObsever.unobserve(lastDiv.target);
  lastDivObsever.observe(document.querySelector(".part:last-child"));
});

partElements.forEach((element) => {
  observer.observe(element);
});
function loadNewCards() {
  console.log("Hello");
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    console.log(card);
    card.textContent = "New Card";
    card.classList.add("part");
    main.append(card);
    observer.observe(card);
  }
}

lastDivObsever.observe(document.querySelector(".part:last-child"));
