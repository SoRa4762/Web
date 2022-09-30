const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    // you can just do this here and then use
    entry.target.classList.toggle("show", entry.isIntersecting);

    // if (entry.isIntersecting) {
    //   entry.target.classList.add("show");
    // } else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
