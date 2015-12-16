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
    });
    $('#googlesignup').click(function() {
        alert("This function will be opening soon.")
    });

    /*check to show form*/
    $('#checkmultiple').click(function() {
        if($(this).is(':checked'))
        {
            alert('checked');
            $('.option').removeClass('hide');
            checkmultiple = 0;
        }
        else {
            alert('unchecked');
            $('.option').addClass('hide');
            checkmultiple = 1;
        }
    });

    /* question preview */

    $('#previewbtn').click(function() {
        questioncontent = $('#questionarea').val();
        option1 = $('#optA').val();
        option2 = $('#optB').val();
        option3 = $('#optC').val();
        option4 = $('#optD').val();
        multiple = $('#checkmultiple').is(':checked');
        correctid = $('input[name="option"]:checked').val();
        subjectid = $('#subjectopt option:selected').val();
        subjecttext = $('#subjectopt option:selected').text();
        gradeid = $('#gradeopt option:selected').val();
        moduleid = $('#moduleopt option:selected').val();
        moduletext = $('#moduleopt option:selected').text();

        console.log(questioncontent);
        console.log(option1);
        console.log(option2);
        console.log(option3);
        console.log(option4);
        console.log(multiple);
        console.log(correctid);
        console.log(subjectid);
        console.log(subjecttext);
        console.log(gradeid);
        console.log(moduletext);


        if(!questioncontent) {
            $('#questionarea').addClass('fillfail');
        }
        if(questioncontent) {
            $('#questionarea').removeClass('fillfail');
        }
        if(multiple) {
            if (!option1) {
                $('#optA').addClass('fillfail');
            }
            else {
                $('#optA').removeClass('fillfail');
            }
            if (!option2) {
                $('#optB').addClass('fillfail');
            }
            else {
                $('#optB').removeClass('fillfail');
            }
            if (!option3) {
                $('#optC').addClass('fillfail');
            }
            else {
                $('#optC').removeClass('fillfail');
            }
            if (!option4) {
                $('#optD').addClass('fillfail');
            }
            else {
                $('#optD').removeClass('fillfail');
            }
            if (!correctid) {
                $('#correct').children('.fillnoti').removeClass('hide');
            }
            else {
                $('#correct').children('.fillnoti').addClass('hide');
            }
            if (subjectid == 0) {
                $('#subjectopt').next('.fillnoti').removeClass('hide');
            }
            else {
                $('#subjectopt').next('.fillnoti').addClass('hide');
            }
            if (gradeid == 0) {
                $('#gradeopt').next('.fillnoti').removeClass('hide');
            }
            else {
                $('#gradeopt').next('.fillnoti').addClass('hide');
            }
            if (moduleid == 0) {
                $('#moduleopt').next('.fillnoti').removeClass('hide');
            }
            else {
                $('#moduleopt').next('.fillnoti').addClass('hide');
            }

            if (questioncontent && option1 && option2 && option3 && option4 && correctid && subjectid != 0 && gradeid != 0 && moduleid != 0) {
                $('#pvquestion').text(questioncontent);
                $('#pvopt1').text(option1);
                $('#pvopt2').text(option2);
                $('#pvopt3').text(option3);
                $('#pvopt4').text(option4);
                $('#pvsubject').text(subjecttext);
                $('#pvgrade').text(gradeid + 'th grade');
                $('#pvmodule').text(moduletext);
                switch (correctid) {
                    case 'a':
                        $('#pvopt1').addClass('rightanswer');
                        break;
                    case 'b':
                        $('#pvopt2').addClass('rightanswer');
                        break;
                    case 'c':
                        $('#pvopt3').addClass('rightanswer');
                        break;
                    case 'd':
                        $('#pvopt4').addClass('rightanswer');
                        break;
                }
            }
        }
        else if (!multiple) {
            if (subjectid == 0) {
                $('#subjectopt').next('.fillnoti').removeClass('hide');
            }
            else {
                $('#subjectopt').next('.fillnoti').addClass('hide');
            }
            if (gradeid == 0) {
                $('#gradeopt').next('.fillnoti').removeClass('hide');
            }
            else {
                $('#gradeopt').next('.fillnoti').addClass('hide');
            }
            if (moduleid == 0) {
                $('#moduleopt').next('.fillnoti').removeClass('hide');
            }
            else {
                $('#moduleopt').next('.fillnoti').addClass('hide');
            }
            if (questioncontent && subjectid!=0 && gradeid!=0 &&moduleid!=0) {
                $('#pvquestion').text(questioncontent);
                $('#pvsubject').text(subjecttext);
                $('#pvgrade').text(gradeid + 'th grade');
                $('#pvmodule').text(moduletext);
            }
        }






    });

    $('#addbtn').click(function() {


        if (multiple) {
            console.log('addquestionajaxmultiple');

            $.ajax ({

                method: "POST",
                url: "./addquestion.php",
                data: "check="+checkmultiple+"&question="+questioncontent+"&opt1="+option1+"&opt2="+option2+"&opt3="+option3+"&opt4="+option4+"&ca="+correctid+"&subject="+subjectid+"&grade="+gradeid+"&module="+moduletext,
                success: function (data) {
                    if (data == 'true') {

                        console.log("success");

                    }
                    else {
                        console.log("fail");
                        console.log(checkmultiple);
                    }
                }
            });
            return false;
        }

        else if (!multiple) {
            console.log('addquestionajaxopen');
            $.ajax ({

                method: "POST",
                url: "./addquestion.php",
                data: "check="+checkmultiple+"&question="+questioncontent+"&subject="+subjectid+"&grade="+gradeid+"&module="+moduletext,
                success: function (data) {
                    if (data == 'true') {

                        console.log("success");

                    }
                    else {

                        console.log("fail");
                        console.log(checkmultiple);
                    }
                }
            });
            return false;
        }

    });

    $("#datepicker").datepicker({minDate:0, maxDate: "+24M"});


});




/**
 * Created by Jun Ge on Oct.2015.
 */
