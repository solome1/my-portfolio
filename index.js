$(document).ready(function()
{
    $('menu').click(function()
    {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function()
    {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle')

        if($(window).scrollTop() >   0)
        {
            $('.top').show();
        }
        else
        {
            $('.top').hide();
        }
    });
});    






// var menubtn=document.getElementById("menu" )
// var sidenav=document.getElementById("head" )
// sidenav.style.left="0";

// menubtn.onclick=function()
// {
//     if (sidenav.style.left=="0")
//     {
//         sidenav.style.left="0rem";
//     }
//     else
//     {
//         sidenav.style.left="30rem";
//     }
// };