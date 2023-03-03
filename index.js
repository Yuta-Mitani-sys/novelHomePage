// let menus = [];
// for(let i = 1; i <=4; i++) {
//   let menu = document.getElementById(`menu${i}`);
//   menus.push(menu)
//   console.log(menus)
// }

// document.addEventListener("click", (e) => {
//   console.log(e.target.id);
//   menus.map((menu) => {
//     if(e.target.id === menu.id) {
//       menu.classList.add("active");
//     }
//     else {
//       menu.classList.remove("active")
//     };
//   })
// })

const ham = document.querySelector('#js-Hamburger')
const nav = document.querySelector('#js-Nav')

ham.addEventListener('click', function() {
  // console.log('ok!');
  ham.classList.toggle('active');
  nav.classList.toggle('active');
})


$('.slide-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,

  responsive: [{
   breakpoint: 960, // ブレイクポイントを指定
    settings: {
     slidesToShow: 2,
     speed: 600,
    },
   },
  {
   breakpoint: 541,
    settings: {
     slidesToShow: 1,
     centerMode: true,
     centerPadding: '20%',
   },
  },
 ]
});