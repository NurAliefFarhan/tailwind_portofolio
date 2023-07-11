// Navbar Scroll Fixed 
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;
    const buttonToTop = document.querySelector('#button-to-top')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        header.classList.remove('hidden')
        header.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        header.classList.remove('flex')
        header.classList.add('hidden')
    }
}


// Hamburger Menu
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})



// Klik di luar tombol menu 
window.addEventListener('click', function(e){
    if(e.target !== hamburger && e.target !== navMenu){
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})


// dark mode toggle 
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});

// Pindahkan posisi toggle sesuai dengan mode nya 
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

// Set tema saat halaman dimuat
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}


