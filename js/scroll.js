$(function() {
    $('#L1').click(function() {
        $('html,body').animate({ scrollTop: $('#Location').offset().top }, "show");
        return false;
    });
});
$(function() {
    $('#C1').click(function() {
        $('html,body').animate({ scrollTop: $('#City').offset().top }, "show");
        return false;
    });
});
$(function() {
    $('#J1').click(function() {
        $('html,body').animate({ scrollTop: $('#JoinUs').offset().top }, "show");
        return false;
    });
});
$(function() {
    $('#C2').click(function() {
        $('html,body').animate({ scrollTop: $('#ContactUs').offset().top }, "show");
        return false;
    });
});