const burgerBtn=document.querySelector(".burger-btn"),header=document.querySelector(".header");function openMenuMobile(){header.classList.contains("active")?header.classList.remove("active"):header.classList.add("active")}burgerBtn.addEventListener("click",openMenuMobile);const swiper=new Swiper(".help-class",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".help-class .swiper-button-next",prevEl:".help-class .swiper-button-prev"}}),days=document.querySelector("#days"),hours=document.querySelector("#hours"),minutes=document.querySelector("#minutes"),seconds=document.querySelector("#seconds"),futureDate=new Date("July 01 2024 00:00:00");function updateCounter(){const e=new Date,i=futureDate-e,t=Math.floor(i/1e3/60/60/24),n=Math.floor(i/1e3/60/60)%24,r=Math.floor(i/1e3/60)%60,s=Math.floor(i/1e3)%60;days.innerHTML=t,hours.innerHTML=n<10?"0"+n:n,minutes.innerHTML=r<10?"0"+r:r,seconds.innerHTML=s<10?"0"+s:s}updateCounter(),setInterval(updateCounter,1e3);const swiperTimer=new Swiper(".time-main-products",{slidesPerView:5,loop:!0,breakpoints:{300:{slidesPerView:1},485:{slidesPerView:2},769:{slidesPerView:3},1200:{slidesPerView:5}},pagination:{el:".time-pagination .swiper-pagination",clickable:!0},navigation:{nextEl:".time .time-pagination .swiper-button-next",prevEl:".time .time-pagination .swiper-button-prev"}}),swiperBestseller=new Swiper(".bestseller-slider",{slidesPerView:5,loop:!0,breakpoints:{300:{slidesPerView:1},485:{slidesPerView:2},769:{slidesPerView:3},1200:{slidesPerView:5}},navigation:{nextEl:" .bestseller-pagination .swiper-button-next",prevEl:" .bestseller-pagination .swiper-button-prev"}}),swiperFurniture=new Swiper(".furniture-slider",{slidesPerView:5,loop:!0,breakpoints:{300:{slidesPerView:1},485:{slidesPerView:2},769:{slidesPerView:3},1200:{slidesPerView:5}},navigation:{nextEl:" .furniture-pagination .swiper-button-next",prevEl:" .furniture-pagination .swiper-button-prev"}});