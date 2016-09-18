var resources = ["abstract","theorem","proof","professor","lecture","axiom","sets","field axioms","cauchy sequences","cardinality","subsequences","alternating series","continuity","riemann integration","convergence","closed sets","connectedness","closure","boundary","compactness","homework 1","homework 2","homework 3","homework 4"];

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
            $("#table-data").append("<tr><td>" + to_append[i] + "</td></tr>");
        }
      }
      else {
        $("#results-table").hide();
      }
    });
});
