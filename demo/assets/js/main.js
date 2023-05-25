const width = screen.width;
const thirdItem = document.querySelector(".thirdItem");
const forthItem = document.querySelector(".forthItem");
const container = document.getElementById('changeable');
const beforeFoot = document.querySelector("#beforeFoot>.container");
const footerContainer = document.getElementById('futContainer');
const jobsContainer = document.querySelector('#jobs>.container');
const userAccountContainer  = document.querySelector('#userAccount>.container');
const regContainer = document.querySelector("#signRegBlock>.container");
const scContainer = document.querySelector("#smInfo>.container");

// if(thirdItem && forthItem) {
//     if (width < 552) {
//         thirdItem.classList.add('border-end');
//         forthItem.classList.add('border-bottom');
//     } else if (width > 552) {
//         thirdItem.classList.remove('border-end');
//         forthItem.classList.remove('border-bottom');
//     }
// }
// width < 992 && container ? container.classList.replace('container', 'container-fluid') : container.classList.replace('container-fluid', 'container');
width > 552 && width < 992 && footerContainer ? footerContainer.classList.replace('container', 'container-fluid') : footerContainer.classList.replace('container-fluid', 'container');
// width > 552 && width < 992 && beforeFoot ? beforeFoot.classList.replace('container', 'container-fluid') : beforeFoot.classList.replace('container-fluid', 'container');
// width > 552 && width < 992 && jobsContainer ? jobsContainer.classList.replace('container', 'container-fluid') : jobsContainer.classList.replace('container-fluid', 'container');
// width > 552 && width < 992 && userAccountContainer ? userAccountContainer.classList.replace('container', 'container-fluid') : userAccountContainer.classList.replace('container-fluid', 'container');
// width > 552 && width < 992 && regContainer ? regContainer.classList.replace('container', 'container-fluid') : regContainer.classList.replace('container-fluid', 'container');
// width > 552 && width < 992 && scContainer ? scContainer.classList.replace('container', 'container-fluid') : scContainer.classList.replace('container-fluid', 'container');

window.addEventListener('resize', function (e) {
    const width = screen.width;

    // if (width < 552) {
    //     thirdItem.classList.add('border-end');
    //     forthItem.classList.add('border-bottom');
    // } else if (width > 552) {
    //     thirdItem.classList.remove('border-end');
    //     forthItem.classList.remove('border-bottom');
    // }
    // width < 992 ? container.classList.replace('container', 'container-fluid') : container.classList.replace('container-fluid', 'container');
    width > 552 && width < 992 ? footerContainer.classList.replace('container', 'container-fluid') : footerContainer.classList.replace('container-fluid', 'container');
    // width > 552 && width < 992 ? beforeFoot.classList.replace('container', 'container-fluid') : beforeFoot.classList.replace('container-fluid', 'container');
    // width > 552 && width < 992 ? jobsContainer.classList.replace('container', 'container-fluid') : jobsContainer.classList.replace('container-fluid', 'container');
    // width > 552 && width < 992 ? userAccountContainer.classList.replace('container', 'container-fluid') : userAccountContainer.classList.replace('container-fluid', 'container');
    // width > 552 && width < 992 ? regContainer.classList.replace('container', 'container-fluid') : regContainer.classList.replace('container-fluid', 'container');
    // width > 552 && width < 992 ? scContainer.classList.replace('container', 'container-fluid') : scContainer.classList.replace('container-fluid', 'container');
});

// let select = document.getElementsByClassName("hidSelect")[0].addEventListener('focus', function (e) {
//     e.preventDefault();
//     document.getElementsByClassName('industryWrapper')[0].style.display = 'block';
// })

// document.getElementsByClassName('uhMenu')[0].addEventListener('click',(e) => {
//     document.getElementById('userMenu').style.display = 'block';
// })

// document.addEventListener('click', function (e) {
//     let elem = e.target;
//     if (elem) {
//         let nextSibling = elem.nextElementSibling;
//         nextSibling && nextSibling.classList ? nextSibling.classList.toggle('d-block') : false;
//     }
// })

// let elem = document.getElementsByClassName('mobFilBtn')[0];
// elem.addEventListener("click", (e) => {
//     document.getElementById('mobFilters').style.display = 'block';
// })

// document.getElementById('filterItem').addEventListener('click', (e) => {
//     document.getElementsByClassName('filterItemInfo')[0].style.display = "block";
// })

// document.getElementsByClassName("closeJobPopUp")[0].addEventListener('click', (e) => {
//     document.getElementById('singleJobPopUp').style.display = "none";
// })

// document.getElementsByClassName("closeFilter")[0].addEventListener('click', (e) => {
//     document.getElementById('mobFilters').style.display = "none";
// })

// let menuLi = document.querySelector(".menuList>li");
// if(menuLi) {
//     menuLi.addEventListener('click', function(e)  {
//         let nested = this.children;
//         if(nested.length === 4) {
//             nested[nested.length - 1].classList.toggle('d-block');
//         }
//         // this.style.backgroundColor = '#22d172';
//         // let childrens = this.children;        
//         // for(let x of childrens) {
//         //     if(!x.classList.has('nested')) {
//         //         x.style.color = 'white';
//         //     } 
//         // }
//     });
// }
// console.log(document.getElementsByClassName('mbtn'));
// document.getElementsByClassName('mbtn')[0].addEventListener('click', function(e) {
//     e.stopPropagation();
//     let menu = document.getElementById('hiddenMenu');
//     menu.style.left = "0";
// })
// document.getElementsByClassName('clMenuIcon')[0].addEventListener('click', function(e) {
//     let menu = document.getElementById('hiddenMenu');
//     menu.style.left = "-100%";
// })
// document.getElementsByClassName("telCodes")[0].addEventListener('click', (e) => {
//     document.getElementsByClassName('phoneList')[0].classList.toggle('d-block');
// })

// document.getElementsByClassName('jobApp')[0].addEventListener('click', (e) => { 
    // document.getElementById('applyJob').click();
    // document.getElementById('applyJobMob').click();
    // document.getElementById('cvBlock').style.display = "block";
// })


// window.addEventListener('scroll', (e) => {
//     let topMenu = document.getElementById("topMenu");
//     const breakEventPoint = 70; 
//     let scTop = document.body.scrollTop || document.documentElement.scrollTop;
//     if(scTop > breakEventPoint) {
//         if(!topMenu.classList.contains('changedTopName')) {
//             topMenu.classList.add("changedTopNav");
//         }
//     } else if(scTop < breakEventPoint) {
//         topMenu.classList.remove("changedTopNav");
        
//     }
// })

