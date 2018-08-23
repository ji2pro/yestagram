$(document).ready(function() {
    $('.ui .item').on('click', function() {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });


InlineEditor
    .create(document.querySelector('#editor'), {
        language: 'ko'
    })
    .catch(error => {
        console.error(error);
    });
});