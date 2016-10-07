function getQuery() {
	var url = window.location.href;
	var Q = {};
	var c = 0;
	if (url.indexOf('?') > 0) {
		var q = url.substring(url.indexOf('?')+1, url.length);
		var qs = q.split('&');
		for (i in qs) {
			var a = qs[i].split('=');
			Q[a[0]] = a[1];
			c++;
		}
	}
	Q.__defineGetter__("length", function() { return c; });
	return Q;
}

function getJSON(x) {
	return new microAjax(x.url, function (res) {
//console.log(res);
		var j;
		try {
			j = JSON.parse(res);
		} catch (e) {
			if (x.onfail) {
				x.onfail(e.message);
			}
			return;
		}
		x.callback(j);
	});
}

//http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
function include(filename) {
	var s = filename.split(".");
	var ext = s[s.length - 1];

	var fileref;
	if (ext == "js") {
		fileref = document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", filename);
	}
	if (ext == "css") {
		fileref = document.createElement('link');
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}

	//add to hierarchy
	if (typeof fileref != "undefined") {
		documentHead().appendChild(fileref);
	}
}

function setWindowTitle(t) {
	window.document.title = t;
}

function setWindowHref(h) {
	window.location.href = h;
}

function getWindowBaseHref() {
	var url = window.location.href;
	if (url.indexOf('?') < 0) {
		return url;
	}
	var q = url.substring(0, url.indexOf('?'));
	return q;
}

function startTimer(f, t) {
	oInterval = window.setInterval(f, t);
}

function stopTimer() {
	window.clearInterval(oInterval);
}

function scrollPageTo(x, y) {
	location.href = "javascript:scrollTo(" + x + "," + y + ")";
}

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    if (/Macintosh/i.test(userAgent)) {
        return "Macintosh";
    }

    if (/Windows/i.test(userAgent)) {
        return "Windows";
    }

    return userAgent;
}
