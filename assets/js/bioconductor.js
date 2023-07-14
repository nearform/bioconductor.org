// bioconductor.js
if (!/\.html$|\/$|#/.test(window.location.href))
  window.location.href = window.location.href + "/";

// global variables
var checkForEncryptInterval;
var gPayload;
var gMod;
var gExp;

// logging functions:
function log(message) {
  if (window.dump) {
    dump(message + "\n");
  }
}

// convenience functions
String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "");
};
String.prototype.ltrim = function () {
  return this.replace(/^\s+/, "");
};
String.prototype.rtrim = function () {
  return this.replace(/\s+$/, "");
};

//utility functions
var getParameterByName = function (name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null) return "";
  else return decodeURIComponent(results[1].replace(/\+/g, " "));
};

function addEvent(elem, evtType, func) {
  if (elem.addEventListener) {
    elem.addEventListener(evtType, func, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + evtType, func);
  } else {
    elem["on" + evtType] = func;
  }
}

// TODO homepage content page
// parse the page and pick out div's that have a certain class
// and change those into shaded boxes by adding HTML. this inserts
// table code, but that should be transparent to all users.
function renderShadedBoxes() {
  // prepare the HTML to insert into the divs of target class
  var insert1 =
    '<table cellspacing="0" cellpadding="0" class="sb"><tr><td class="sb1"></td><td class="sb2"></td><td class="sb3"></td></tr><tr><td class="sb4">&nbsp;</td><td class="sb5">';
  var insert2 =
    '</td><td class="sb6">&nbsp;</td></tr><tr><td class="sb7"></td><td class="sb8"></td><td class="sb9"></td></tr></table>';

  // obtain all the div's of the target class. note that pre-ie7 doesn't return .getAttribute('class') but does return .getAttribute('className') so we check for that specially
  var oDivs = document.getElementsByTagName("div");
  var className = "";
  for (var i = 0; i < oDivs.length; i++) {
    className =
      oDivs.item(i).getAttribute("class") ||
      oDivs.item(i).getAttribute("className"); //alert(className);
    if (className && className.indexOf("shaded_box") > -1) {
      //alert(i);
      oDivs.item(i).innerHTML = insert1 + oDivs.item(i).innerHTML + insert2;
      oDivs.item(i).className = ""; // this removes the shaded_box class from the original div so the styling i just made takes over
    }
  }
}

// check each page load to see if there is any shaded_box class
addEvent(window, "load", renderShadedBoxes);

// Masthead site navigation. we have five or more site navigation elements
// appearing at page top, and depending upon the current page url, we want
// the corresponding element to be olive and color unchanged at hover. we do this by pattern matching
// on the page url (client side), and turning the corresponding element olive.
// the position of each of the patterns corresponds to the masthead nav element number,
// e.g., the third element, /help/, which is index 3 (option base 1), matches masthead_nav_element_3
// we use one Array of matching patterns for each element in case one element needs to match more than one patten.
// examples are shown below, but adjust for your info architecture.
var masthead_nav_elements = Array(
  Array(/^\/$/, /^\/index\.html$/),
  Array(/\/install\//, /install\.html/),
  Array(/\/help\//),
  Array(/\/developers\//),
  Array(/\/about\//)
);

// TODO implement header
function checkNav() {
  for (var i = 0; i < masthead_nav_elements.length; i++) {
    for (var j = 0; j < masthead_nav_elements[i].length; j++) {
      if (masthead_nav_elements[i] && masthead_nav_elements[i][j]) {
        // skips elements that are blank
        if (window.location.pathname.match(masthead_nav_elements[i][j])) {
          // match at element i. make it olive
          if (document.getElementById("masthead_nav_element_" + (i + 1))) {
            document.getElementById(
              "masthead_nav_element_" + (i + 1)
            ).className = "masthead_nav_element masthead_nav_element_selected";
            return; // matched, so no need to continue checking.
          }
        }
      }
    }
  }
}
addEvent(window, "load", checkNav);

Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

if (!Object.keys) {
  Object.keys =
    Object.keys ||
    function (o) {
      var result = [];
      for (var name in o) {
        if (o.hasOwnProperty(name)) result.push(name);
      }
      return result;
    };
}

var tidyWorkflows = function () {
  if (document.getElementById("workflows")) {
    var workflows = [];
    var workflowElements = document.querySelectorAll(".workflow");
    workflowElements.forEach(function (element) {
      workflows.push(element.innerHTML);
    });

    document.getElementById("workflows_left").innerHTML = "";
    document.getElementById("workflows_right").innerHTML = "";

    var rands = {};
    while (Object.keys(rands).length < 4) {
      var rand = Math.floor(Math.random() * workflows.length);
      rands[rand] = -1;
    }

    var i = 0;
    var keys = Object.keys(rands).sort();
    keys.forEach(function (key) {
      var id = i < 2 ? "#workflows_left" : "#workflows_right";
      var html = document.querySelector(id).innerHTML;
      document.querySelector(id).innerHTML =
        html + "<li>" + workflows[parseInt(key)] + "</li>";
      i++;
    });
  }
};

var unRebaseMirrors = () => {
  if (typeof window.mirror !== undefined && mirror === true) {
    var wlh = window.location.href;
    var segs = wlh.split("/");
    var host = segs[2].replace(/^http:\/\//i, "");
    segs.pop();
    var url = segs.join("/");

    if (segs[3] !== "packages") {
      host += "/" + segs[3];
    }

    const links = document.querySelectorAll(".do_not_rebase a");
    links.forEach((link) => {
      var href = link.getAttribute("href");
      if (href && !href.match(/^http:/i)) {
        if (href.match(/^\//)) {
          link.setAttribute("href", "http://" + host + href);
        } else if (href.match(/^#/)) {
          link.setAttribute("href", url + "/" + href);
        }
      }
    });
  }
};

/*
 * The little file server we use for development does not follow symlinks, so see if we are running
 * that server (assume we are if we are not on port 80) and change URLs tagged with the "symlink"
 * class (e.g. containing "release" or "devel" to point to the actual file.
 */
var getHrefForSymlinks = function (href) {
  if (window.location.port === "") {
    return href;
  } else {
    var releaseRegex = /\/release\//;
    var develRegex = /\/devel\//;
    if (href.match(releaseRegex)) {
      return href.replace(releaseRegex, "/" + releaseVersion + "/");
    } else if (href.match(develRegex)) {
      return href.replace(develRegex, "/" + develVersion + "/");
    } else {
      return href;
    }
  }
};

var handleCitations = function () {
  if (document.getElementById("bioc_citation")) {
    document.getElementById("bioc_citation_outer").style.display = "none";
    let url = window.location.href.replace("html", "citations");
    var segs = url.split("/");
    var pkg = segs.pop().replace(".html", "");
    segs.push(pkg, "citation.html");
    url = segs.join("/");
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        data = data.replace(/}. /g, "");
        data = data.replace(/}.</g, "<");
        data = data.replace(/}."/g, '"');
        data = data.replace(" (????)", "");
        document.getElementById("bioc_citation").innerHTML = data;
        document.getElementById("bioc_citation_outer").style.display = "block";
      })
      .catch((error) => {
        // Handle error
      });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  unRebaseMirrors();
  tidyWorkflows();
  var symlinkElements = document.querySelectorAll(".symlink");
  symlinkElements.forEach(function (element) {
    var href = element.getAttribute("href");
    element.setAttribute("href", getHrefForSymlinks(href));
  });
  tippy(".rpack", { content: document.querySelector("#tooltip") });
  handleCitations();
});

var submit_tryitnow = function () {
  var tryitnowButton = document.getElementById("tryitnow_button");
  tryitnowButton.setAttribute("disabled", "disabled");
  tryitnowButton.setAttribute("value", "Please wait...");
  return true;
};

var processCaptchaResults = function (factoryFilename, captchaKey) {
  var s = `http://cloud.bioconductor.org:2112/cgi-bin/display_captcha.jpg?factoryFilename=${factoryFilename}&captchaKey=${captchaKey}`;
  document.getElementById("captcha_img").setAttribute("src", s);
  document.getElementById("captchaKey").setAttribute("value", captchaKey);
  document
    .getElementById("factoryFilename")
    .setAttribute("value", factoryFilename);
};
