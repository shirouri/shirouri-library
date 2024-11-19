//チェックボックスのチェックを外す
$(function () {
    $('.burger_nav_item>a').click(function () {
        $('#drawer_input').removeAttr('checked').prop('checked', false).change();
    });
});


function count() {
    var thisCount = $("#count").html();
    thisCount = Number(thisCount);
    thisCount = thisCount + 1;
    $("#count").html(thisCount);
}