// JavaScript Document

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

// Loads PDF's in a new window on Windows when rel="pdf" is used

function externalPdfs() {
 if (!document.getElementsByTagName) return;
 var anchors = document.getElementsByTagName("a");
 for (var i=0; i<anchors.length; i++) {
   var anchor = anchors[i];
   if (navigator.platform == "Win32" &&
	   anchor.getAttribute("href") &&
       anchor.getAttribute("rel") == "pdf")
     { anchor.target = "_blank";
	 anchors[i].title += 'This link opens a PDF document'; }
   else if (anchor.getAttribute("href") &&
       anchor.getAttribute("rel") == "pdf")
       anchors[i].title += 'This link opens a PDF document';
 }
}

// Combine functions which need window.onload so they don't overwrite each other.

addLoadEvent(function() {
	externalPdfs();	
	//otherFunctions();
	//goHere();
});