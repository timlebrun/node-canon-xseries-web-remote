/* Copyright CANON INC. 2015 */
var ctrl = {
        ctrlMap: {
            ID1101: {
                type: "page",
                advanced: !0,
                metadata: !0,
                basic: !0,
                name: "Advanced",
                uri: "advanced.htm"
            },
            ID1102: {
                type: "page",
                advanced: !0,
                metadata: !0,
                basic: !0,
                name: "Metadata",
                uri: "metadata.htm"
            },
            ID1103: {
                type: "page",
                advanced: !0,
                metadata: !0,
                basic: !0,
                name: "Basic",
                uri: "basic.htm"
            },
            ID1105: {
                type: "langDisp",
                subType: "langStr",
                advanced: !0,
                metadata: !0,
                basic: !1
            },
            ID1106: {
                type: "langDisp",
                subType: "langBtn",
                advanced: !0,
                metadata: !0,
                basic: !1
            },
            ID5101: {
                type: "langSel",
                advanced: !0,
                metadata: !0,
                basic: !1,
                value: 0
            },
            ID5102: {
                type: "langSel",
                advanced: !0,
                metadata: !0,
                basic: !1,
                value: 1
            },
            ID5103: {
                type: "langSel",
                advanced: !0,
                metadata: !0,
                basic: !1,
                value: 2
            },
            ID5104: {
                type: "langSel",
                advanced: !0,
                metadata: !0,
                basic: !1,
                value: 3
            },
            ID5105: {
                type: "langSel",
                advanced: !0,
                metadata: !0,
                basic: !1,
                value: 4
            },
            ID5106: {
                type: "langSel",
                advanced: !0,
                metadata: !0,
                basic: !1,
                value: 5
            },
            ID5107: {
                type: "langSel",
                advanced: !0,
                metadata: !0,
                basic: !1,
                value: 6
            },
            ID5108: {
                type: "langSel",
                advanced: !0,
                metadata: !0,
                basic: !1,
                value: 7
            },
            ID_LangSelect: {
                type: "langSelFrame",
                advanced: !0,
                metadata: !0,
                basic: !1
            },
            ID_Lang: {
                type: "langLayer",
                advanced: !0,
                metadata: !0,
                basic: !1
            },
            ID9100: {
                type: "layer",
                subType: "focus",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID9101: {
                type: "layer",
                subType: "iris",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID9102: {
                type: "layer",
                subType: "view",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID9103: {
                type: "layer",
                subType: "fbtn",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID9104: {
                type: "layer",
                subType: "nbtn",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1500_Lock: {
                type: "layer",
                subType: "wbm",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1510_Lock: {
                type: "layer",
                subType: "wbv",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1520_Lock: {
                type: "layer",
                subType: "av",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1530_Lock: {
                type: "layer",
                subType: "ssm",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1540_Lock: {
                type: "layer",
                subType: "ssv",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1550_Lock: {
                type: "layer",
                subType: "gcm",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1560_Lock: {
                type: "layer",
                subType: "gcv",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1570_Lock: {
                type: "layer",
                subType: "am",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1731: {
                type: "layer",
                subType: "assign1",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1732: {
                type: "layer",
                subType: "assign2",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1733: {
                type: "layer",
                subType: "assign3",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1734: {
                type: "layer",
                subType: "assign4",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1412: {
                type: "layer",
                subType: "stepzoom1",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1422: {
                type: "layer",
                subType: "stepzoom2",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1432: {
                type: "layer",
                subType: "stepzoom3",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1442: {
                type: "layer",
                subType: "stepzoom4",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1452: {
                type: "layer",
                subType: "stepzoom5",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1462: {
                type: "layer",
                subType: "stepzoom6",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1427: {
                type: "layer",
                subType: "zoom",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1428: {
                type: "layer",
                subType: "zoom",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID_Lock_Button_Normal: {
                type: "lock",
                advanced: !0,
                metadata: !0,
                basic: !0
            },
            ID_Lock_Button_Locked: {
                type: "unlock",
                advanced: !0,
                metadata: !0,
                basic: !0
            },
            ID1250: {
                type: "label",
                subType: "focus",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1251: {
                type: "label",
                subType: "focus",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1252: {
                type: "label",
                subType: "focus",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1253: {
                type: "label",
                subType: "iris",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1260: {
                type: "label",
                subType: "zoom",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1261: {
                type: "label",
                subType: "zoom",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1262: {
                type: "label",
                subType: "zoom",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1711: {
                type: "label",
                subType: "assign1",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1712: {
                type: "label",
                subType: "assign2",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1713: {
                type: "label",
                subType: "assign3",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1714: {
                type: "label",
                subType: "assign4",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1259: {
                type: "label",
                subType: "rec",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1258: {
                type: "label",
                subType: "view",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1701: {
                type: "text",
                subType: "assign",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1702: {
                type: "text",
                subType: "assign",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1703: {
                type: "text",
                subType: "assign",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1704: {
                type: "text",
                subType: "assign",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1401: {
                type: "ctrl",
                subType: "fbtn",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    sw: "focus"
                }
            },
            ID1402: {
                type: "ctrl",
                subType: "nbtn",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    sw: "nd"
                }
            },
            ID1211: {
                type: "ctrl",
                subType: "focus",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    fl: "near3"
                }
            },
            ID1212: {
                type: "ctrl",
                subType: "focus",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    fl: "near2"
                }
            },
            ID1213: {
                type: "ctrl",
                subType: "focus",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    fl: "near1"
                }
            },
            ID1214: {
                type: "ctrl",
                subType: "focus",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    fl: "far1"
                }
            },
            ID1215: {
                type: "ctrl",
                subType: "focus",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    fl: "far2"
                }
            },
            ID1216: {
                type: "ctrl",
                subType: "focus",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    fl: "far3"
                }
            },
            ID1217: {
                type: "ctrl",
                subType: "iris",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    iris: "minus"
                }
            },
            ID1218: {
                type: "ctrl",
                subType: "iris",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    iris: "plus"
                }
            },
            ID1227: {
                type: "ctrl",
                subType: "zoom",
                advanced: !0,
                metadata: !1,
                basic: !0,
                uri: "/api/cam/drivelens",
                params: {
                    zoom: "tele1"
                }
            },
            ID1228: {
                type: "ctrl",
                subType: "zoom",
                advanced: !0,
                metadata: !1,
                basic: !0,
                uri: "/api/cam/drivelens",
                params: {
                    zoom: "wide1"
                }
            },
            ID1403: {
                type: "ctrl",
                subType: "slot",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/rec",
                params: {
                    cmd: "slot"
                }
            },
            ID1224: {
                type: "ctrl",
                subType: "rec",
                advanced: !0,
                metadata: !1,
                basic: !0,
                uri: "/api/cam/rec",
                params: {
                    cmd: "trig"
                }
            },
            ID1721: {
                type: "ctrl",
                subType: "assign1",
                advanced: !0,
                metadata: !1,
                basic: !0,
                uri: "/api/cam/assignbutton",
                params: {
                    num: "1"
                }
            },
            ID1722: {
                type: "ctrl",
                subType: "assign2",
                advanced: !0,
                metadata: !1,
                basic: !0,
                uri: "/api/cam/assignbutton",
                params: {
                    num: "2"
                }
            },
            ID1723: {
                type: "ctrl",
                subType: "assign3",
                advanced: !0,
                metadata: !1,
                basic: !0,
                uri: "/api/cam/assignbutton",
                params: {
                    num: "3"
                }
            },
            ID1724: {
                type: "ctrl",
                subType: "assign4",
                advanced: !0,
                metadata: !1,
                basic: !0,
                uri: "/api/cam/assignbutton",
                params: {
                    num: "4"
                }
            },
            ID1411: {
                type: "ctrl",
                subType: "stepzoom1",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    stepzoom: "1"
                }
            },
            ID1421: {
                type: "ctrl",
                subType: "stepzoom2",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    stepzoom: "2"
                }
            },
            ID1431: {
                type: "ctrl",
                subType: "stepzoom3",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    stepzoom: "3"
                }
            },
            ID1441: {
                type: "ctrl",
                subType: "stepzoom4",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    stepzoom: "4"
                }
            },
            ID1451: {
                type: "ctrl",
                subType: "stepzoom5",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    stepzoom: "5"
                }
            },
            ID1461: {
                type: "ctrl",
                subType: "stepzoom6",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/drivelens",
                params: {
                    stepzoom: "6"
                }
            },
            ID1225: {
                type: "ctrl",
                subType: "zoom",
                advanced: !1,
                metadata: !1,
                basic: !0,
                uri: "/api/cam/drivelens",
                params: {
                    zoom: "wide3"
                }
            },
            ID1226: {
                type: "ctrl",
                subType: "zoom",
                advanced: !1,
                metadata: !1,
                basic: !0,
                uri: "/api/cam/drivelens",
                params: {
                    zoom: "wide2"
                }
            },
            ID1229: {
                type: "ctrl",
                subType: "zoom",
                advanced: !1,
                metadata: !1,
                basic: !0,
                uri: "/api/cam/drivelens",
                params: {
                    zoom: "tele2"
                }
            },
            ID1230: {
                type: "ctrl",
                subType: "zoom",
                advanced: !1,
                metadata: !1,
                basic: !0,
                uri: "/api/cam/drivelens",
                params: {
                    zoom: "tele3"
                }
            },
            ID1223: {
                type: "view",
                subType: "view",
                advanced: !0,
                metadata: !1,
                basic: !0
            },
            ID1500: {
                type: "statusSel",
                subType: "wbm",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1500Pr: {
                type: "statusSel",
                subType: "wbm",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1500Pe: {
                type: "statusSel",
                subType: "wbm",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1510: {
                type: "statusSel",
                subType: "wbv",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1510P: {
                type: "statusNonSel",
                subType: "wbv",
                advanced: !0,
                metadata: !1,
                basic: !1,
                uri: "/api/cam/getprop",
                params: {
                    r: "wbv"
                }
            },
            ID1520: {
                type: "statusSel",
                subType: "av",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1530: {
                type: "statusSel",
                subType: "ssm",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1540: {
                type: "statusSel",
                subType: "ssv",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1550: {
                type: "statusSel",
                subType: "gcm",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1560: {
                type: "statusSel",
                subType: "gcv",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1570: {
                type: "statusSel",
                subType: "am",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID1801: {
                type: "close2nd",
                advanced: !0,
                metadata: !1,
                basic: !1
            },
            ID2211a: {
                type: "mcbtn",
                subType: "active",
                advanced: !1,
                metadata: !0,
                basic: !1
            },
            ID2212p: {
                type: "mcbtn",
                subType: "send",
                advanced: !1,
                metadata: !0,
                basic: !1,
                target: 0
            },
            ID2213p: {
                type: "mcbtn",
                subType: "send",
                advanced: !1,
                metadata: !0,
                basic: !1,
                target: 1
            },
            ID2213p0: {
                type: "mcbtn",
                subType: "send",
                advanced: !1,
                metadata: !0,
                basic: !1,
                target: 1
            },
            ID2222e: {
                type: "mcbtn",
                subType: "send",
                advanced: !1,
                metadata: !0,
                basic: !1,
                target: 2
            },
            ID2403: {
                type: "clear",
                advanced: !1,
                metadata: !0,
                basic: !1,
                targets: ["ID2402"]
            },
            ID2413: {
                type: "clear",
                advanced: !1,
                metadata: !0,
                basic: !1,
                targets: ["ID2412"]
            },
            ID2423: {
                type: "clear",
                advanced: !1,
                metadata: !0,
                basic: !1,
                targets: ["ID2422"]
            },
            ID2433: {
                type: "clear",
                advanced: !1,
                metadata: !0,
                basic: !1,
                targets: ["ID2432"]
            },
            ID2454: {
                type: "clear",
                advanced: !1,
                metadata: !0,
                basic: !1,
                targets: "ID2443 ID2446 ID2447 ID2448 ID2451 ID2452 ID2453".split(" ")
            }
        },
        subTypeMap: null,
        getTopObj: function(a) {
            a = common.getEventSrc(a); - 1 != a.id.indexOf("WRAP_", 0) && (a = common.get(a.id.replace("WRAP_", "")));
            return a
        },
        getButtonObj: function(a) {
            a = common.getEventSrc(a); - 1 != a.id.indexOf("WRAP_", 0) && (a = common.get(a.id.replace("WRAP_", "BTN_")));
            return a
        },
        cbButtonEvt: function(a) {
            var c = ctrl.getButtonObj(a),
                b = ctrl.getTopObj(a),
                d = ctrl.ctrlMap[b.id];
            switch (a.type) {
                case "mouseover":
                case "mousedown":
                case "touchstart":
                    "langSel" ==
                    d.type ? b.className = "lsel lsel_o" : "langSelFrame" != d.type && "langLayer" != d.type && common.changeClickImage(c, !0);
                    break;
                case "click":
                    ctrl.buttonExec(a);
                    "langSel" == d.type ? b.className = "lsel lsel_n" : "langSelFrame" != d.type && "langLayer" != d.type && common.changeClickImage(c, !1);
                    break;
                case "mouseout":
                case "touchmove":
                case "touchend":
                    "langSel" == d.type ? b.className = "lsel lsel_n" : "langSelFrame" != d.type && "langLayer" != d.type && common.changeClickImage(c, !1)
            }
        },
        buttonExec: function(a) {
            var c = ctrl.getTopObj(a),
                b = ctrl.ctrlMap[c.id];
            switch (b.type) {
                case "page":
                    window.location.replace(b.uri);
                    break;
                case "langDisp":
                    common.isShow("ID_Lang") ? common.hide("ID_Lang") : common.show("ID_Lang");
                    break;
                case "langSel":
                    common.hide("ID_Lang");
                    lang.change(b.value);
                    common.stopEvent(common.getEvent(a));
                    break;
                case "langSelFrame":
                    common.stopEvent(common.getEvent(a));
                    break;
                case "langLayer":
                    common.hide("ID_Lang");
                    common.stopEvent(common.getEvent(a));
                    break;
                case "lock":
                    currentLock.executeKey(!0);
                    break;
                case "unlock":
                    currentLock.executeKey(!1);
                    break;
                case "ctrl":
                case "statusNonSel":
                    if (b.disabled) {
                        var d =
                            b.disabled;
                        for (a = 0; a < d.length; a++) ctrl.enabledSubType(d[a], 0), statusCtrl.current[d[a]].en = 0
                    }
                    if (0 === b.subType.indexOf("stepzoom"))
                        if ("run" === statusCtrl.current.zoomstatus) {
                            common.ajax(b.uri, {
                                params: {
                                    stepzoom: "0"
                                }
                            });
                            break
                        } else {
                            a = b.subType.slice(-1);
                            if ("1" === a && 0 === statusCtrl.current.Ozoom.pos || "6" === a && 100 === statusCtrl.current.Ozoom.pos) break;
                            for (a = 1; 7 > a; a++) b.subType === "stepzoom" + a && !(Math.abs(20 * (a - 1) - statusCtrl.current.Ozoom.pos) <= 10 * (10 - 3 * statusCtrl.current.Ozoom.speed)) ? c.src = "../images/rc/ZmPsB_n.gif" :
                                (ctrl.enabledSubType("stepzoom" + a, !1), statusCtrl.current["stepzoom" + a].en = 0);
                            ctrl.enabledSubType("zoom", !1);
                            statusCtrl.current.zoom.en = 0;
                            statusCtrl.current.zoomstatus = "run"
                        } common.ajax(b.uri, {
                        params: b.params
                    });
                    break;
                case "view":
                    view.send(!0);
                    break;
                case "statusSel":
                    ctrl.changeScreen("ID_Control_Status", "ID_Control_Setting");
                    secondCtrl.settingScope(b.subType);
                    break;
                case "close2nd":
                    ctrl.changeScreen("ID_Control_Setting", "ID_Control_Status");
                    secondCtrl.close();
                    break;
                case "mcbtn":
                    "send" == b.subType ? metaCtrl.sendData(b.target) :
                        metaCtrl.active();
                    break;
                case "clear":
                    metaCtrl.clear(b.targets, a)
            }
        },
        showSubType: function(a, c) {
            if (a in ctrl.subTypeMap)
                for (var b = ctrl.subTypeMap[a], d = 0; d < b.length; d++) "layer" != ctrl.ctrlMap[b[d].id].type && (c ? common.show(b[d]) : common.hide(b[d]))
        },
        enabledSubType: function(a, c) {
            if (a in ctrl.subTypeMap)
                for (var b = ctrl.subTypeMap[a], d = 0; d < b.length; d++) {
                    var e = ctrl.ctrlMap[b[d].id].type;
                    "layer" == e ? c ? common.hide(b[d]) : common.show(b[d]) : "statusSel" != e && "statusNonSel" != e && common.changeDisabledImage(b[d], !c)
                }
        },
        changeScreen: function(a,
            c) {
            common.hide(a);
            common.show(c)
        },
        lock: function() {
            var a, c = !1,
                b, d;
            common.isShow("ID_Lock") ? (common.hide("ID_Lock"), a = !1) : (common.show("ID_Lock"), a = !0);
            for (var e in ctrl.subTypeMap) {
                c = !1;
                switch (e) {
                    case "lock":
                    case "unlock":
                    case "langSel":
                    case "langSelFrame":
                    case "close2nd":
                        c = !0;
                        break;
                    case "focus":
                    case "iris":
                    case "view":
                        0 === statusCtrl.current[e].en ? c = !0 : a || (ctrl.enabledSubType(e, !0), c = !0);
                        break;
                    case "wbm":
                    case "wbv":
                    case "am":
                    case "av":
                    case "ssm":
                    case "ssv":
                    case "gcm":
                    case "gcv":
                    case "assign1":
                    case "assign2":
                    case "assign3":
                    case "assign4":
                    case "stepzoom1":
                    case "stepzoom2":
                    case "stepzoom3":
                    case "stepzoom4":
                    case "stepzoom5":
                    case "stepzoom6":
                    case "zoom":
                        0 ===
                            statusCtrl.current[e].en ? c = !0 : a || ctrl.enabledSubType(e, !0)
                }
                if (!c) {
                    var f = ctrl.subTypeMap[e];
                    for (b = 0; b < f.length; b++) switch (ctrl.ctrlMap[f[b].id].type) {
                        case "layer":
                            break;
                        case "langLayer":
                            common.hide(f[b]);
                            break;
                        case "langDisp":
                            if ("langStr" == e) {
                                c = common.getChilds(f[b], "IMG");
                                for (d = 0; d < c.length; d++) - 1 == c[d].id.indexOf("WRAP_", 0) && common.changeDisabledImage(c[d], a);
                                a ? common.get("STR_" + f[b].id).className = "lstr lstr_d" : common.get("STR_" + f[b].id).className = "lstr lstr_n"
                            } else common.changeDisabledImage(f[b],
                                a);
                            break;
                        case "statusSel":
                        case "statusNonSel":
                            c = common.getChilds(f[b], "IMG");
                            for (d = 0; d < c.length; d++) - 1 == c[d].id.indexOf("WRAP_", 0) && common.changeDisabledImage(c[d], a);
                            break;
                        case "text":
                            common.changeStyle(a, f[b], "oasn");
                            break;
                        default:
                            common.changeDisabledImage(f[b], a)
                    }
                }
            }
            "Metadata" == def.ctrl.name && metaCtrl.lock(a)
        },
        init: function() {
            ctrl.subTypeMap = [];
            for (var a in ctrl.ctrlMap) {
                var c = ctrl.ctrlMap[a],
                    b = c.type;
                if ("Advanced" != def.ctrl.name || c.advanced)
                    if ("Metadata" != def.ctrl.name || c.metadata)
                        if ("Basic" !=
                            def.ctrl.name || c.basic) {
                            var d = common.get(a);
                            switch (b) {
                                case "page":
                                    c.name != def.ctrl.name && common.addEvent(d, "click", ctrl.cbButtonEvt, !1);
                                    break;
                                case "langSelFrame":
                                case "langLayer":
                                    common.addEvent(d, "click", ctrl.cbButtonEvt, !1);
                                    break;
                                case "langSel":
                                    common.get(a).innerHTML = LANG_DATA[c.value].name;
                                    common.addEvent(d, "mouseover", ctrl.cbButtonEvt, !1);
                                    common.addChangeImageEvent(d, ctrl.cbButtonEvt, !1);
                                    break;
                                case "langDisp":
                                case "lock":
                                case "unlock":
                                case "ctrl":
                                case "view":
                                case "statusSel":
                                case "statusNonSel":
                                case "close2nd":
                                case "mcbtn":
                                case "clear":
                                    var e =
                                        d;
                                    if ("statusSel" == b || "statusNonSel" == b) e = common.get("WRAP_" + a);
                                    common.addChangeImageEvent(e, ctrl.cbButtonEvt, !1)
                            }
                            "subType" in c && (b = c.subType);
                            b in ctrl.subTypeMap || (ctrl.subTypeMap[b] = []);
                            ctrl.subTypeMap[b].push(d)
                        }
            }
            "Metadata" == def.ctrl.name && metaCtrl.setData();
            switch (common.getCookies().authlevel) {
                case "ctrl":
                case "meta":
                    ctrl.showSubType("page", !1)
            }
            metaCtrl.resizeTextBox()
        }
    },
    metaCtrl = {
        titleLock: "ID2401 ID2411 ID2421 ID2431 ID2441 ID2442 ID2444 ID2449".split(" "),
        titleGPS: ["ID2441", "ID2442", "ID2444",
            "ID2449"
        ],
        saves: "ID2402 ID2412 ID2422 ID2432 ID2443 ID2450 ID2451 ID2452 ID2453 ID2445 ID2446 ID2447 ID2448".split(" "),
        lock: function(a) {
            var c;
            for (c = 0; c < metaCtrl.titleLock.length; c++) {
                var b = common.get(metaCtrl.titleLock[c]);
                common.changeStyle(a, b, "str")
            }
            b = ["input", "textarea", "select", "option"];
            for (c = 0; c < b.length; c++)
                for (var d = document.getElementsByTagName(b[c]), e = 0; e < d.length; e++) common.changeStyle(a, d[e], "iobj"), d[e].disabled = a ? !0 : !1;
            a || this.gpsInfoOnOff(statusCtrl.current.gpsunit.en)
        },
        gpsInfoOnOff: function(a) {
            var c,
                b = "ID2443 ID2445 ID2446 ID2447 ID2448 ID2450 ID2451 ID2452 ID2453".split(" ");
            for (c = 0; c < metaCtrl.titleGPS.length; c++) {
                var d = common.get(metaCtrl.titleGPS[c]);
                common.changeStyle(a, d, "str")
            }
            for (c = 0; c < b.length; c++) d = common.get(b[c]), common.changeStyle(a, d, "iobj"), d.disabled = a ? !0 : !1
        },
        active: function() {
            common.hide("ID2210a");
            common.show("ID2210d");
            metaCtrl.sendActive()
        },
        sendActive: function() {
            common.ajax("/api/cam/ctrlmeta", {
                callback: metaCtrl.cbSendActive,
                params: {
                    cmd: "activate"
                }
            })
        },
        cbSendActive: function(a) {
            "busy" ==
            a.res && setTimeout(metaCtrl.sendActive, prop.ajax.retryInterval)
        },
        sendData: function(a) {
            var c = common.get("ID2402");
            c.value = common.trim(c.value);
            var b = common.get("ID2412");
            b.value = common.trim(b.value);
            var b = b.value.replace(/\r|\n|\t/g, " "),
                d = common.get("ID2422");
            d.value = common.trim(d.value);
            var e = common.get("ID2432");
            e.value = common.trim(e.value);
            var f = common.get("ID2443");
            f.value = common.trim(f.value);
            var g = common.get("ID2446");
            g.value = common.trim(g.value);
            var h = common.get("ID2447");
            h.value = common.trim(h.value);
            var k = common.get("ID2448");
            k.value = common.trim(k.value);
            var l = common.get("ID2451");
            l.value = common.trim(l.value);
            var m = common.get("ID2452");
            m.value = common.trim(m.value);
            var n = common.get("ID2453");
            n.value = common.trim(n.value);
            if (100 < c.value.length) common.messageBox.view(LANG_DATA[lang.current].msgTitle, !0);
            else if (100 < b.length) common.messageBox.view(LANG_DATA[lang.current].msgCreator, !0);
            else if (100 < d.value.length) common.messageBox.view(LANG_DATA[lang.current].msgLocation, !0);
            else if (1E3 < e.value.length) common.messageBox.view(LANG_DATA[lang.current].msgDescription,
                !0);
            else {
                var p = !1;
                if (f.value)
                    if (-1 != f.value.indexOf("\u3000")) p = !0;
                    else if (-1 != f.value.indexOf(".")) p = !0;
                else if (isFinite(f.value)) {
                    if (-999999 > parseFloat(f.value) || 999999 < parseFloat(f.value)) p = !0
                } else p = !0;
                if (p) common.messageBox.view(LANG_DATA[lang.current].msgAltitude, !0);
                else {
                    if (g.value || h.value || k.value || l.value || m.value || n.value) {
                        g = metaCtrl.validateDeg(g, 180);
                        if (-1 == g) {
                            common.messageBox.view(LANG_DATA[lang.current].msgLongitude, !0);
                            return
                        }
                        h = metaCtrl.validateMin(h);
                        if (-1 == h) {
                            common.messageBox.view(LANG_DATA[lang.current].msgMinute,
                                !0);
                            return
                        }
                        k = metaCtrl.validateSec(k);
                        if (-1 == k) {
                            common.messageBox.view(LANG_DATA[lang.current].msgSecond, !0);
                            return
                        }
                        if (180 == g && (h || k)) {
                            common.messageBox.view(LANG_DATA[lang.current].msgLongitude, !0);
                            return
                        }
                        l = metaCtrl.validateDeg(l, 90);
                        if (-1 == l) {
                            common.messageBox.view(LANG_DATA[lang.current].msgLatitude, !0);
                            return
                        }
                        m = metaCtrl.validateMin(m);
                        if (-1 == m) {
                            common.messageBox.view(LANG_DATA[lang.current].msgMinute, !0);
                            return
                        }
                        n = metaCtrl.validateSec(n);
                        if (-1 == n) {
                            common.messageBox.view(LANG_DATA[lang.current].msgSecond,
                                !0);
                            return
                        }
                        if (90 == l && (m || n)) {
                            common.messageBox.view(LANG_DATA[lang.current].msgLatitude, !0);
                            return
                        }
                    }
                    common.isShow("ID2210p") ? (common.hide("ID2210p"), common.show("ID2210d")) : common.isShow("ID2210p0") ? (common.hide("ID2210p0"), common.show("ID2210d")) : common.isShow("ID2220e") && (common.hide("ID2220e"), common.show("ID2220d"));
                    a = {
                        target: a,
                        title: c.value,
                        creator: b,
                        location: d.value,
                        description: e.value,
                        altitude: f.value,
                        longitude: metaCtrl.convert("ID2445", "ID2446", "ID2447", "ID2448"),
                        latitude: metaCtrl.convert("ID2450",
                            "ID2451", "ID2452", "ID2453")
                    };
                    c = !0;
                    b = [];
                    b.push("{");
                    for (var q in a) c ? c = !1 : b.push(","), b.push('"'), b.push(q), b.push('":'), "target" == q ? b.push(a[q]) : (b.push('"'), b.push(common.jsonEscape(a[q])), b.push('"'));
                    b.push("}");
                    common.ajax("/api/cam/postmeta", {
                        type: "POST",
                        params: b.join("")
                    })
                }
            }
        },
        validateDeg: function(a, c) {
            var b = a.value;
            if (!b || -1 != b.indexOf("\u3000") || !isFinite(b)) return -1;
            b = parseInt(b, 10);
            return 0 > b || c < b ? -1 : b
        },
        validateMin: function(a) {
            a = a.value;
            if (!a || -1 != a.indexOf("\u3000") || !isFinite(a)) return -1;
            a = parseInt(a, 10);
            return 0 > a || 59 < a ? -1 : a
        },
        validateSec: function(a) {
            a = a.value;
            if (!a || -1 != a.indexOf("\u3000") || !isFinite(a)) return -1;
            a = common.roundExtend(parseFloat(a), 1);
            return 0 > a || 59.9 < a ? -1 : a
        },
        convertMap: {
            ID2450: ["N", "S"],
            ID2445: ["E", "W"]
        },
        convert: function(a, c, b, d) {
            var e = common.get(a).selectedIndex;
            c = common.get(c);
            b = common.get(b);
            d = common.get(d);
            if (!c.value || !b.value || !d.value) return "";
            c = parseInt(c.value, 10);
            b = parseInt(b.value, 10);
            d = parseFloat(d.value);
            return 0 === c + b + d ? metaCtrl.convertMap[a][e] + "0.00000" :
                metaCtrl.convertMap[a][e] + common.roundExtend(c + b / 60 + d / 3600, 5).toFixed(5)
        },
        clear: function(a, c) {
            for (var b = 0; b < a.length; b++) {
                var d = common.get(a[b]);
                d.value = "";
                metaCtrl.saveData(d)
            }
        },
        cbChange: function(a) {
            a = common.getEventSrc(a);
            metaCtrl.saveData(a)
        },
        saveDataAll: function() {
            for (var a = 0; a < metaCtrl.saves.length; a++) {
                var c = common.get(metaCtrl.saves[a]);
                metaCtrl.saveData(c)
            }
        },
        saveData: function(a) {
            if (window.sessionStorage) switch (a.type) {
                case "text":
                case "textarea":
                    0 === a.value.length ? window.sessionStorage.removeItem(a.id) :
                        window.sessionStorage.setItem(a.id, a.value);
                    break;
                case "select-one":
                    window.sessionStorage.setItem(a.id, a.selectedIndex)
            }
        },
        setData: function() {
            if (window.sessionStorage)
                for (var a = 0; a < metaCtrl.saves.length; a++) {
                    var c = common.get(metaCtrl.saves[a]);
                    common.addEvent(c, "change", metaCtrl.cbChange, !1);
                    switch (c.type) {
                        case "text":
                        case "textarea":
                            c.value = window.sessionStorage.getItem(c.id) || "";
                            break;
                        case "select-one":
                            c.selectedIndex = window.sessionStorage.getItem(c.id) || 0
                    }
                }
        },
        resizeTextBox: function() {
            for (var a = ["input",
                    "textarea"
                ], c = 0; c < a.length; c++)
                for (var b = document.getElementsByTagName(a[c]), d = 0; d < b.length; d++) {
                    var e = common.px(b[d], "width"),
                        f, g;
                    BrowserType.IE == common.Browser ? (f = common.px(b[d], "borderLeftWidth"), g = common.px(b[d], "borderRightWidth")) : (f = common.px(b[d], "border-left-width"), g = common.px(b[d], "border-right-width"));
                    b[d].style.width = e - f - g + "px";
                    e = common.px(b[d], "height");
                    BrowserType.IE == common.Browser ? (f = common.px(b[d], "borderTopWidth"), g = common.px(b[d], "borderBottomWidth")) : (f = common.px(b[d], "border-top-width"),
                        g = common.px(b[d], "border-bottom-width"));
                    b[d].style.height = e - f - g + "px"
                }
        }
    };