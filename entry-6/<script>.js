document.addEventListener("wheel", function (event) {
    if (event.deltaY !== 0) {
      event.preventDefault();
      document.querySelector(".horizontal-scroll").scrollLeft += event.deltaY;
    }
  });
