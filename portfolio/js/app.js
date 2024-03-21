function scrollLocation(){
    let sec = document.querySelectorAll('section');
    let links = document.querySelectorAll('.sidenav nav ul li a');
    let ulLink = document.querySelectorAll('.sidenav nav ul');

    window.onscroll = () => {
        sec.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 250;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');
            

            if(top >= offset && top < offset + height){
                links.forEach(link => {
                    link.classList.remove('active');
                    let currentLink = document.querySelector('.sidenav nav ul li a[href*=' + id + ']');
                    currentLink.classList.add('active');
                    
                    //if subsection is in view also hightligt the parentsection
                    let parentId = id.split('-')[0];
                    let parentLink = document.querySelector('.sidenav nav ul li a[href*=' + parentId + ']');
                    parentLink.classList.add('active');    
                });
            }
        });
    };
}
scrollLocation();
