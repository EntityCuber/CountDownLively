function livelyPropertyListener(name, val) {
  if (name == "event") {
    eventdate_input = val;
    startCountdown(); // Update the countdown with the new event date
  } else if (name == "backgroundColor") {
    $("body").css("backgroundColor", val);
  } else if (name == "segmentColor") {
    $(".segment, .label").css("color", val);
  } else if (name == "segmentDigitsSize") {
    $(".segment, .dim-segment").css("fontSize", val + "px");
  } else if (name == "labelTextSize") {
    $(".label").css("fontSize", val + "px");
  } else if (name == "noiseTexture") {
    if (val) {
      $(".noise").css("backgroundImage", "url('/images/noise.png')");
    } else {
      $(".noise").css("backgroundImage", "none");
    }
  } else if (name == "dimSegmentColor") {
    $(".dim-segment").css("color", val);
  } else if (name == "showDimSegment") {
    $(".dim-segment").toggle(val);
  } else if (name == "gap") {
    $("li").css("padding", "0px " + val + "px");
  } else if (name == "backgroundImage") {
    var encodedVal = encodeURIComponent(val);
    var backgroundImageUrl = "url('/" + encodedVal + "')";
    $("body").css("backgroundImage", backgroundImageUrl);
  }
}
