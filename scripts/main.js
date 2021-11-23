$(function () {

    $("#lessInfo").hide();

  $("#preview_1, #preview_2, #preview_3, #preview_4").hover(
      function () {
          $(this).addClass("onHover");
    },
    function () {
        $(this).removeClass("onHover");
    }
    );
    
    $("#moreInfo").on("click", function () {
        $("#name_1, #date_1,#category_1,#link_1").hide();
        $(this).hide();
        $("#lessInfo").show();
        $("#description_1").append(
            "<p id='removeThis'> This is a short description of some text that i will be adding to my description to fullfill a requirement of a higher grade. Is this enough or do I have to keep typing?<p>")
    });
        $("#lessInfo").on("click", function () {
          $("#name_1, #date_1,#category_1,#link_1").show();
          $(this).hide();
          $("#moreInfo").show();
            $("#removeThis").remove();
        });
    $("#submit_Message").on("click", function () {
        $("#remove_1,#remove_2,#remove_3,#remove_4,#remove_5,#remove_6").remove();
        $(this).hide()
        $("#contact_Me").append("<div id='thank_You'><p>Thank You for your message. We will be in Contact with you shortly!</p></div>")
        })
});
