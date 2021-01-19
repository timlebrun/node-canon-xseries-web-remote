/* Copyright CANON INC. 2015 */
function createImg(b) {
    var d = new Image;
    d.src = b;
    return d
}
var IMG_MAP = {
    "0": createImg("../images/rc/Num0_n.gif"),
    1: createImg("../images/rc/Num1_n.gif"),
    2: createImg("../images/rc/Num2_n.gif"),
    3: createImg("../images/rc/Num3_n.gif"),
    4: createImg("../images/rc/Num4_n.gif"),
    5: createImg("../images/rc/Num5_n.gif"),
    6: createImg("../images/rc/Num6_n.gif"),
    7: createImg("../images/rc/Num7_n.gif"),
    8: createImg("../images/rc/Num8_n.gif"),
    9: createImg("../images/rc/Num9_n.gif"),
    "/": createImg("../images/rc/SSpe_in.gif"),
    ".": createImg("../images/rc/F_F_n.gif"),
    ":": createImg("../images/rc/NumCo.gif"),
    "-": createImg("../images/rc/WB_M_n.gif"),
    "+": createImg("../images/rc/WB_P_n.gif"),
    "[": createImg("../images/rc/StNbL_n.gif"),
    "]": createImg("../images/rc/StNbR_n.gif"),
    N: createImg("../images/rc/NDCn.gif"),
    numdot: createImg("../images/rc/NumDot.gif"),
    numno: createImg("../images/rc/NumNo_n.gif"),
    recStby: createImg("../images/rc/Stby.gif"),
    recRec: createImg("../images/rc/Rec.gif"),
    recPreRecStby: createImg("../images/rc/PreStby.gif"),
    recPreRec: createImg("../images/rc/PreRec.gif"),
    recFrmStby: createImg("../images/rc/F_RecSt.gif"),
    recFrmRecStby: createImg("../images/rc/F_RecSt.gif"),
    recFrmRec: createImg("../images/rc/F_Rec.gif"),
    recIntStby: createImg("../images/rc/I_RecSt.gif"),
    recIntRecStby: createImg("../images/rc/I_RecSt.gif"),
    recIntRec: createImg("../images/rc/I_Rec.gif"),
    recSFStby: createImg("../images/rc/SF_RecSt.gif"),
    recSFRec: createImg("../images/rc/SF_Rec.gif"),
    recRecICON: createImg("../images/rc/RecIcon.gif"),
    recDoubleICON: createImg("../images/rc/DubIcon.gif"),
    recRecBTN: createImg(def.img.rec),
    recStbyBTN: createImg(def.img.stby),
    recPlsRec: createImg("../images/rc/PlsRec.gif"),
    recPlsStby: createImg("../images/rc/PlsStby.gif"),
    recPlsRecMXFRec: createImg("../images/rc/PlsRec.gif"),
    recPlsRecMXFStby: createImg("../images/rc/PlsStby.gif"),
    recPlsRecMP4Rec: createImg("../images/rc/PlsStby.gif"),
    recPlsRecMP4Stby: createImg("../images/rc/PlsStby.gif"),
    recMP4Rec: createImg("../images/rc/Mp4Rs_n.gif"),
    recMP4Stby: createImg("../images/rc/Mp4Rs_n.gif"),
    com1: createImg("../images/rc/Acom_1.gif"),
    com2: createImg("../images/rc/Acom_2.gif"),
    com3: createImg("../images/rc/Acom_3.gif"),
    com4: createImg("../images/rc/Acom_4.gif"),
    com5: createImg("../images/rc/Acom_5.gif"),
    com6: createImg("../images/rc/Acom_1.gif"),
    com7: createImg("../images/rc/Acom_7.gif"),
    com8: createImg("../images/rc/Acom_8.gif"),
    com9: createImg("../images/rc/Acom_9.gif"),
    com10: createImg("../images/rc/Acom_5.gif"),
    comm1: createImg("../images/rc/Mcom_1.gif"),
    comm2: createImg("../images/rc/Mcom_2.gif"),
    comm3: createImg("../images/rc/Mcom_3.gif"),
    comm4: createImg("../images/rc/Mcom_4.gif"),
    comm5: createImg("../images/rc/Mcom_5.gif"),
    comm6: createImg("../images/rc/Mcom_1.gif"),
    comm7: createImg("../images/rc/Mcom_7.gif"),
    comm8: createImg("../images/rc/Mcom_8.gif"),
    comm9: createImg("../images/rc/Mcom_9.gif"),
    comm10: createImg("../images/rc/Mcom_5.gif"),
    batt0: createImg("../images/rc/S_Batt0.gif"),
    batt1: createImg("../images/rc/S_Batt1.gif"),
    batt2: createImg("../images/rc/S_Batt2.gif"),
    batt3: createImg("../images/rc/S_Batt3.gif"),
    batt4: createImg("../images/rc/S_BattF.gif"),
    fbtnAF: createImg("../images/rc/MF_Offn.gif"),
    fbtnMF: createImg("../images/rc/MF_Onn.gif"),
    nbtnAUTO: createImg("../images/rc/NdOff_n.gif"),
    nbtnOFF: createImg("../images/rc/NdAuto_n.gif"),
    nbtnAUTOd: createImg("../images/rc/NdOff_nd.gif"),
    nbtnOFFd: createImg("../images/rc/NdAuto_nd.gif"),
    wbmKelvin: createImg("../images/rc/WB_K_n.gif"),
    wbmDaylight: createImg("../images/rc/WB_D_n.gif"),
    wbmTungsten: createImg("../images/rc/WB_T_n.gif"),
    wbmPresetA: createImg("../images/rc/WB_SA_n.gif"),
    wbmPresetB: createImg("../images/rc/WB_SB_n.gif"),
    wbmAutomatic: createImg("../images/rc/IrGaA_n.gif"),
    wbvK: createImg("../images/rc/K_C_n.gif"),
    wbvDayTung: createImg("../images/rc/WB_PM_n.gif"),
    wbvPreset: createImg("../images/rc/WB_St_n.gif"),
    amAutomatic: createImg("../images/rc/IrGaA_n.gif"),
    amManual: createImg("../images/rc/IrGaM_n.gif"),
    avF: createImg("../images/rc/F_C_n.gif"),
    avCLOSE: createImg("../images/rc/ircls_n.gif"),
    ssmoff: createImg("../images/rc/ShOff_n.gif"),
    ssmspeed: createImg("../images/rc/S_Spe_n.gif"),
    ssmslow: createImg("../images/rc/S_Slo_n.gif"),
    ssmangle: createImg("../images/rc/S_Ang_n.gif"),
    ssmcls: createImg("../images/rc/S_CLS_n.gif"),
    ssmAutomatic: createImg("../images/rc/IrGaA_n.gif"),
    ssvangle: createImg("../images/rc/SAng_in.gif"),
    ssvcls: createImg("../images/rc/SCLS_in.gif"),
    gcvDb: createImg("../images/rc/dB_in.gif"),
    gcmiso: createImg("../images/rc/ISO_in.gif"),
    gcmgain: createImg("../images/rc/GAIN_in.gif"),
    gcmAutomatic: createImg("../images/rc/IrGaA_n.gif"),
    gcmManual: createImg("../images/rc/IrGaM_n.gif"),
    close: createImg("../images/rc/LCls_n.gif"),
    warningClose: createImg("../images/rc/WaCls.gif")
};

function remoteCommon() {}
remoteCommon.prototype = new baseCommon;
(function() {
    this.init = function() {
        this.initScreen();
        this.messageBox = function() {
            var b = "",
                d = !0,
                a = document.createElement("div");
            a.className = "message-box";
            var c = common.createImgElement("warningClose")[0];
            c.className = "message-close";
            a.appendChild(c);
            var e = document.createElement("div");
            e.className = "message-string";
            a.appendChild(e);
            document.body.insertBefore(a, document.body.firstChild);
            common.hide(a);
            e.onclick = function(a) {
                common.stopEvent(common.getEvent(a))
            };
            common.addChangeImageEvent(c, function(a) {
                ctrl.getButtonObj(a);
                switch (a.type) {
                    case "mousedown":
                    case "touchstart":
                        c.src = "../images/rc/WaCls_nc.gif";
                        break;
                    case "click":
                        common.messageBox.close();
                        c.src = "../images/rc/WaCls.gif";
                        break;
                    case "mouseout":
                    case "touchmove":
                    case "touchend":
                        c.src = "../images/rc/WaCls.gif"
                }
            }, !1);
            return {
                view: function(g, f, h) {
                    if (f) currentLock.isWarning() || currentLock.executeWarning(!0);
                    else if (b = g = g.replace(/ /ig, "\x26nbsp;"), prop.view && view.viewFlag || common.messageBox.isWarningShow()) return;
                    var k = prop.msgbox.w,
                        l = prop.msgbox.x,
                        n = prop.msgbox.y;
                    f ? common.show(c) : common.hide(c);
                    var m = "",
                        m = h ? g.split("").join(String.fromCharCode(8203)) : g.replace(/\n/g, "\x3cbr/\x3e");
                    if (e.innerHTML != m || d) {
                        d = !1;
                        a.style.width = "auto";
                        a.style.left = "0px";
                        e.innerHTML = m;
                        switch (statusCtrl.current.lang) {
                            case 12:
                            case 13:
                                e.style.textAlign = "right";
                                break;
                            default:
                                e.style.textAlign = "left"
                        }
                        common.show(a);
                        g = parseInt(a.offsetHeight, 10);
                        h = parseInt(a.offsetWidth, 10);
                        common.hide(a);
                        h > k && (a.style.width = k + "px", h = k);
                        a.style.left = l - h / 2 + "px";
                        "Basic" == def.ctrl.name && (a.style.left = l - h /
                            2 - 5 + "px");
                        a.style.top = n - g / 2 + "px";
                        "Metadata" == def.ctrl.name && (f ? e.style.fontSize = "13px" : (e.style.fontSize = "20px", common.show(a), f = parseInt(a.offsetWidth, 10) / 2, common.hide(a), a.style.left = 512 - f + "px", a.style.top = "640px"))
                    }
                    common.show(a)
                },
                camaraIdClose: function() {
                    common.messageBox.isCameraShow() && common.messageBox.close()
                },
                review: function() {
                    (!common.isShow(a) || common.messageBox.isCameraShow()) && b && common.messageBox.view(b, !1)
                },
                close: function() {
                    common.hide(a);
                    e.innerHTML = "";
                    currentLock.isWarning() && currentLock.executeWarning(!1);
                    currentLock.isNonCtrl() || prop.view && !view.viewFlag && (!common.isShow(a) || common.messageBox.isCameraShow()) && b && common.messageBox.view(b, !1)
                },
                isWarningShow: function() {
                    return common.isShow(a) && common.isShow(c)
                },
                isCameraShow: function() {
                    return common.isShow(a) && !common.isShow(c)
                },
                clear: function() {
                    b = "";
                    common.messageBox.camaraIdClose()
                }
            }
        }();
        this.fframe = function() {
            var b = common.get("ID1202");
            return {
                draw: function(d) {
                    if (b && b.getContext && view.viewFlag && (d || (d = prop.fframe[statusCtrl.current.fframe]), d)) {
                        var a =
                            common.px(b, "width"),
                            c = common.px(b, "height"),
                            e = prop.fframe.lineWidth,
                            g = prop.fframe.shadowWidth;
                        b.width = a + e + g;
                        b.height = c + e + g;
                        var f = b.getContext("2d");
                        f.strokeStyle = d;
                        f.lineWidth = e;
                        f.shadowColor = prop.fframe.shadowColor;
                        f.shadowBlur = g;
                        f.shadowOffsetX = g;
                        f.shadowOffsetY = g;
                        f.strokeRect(0, 0, a, c);
                        common.show(b)
                    }
                },
                hide: function() {
                    b && common.hide(b)
                }
            }
        }()
    };
    this.messageBox = {};
    this.fframe = {};
    this.ajax = function(b, d) {
        function a(b, e) {
            if (e) f && (f.onreadystatechange = null, f.abort()), f = null, c.abort && c.abort();
            else if (4 ==
                f.readyState && 200 == f.status && !g) {
                clearTimeout(l);
                var d;
                d = JSON && JSON.parse ? JSON.parse(f.responseText) : eval("(" + f.responseText + ")");
                "errsession" == d.res ? (d = common.getCookies(), window.location.replace("../seserr.htm?lang\x3d" + (d.brlang ? d.brlang : 0))) : "rootredirect" == d.res ? window.location.replace("/") : (c.callback && c.callback(d), g = !0)
            } else 4 == f.readyState && (200 != f.status && !g) && a(0, !0)
        }
        var c = common.copyHash(d, {
                type: "GET",
                async: !0,
                params: {},
                responseType: "json",
                requestHeader: {
                    "If-Modified-Since": "Thu, 01 Jun 1970 00:00:00 GMT"
                },
                timeout: prop.ajax.timeout
            }),
            e, g = !1,
            f = this.requestObject();
        f.onreadystatechange = a;
        var h;
        if ("string" == typeof c.params) h = c.params;
        else {
            h = [];
            for (var k in c.params) h.push(k + "\x3d" + encodeURIComponent(c.params[k]));
            h = 0 === h.length ? "" : "?" + h.join("\x26")
        }
        var l = setTimeout(function() {
            a(0, !0)
        }, c.timeout);
        try {
            if ("GET" == c.type) {
                f.open(c.type, b + h, c.async, c.user, c.pass);
                for (e in c.requestHeader) f.setRequestHeader(e, c.requestHeader[e]);
                f.send("")
            } else {
                f.open(c.type, b, c.async, c.user, c.pass);
                for (e in c.requestHeader) f.setRequestHeader(e,
                    c.requestHeader[e]);
                f.send(h)
            }
            c.async || a()
        } catch (n) {
            c.abort && c.abort(), clearTimeout(l)
        }
    };
    this.requestObject = function() {
        try {
            return new window.XMLHttpRequest
        } catch (b) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (d) {}
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (a) {}
    };
    this.jsonEscape = function(b) {
        return !b ? "" : b.replace(/(["\\/])/g, "\\$1").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\n/g, "\\n")
    };
    this._numbReg = RegExp("[^0-9N\\/\\.:\\-\\+\\[\\]]", "g");
    this._imgElMap = {};
    this.createImgElement =
        function(b) {
            function d(a, c) {
                if (common._imgElMap[a.src]) return common._imgElMap[a.src].cloneNode(!1);
                if (a && "object" == typeof a) {
                    var e = document.createElement("img");
                    e.src = a.src;
                    e.alt = b;
                    common._imgElMap[e.src] = e;
                    return e.cloneNode(!1)
                }
            }
            var a = "" + b,
                c = [];
            if (a.match(this._numbReg)) c[0] = d(IMG_MAP[a], a);
            else
                for (var e = 0, g = a.length; e < g; e++) c[e] = d(IMG_MAP[a.charAt(e)], a.charAt(e));
            return c
        };
    this.changeImgPath = function(b, d) {
        return d ? b.replace(/\.gif/g, "d.gif") : b
    };
    this._N_REG = /n.gif/;
    this._C_REG = /nc.gif/;
    this._D_REG =
        /nd.gif/;
    this.compelChangeImgPath = function(b, d) {
        var a = function(a) {
            var e = b;
            switch (d) {
                case "n":
                    e = e.replace(a, "n.gif");
                    break;
                case "c":
                    e = e.replace(a, "nc.gif");
                    break;
                case "d":
                    e = e.replace(a, "nd.gif")
            }
            return e
        };
        return b.match(this._N_REG) ? a(this._N_REG) : b.match(this._C_REG) ? a(this._C_REG) : b.match(this._D_REG) ? a(this._D_REG) : b
    };
    this.nestIdSuffix = function() {
        return document.querySelectorAll ? function(b, d) {
            b.id && (b.id += d);
            for (var a = b.querySelectorAll("[id]"), c = 0, e = a.length; c < e; c++) a[c].id += d
        } : function(b, d) {
            b.id &&
                (b.id += d);
            for (var a = b.firstChild; null !== a; a = a.nextSibling) arguments.callee(a, d)
        }
    }()
}).apply(remoteCommon.prototype);
var currentLock = function() {
        var b = !1,
            d = !1,
            a = !1,
            c = {};
        return {
            isLock: function() {
                return b || d || a
            },
            changeScreen: function(a) {
                ctrl.lock();
                for (var b in c)
                    if (c[b][0] && "function" == typeof c[b][0]) c[b][0](a)
            },
            changeButton: function() {
                b ? d || a ? (common.hide("ID_Lock_Button_Normal"), common.hide("ID_Lock_Button_Normal_Disabled"), common.hide("ID_Lock_Button_Locked"), common.show("ID_Lock_Button_Locked_Disabled")) : (common.hide("ID_Lock_Button_Normal"), common.hide("ID_Lock_Button_Normal_Disabled"), common.show("ID_Lock_Button_Locked"),
                    common.hide("ID_Lock_Button_Locked_Disabled")) : (d || a ? (common.hide("ID_Lock_Button_Normal"), common.show("ID_Lock_Button_Normal_Disabled")) : (common.show("ID_Lock_Button_Normal"), common.hide("ID_Lock_Button_Normal_Disabled")), common.hide("ID_Lock_Button_Locked"), common.hide("ID_Lock_Button_Locked_Disabled"))
            },
            isKey: function() {
                return b
            },
            executeKey: function(a) {
                currentLock.changeScreen(a);
                b = a;
                currentLock.changeButton()
            },
            isWarning: function() {
                return d
            },
            executeWarning: function(c) {
                !b && !a && currentLock.changeScreen(c);
                d = c;
                currentLock.changeButton()
            },
            isNonCtrl: function() {
                return a
            },
            executeNonCtrl: function(c) {
                !b && !d && currentLock.changeScreen(c);
                c ? statusCtrl.hidden(!1) : statusCtrl.reset();
                a = c;
                currentLock.changeButton()
            },
            addDelegater: function(a, b) {
                c[a] = [b]
            },
            delDelegater: function(a) {
                c[a] = null;
                delete c[a]
            }
        }
    }(),
    common = new remoteCommon;
window.onload = function() {
    var b = common.getCookies().authlevel,
        d = !0;
    if (b) switch (b) {
        case "full":
            d = !1;
            break;
        case "ctrl":
            "Advanced" == def.ctrl.name && (d = !1);
            break;
        case "meta":
            "Metadata" == def.ctrl.name && (d = !1)
    }
    d ? window.location.replace("../seserr.htm") : (common.init(), lang.init(), ctrl.init(), statusCtrl.init(), prop.view && view.init())
};
window.onunload = function() {
    "Metadata" == def.ctrl.name && metaCtrl.saveDataAll()
};