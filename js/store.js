// Load website
function main() {
	var query = getQuery();
	// switch (query.length) {
	// case 0:
	// 	loadProjectsList(query);
	// 	break;
    //
	// default:
	// 	updateProjectUI(query);
	// 	break;
    //
	// }
    loadProjectsList()
}

// Load Projects List UI
function loadProjectsList() {
    document.title = "Leb - Pillows & Blankets";
    document.body.appendChild(eFD({
        _type: "nav", class: "navbar navbar-default" ,role:"navigation"
        , children: [
            {
                    _type: "div", class: "navbar-header"
                    , children: [
                    {
                        _type: "button",
                        type: "button",
                        class: "navbar-toggle collapsed",
                        'data-toggle': "collapse",
                        'data-target': "#bs-example-navbar-collapse-1",
                        'aria-expanded': "false"
                        ,
                        children: [
                            {_type: "span", class: "sr-only", innerHTML: "Toggle navigation"}
                            , {_type: "span", class: "icon-bar"}, {_type: "span", class: "icon-bar"}
                            , {_type: "span", class: "icon-bar"}
                        ]
                    },
                    {_type:"img",id:"logoImg" , class: "navbar-brand", href: "#", src:"img/leb.png"}

                , {
                    _type: "div", class: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1", children: [
                        {
                            _type: "ul", class: "nav navbar-nav navbar-right"
                            , children: [
                            {
                                _type: "li"
                                , children: [
                                {_type: "a", class: "page-scroll", href: "#portfolio", innerHTML: "Collección"}
                            ]
                            },
                            {
                                _type: "li"
                                , children: [
                                {_type: "a", class: "page-scroll", href: "#services", innerHTML: "Información"}
                            ]
                            },
                            {
                                _type: "li"
                                , children: [
                                {_type: "a", class: "page-scroll", href: "#about", innerHTML: "Nuestra historia"}
                            ]
                            },
                            {
                                _type: "li"
                                , children: [
                                {_type: "a", class: "page-scroll", href: "#contact", innerHTML: "Contacto"}
                            ]
                            },
                            {
                                _type: "li", class: "dropdown"
                                , children: [
                                {
                                    _type: "a",
                                    href: "#",
                                    class:"dropdown-toggle",
                                    'data-toggle':"dropdown",
                                    innerHTML:"Productos"
                                    ,
                                    children: [{_type: "b", class: "caret"}]
                                }, {
                                    _type: "ul", class: "dropdown-menu"
                                    , children: [
                                        {
                                            _type: "li"
                                            , children: [
                                            {_type: "a", href: "#", innerHTML: "Almuhadones"}
                                        ]
                                        },
                                        {
                                            _type: "li"
                                            , children: [
                                            {_type: "a", href: "#", innerHTML: "Mantas"}
                                        ]
                                        },
                                        {
                                            _type: "li"
                                            , children: [
                                            {_type: "a", href: "#", innerHTML: "Cabezales"}
                                        ]
                                        }
                                    ]
                                }
                            ]
                            }
                        ]
                        }
                    ]
                }
            ]
            }
        ]
    }));

    document.body.appendChild(eFD({
            _type: "div", class: "container",
            children: [
                {
                    _type: "div", class: "row"
                    , children: [
                    {
                        _type: "div", class: "box",
                        children: [
                            {
                                _type: "div", class: "col-lg-12 text-center",
                                children: [
                                    {
                                        _type: "div", id: "carousel-example-generic", class: "carousel slide",
                                        children: [
                                            {
                                                _type: "ol", class: "carousel-indicators hidden-xs",
                                                children: [
                                                    {
                                                        _type: "li",
                                                        'data-target': "#carousel-example-generic",
                                                        'data-slide-to': "0",
                                                        class: "active"
                                                    }
                                                    , {
                                                        _type: "li",
                                                        'data-target': "#carousel-example-generic",
                                                        'data-slide-to': "1"
                                                    }
                                                    , {
                                                        _type: "li",
                                                        'data-target': "#carousel-example-generic",
                                                        'data-slide-to': "2"
                                                    }
                                                ]
                                            },
                                            {
                                                _type: "div", class: "carousel-inner"
                                                , children: [
                                                {
                                                    _type: "div", class: "item active",
                                                    children: [
                                                        {
                                                            _type: "img",
                                                            class: "img-responsive img-full",
                                                            src: "img/original.jpg"
                                                        }
                                                    ]
                                                },
                                                {
                                                    _type: "div", class: "item",
                                                    children: [
                                                        {
                                                            _type: "a", href: "http://www.google.com", target: "_blank"
                                                            , children: [
                                                            {
                                                                _type: "img",
                                                                class: "img-responsive img-full",
                                                                src: "img/original.jpg"
                                                            }
                                                        ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    _type: "div", class: "item",
                                                    children: [
                                                        {
                                                            _type: "img",
                                                            class: "img-responsive img-full",
                                                            src: "img/original.jpg"
                                                        }
                                                    ]
                                                }
                                            ]
                                            },
                                            {
                                                _type: "a",
                                                class: "left carousel-control",
                                                href: "#carousel-example-generic",
                                                "data-slide": "prev",
                                                children: [
                                                    {_type: "span", class: "icon-prev"}
                                                ]
                                            },
                                            {
                                                _type: "a",
                                                class: "right carousel-control",
                                                href: "#carousel-example-generic",
                                                'data-slide': "next",
                                                children: [
                                                    {_type: "span", class: "icon-next"}
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
                }
            ]
        }
        )
    );

    document.body.appendChild(eFD({
        _type:"aside", id:"portfolio",
        children:[
            {
                _type:"div", class:"container-fluid",
                children:[
                    {
                        _type:"div", class:"row no-gutter popup-gallery",
                        children:[
                            {
                                _type:"div", class:"col-lg-4 col-sm-6",
                                children:[
                                    {
                                        _type:"a", href:"img/portfolio/fullsize/7p.jpg", class:"portfolio-box",
                                        children:[
                                            {
                                                _type:"img", src:"img/portfolio/thumbnails/7p.jpg", class:"img-responsive"
                                            },
                                            {
                                                _type:"div", class:"portfolio-box-caption",
                                                children:[
                                                    {
                                                        _type:"div", class:"portfolio-box-caption-content",
                                                        children:[
                                                            {
                                                                _type:"div", class:"project-category text-faded", innerHTML:"Kids"
                                                            },
                                                            {
                                                                _type:"div", class:"project-name", innerHTML:"Pompon"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-4 col-sm-6",
                                children:[
                                    {
                                        _type:"a", href:"img/portfolio/fullsize/2p.jpg", class:"portfolio-box",
                                        children:[
                                            {
                                                _type:"img", src:"img/portfolio/thumbnails/2p.jpg", class:"img-responsive"
                                            },
                                            {
                                                _type:"div", class:"portfolio-box-caption",
                                                children:[
                                                    {
                                                        _type:"div", class:"portfolio-box-caption-content",
                                                        children:[
                                                            {
                                                                _type:"div", class:"project-category text-faded", innerHTML:"Living"
                                                            },
                                                            {
                                                                _type:"div", class:"project-name", innerHTML:"Fresh"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-4 col-sm-6",
                                children:[
                                    {
                                        _type:"a", href:"img/portfolio/fullsize/3p.jpg", class:"portfolio-box",
                                        children:[
                                            {
                                                _type:"img", src:"img/portfolio/thumbnails/3p.jpg", class:"img-responsive"
                                            },
                                            {
                                                _type:"div", class:"portfolio-box-caption",
                                                children:[
                                                    {
                                                        _type:"div", class:"portfolio-box-caption-content",
                                                        children:[
                                                            {
                                                                _type:"div", class:"project-category text-faded", innerHTML:"Clásico"
                                                            },
                                                            {
                                                                _type:"div", class:"project-name", innerHTML:"Blue Style"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-4 col-sm-6",
                                children:[
                                    {
                                        _type:"a", href:"img/portfolio/fullsize/4p.jpg", class:"portfolio-box",
                                        children:[
                                            {
                                                _type:"img", src:"img/portfolio/thumbnails/4p.jpg", class:"img-responsive"
                                            },
                                            {
                                                _type:"div", class:"portfolio-box-caption",
                                                children:[
                                                    {
                                                        _type:"div", class:"portfolio-box-caption-content",
                                                        children:[
                                                            {
                                                                _type:"div", class:"project-category text-faded", innerHTML:"Humor"
                                                            },
                                                            {
                                                                _type:"div", class:"project-name", innerHTML:"Happines"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-4 col-sm-6",
                                children:[
                                    {
                                        _type:"a", href:"img/portfolio/fullsize/5p.jpg", class:"portfolio-box",
                                        children:[
                                            {
                                                _type:"img", src:"img/portfolio/thumbnails/5p.jpg", class:"img-responsive"
                                            },
                                            {
                                                _type:"div", class:"portfolio-box-caption",
                                                children:[
                                                    {
                                                        _type:"div", class:"portfolio-box-caption-content",
                                                        children:[
                                                            {
                                                                _type:"div", class:"project-category text-faded", innerHTML:"Ella elije"
                                                            },
                                                            {
                                                                _type:"div", class:"project-name", innerHTML:"Poder rosa"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-4 col-sm-6",
                                children:[
                                    {
                                        _type:"a", href:"img/portfolio/fullsize/6p.jpg", class:"portfolio-box",
                                        children:[
                                            {
                                                _type:"img", src:"img/portfolio/thumbnails/6p.jpg", class:"img-responsive"
                                            },
                                            {
                                                _type:"div", class:"portfolio-box-caption",
                                                children:[
                                                    {
                                                        _type:"div", class:"portfolio-box-caption-content",
                                                        children:[
                                                            {
                                                                _type:"div", class:"project-category text-faded", innerHTML:"Clásico"
                                                            },
                                                            {
                                                                _type:"div", class:"project-name", innerHTML:"La femme"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]

    }));


    document.body.appendChild(eFD({
        _type:"section", id:"services",
        children:[
            {
                _type:"div", class:"container",
                children:[
                    {
                        _type:"div", class:"row",
                        children:[
                            {
                                _type:"div", class:"col-lg-12 text-center",
                                children:[
                                    {
                                        _type:"h2", class:"section-heading", innerHTML:"Pensamos en vos"
                                    }
                                    ,{
                                        _type:"hr", class:"primary"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                _type:"div", class:"container",
                children:[
                    {
                        _type:"div", class:"row",
                        children:[
                            {
                                _type:"div", class:"col-lg-3 col-md-6 text-center",
                                children:[
                                    {
                                        _type:"div", class:"service-box",
                                        children:[
                                            {
                                                _type:"i", class:"fa fa-4x fa-diamond text-primary sr-icons"
                                            },
                                            {
                                                _type:"h3", innerHTML:"Diseño"
                                            },
                                            {
                                                _type:"p", class:"text-muted", innerHTML:"Hace único tu hogar"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-3 col-md-6 text-center",
                                children:[
                                    {
                                        _type:"div", class:"service-box",
                                        children:[
                                            {
                                                _type:"i", class:"fa fa-4x fa-thumbs-up text-primary sr-icons"
                                            },
                                            {
                                                _type:"h3", innerHTML:"Calidad"
                                            },
                                            {
                                                _type:"p", class:"text-muted", innerHTML:"Las mejores telas, doble costura, para que duren para siempre"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-3 col-md-6 text-center",
                                children:[
                                    {
                                        _type:"div", class:"service-box",
                                        children:[
                                            {
                                                _type:"i", class:"fa fa-4x fa-home text-primary sr-icons"
                                            },
                                            {
                                                _type:"h3", innerHTML:"En todos lados"
                                            },
                                            {
                                                _type:"p", class:"text-muted", innerHTML:"No solo podes decorar la cama, probalos en los sillones"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-3 col-md-6 text-center",
                                children:[
                                    {
                                        _type:"div", class:"service-box",
                                        children:[
                                            {
                                                _type:"i", class:"fa fa-4x fa-heart text-primary sr-icons"
                                            },
                                            {
                                                _type:"h3", innerHTML:"Hechos con Amor"
                                            },
                                            {
                                                _type:"p", class:"text-muted", innerHTML:"Todos nuestros productos están hechos a mano"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }));


    document.body.appendChild(eFD({
        _type:"section", class:"bg-primary", id:"about",
        children:[
            { _type:"div", class:"container",
             children:[
                 { _type:"div", class:"row",
                     children:[
                         { _type:"div", class:"col-lg-8 col-lg-offset-2 text-center",
                         children:[
                             { _type:"img", style:"max-width:150px;max-height:150px", src:"img/logo-white.png"},
                             { _type:"hr", class:"light"},
                             { _type:"p", class:"text-faded", innerHTML:"Todo surgío de una idea chica, casi por casualidad, me mudé, y para decorar mi casa quería almuadones facheros, como no encontré decicí hacer los mios"},
                             { _type:"a", href:"#services", class:"page-scroll btn btn-default btn-xl sr-button",innerHTML:"Miralos!"}
                         ]
                         }
                     ]
                 }
             ]
            }
        ]
    }));

    document.body.appendChild(eFD({
        _type:"section", id:"contact",
        children:[
            {
                _type:"div", class:"container",
                children:[
                    {
                        _type:"div", class:"row",
                        children:[
                            {
                                _type:"div", class:"col-lg-8 col-lg-offset-2 text-center",
                                children:[
                                    {
                                        _type:"h2", class:"section-heading", innerHTML:"Que estás esperando?!"
                                    },
                                    {
                                        _type:"hr", class:"primary"
                                    },
                                    {
                                        _type:"p", innerHTML:"Tu casa puede ser como la soñaste"
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-4 col-lg-offset-2 text-center text-primary sr-icons",
                                children:[
                                    {
                                        _type:"i", class:"fa fa-phone fa-3x sr-contact"
                                    },
                                    {
                                        _type:"p", innerHTML:"123-456-789"
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-4 text-center",
                                children:[
                                    {
                                        _type:"i", class:"fa fa-envelope-o fa-3x sr-contact text-primary sr-icons"
                                    },
                                    {
                                        _type:"p",
                                        children:[
                                            {
                                                _type:"a", href:"mailto:your-email@your-domain.com",innerHTML:"leb@gmail.com"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-2 col-lg-offset-4 text-center text-primary sr-icons",
                                children:[
                                    {
                                        _type:"i", class:"fa fa-facebook fa-3x sr-contact"
                                    },
                                    {
                                        _type:"p",children:[
                                        {
                                            _type:"a", href:"https://www.facebook.com/Leboficial/", innerHTML:"Leboficial"
                                        }
                                        ]
                                    }
                                ]
                            },
                            {
                                _type:"div", class:"col-lg-2 text-center text-primary sr-icons",
                                children:[
                                    {
                                        _type:"i", class:"fa fa-instagram fa-3x sr-contact"
                                    },
                                    {
                                        _type:"p",children:[
                                        {
                                            _type:"a", href:"https://www.instagram.com/leboficial/", innerHTML:"@Leboficial"
                                        }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }));

    document.body.appendChild(eFD({
        _type:"script", src:"vendor/jquery/jquery.min.js"
    }));

    document.body.appendChild(eFD({
        _type:"script", src:"vendor/bootstrap/js/bootstrap.min.js"
    }));

    document.body.appendChild(eFD({
        _type:"script", src:"vendor/scrollreveal/scrollreveal.min.js"
    }));

    document.body.appendChild(eFD({
        _type:"script", src:"vendor/magnific-popup/jquery.magnific-popup.min.js"
    }));

    document.body.appendChild(eFD({
        _type:"script", src:"js/creative.min.js"
    }));
    document.body.appendChild(eFD({
        _type:"script", src:"js/jquery.easing.min.js"
    }));
    document.body.appendChild(eFD({
        _type:"script", src:"js/scrolling-nav.js"
    }));





}

// Load Project UI
// function loadProject(query) {
// 	var jsonFile = query["project"] + "/files.txt";
// 	getJSON({ url:jsonFile, callback:updateProjectUI, onfail:updateProjectUIError });
// }
function updateProjectUIError(userInfo) {
	alert("updateProjectUIError:" + userInfo);
}

function generateManifest(userInfo) {
	var bundleID = userInfo["bundleID"];
	var version = userInfo["version"];
	var title = userInfo["title"];
	var subtitle = userInfo["subtitle"];
	var filepath = userInfo["filepath"];
	var iconpath = userInfo["iconpath"];

	var source = userInfo["source"];
	var serverPath = "";
	if (source === "ryd-server") {
		serverPath = source;
	} else {
		serverPath = "201.216.198.25";
	}

	var baseURL = "https://" + serverPath + ":8282/" + "/";
	//getWindowBaseHref().replace(/index.*/, "");

	var fileURL = baseURL + filepath;
	var iconURL = baseURL + iconpath;

	return '\
	<?xml version="1.0" encoding="UTF-8"?>\
	<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\
	<plist version="1.0">\n\
	<dict>\n\
		<key>items</key>\n\
		<array>\n\
			<dict>\n\
				<key>metadata</key>\n\
				<dict>\n\
					<key>kind</key>\n\
					<string>software</string>\n\
					<key>bundle-identifier</key>\n\
					<string>' + bundleID + '</string>\n\
					<key>bundle-version</key>\n\
					<string>' + version + '</string>\n\
					<key>title</key>\n\
					<string>' + title + '</string>\n\
	                <key>subtitle</key>\n\
	                <string>' + subtitle + '</string>\n\
				</dict>\n\
				<key>assets</key>\n\
				<array>\n\
					<dict>\n\
						<key>kind</key>\n\
						<string>display-image</string>\n\
						<key>needs-shine</key>\n\
						<false/>\n\
						<key>url</key>\n\
						<string>' + baseURL + iconpath + '</string>\n\
					</dict>\n\
					<dict>\n\
						<key>kind</key>\n\
						<string>software-package</string>\n\
						<key>url</key>\n\
						<string>' + baseURL + filepath + '.ipa</string>\n\
					</dict>\n\
				</array>\n\
			</dict>\n\
		</array>\n\
	</dict>\n\
	</plist>\n\
	';
}

var data = {};
function SomeMethod(self) {
	var userInfo = data[self.id];
	userInfo["source"] = self.innerHTML;
	var manifest = generateManifest(data[self.id]);
	var link = "data:application/x-plist," + encodeURIComponent(manifest);
	self.href = link;
	self.setAttribute('onClick', (function(){}));
}

function iosDownloadURL(userInfo) {
	var filepath = userInfo["filepath"];
	var source = getWindowBaseHref().indexOf("ryd-server") == -1 ? ".external" : ".internal";
	var url = getWindowBaseHref().replace("index.html", filepath) + source + ".plist";
	return "itms-services://?action=download-manifest&amp;url=" + url;
	// var manifest = generateManifest(userInfo);
	// var link = "data:application/x-plist," + encodeURIComponent(manifest);
	// return "itms-services://?action=download-manifest&amp;url=" + link;
}

function droidDownloadURL(userInfo) {
	var filepath = userInfo["filepath"];
	return getWindowBaseHref().replace("https://","http://").replace(":8282",":8181").replace("index.html", filepath + ".apk")
}

function noDownloadURL(self) {
	var userInfo = data[self.id];
	var title = userInfo["title"];
	var platform = self.getAttribute("platform");

	alert("No existe una descarga de " + title + " para " + platform + ".");
}

function updateProjectUI(userInfo) {
	//elementPrintDescription(userInfo);

	var query = getQuery();
	var showDownload = query["dl"];
	var Qproject = query["project"];
	if (Qproject === "q4tech") {
		window.document.title = "Q4Store";
	} else {
		window.document.title = userInfo["title"];
	}

	var project = userInfo["project"];
	var products = userInfo["products"];


	// Object.prototype.forEachKey = function (f) {
	// 	var obj = this;
	// 	Object.keys(obj).forEach(function(key, index) {
	// 		var val = obj[key];
	// 		f(key, obj);
	// 	});
	// }

	// products.forEachKey(function(key, val) {
	// 	var item = val;
	// document.body.appendChild(eFD({ _type:"h2", innerHTML:project }));
	// var list = eFD({ _type:"ul"});
    //
	// Object.keys(products).forEach(function(key, index) {
	// 	var item = products[key];
	// 	var bundleID = item["bundleID"];
	// 	var title = item["title"];
	// 	var version = item["version"];
	// 	var description = item["description"];
	// 	var platforms = item["platforms"];
	// 	var filepath = item["filepath"];
	// 	var iconpath = item["iconpath"];
	// 	var date = item["date"];
    //
	// 	var externalFileName = key + ".external.plist"
	// 	var internalFileName = key + ".internal.plist"
    //
	// 	data[bundleID] = item;
    //
	// 	var ios = 0;
	// 	var droid = 0
	// 	platforms.forEach(function(platform, index) {
	// 		if (platform === "ios") {
	// 			ios = 1;
	// 		}
	// 		if (platform === "droid") {
	// 			droid = 1;
	// 		}
	// 	});
	// 	iosClass = (!clientIsIos) ? "disabledLink" : (ios) ? "enabledLink" : "unavailableLink";
	// 	droidClass = (!clientIsDroid) ? "disabledLink" : (droid) ? "enabledLink" : "unavailableLink";
    //
	// 	list.appendChild(eFD({ _type:"li"
	// 			, children:[
	// 				{ _type:"table", style:"width: 100%;"
	// 					, children:[
	// 						{ _type:"tbody"
	// 							, children:[
	// 								{ _type:"tr" // Icon + Title
	// 									, children:[
	// 										  { _type:"td", class:"block", style:"width: 1%;", rowspan:"3"
	// 											, children:[
	// 												{ _type:"img", class:"appIcon", style:"", src:iconpath }
	// 											]
	// 										}
	// 										, { _type:"td", class:"block", style:"", colspan:"3"
	// 											, children:[
	// 												  { _type:"h1", style:"", innerHTML:title }
  	// 											]
  	// 										}
	// 									]
	// 								}
	// 								, { _type:"tr" // Version + ios link
	// 									, children:[
	// 										  { _type:"td", class:"block", style:"", rowspan:"2"
	// 											, children:[
	// 												  { _type:"h3", style:"", innerHTML:"Version: " + version }
	//   												, { _type:"h3", style:"", innerHTML:date }
	// 											]
	// 										}
	// 										, { _type:"td", class:"block", style:"width: 1%;"
	// 											, children:[
	// 												{ _type:"img", class:"platformIcon", src:"res/img/ios_logo.jpg" }
	// 											]
	// 										}
	// 										, { _type:"td", class:"block", style:"width: 1%;"
	// 											, children:[
	// 												{ _type:"div", path:filepath, style:"padding: 10px;"
	// 													, children:[
	// 														{ _type:"a", class:"downloadLink " + iosClass, style:"", innerHTML:"Instalar"
	// 															, href:(!ios) ? "" : iosDownloadURL(item)
	// 															, id:bundleID, platform:"iOS", onClick:(!ios) ? "noDownloadURL(this)" : ""
	// 														}
	// 													]
	// 												}
	// 											]
	// 										}
	// 									]
	// 								}
	// 								, { _type:"tr" // droid link
	// 									, children:[
	// 										{ _type:"td", class:"block", style:"width: 1%;"
	// 											, children:[
	// 												{ _type:"img", class:"platformIcon", src:"res/img/android_logo.jpg" }
	// 											]
	// 										}
	// 										, { _type:"td", class:"block", style:"width: 1%;"
	// 											, children:[
	// 												{ _type:"div", path:filepath, style:"padding: 10px;"
	// 													, children:[
	// 														{ _type:"a", class:"downloadLink " + droidClass, style:"", innerHTML:"Instalar"
	// 															, href:(!droid) ? "" : droidDownloadURL(item)
	// 															, id:bundleID, platform:"Android", onClick:(!droid) ? "noDownloadURL(this)" : ""
	// 														}
	// 													]
	// 												}
	// 											]
	// 										}
	// 									]
	// 								}
	// 								, { _type:"tr" // Description
	// 									, children:[
	// 										{ _type:"td", class:"block", colspan:"4"
	// 											, children:[
	// 												{ _type:"div", class:"description", style:""
	// 													, innerHTML:description
	// 												}
	// 											]
	// 										}
	// 									]
	// 								}
	// 							]
	// 						}
	// 					]
	// 				}
	// 			]
	// 		}
	// 	));
	// 	if (showDownload) {
	// 		list.appendChild(eFD({ _type:"li"
	// 			, children:[
	// 				{ _type:"table", style:"width: 100%; padding-top: 10px; padding-bottom: 10px; padding-left: 10px"
	// 					, children:[
	// 						{ _type:"tbody"
	// 							, children:[
	// 								{ _type:"tr" // Icon
	// 									, children:[
	// 										  { _type:"td", class:"", style:""
	// 											, children:[
	// 												// { _type:"div", class:"", style:"margin: auto;"
	// 												// 	, children:[
	// 														{ _type:"a", class:"downloadLink enabledLink", style:"", innerHTML:"extern"
	// 															, id:bundleID, onClick:"SomeMethod(this)", download:externalFileName
	// 														}
	// 												// 	]
	// 												// }
	// 											]
	// 										}
	// 										, { _type:"td", class:"", style:""
	// 											, children:[
	// 												// { _type:"div", class:"", style:""
	// 												// 	, children:[
	// 														{ _type:"a", class:"downloadLink enabledLink", style:"", innerHTML:"intern"
	// 															, id:bundleID, onClick:"SomeMethod(this)", download:internalFileName
	// 														}
	// 												// 	]
	// 												// }
	// 											]
	// 										}
	// 									]
	// 								}
	// 							]
	// 						}
	// 					]
	// 				}
	// 			]
	// 		}));
	// 	}
	// });
	// if (0)list.appendChild(eFD({ _type:"li"
	// 	, children:[
	// 		{ _type:"table", style:"width: 100%; padding-top: 10px; padding-bottom: 10px; padding-left: 10px"
	// 			, children:[
	// 				{ _type:"tbody"
	// 					, children:[
	// 						{ _type:"tr"
	// 							, children:[
	// 								  { _type:"td", class:"block", style:"align: center"
	// 									, children:[
	// 										{ _type:"div", style:"", innerHTML:getMobileOperatingSystem() }
	// 									]
	// 								}
	// 							]
	// 						}
	// 					]
	// 				}
	// 			]
	// 		}
	// 	]
	// }));
	// document.body.appendChild(list);
}
