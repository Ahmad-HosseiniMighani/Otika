$(document).ready(function () {
  $("#sidebar").height($(window).height());
  $(window).on("resize", function () {
    $("#sidebar").height($(window).height());
    setTopforSidebar();
  });
  $(window).scroll(function () {
    setTopforSidebar();
  });
  let hideSearchBar = function () {
    if ($(window).width() < 454) {
      $(".navbar-collapse").attr("style", "display:none !important;");
    } else {
      $(".navbar-collapse").attr("style", "");
    }
  };
  hideSearchBar();
  let minimizeSidebar = function () {
    if ($("#sidebar").hasClass("minimized")) {
      $("#sidebar").removeClass("col-lg-1 text-center minimized");
      $("#sidebar").addClass("col-lg-2");
      $("#main").removeClass("col-lg-11");
      $("#main").addClass("col-lg-10");
      $("#sidebar").find("span").show();
      $("#sidebar").find("small").show();
      $("#sidebar").find("strong").show();
      $("#sidebar").find(".sidebar-logo").find("img").addClass("pr-2");
      $("#sidebar").find("i").removeClass("pt-1");
      $("#sidebar").find("i").addClass("pl-1");
      $("#sidebar").find("li").removeClass("mb-2");
      $("#sidebar").find("li").find("a").removeClass("mx-3");
      $("#sidebar").find("li").find("a").css("border-radius", "");
    } else {
      $("#sidebar").addClass("col-lg-1 text-center minimized");
      $("#sidebar").removeClass("col-lg-2");
      $("#main").removeClass("col-lg-10");
      $("#main").addClass("col-lg-11");
      $("#sidebar").find("span").hide();
      $("#sidebar").find("small").hide();
      $("#sidebar").find("strong").hide();
      $("#sidebar").find(".sidebar-logo").find("img").removeClass("pr-2");
      $("#sidebar").find("i").addClass("pt-1");
      $("#sidebar").find("i").removeClass("pl-1");
      $("#sidebar").find("li").addClass("mb-2");
      $("#sidebar").find("li").find("a").addClass("mx-3");
      $("#sidebar").find("li").find("a").css("border-radius", "10px");
    }
  };
  $("#minimize-sidebar").click(function () {
    //SIDEBAR MINIMIZER (FOR LARGe SIZE)
    minimizeSidebar();
    drawCharts();
  });
  let slideToRight = function (checking) {
    if (!$("#sidebar").hasClass("slide-from-right")) {
      $("#sidebar").addClass("slide-from-right");
      $("#sidebar-shadow").css("background-color", "rgba(0,0,0,0)");
      $("#sidebar-shadow").removeClass("display-block-JQ");
    } else {
      $("#sidebar").removeClass("slide-from-right");
      $("#sidebar-shadow").addClass("display-block-JQ");
      $("#sidebar-shadow").css("background-color", "rgba(0,0,0,0.4)");
    }
  };
  let setTopforSidebar = function () {
    if ($(window).width() < 992) {
      $("#sidebar").css("top", $(window).scrollTop());
      $("#sidebar-shadow").css("top", $(window).scrollTop());
    } else {
      $("#sidebar").css("top", "");
      $("#sidebar-shadow").css("top", "");
    }
  };
  let checkSizeForSideBar = function () {
    if ($(window).width() < 992) {
      $("#sidebar").removeClass("col-lg-1 text-center minimized");
      $("#sidebar").addClass("col-lg-2");
      $("#main").removeClass("col-lg-11");
      $("#main").addClass("col-lg-10");
      $("#sidebar").find("span").show();
      $("#sidebar").find("small").show();
      $("#sidebar").find("strong").show();
      $("#sidebar").find(".sidebar-logo").find("img").addClass("pr-2");
      $("#sidebar").find("i").removeClass("pt-1");
      $("#sidebar").find("i").addClass("pl-1");
      $("#sidebar").find("li").removeClass("mb-2");
      $("#sidebar").find("li").find("a").removeClass("mx-3");
      $("#sidebar").find("li").find("a").css("border-radius", "");
      $("#sidebar").addClass("slide-from-right");
      $("#sidebar-shadow").removeClass("display-block-JQ");
      $("#sidebar-shadow").css("background-color", "");
    } else {
      $("#sidebar").removeClass("slide-from-right");
      $("#sidebar-shadow").removeClass("display-block-JQ");
    }
  };
  checkSizeForSideBar();
  $("#slide-to-right-sidebar").click(function () {
    //SIDEBAR MINIMIZER (FOR LARG SIZE)
    slideToRight();
  });
  $("#sidebar-shadow").click(function () {
    slideToRight();
  });
  $(window).on("resize", function () {
    checkSizeForSideBar();
    hideSearchBar();
    $("#big-Chart-container").html(
      '<canvas id="big-chart" height="100px"></canvas>'
    );
    drawCharts();
  });
  // CHARTS
  let drawCharts = function () {
    let chartObj = {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [5, 15, 14, 36, 32, 32],
            label: "Low",
            borderColor: "#727aad",
            borderWidth: 3,
            fill: false,
          },
          {
            data: [7, 11, 30, 18, 25, 13],
            label: "High",
            borderColor: "#c7c7c7",
            borderWidth: 3,
            fill: false,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        responsive: true,
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "درآمد",
              },
            },
          ],
        },
      },
    };
    $("#big-Chart-container").html(
      '<canvas id="big-chart" height="100px"></canvas>'
    );
    new Chart(document.getElementById("big-chart"), chartObj); //big chart
    $("#chart1-container").html('<canvas id="chart1" height="250px"></canvas>');
    new Chart(document.getElementById("chart1"), chartObj); //chart1
    $("#chart2-container").html('<canvas id="chart2" height="250px"></canvas>');
    new Chart(document.getElementById("chart2"), chartObj); //chart2
    $("#chart3-container").html('<canvas id="chart3" height="250px"></canvas>');
    new Chart(document.getElementById("chart3"), chartObj); //chart3
  };
  drawCharts();
  let tableSellectAllisChecked = false;
  $("#tableSellectAll").click(function () {
    if (!tableSellectAllisChecked) {
      $(".table-1").find("input").attr("checked", "checked");
      tableSellectAllisChecked = !tableSellectAllisChecked;
    } else {
      $(".table-1").find("input").removeAttr("checked");
      tableSellectAllisChecked = !tableSellectAllisChecked;
    }
  });
});
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
