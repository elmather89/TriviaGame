$(document).ready(function () {

    // create start button ============================================
    var startButton = $("<div>");
    startButton.addClass("start-btn");
    startButton.text("START");
    $("#strt-btn-apnd").append(startButton);

    // Press start switches timer on =====================================
    $('.start-btn').click(function(){
        var $this = $(this);
        $this.toggleClass('SeeMore2');
        if($this.hasClass('SeeMore2')){
            $this.text('START');         
        } else {
            $this.text('timer goes here');
        }
    });
    // end of document below
});