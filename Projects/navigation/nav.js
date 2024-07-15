function ChangeBackground()
{
    var scrollvalue=window.scrollY;
    // var navbar=document.getElementById('navbar');
    if(scrollvalue < 400)
    {
        navbar.classList.remove('chngecolor')
    }
    else
    {
        navbar.classList.add('chngecolor')

    }
    // console.log(scrollvalue);
}

window.addEventListener('scroll', ChangeBackground);