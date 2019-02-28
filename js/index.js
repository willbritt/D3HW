var dataset = [ "Lion", "Zebra", "Giraffe", "Hippo"];
d3.select("body").append("p").text("Data Driven Document HW");
d3.select("body").selectAll("p").data(dataset).enter().append("p").text(function(d) {return d; });
