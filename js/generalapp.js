$(document).ready(function() {


    /*function for smooth scroll down*/
    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    1000);
                return false;
            }
        }
    });


    /*filter functions*/

    var subjectfilter = 0;
    var gradefilter = 0;
    var modulefilter = 0;

    /*function for change card filter status*/
    $(".filtertab").click (function () {
        if (subjectfilter < 1) {
            subjectfilter += 1;
            $("#subjecttitle").toggleClass("hide");
            $(".filtertab").not(this).parent().toggleClass("col-md-3 col-sm-4 col-xs-6");
            $(".filtertab").not(this).toggleClass("hide");
            $(this).parent().toggleClass("col-md-3 col-sm-4 col-xs-6 widefilter");
            $(this).toggleClass("row");
            $(this).children().children("figure").toggleClass("col-md-3 col-sm-4 col-xs-6");
            $("#grade").toggleClass("hide");
        }
    });

    /*function for change grade filter status*/
    $(".gradebutton").click (function () {
        if (gradefilter < 1) {
            gradefilter += 1;
            $("#gradetitle").toggleClass("hide");
            $(".gradebutton").not(this).parent().toggleClass("col-md-3 col-sm-3 col-xs-6");
            $(".gradebutton").not(this).toggleClass("hide");
            $(this).parent().toggleClass("col-md-3 col-sm-3 col-xs-6 col-md-12 col-sm-12 col-xs-12");
            $(this).toggleClass("button-circle button-block button-rounded gradebutton fullwidth");
            $("#module").toggleClass("hide");
        }
    });

    /*function for change module filter status*/
    $(".modulebutton").click (function () {
        if (modulefilter < 1) {
            modulefilter += 1;
            $("#moduletitle").toggleClass("hide");
            $(".modulebutton").not(this).parent().toggleClass("col-md-3 col-sm-3 col-xs-6");
            $(".modulebutton").not(this).toggleClass("hide");
            $(this).parent().toggleClass("col-md-3 col-sm-3 col-xs-6 col-md-12 col-sm-12 col-xs-12");
            $(this).toggleClass("button-block button-longshadow-right modulebutton fullwidth button-3d");
            $("#difficulty").toggleClass("hide");
        }
    });

    /*generate button clicker hide filters generate table*/
    $("#generatorbtn").click (function () {
        $("#customize").addClass("hide");
        $("#problemstable").removeClass("hide");
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("showproblem").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("POST", "review.php");
        xmlhttp.send();

        $("body").on("click", ".deleterow", function () {
            $(this).parent().parent().remove();
        });

    });

    /*range slider function jQuery UI */
    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 10,
            step: 1,
            values: [2, 5],
            slide: function (event, ui) {
                $("#amount").val(ui.values[0] + " - " + ui.values[1]);
            }
        });
        $("#amount").val($("#slider-range").slider("values", 0) +
            " - " + $("#slider-range").slider("values", 1));
    });

    /* function to delete a row from assignment*/


    /*function to reset filters*/
    $("#reset").click(function () {
        subjectfilter = 0;
        gradefilter = 0;
        modulefilter = 0;

        location.reload();
    });

    /*function to start edit questions*/

    $("#editassign").on('click', function () {
        $(".deleterow").toggleClass("hide");
    });

    /*function to shift between signup and login (Use two pages to replace this function)*/
/*    $(".shiftlogin").click(function() {
        $("#emailsignup").toggleClass("hidden");
        $("#emaillogin").toggleClass("hidden");
        $('.shiftlogin').toggleClass("hidden");
    })*/

    $('#fbsignup').click(function() {
        alert("This function will be opening soon.")
    })
    $('#googlesignup').click(function() {
        alert("This function will be opening soon.")
    })

});




/**
 * Created by Jun Ge on Oct.2015.
 */
