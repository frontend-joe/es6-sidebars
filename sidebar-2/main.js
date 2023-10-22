const sidebar = document.getElementById("sidebar"),
  handle = document.getElementById("handle");

const resize = (e) => {
  let newWidth = e.clientX - sidebar.offsetLeft;

  if (newWidth < 54) newWidth = 54;

  sidebar.style.width = `${newWidth}px`;
};

const stopResize = (e) => {
  window.removeEventListener("mousemove", resize);
  window.removeEventListener("mouseup", stopResize);
};

const initResize = () => {
  window.addEventListener("mousemove", resize);
  window.addEventListener("mouseup", stopResize);
};

handle.addEventListener("mousedown", initResize);
