function livelyPropertyListener(name, val) {
  if (name == "event") {
    eventdate_input = val;
    startCountdown(); // Update the countdown with the new event date
  } else if (name == "backgroundColor") {
    $("body").css("background", val);
  } else if (name == "segmentColor") {
    $(".segment, .label").css("color", val);
  } else if (name == "segmentDigitsSize") {
    $(".segment, .dim-segment").css("fontSize", val + "px");
  } else if (name == "labelTextSize") {
    $(".label").css("fontSize", val + "px");
  } else if (name == "noiseTexture") {
    if (val) {
      $("body").css("backgroundImage", "url('/images/noise.png')");
    } else {
      $("body").css("backgroundImage", "none");
    }
  } else if (name == "dimSegmentColor") {
    $(".dim-segment").css("color", val);
  } else if (name == "showDimSegment") {
    $(".dim-segment").toggle(val);
  } else if (name == "gap") {
    $("li").css("padding", "0px " + val + "px");
  }
}
