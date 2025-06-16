const contact = document.querySelector('.contact');
const conMenu = document.querySelector('.contact-menu');
const client = document.getElementById('detail');
const theme = document.getElementById('mode');
const calc = document.getElementById('calc');
// const mode = document.querySelector('.dark');


theme.addEventListener('click', togglemode);

conMenu.addEventListener('mouseover', toggleContact);//make the contact menu stable
conMenu.addEventListener('mouseout', toggleContact);
contact.addEventListener('mouseover', toggleContact);//make the contact menu appear
contact.addEventListener('mouseout', toggleContact);


// page navigations

client.addEventListener('click', ()=> {
    window.open('/say_hello', '_blank');
    // console.log('hell');
});

calc.addEventListener('click', ()=>{
    window.open('/my_works/calculator/second try/index.html', '_blank');
});



//  function declaration

function toggleContact(){
    conMenu.classList.toggle('active');
};

function togglemode(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        theme.src= '/portfolio/pics/brightness.png';
        // console.log('hell');
    }else{
        theme.setAttribute('src', '/portfolio/pics/moon.png');
        // console.log('no');
    }
}
