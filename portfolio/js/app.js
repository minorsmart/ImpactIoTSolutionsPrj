function scrollLocation(){
    let sec = document.querySelectorAll('section');
    let links = document.querySelectorAll('.sidenav nav ul li a');

    window.onscroll = () => {
        sec.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 250;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');
            let parentId = id.substring(9, id.indexOf("-"));
            

            if(top >= offset && top < offset + height){
                links.forEach(link => {
                    link.classList.remove('active');
                    let currentLink = document.querySelector('.sidenav nav ul li a[href*=' + id + ']');
                    currentLink.classList.add('active');
                    
                    // Check if the link's parent has a class of "sub-level"                   
                    // if(currentLink.startsWith("subLevel")){
                    //     let parentLink = document.querySelector('.sidenav nav ul li a[href*=' + parentId + ']');
                    //     parentLink.classList.add('active');
                    // }             
                });
            }
        });
    };
}
scrollLocation();
