function scrollToElement(elementselector, instance=0){
    const elements=document.querySelectorAll(elementselector);
    if(elements.length > instance)
    {
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const link1=document.getElementById("link1");
    const link2=document.getElementById("link2");
    const link3=document.getElementById("link3");

    link1.addEventListener('click', () => {
        scrollToElement('.header');
    });

    link2.addEventListener('click', () => {
        scrollToElement('.features');
    });

    link3.addEventListener('click', () => {
        scrollToElement('.pricing .card .content');
    });
});
