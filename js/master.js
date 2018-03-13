  jssor_1_slider_init = function() {
  var jssor_1_SlideshowTransitions = [
    {$Duration:800,$Opacity:2}
  ];

  var jssor_1_options = {
    $AutoPlay: false,
    $Cols: 1,
    $Align: 0,
    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: jssor_1_SlideshowTransitions,
      $TransitionsOrder: 1
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*#region responsive code begin*/

  var MAX_WIDTH = 1400;

  function ScaleSlider() {
      var containerElement = jssor_1_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

          var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

          jssor_1_slider.$ScaleWidth(expectedWidth);
      }
      else {
          window.setTimeout(ScaleSlider, 30);
      }
  }

  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
};

/* ARROW GO TO TOP */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}