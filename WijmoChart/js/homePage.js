(function () {
    'use strict';

    // Custom event raised after the fragment is appended to the DOM.
    WinJS.Application.addEventListener('fragmentappended', function handler(e) {
        if (e.location === '/html/homePage.html') { fragmentLoad(e.fragment, e.state); }
    });

    function fragmentLoad(elements, options) {
        WinJS.UI.processAll(elements)
            .then(function () {
            // TODO: Initialize the fragment here.            $("#wijpiechart").wijpiechart({                height: 600,
                width: 1024,
                seriesList: [{
                    label: "c#",
                    data: 215517
                },
                {
                    label: "java",
                    data: 157301
                },
                {
                    label: "php",
                    data: 145929
                },
                {
                    label: "javascript",
                    data: 130106,
                    offset: 40
                },
                {
                    label: "jquery",
                    data: 112379
                },
                {
                    label: "iphone",
                    data: 98851
                },
                {
                    label: "android",
                    data: 97204
                },
                {
                    label: ".net",
                    data: 90957
                },
                {
                    label: "asp.net",
                    data: 90505
                },
                {
                    label: "c++",
                    data: 86447
                }],
                textStyle: { fill: "#ffffff", "font-family": "Segoe UI Semilight", "font-size": "20pt", stroke: "none" },
                chartLabelStyle: { fill: "#242122", "font-family": "Segoe UI Semilight", "font-size": "20pt", stroke: "none" },
                hint: {
                    contentStyle: { "font-family": "Segoe UI Semilight", "font-size": "24pt", stroke: "none" },
                    content: function () {
                        return this.data.label + " : " + $.format(this.value / this.total, "p2");
                    }
                },
                header: {
                    visible: false
                },
                legend: {visible:false},
                seriesStyles: [{
                    fill: "180-rgb(255,15,3)-rgb(212,10,0)", stroke: "#FFFFFF", "stroke-width": "2"
                }, {
                    fill: "90-rgb(255,102,0)-rgb(255,117,25)", stroke: "#FFFFFF", "stroke-width": "2"
                }, {
                    fill: "90-rgb(255,158,1)-rgb(255,177,53)", stroke: "#FFFFFF", "stroke-width": "2"
                }, {
                    fill: "90-rgb(252,210,2)-rgb(255,215,29)", stroke: "#FFFFFF", "stroke-width": "2"
                }, {
                    fill: "90-rgb(248,255,1)-rgb(248,255,39)", stroke: "#FFFFFF", "stroke-width": "2"
                }, {
                    fill: "90-rgb(189,240,10)-rgb(176,222,9)", stroke: "#FFFFFF", "stroke-width": "2"
                }, {
                    fill: "90-rgb(4,210,21)-rgb(6,224,21)", stroke: "#FFFFFF", "stroke-width": "2"
                }, {
                    fill: "90-rgb(13,142,207)-rgb(17,157,229)", stroke: "#FFFFFF", "stroke-width": "2"
                }, {
                    fill: "90-rgb(13,82,209)-rgb(14,94,226)", stroke: "#FFFFFF", "stroke-width": "2"
                }, {
                    fill: "90-rgb(42,12,208)-rgb(50,15,225)", stroke: "#FFFFFF", "stroke-width": "2"
                }]

                });

            



        });
    }

    WinJS.Namespace.define('homePage', {
        fragmentLoad: fragmentLoad,
    });
})();
