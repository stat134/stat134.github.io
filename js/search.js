// Sample resources for now; would like dictionary of term, type, and tags
var resources = ["abstract","theorem","proof","professor","lecture","axiom","sets","field axioms","cauchy sequences","cardinality","subsequences","alternating series","continuity","riemann integration","convergence","closed sets","connectedness","closure","boundary","compactness","homework 1","homework 2","homework 3","homework 4"];

var definitions = {}

$(document).ready(function() {
    $("#results-table").hide();
    $("#text-box").keyup(function() {
      $("#table-data").empty();
      var box_text = $("#text-box").val();
      var to_append = [];
      for (var i = 0; i < resources.length; i++) {
        if (resources[i].indexOf(box_text) > -1) {
          to_append.push(resources[i]);
        }
      }

      if (box_text.length > 0) {
        $("#results-table").show();
        for (var i = 0; i < to_append.length; i++) {
            // var resource_name =
            // var resource_type =
            // var resource tags =

            // Used google.com as a placeholder; add path to relevant resource
            $("#table-data").append("<tr><td><a href=\"http://google.com\">" + to_append[i] + "</a></td>\" + <td>Definition</td> <td>Math, Fun</td> </tr>");

        }
      }
      else {
        $("#results-table").hide();
      }
    });


    // toggle long/short version of syllabus
    $("#toggle_syllabus").click(function() {
      $("#syllabus_long").slideToggle();
      if ( $("#toggle_syllabus").text() == "Show Full Syllabus" ) {
        $("#toggle_syllabus").text("Show Less");
      }
      else if ( $("toggle_syllabus").text("Show Less")) {
        $("#toggle_syllabus").text("Show Full Syllabus");
      }
      console.log($("#toggle_syllabus").text());
    });
    
    // toggle long/short version of tldr
    $("#toggle_tldr").click(function() {
      $("#tldr_long").slideToggle();
      if ( $("#toggle_tldr").text() == "Why?" ) {
        $("#toggle_tldr").text("Alright, enough with the lecture.");
      }
      else if ( $("toggle_tldr").text("Alright, enough with the lecture.")) {
        $("#toggle_tldr").text("Why?");
      }
      console.log($("#toggle_tldr").text());
    });

});
