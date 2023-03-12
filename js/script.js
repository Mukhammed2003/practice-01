$(document).ready(function() {
    $('.form__title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
