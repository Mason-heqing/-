function navList(id) {
    var $obj = $("#nav-list");
    $obj.find(".a").click(function () {
        var $div = $(this).siblings(".sec-list");
        if ($div.is(":hidden")) {
            $("#nav-list li").find(".sec-list").slideUp(600);
            $div.slideDown(600);

        } else {
            $div.slideUp(600);
        }
    });
}
navList(12);