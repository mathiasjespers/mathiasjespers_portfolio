const projectimg = document.querySelector(".project-images")
const link1 = document.querySelector("#link1")
const link2 = document.querySelector("#link2")
const link3 = document.querySelector("#link3")
const link4 = document.querySelector("#link4")
const link5 = document.querySelector("#link5")

link1.addEventListener('mouseover', () =>  {
  projectimg.classList.toggle("img1")
});

link1.addEventListener('mouseleave', () =>  {
  projectimg.classList.toggle("img1")
});

link2.addEventListener('mouseover', () =>  {
  projectimg.classList.toggle("img2")
});

link2.addEventListener('mouseleave', () =>  {
  projectimg.classList.toggle("img2")
});

link3.addEventListener('mouseover', () =>  {
  projectimg.classList.toggle("img3")
});

link3.addEventListener('mouseleave', () =>  {
  projectimg.classList.toggle("img3")
});

link4.addEventListener('mouseover', () =>  {
  projectimg.classList.toggle("img4")
});

link4.addEventListener('mouseleave', () =>  {
  projectimg.classList.toggle("img4")

});

link5.addEventListener('mouseover', () =>  {
  projectimg.classList.toggle("img5")
});

link5.addEventListener('mouseleave', () =>  {
  projectimg.classList.toggle("img5")
});
