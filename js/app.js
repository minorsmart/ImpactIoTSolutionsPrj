function scrollLocation(){
    let sec = document.querySelectorAll('section');
    let links = document.querySelectorAll('.sidenav nav ul li a');

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
                    
                    //if subsection is in view also hightlight the parentsection
                    let parentId = id.split('-')[0];
                    let parentLink = document.querySelector('.sidenav nav ul li a[href*=' + parentId + ']');
                    parentLink.classList.add('active');    
                });
            }
        });
    };
}
scrollLocation();

function offsetPageNav(){
    document.querySelectorAll('.sidenav nav ul li a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            let targetId = this.getAttribute('href').substring(1);
            let targetSection = document.getElementById(targetId);

            if(targetSection) {
                let offset = 150;
                let targetOffsetTop = targetSection.offsetTop - offset;

                window.scrollTo({
                    top: targetOffsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}
offsetPageNav();

function addMargin(className, marginType) {
    const boxElements = document.querySelectorAll('[class^="box"]');
    
    boxElements.forEach(function(boxElement) {
        const mediaElement = boxElement.querySelector(className + ' img, ' + className + ' video, ' + className + ' iframe');

        if (mediaElement) {
            const mediaHeight = mediaElement.offsetHeight;

            switch (marginType) {
                case 'top':
                    boxElement.style.marginTop = mediaHeight + "px";
                    break;
                case 'right':
                    boxElement.style.marginRight = mediaHeight + "px";
                    boxElement.style.minHeight = mediaHeight + "px";
                    break;
                case 'left':
                    boxElement.style.marginLeft = mediaHeight + "px";
                    boxElement.style.minHeight = mediaHeight + "px";
                    break;
                case 'bottom':
                    boxElement.style.marginBottom = mediaHeight + "px";
                    break;
                default:
                    break;
            }

            if (className === '.box-rightimg' || className === '.box-leftimg') {
                imgMargin = 0.2 * mediaHeight;
                boxElement.style.marginTop = imgMargin + "px";
            }
        }
    })
}
addMargin('.box-upperimg', 'top');
addMargin('.box-rightimg', 'right');
addMargin('.box-leftimg', 'left');
addMargin('.box-lowerimg', 'bottom');

function adjustedContentWindow() {
    var pageTitle = document.title;
    var contentDivs = document.querySelectorAll('.content');

    contentDivs.forEach(function(contentDiv) {
        switch (pageTitle) {
            case "Portfolio Project" :
                contentDiv.style.padding = "40px 375px 40px 20px"
                break;
            case "Portfolio Impact IoT Solutions Groep" :
                contentDiv.style.padding = "40px 20px 40px 20px"
                break;
            default:
                break;
        }
    });
}
adjustedContentWindow();