(function(i) {
    function t(t) {
        for (var e, n, s = t[0], x = t[1], p = t[2], c = 0, l = []; c < s.length; c++) n = s[c], Object.prototype.hasOwnProperty.call(r, n) && r[n] && l.push(r[n][0]), r[n] = 0;
        for (e in x) Object.prototype.hasOwnProperty.call(x, e) && (i[e] = x[e]);
        m && m(t);
        while (l.length) l.shift()();
        return o.push.apply(o, p || []), a()
    }

    function a() {
        for (var i, t = 0; t < o.length; t++) {
            for (var a = o[t], e = !0, n = 1; n < a.length; n++) {
                var s = a[n];
                0 !== r[s] && (e = !1)
            }
            e && (o.splice(t--, 1), i = x(x.s = a[0]))
        }
        return i
    }
    var e = {},
        n = {
            app: 0
        },
        r = {
            app: 0
        },
        o = [];

    function s(i) {
        return x.p + "js/" + ({
            about: "about"
        } [i] || i) + "." + {
            about: "6c3ecbac"
        } [i] + ".js"
    }

    function x(t) {
        if (e[t]) return e[t].exports;
        var a = e[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return i[t].call(a.exports, a, a.exports, x), a.l = !0, a.exports
    }
    x.e = function(i) {
        var t = [],
            a = {
                about: 1
            };
        n[i] ? t.push(n[i]) : 0 !== n[i] && a[i] && t.push(n[i] = new Promise((function(t, a) {
            for (var e = "css/" + ({
                    about: "about"
                } [i] || i) + "." + {
                    about: "26ba963c"
                } [i] + ".css", r = x.p + e, o = document.getElementsByTagName("link"), s = 0; s < o.length; s++) {
                var p = o[s],
                    c = p.getAttribute("data-href") || p.getAttribute("href");
                if ("stylesheet" === p.rel && (c === e || c === r)) return t()
            }
            var l = document.getElementsByTagName("style");
            for (s = 0; s < l.length; s++) {
                p = l[s], c = p.getAttribute("data-href");
                if (c === e || c === r) return t()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function(t) {
                var e = t && t.target && t.target.src || r,
                    o = new Error("Loading CSS chunk " + i + " failed.\n(" + e + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = e, delete n[i], m.parentNode.removeChild(m), a(o)
            }, m.href = r;
            var u = document.getElementsByTagName("head")[0];
            u.appendChild(m)
        })).then((function() {
            n[i] = 0
        })));
        var e = r[i];
        if (0 !== e)
            if (e) t.push(e[2]);
            else {
                var o = new Promise((function(t, a) {
                    e = r[i] = [t, a]
                }));
                t.push(e[2] = o);
                var p, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, x.nc && c.setAttribute("nonce", x.nc), c.src = s(i);
                var l = new Error;
                p = function(t) {
                    c.onerror = c.onload = null, clearTimeout(m);
                    var a = r[i];
                    if (0 !== a) {
                        if (a) {
                            var e = t && ("load" === t.type ? "missing" : t.type),
                                n = t && t.target && t.target.src;
                            l.message = "Loading chunk " + i + " failed.\n(" + e + ": " + n + ")", l.name = "ChunkLoadError", l.type = e, l.request = n, a[1](l)
                        }
                        r[i] = void 0
                    }
                };
                var m = setTimeout((function() {
                    p({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = p, document.head.appendChild(c)
            } return Promise.all(t)
    }, x.m = i, x.c = e, x.d = function(i, t, a) {
        x.o(i, t) || Object.defineProperty(i, t, {
            enumerable: !0,
            get: a
        })
    }, x.r = function(i) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(i, "__esModule", {
            value: !0
        })
    }, x.t = function(i, t) {
        if (1 & t && (i = x(i)), 8 & t) return i;
        if (4 & t && "object" === typeof i && i && i.__esModule) return i;
        var a = Object.create(null);
        if (x.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: i
            }), 2 & t && "string" != typeof i)
            for (var e in i) x.d(a, e, function(t) {
                return i[t]
            }.bind(null, e));
        return a
    }, x.n = function(i) {
        var t = i && i.__esModule ? function() {
            return i["default"]
        } : function() {
            return i
        };
        return x.d(t, "a", t), t
    }, x.o = function(i, t) {
        return Object.prototype.hasOwnProperty.call(i, t)
    }, x.p = "/", x.oe = function(i) {
        throw console.error(i), i
    };
    var p = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = p.push.bind(p);
    p.push = t, p = p.slice();
    for (var l = 0; l < p.length; l++) t(p[l]);
    var m = c;
    o.push([0, "chunk-vendors"]), a()
})({
    0: function(i, t, a) {
        i.exports = a("56d7")
    },
    "21bb": function(i, t, a) {
        "use strict";
        a("2dad")
    },
    "23d7": function(i, t, a) {},
    "2dad": function(i, t, a) {},
    4293: function(i, t, a) {
        "use strict";
        a("4326")
    },
    4326: function(i, t, a) {},
    4360: function(i, t, a) {
        "use strict";
        var e = a("2b0e"),
            n = a("2f62");
        e["a"].use(n["a"]), t["a"] = new n["a"].Store({
            state: {
                activo: 0,
                backgroundimg: !0
            },
            mutations: {
                setBackgroundimg: function(i, t) {
                    i.backgroundimg = t
                },
                ActualizarStado: function(i, t) {
                    return i.activo = t, console.log("State =", i.activo), i.activo
                }
            },
            actions: {
                cambiAct: function(i) {
                    i.commit("cambiAct")
                }
            },
            modules: {}
        })
    },
    "56d7": function(i, t, a) {
        "use strict";
        a.r(t);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var e = a("2b0e"),
            n = function() {
                var i = this,
                    t = i.$createElement,
                    a = i._self._c || t;
                return a("div", {
                    attrs: {
                        id: "app"
                    }
                }, [a("menuTodo"), a("logoExpo"), a("transition-page", [a("router-view", {
                    key: i.$router.path
                })], 1), a("Background", {
                    attrs: {
                        backgroundimg: this.$store.state.backgroundimg
                    }
                })], 1)
            },
            r = [],
            o = function() {
                var i = this,
                    t = i.$createElement,
                    a = i._self._c || t;
                return a("div", {
                    staticClass: "caja-menu"
                }, [a("transition", {
                    attrs: {
                        name: "slide-right",
                        mode: "out-in"
                    }
                }, [0 == i.BTNmenu ? a("div", {
                    staticClass: "menu"
                }, [a("router-link", {
                    attrs: {
                        to: "/"
                    }
                }, [a("h1", {
                    on: {
                        click: function(t) {
                            return i.links("Home")
                        }
                    }
                }, [i._v("Home")])]), a("br"), a("br"), a("router-link", {
                    attrs: {
                        to: "/about"
                    }
                }, [a("h1", {
                    on: {
                        click: function(t) {
                            return i.links("about")
                        }
                    }
                }, [i._v("Abaut")])]), a("router-link", {
                    attrs: {
                        to: "/galery"
                    }
                }, [a("h1", {
                    on: {
                        click: function(t) {
                            return i.links("galery")
                        }
                    }
                }, [i._v("galery")])])], 1) : i._e()]), a("div", {
                    staticClass: "logo",
                    on: {
                        click: i.menu
                    }
                }, [a("div", {
                    class: 1 == i.BTNmenu ? "hambu" : "hambu is-active"
                }, [a("div", {
                    staticClass: "_layer -top"
                }), a("div", {
                    staticClass: "_layer -mid"
                }), a("div", {
                    staticClass: "_layer -bottom"
                })])])], 1)
            },
            s = [],
            x = {
                name: "menuTodo",
                props: {},
                data: function() {
                    return {
                        BTNmenu: !0
                    }
                },
                methods: {
                    menu: function() {
                        this.BTNmenu = !this.BTNmenu, console.log(this.BTNmenu)
                    },
                    links: function(i) {
                        this.BTNmenu = !0, console.log(i)
                    }
                }
            },
            p = x,
            c = (a("892f"), a("2877")),
            l = Object(c["a"])(p, o, s, !1, null, "e0c221f6", null),
            m = l.exports,
            u = function() {
                var i = this,
                    t = i.$createElement,
                    a = i._self._c || t;
                return a("router-link", {
                    staticClass: "boton-galeria",
                    attrs: {
                        to: "/"
                    }
                }, [a("div", {
                    staticClass: "titulo"
                }, [a("h3", [i._v("EXPO")]), a("h1", [i._v("Ellas Cambian el Mundo")])])])
            },
            k = [],
            d = {
                name: "logoExpo",
                props: {}
            },
            h = d,
            y = (a("9897"), Object(c["a"])(h, u, k, !1, null, "3ac26446", null)),
            f = y.exports,
            _ = function() {
                var i = this,
                    t = i.$createElement,
                    a = i._self._c || t;
                return a("transition", {
                    attrs: {
                        appear: "",
                        name: i.transitionName,
                        mode: i.transitionMode,
                        "enter-active-class": i.transitionEnterActiveClass
                    }
                }, [i._t("default")], 2)
            },
            v = [],
            E = "fade",
            g = "out-in",
            G = {
                name: "TransitionPage",
                data: function() {
                    return {
                        prevHeight: 0,
                        transitionName: E,
                        transitionMode: g,
                        transitionEnterActiveClass: ""
                    }
                },
                computed: {},
                created: function() {
                    var i = this;
                    this.$router.beforeEach((function(t, a, e) {
                        var n = t.meta.transitionName || a.meta.transitionName || E;
                        if ("slide" === n) {
                            var r = t.meta.index,
                                o = a.meta.index;
                            n = r < o ? "slide-right" : "slide-left"
                        }
                        i.transitionMode = g, i.transitionEnterActiveClass = "".concat(n, "-enter-active"), i.transitionName = n, e()
                    }))
                },
                methods: {}
            },
            A = G,
            B = (a("4293"), Object(c["a"])(A, _, v, !1, null, null, null)),
            D = B.exports,
            b = function() {
                var i = this,
                    t = i.$createElement,
                    e = i._self._c || t;
                return e("div", {
                    staticClass: "backgroundContainer"
                }, [e("transition", {
                    attrs: {
                        name: "fade",
                        appear: ""
                    }
                }, [i.backgroundimg ? e("img", {
                    attrs: {
                        src: a("b77a")
                    }
                }) : e("div", {
                    staticClass: "bg"
                })])], 1)
            },
            V = [],
            F = {
                name: "Background",
                props: {
                    backgroundimg: Boolean
                },
                data: function() {
                    return {}
                },
                mounted: function() {},
                methods: {}
            },
            S = F,
            T = (a("7431"), Object(c["a"])(S, b, V, !1, null, "0efc42bb", null)),
            P = T.exports,
            C = {
                name: "EXPO",
                components: {
                    TransitionPage: D,
                    menuTodo: m,
                    logoExpo: f,
                    Background: P
                },
                data: function() {
                    return {}
                },
                computed: {
                    bgvideo: function() {
                        return this.$store.state.backgroundimg
                    }
                }
            },
            O = C,
            w = (a("5e14"), Object(c["a"])(O, n, r, !1, null, null, null)),
            j = w.exports,
            L = (a("d3b7"), a("8c4f")),
            N = function() {
                var i = this,
                    t = i.$createElement,
                    a = i._self._c || t;
                return a("div", {
                    staticClass: "home"
                }, [a("div", {
                    staticClass: "contenedor"
                }, [a("div", {
                    staticClass: "wow fadeInUp wrap-uno"
                }, [i._m(0), a("router-link", {
                    staticClass: "boton-galeria",
                    attrs: {
                        to: "/galery"
                    }
                }, [i._v(" Galería ")])], 1)])])
            },
            $ = [function() {
                var i = this,
                    t = i.$createElement,
                    a = i._self._c || t;
                return a("div", {
                    staticClass: "descrip-parrafo"
                }, [a("h1", [i._v("Ellas cambian el mundo")]), a("br"), a("br"), a("p", [i._v(" Ellas cambian el mundo es una exposición que presenta las historias de mujeres poderosas que desde su infancia y adolescencia han hecho frente a la desigualdad y han transformado los espacios –personales y públicos– que habitan. En su conjunto, las historias evidencian el importante papel que desempeñan las niñas, las adolescentes y las jóvenes en la construcción de un mundo mejor para todas las personas y hacen innegable el reconocimiento de estas como sujetas políticas y aliadas necesarias en los distintos movimientos sociales. "), a("br"), i._v(" Son historias de lucha que se entrelazan como lo hacen las hebras de un estambre que va de unas manos a otras sin soltarlo, para al final conectar a todas sus integrantes en una red. En este caso, en un movimiento de niñas, adolescentes y mujeres jóvenes que tienen la certeza de que los límites que se nos imponen por el género, raza, clase y edad no deberían coartar nuestro derecho a ser felices y soñar; y que, por el contrario, son un motor para accionar con otras que, aunque diferentes, son nuestras iguales. ")])])
            }],
            q = a("c0ed"),
            M = a("a539"),
            H = {
                name: "Home",
                components: {
                    menuTodo: m,
                    logoExpo: f,
                    lottie: M["a"]
                },
                data: function() {
                    return {
                        anim: null,
                        animationSpeed: 1.1,
                        defaultOptions: {
                            animationData: q,
                            loop: !0,
                            autoplay: !0
                        }
                    }
                }
            },
            z = H,
            I = (a("21bb"), Object(c["a"])(z, N, $, !1, null, null, null)),
            J = I.exports;
        e["a"].use(L["a"]);
        var R = [{
                path: "/",
                name: "Home",
                meta: {
                    index: 0,
                    transitionName: "fade",
                    backgroundimg: !0
                },
                component: J
            }, {
                path: "/about",
                name: "About",
                meta: {
                    index: 1,
                    transitionName: "fade",
                    backgroundimg: !0
                },
                component: function() {
                    return a.e("about").then(a.bind(null, "f820"))
                }
            }, {
                path: "/galery",
                name: "galery",
                meta: {
                    index: 2,
                    transitionName: "fade",
                    backgroundimg: !1
                },
                component: function() {
                    return a.e("about").then(a.bind(null, "678d"))
                }
            }],
            U = new L["a"]({
                mode: "history",
                base: "/",
                routes: R
            }),
            X = U,
            K = a("4360");
        e["a"].config.productionTip = !1, new e["a"]({
            router: X,
            store: K["a"],
            render: function(i) {
                return i(j)
            }
        }).$mount("#app")
    },
    "5e14": function(i, t, a) {
        "use strict";
        a("c1be")
    },
    7431: function(i, t, a) {
        "use strict";
        a("23d7")
    },
    "74fb": function(i, t, a) {},
    "892f": function(i, t, a) {
        "use strict";
        a("74fb")
    },
    "8b97": function(i, t, a) {},
    9897: function(i, t, a) {
        "use strict";
        a("8b97")
    },
    a539: function(i, t, a) {
        "use strict";
        var e = function() {
                var i = this,
                    t = i.$createElement,
                    a = i._self._c || t;
                return a("div", {
                    ref: "lavContainer",
                    style: i.style
                })
            },
            n = [],
            r = (a("a9e3"), a("94f1")),
            o = a.n(r),
            s = {
                props: {
                    options: {
                        type: Object,
                        required: !0
                    },
                    height: Number,
                    width: Number,
                    defaultSpeed: Number
                },
                data: function() {
                    return {
                        style: {
                            width: this.width ? "".concat(this.width, "px") : "100%",
                            height: this.height ? "".concat(this.height, "px") : "100%",
                            overflow: "hidden",
                            margin: "0 auto"
                        }
                    }
                },
                mounted: function() {
                    var i = this;
                    this.anim = o.a.loadAnimation({
                        container: this.$refs.lavContainer,
                        renderer: "svg",
                        loop: !1 !== this.options.loop,
                        autoplay: !1 !== this.options.autoplay,
                        animationData: this.options.animationData,
                        name: "default" !== this.options.animationName,
                        rendererSettings: this.options.rendererSettings
                    }), this.$emit("animCreated", this.anim), this.anim.addEventListener("complete", (function(t) {
                        i.$emit("animComplete", i.anim)
                    })), this.anim.addEventListener("segmentStart", (function(t) {
                        i.$emit("animSegmentStart", i.anim)
                    })), this.anim.addEventListener("config_ready", (function(t) {
                        i.$emit("animConfigReady", i.anim)
                    })), this.anim.addEventListener("data_ready", (function(t) {
                        i.$emit("animDataReady", i.anim)
                    })), this.anim.addEventListener("data_failed", (function(t) {
                        i.$emit("animDataFailed", i.anim)
                    })), this.anim.addEventListener("loaded_images", (function(t) {
                        i.$emit("animLoadedImages", i.anim)
                    })), this.anim.addEventListener("DOMLoaded", (function(t) {
                        i.$emit("animDOMLoaded", i.anim)
                    })), this.anim.addEventListener("destroy", (function(t) {
                        i.$emit("animDestroy", i.anim)
                    }))
                },
                destroyed: function() {
                    this.anim.removeEventListener("loopComplete"), this.anim.removeEventListener("complete"), this.anim.removeEventListener("enterFrame"), this.anim.removeEventListener("segmentStart"), this.anim.removeEventListener("config_ready"), this.anim.removeEventListener("data_ready"), this.anim.removeEventListener("data_failed"), this.anim.removeEventListener("loaded_images"), this.anim.removeEventListener("DOMLoaded"), this.anim.removeEventListener("destroy")
                }
            },
            x = s,
            p = a("2877"),
            c = Object(p["a"])(x, e, n, !1, null, null, null);
        t["a"] = c.exports
    },
    b77a: function(i, t, a) {
        i.exports = a.p + "../img/fondo-web-ellas.17e7c7f7.png"
    },
    c0ed: function(i) {
        i.exports = JSON.parse('{"v":"5.2.1","fr":60,"ip":0,"op":600,"w":1080,"h":1080,"nm":"Astronaout ","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Astronaut Outlines 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":0,"s":[-23],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":150,"s":[0],"e":[-23]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":298.498,"s":[-23],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":450.752,"s":[0],"e":[-23]},{"t":599}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":0,"s":[808,390,0],"e":[808,301,0],"to":[0,-14.8333330154419,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":150,"s":[808,301,0],"e":[808,390,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":298.498,"s":[808,390,0],"e":[808,301,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":450.752,"s":[808,301,0],"e":[808,390,0],"to":[0,0,0],"ti":[0,-14.8333330154419,0]},{"t":599}],"ix":2},"a":{"a":0,"k":[804,301,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.009,-0.014],[1.1,-5.045],[0,0],[-0.351,-0.002],[0,0],[-0.855,5.668],[-0.005,0.483],[0,0]],"o":[[0,0],[-0.009,0.014],[-2.667,4.961],[-0.455,2.167],[0,0],[0,0],[2.4,-0.014],[0.074,-0.493],[0,0],[-0.066,-6.061]],"v":[[0.631,-9.499],[0.631,-9.499],[0.603,-9.456],[-5.084,5.896],[-5.73,9.485],[-5.178,9.499],[-4.973,9.499],[5.613,3.309],[5.73,1.844],[5.73,1.604]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.447059003045,0.537254961799,0.960784014534,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[775.621,303],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.667,4.961],[0.842,-4.009]],"o":[[-3.102,4.789],[1.1,-5.045]],"v":[[2.844,-7.676],[-2.844,7.676]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.745097979377,0.796078012504,0.984314024682,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[773.38,301.22],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.015,0],[0.641,-0.203],[-0.385,-5.125],[-4.461,-0.051],[0,0],[-0.285,0.038],[-0.038,5.346],[0,0],[0.103,0.565]],"o":[[-0.714,0],[-4.396,1.392],[0.358,4.766],[0,0],[0.282,-0.003],[4.336,-0.571],[0,0],[-0.004,-0.599],[-0.828,-4.558]],"v":[[1.599,-10.306],[-0.452,-9.997],[-8.907,1.277],[-0.185,10.306],[-0.021,10.306],[0.829,10.245],[8.931,-1.935],[8.931,-2.097],[8.773,-3.848]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.447059003045,0.537254961799,0.960784014534,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[823.195,293.501],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[18.448,16.143],[-21.267,8.671],[-5.638,-14.862]],"o":[[-9.004,-7.878],[21.268,-8.67],[5.637,14.86]],"v":[[-35.726,23.06],[-14.203,-30.533],[39.093,-14.861]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.67843095368,0.976471007104,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[808.606,306.049],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Astronaut Outlines 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":0,"s":[0],"e":[15]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":150,"s":[15],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":298.498,"s":[0],"e":[15]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":450.752,"s":[15],"e":[0]},{"t":599}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":0,"s":[216,762,0],"e":[216,682,0],"to":[0,-13.3333330154419,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":150,"s":[216,682,0],"e":[216,762,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":298.498,"s":[216,762,0],"e":[216,682,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":450.752,"s":[216,682,0],"e":[216,762,0],"to":[0,0,0],"ti":[0,-13.3333330154419,0]},{"t":599}],"ix":2},"a":{"a":0,"k":[212,682,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.926,0.027],[0,0],[0.959,-0.107],[-5.637,-9.394],[-6.228,0],[-0.885,0.369],[4.442,8.883]],"o":[[0,0],[-0.859,0.004],[-8.008,0.89],[4.826,8.043],[1.047,0],[6.149,-2.563],[-3.848,-7.697]],"v":[[-1.158,-18.121],[-1.338,-18.121],[-4.062,-17.952],[-12.945,3.912],[6.691,18.121],[9.603,17.578],[12.335,-7.703]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.447059003045,0.537254961799,0.960784014534,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[195.461,678.111],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-3.584,-9.053],[-5.653,-0.045],[0,0],[-3.674,3.421],[0,0],[0.004,0.01],[6.34,6.162],[1.935,2.456]],"o":[[-11.173,2.098],[2.078,5.249],[0,0],[4.027,-0.031],[0,0],[-0.004,-0.01],[-2.888,-5.832],[-1.763,-1.714],[0,0]],"v":[[-5.372,-14.76],[-11.161,6.384],[1.666,14.76],[1.913,14.76],[13.905,9.737],[13.905,9.737],[13.892,9.707],[0.141,-8.411],[-5.373,-14.76]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.447059003045,0.537254961799,0.960784014534,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[260.982,689.988],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-1.763,-1.714],[-2.888,-5.832]],"o":[[0,0],[1.934,2.456],[6.34,6.162],[-5.773,-13.759]],"v":[[-9.632,-12.234],[-9.632,-12.234],[-4.119,-5.885],[9.632,12.234]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.745097979377,0.796078012504,0.984314024682,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[265.243,687.462],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[14.729,30.533],[-30.892,-1.797],[-10.929,-10.623],[15.805,-9.34]],"o":[[-11.134,-23.083],[30.892,1.795],[22.824,22.184],[-15.805,9.34]],"v":[[-61.247,-4.85],[-5.209,-50.828],[49.557,-9.933],[55.857,43.285]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.67843095368,0.976471007104,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[211.566,691.51],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Astronaut Outlines 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":0,"s":[556,626,0],"e":[544,540,0],"to":[-2,-14.3333330154419,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":150,"s":[544,540,0],"e":[556,626,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":298.498,"s":[556,626,0],"e":[544,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":450.752,"s":[544,540,0],"e":[556,626,0],"to":[0,0,0],"ti":[-2,-14.3333330154419,0]},{"t":599}],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.511,0],[1.712,-4.138],[0.005,-0.844],[0,0],[-9.237,0],[-1.335,0.364],[-0.014,3.245],[0,0],[1.989,1.59]],"o":[[-5.016,0],[-0.359,0.868],[0,0],[0.039,7.161],[1.558,0],[5.317,-1.448],[0,0],[-0.013,-2.964],[-3.543,-2.832]],"v":[[-4.674,-10.734],[-15.867,-5.062],[-16.401,-2.49],[-16.401,-2.419],[4.792,10.734],[9.166,10.2],[16.401,2.266],[16.401,2.196],[12.818,-5.317]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.823528992896,0.858824008119,0.988234994926,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[188.558,789.089],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":0,"s":[0],"e":[-29]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":150,"s":[-29],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":298.498,"s":[0],"e":[-29]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":450.752,"s":[-29],"e":[0]},{"t":599}],"ix":6},"o":{"a":0,"k":50,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.675,0],[1.155,-0.542],[0.109,-7.768],[0,0],[-1.38,-1.57],[-1.994,-0.022],[0,0],[-1.581,8.165]],"o":[[-1.463,0],[-5.718,2.687],[0,0],[0.028,1.993],[1.412,1.605],[0,0],[7.586,-0.081],[1.534,-7.916]],"v":[[4.968,-14.513],[0.933,-13.672],[-13.52,6.46],[-13.52,6.755],[-11.505,12.177],[-6.293,14.513],[-6.103,14.513],[13.243,-3.543]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.678431372549,0.976470648074,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[883.13,210.773],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":0,"s":[-16],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":150,"s":[0],"e":[-16]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":298.498,"s":[-16],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":450.752,"s":[0],"e":[-16]},{"t":599}],"ix":6},"o":{"a":0,"k":50,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.075,-4.384],[-9.736,-3.331],[3.416,10.019]],"o":[[-4.61,6.574],[9.737,3.331],[-3.416,-10.019]],"v":[[-5.723,-12.299],[-3.673,16.313],[9.993,-9.625]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.6,0.67843095368,0.976471007104,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[882.786,361.227],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":0,"s":[-24],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":150,"s":[0],"e":[-24]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":298.498,"s":[-24],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":450.752,"s":[0],"e":[-24]},{"t":599}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Astronaut Outlines 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[544,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.822,-1.665],[0,0],[-0.731,-0.105],[0,0],[1.329,-1.296],[0,0],[-0.125,-0.727],[0,0],[1.643,0.864],[0,0],[0.654,-0.343],[0,0],[-0.314,1.83],[0,0],[0.528,0.515],[0,0],[-1.837,0.268],[0,0],[-0.326,0.661],[0,0]],"o":[[0,0],[0.328,0.661],[0,0],[1.838,0.268],[0,0],[-0.527,0.515],[0,0],[0.314,1.83],[0,0],[-0.652,-0.343],[0,0],[-1.643,0.864],[0,0],[0.125,-0.727],[0,0],[-1.329,-1.296],[0,0],[0.73,-0.105],[0,0],[0.822,-1.665]],"v":[[2.009,-12.448],[4.657,-7.081],[6.345,-5.855],[12.268,-4.995],[13.51,-1.173],[9.223,3.004],[8.579,4.988],[9.591,10.887],[6.341,13.249],[1.042,10.463],[-1.043,10.463],[-6.341,13.249],[-9.591,10.887],[-8.579,4.988],[-9.223,3.004],[-13.51,-1.173],[-12.268,-4.995],[-6.345,-5.855],[-4.658,-7.081],[-2.009,-12.448]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.996078012504,0.760783954695,0.447059003045,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[315.328,849.447],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":0,"s":[100,100],"e":[180,180]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":150,"s":[180,180],"e":[100,100]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":298,"s":[100,100],"e":[180,180]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":451,"s":[180,180],"e":[100,100]},{"t":599}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.98,-1.987],[0,0],[-0.87,-0.127],[0,0],[1.586,-1.547],[0,0],[-0.149,-0.868],[0,0],[1.962,1.031],[0,0],[0.778,-0.409],[0,0],[-0.374,2.184],[0,0],[0.63,0.614],[0,0],[-2.192,0.319],[0,0],[-0.389,0.789],[0,0]],"o":[[0,0],[0.39,0.789],[0,0],[2.192,0.319],[0,0],[-0.631,0.614],[0,0],[0.375,2.184],[0,0],[-0.778,-0.409],[0,0],[-1.961,1.031],[0,0],[0.148,-0.868],[0,0],[-1.586,-1.547],[0,0],[0.871,-0.127],[0,0],[0.98,-1.987]],"v":[[2.397,-14.854],[5.559,-8.448],[7.571,-6.986],[14.641,-5.959],[16.122,-1.399],[11.007,3.587],[10.238,5.953],[11.445,12.993],[7.566,15.811],[1.244,12.487],[-1.243,12.487],[-7.566,15.811],[-11.445,12.993],[-10.237,5.953],[-11.006,3.587],[-16.122,-1.399],[-14.64,-5.959],[-7.571,-6.986],[-5.559,-8.448],[-2.396,-14.854]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.996078012504,0.760783954695,0.447059003045,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[653.259,174.561],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":0,"s":[100,100],"e":[180,180]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":150,"s":[180,180],"e":[100,100]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":298,"s":[100,100],"e":[180,180]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":451,"s":[180,180],"e":[100,100]},{"t":599}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Astronaut Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":0,"s":[7],"e":[20]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":150,"s":[20],"e":[7]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":298.498,"s":[7],"e":[20]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":450.752,"s":[20],"e":[7]},{"t":599}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":0,"s":[554,620,0],"e":[544,540,0],"to":[-1.66666662693024,-13.3333330154419,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":150,"s":[544,540,0],"e":[554,620,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":298.498,"s":[554,620,0],"e":[544,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":450.752,"s":[544,540,0],"e":[554,620,0],"to":[0,0,0],"ti":[-1.66666662693024,-13.3333330154419,0]},{"t":599}],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":0,"s":[{"i":[[0,0],[0,0],[0.054,-8.965],[0,0],[-0.054,-0.408],[-5.637,-4.227],[-2.011,0],[0,0],[0,0],[0.004,0.012],[10.936,21.53]],"o":[[0,0],[0,0],[0,0],[0.002,0.395],[1.281,9.737],[1.238,0.928],[7.146,0],[0,0],[-0.004,-0.012],[-9.4,-25.14],[-0.01,-0.019]],"v":[[-9.094,-39.052],[-9.094,-39.052],[-21.842,-24.539],[-21.842,-24.426],[-21.759,-23.221],[-0.493,37.761],[4.528,39.052],[21.842,34.479],[21.842,34.479],[21.828,34.439],[-9.079,-39.024]],"c":true}],"e":[{"i":[[0,0],[0,0],[0.054,-8.965],[0,0],[-0.054,-0.408],[-5.637,-4.227],[-2.011,0],[0,0],[0,0],[0.003,0.012],[12.874,18.707]],"o":[[0,0],[0,0],[0,0],[0.002,0.395],[1.281,9.737],[1.238,0.928],[7.146,0],[0,0],[-0.004,-0.012],[-7.462,-34.086],[-0.012,-0.018]],"v":[[-5.005,-5.157],[-5.005,-5.157],[-21.17,11.664],[-21.17,11.777],[-21.087,12.982],[-2.147,75.61],[2.874,76.901],[20.188,72.327],[20.188,72.327],[20.173,72.288],[-4.989,-5.129]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":150,"s":[{"i":[[0,0],[0,0],[0.054,-8.965],[0,0],[-0.054,-0.408],[-5.637,-4.227],[-2.011,0],[0,0],[0,0],[0.003,0.012],[12.874,18.707]],"o":[[0,0],[0,0],[0,0],[0.002,0.395],[1.281,9.737],[1.238,0.928],[7.146,0],[0,0],[-0.004,-0.012],[-7.462,-34.086],[-0.012,-0.018]],"v":[[-5.005,-5.157],[-5.005,-5.157],[-21.17,11.664],[-21.17,11.777],[-21.087,12.982],[-2.147,75.61],[2.874,76.901],[20.188,72.327],[20.188,72.327],[20.173,72.288],[-4.989,-5.129]],"c":true}],"e":[{"i":[[0,0],[0,0],[0.054,-8.965],[0,0],[-0.054,-0.408],[-5.637,-4.227],[-2.011,0],[0,0],[0,0],[0.004,0.012],[10.936,21.53]],"o":[[0,0],[0,0],[0,0],[0.002,0.395],[1.281,9.737],[1.238,0.928],[7.146,0],[0,0],[-0.004,-0.012],[-9.4,-25.14],[-0.01,-0.019]],"v":[[-9.094,-39.052],[-9.094,-39.052],[-21.842,-24.539],[-21.842,-24.426],[-21.759,-23.221],[-0.493,37.761],[4.528,39.052],[21.842,34.479],[21.842,34.479],[21.828,34.439],[-9.079,-39.024]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":298,"s":[{"i":[[0,0],[0,0],[0.054,-8.965],[0,0],[-0.054,-0.408],[-5.637,-4.227],[-2.011,0],[0,0],[0,0],[0.004,0.012],[10.936,21.53]],"o":[[0,0],[0,0],[0,0],[0.002,0.395],[1.281,9.737],[1.238,0.928],[7.146,0],[0,0],[-0.004,-0.012],[-9.4,-25.14],[-0.01,-0.019]],"v":[[-9.094,-39.052],[-9.094,-39.052],[-21.842,-24.539],[-21.842,-24.426],[-21.759,-23.221],[-0.493,37.761],[4.528,39.052],[21.842,34.479],[21.842,34.479],[21.828,34.439],[-9.079,-39.024]],"c":true}],"e":[{"i":[[0,0],[0,0],[0.054,-8.965],[0,0],[-0.054,-0.408],[-5.637,-4.227],[-2.011,0],[0,0],[0,0],[0.003,0.012],[12.874,18.707]],"o":[[0,0],[0,0],[0,0],[0.002,0.395],[1.281,9.737],[1.238,0.928],[7.146,0],[0,0],[-0.004,-0.012],[-7.462,-34.086],[-0.012,-0.018]],"v":[[-5.005,-5.157],[-5.005,-5.157],[-21.17,11.664],[-21.17,11.777],[-21.087,12.982],[-2.147,75.61],[2.874,76.901],[20.188,72.327],[20.188,72.327],[20.173,72.288],[-4.989,-5.129]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":451,"s":[{"i":[[0,0],[0,0],[0.054,-8.965],[0,0],[-0.054,-0.408],[-5.637,-4.227],[-2.011,0],[0,0],[0,0],[0.003,0.012],[12.874,18.707]],"o":[[0,0],[0,0],[0,0],[0.002,0.395],[1.281,9.737],[1.238,0.928],[7.146,0],[0,0],[-0.004,-0.012],[-7.462,-34.086],[-0.012,-0.018]],"v":[[-5.005,-5.157],[-5.005,-5.157],[-21.17,11.664],[-21.17,11.777],[-21.087,12.982],[-2.147,75.61],[2.874,76.901],[20.188,72.327],[20.188,72.327],[20.173,72.288],[-4.989,-5.129]],"c":true}],"e":[{"i":[[0,0],[0,0],[0.054,-8.965],[0,0],[-0.054,-0.408],[-5.637,-4.227],[-2.011,0],[0,0],[0,0],[0.004,0.012],[10.936,21.53]],"o":[[0,0],[0,0],[0,0],[0.002,0.395],[1.281,9.737],[1.238,0.928],[7.146,0],[0,0],[-0.004,-0.012],[-9.4,-25.14],[-0.01,-0.019]],"v":[[-9.094,-39.052],[-9.094,-39.052],[-21.842,-24.539],[-21.842,-24.426],[-21.759,-23.221],[-0.493,37.761],[4.528,39.052],[21.842,34.479],[21.842,34.479],[21.828,34.439],[-9.079,-39.024]],"c":true}]},{"t":599}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.780391977348,0.854902020623,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[750.211,613.173],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.519,0.948],[-8.688,-31.94]],"o":[[10.936,21.53],[-16.809,-47.578]],"v":[[-11.364,-2.836],[13.799,74.58]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.882353001015,0.925490016563,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[756.586,610.881],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":0,"s":[{"i":[[0.037,0.277],[0,0],[18.859,-7.252],[-3.416,-16.227],[-7.002,-6.662],[-4.754,0],[-8.51,10.561],[0.006,0.048]],"o":[[0,0],[-0.15,0.131],[-11.216,4.313],[3.417,16.229],[2.226,2.117],[10.205,0],[-0.006,-0.048],[-3.902,-30.448]],"v":[[17.287,-50.164],[17.285,-50.164],[-15.707,-30.591],[-27.323,-1.21],[-15.025,46.961],[-4.094,50.164],[28.531,34.598],[28.512,34.451]],"c":true}],"e":[{"i":[[0.037,0.277],[0,0],[18.859,-7.252],[-7.232,-14.922],[-7.002,-6.662],[-4.717,0.594],[-11.635,5.448],[0.006,0.048]],"o":[[0,0],[-0.15,0.131],[-11.216,4.313],[6.694,13.811],[2.226,2.117],[11.381,-1.433],[-0.006,-0.048],[-3.902,-30.448]],"v":[[-16.242,-32.64],[-16.158,-32.405],[-47.517,-19.678],[-50.879,7.895],[-27.156,50.179],[-16.279,51.407],[11.232,42.624],[11.427,41.6]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":150,"s":[{"i":[[0.037,0.277],[0,0],[18.859,-7.252],[-7.232,-14.922],[-7.002,-6.662],[-4.717,0.594],[-11.635,5.448],[0.006,0.048]],"o":[[0,0],[-0.15,0.131],[-11.216,4.313],[6.694,13.811],[2.226,2.117],[11.381,-1.433],[-0.006,-0.048],[-3.902,-30.448]],"v":[[-16.242,-32.64],[-16.158,-32.405],[-47.517,-19.678],[-50.879,7.895],[-27.156,50.179],[-16.279,51.407],[11.232,42.624],[11.427,41.6]],"c":true}],"e":[{"i":[[0.037,0.277],[0,0],[18.859,-7.252],[-3.416,-16.227],[-7.002,-6.662],[-4.754,0],[-8.51,10.561],[0.006,0.048]],"o":[[0,0],[-0.15,0.131],[-11.216,4.313],[3.417,16.229],[2.226,2.117],[10.205,0],[-0.006,-0.048],[-3.902,-30.448]],"v":[[17.287,-50.164],[17.285,-50.164],[-15.707,-30.591],[-27.323,-1.21],[-15.025,46.961],[-4.094,50.164],[28.531,34.598],[28.512,34.451]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":298,"s":[{"i":[[0.037,0.277],[0,0],[18.859,-7.252],[-3.416,-16.227],[-7.002,-6.662],[-4.754,0],[-8.51,10.561],[0.006,0.048]],"o":[[0,0],[-0.15,0.131],[-11.216,4.313],[3.417,16.229],[2.226,2.117],[10.205,0],[-0.006,-0.048],[-3.902,-30.448]],"v":[[17.287,-50.164],[17.285,-50.164],[-15.707,-30.591],[-27.323,-1.21],[-15.025,46.961],[-4.094,50.164],[28.531,34.598],[28.512,34.451]],"c":true}],"e":[{"i":[[0.037,0.277],[0,0],[18.859,-7.252],[-7.232,-14.922],[-7.002,-6.662],[-4.717,0.594],[-11.635,5.448],[0.006,0.048]],"o":[[0,0],[-0.15,0.131],[-11.216,4.313],[6.694,13.811],[2.226,2.117],[11.381,-1.433],[-0.006,-0.048],[-3.902,-30.448]],"v":[[-16.242,-32.64],[-16.158,-32.405],[-47.518,-19.678],[-50.879,7.895],[-27.156,50.179],[-16.279,51.407],[11.232,42.624],[11.427,41.6]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":451,"s":[{"i":[[0.037,0.277],[0,0],[18.859,-7.252],[-7.232,-14.922],[-7.002,-6.662],[-4.717,0.594],[-11.635,5.448],[0.006,0.048]],"o":[[0,0],[-0.15,0.131],[-11.216,4.313],[6.694,13.811],[2.226,2.117],[11.381,-1.433],[-0.006,-0.048],[-3.902,-30.448]],"v":[[-16.242,-32.64],[-16.158,-32.405],[-47.518,-19.678],[-50.879,7.895],[-27.156,50.179],[-16.279,51.407],[11.232,42.624],[11.427,41.6]],"c":true}],"e":[{"i":[[0.037,0.277],[0,0],[18.859,-7.252],[-3.416,-16.227],[-7.002,-6.662],[-4.754,0],[-8.51,10.561],[0.006,0.048]],"o":[[0,0],[-0.15,0.131],[-11.216,4.313],[3.417,16.229],[2.226,2.117],[10.205,0],[-0.006,-0.048],[-3.902,-30.448]],"v":[[17.287,-50.164],[17.285,-50.164],[-15.707,-30.591],[-27.323,-1.21],[-15.025,46.961],[-4.094,50.164],[28.531,34.598],[28.512,34.451]],"c":true}]},{"t":599}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.780391977348,0.854902020623,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[656.861,780.101],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[6.405,-129.651],[6.405,-129.651],[-52.015,-83.188],[-81.224,-59.957],[-15.118,129.651],[81.224,68.67]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.470587995941,0.701960963829,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[575.228,507.191],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[14.605,-11.616],[-14.605,11.616],[-14.604,11.616]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.882353001015,0.737254961799,0.894118006089,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[508.608,435.618],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.125,0],[-3.076,-5.28],[-17.367,-5.319],[0,0],[0,0],[0,0]],"o":[[-5.125,0],[3.074,5.281],[0,0],[5.629,-10.714],[0,0],[0,0]],"v":[[-8.638,-26.637],[-24.353,-1.342],[11.91,26.637],[11.914,26.637],[24.8,-1.342],[24.8,-1.342]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.780391977348,0.854902020623,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[443.282,553.899],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[13.241,-0.001],[8.637,-1.904],[0.059,-8.513],[0,0],[-0.089,-0.405],[-13.241,0],[-8.637,1.904],[1.919,8.707]],"o":[[-7.16,0],[-23.389,5.155],[0,0],[0.003,0.416],[1.245,5.651],[7.16,0],[24.609,-5.424],[-1.245,-5.651]],"v":[[20.58,-18.576],[-3.474,-15.763],[-44.698,8.506],[-44.698,8.591],[-44.56,9.822],[-20.58,18.576],[3.475,15.764],[44.56,-9.822]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.207843002619,0.309803981407,0.568626972273,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":0,"s":[408.557,256.062],"e":[408.557,240.062],"to":[0,-2.66666674613953],"ti":[0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":150,"s":[408.557,240.062],"e":[408.557,256.062],"to":[0,0],"ti":[0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":298,"s":[408.557,256.062],"e":[408.557,240.062],"to":[0,0],"ti":[0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":451,"s":[408.557,240.062],"e":[408.557,256.062],"to":[0,0],"ti":[0,-2.66666674613953]},{"t":599}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":0,"s":[100,100],"e":[80,80]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":150,"s":[80,80],"e":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":298,"s":[100,100],"e":[80,80]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":451,"s":[80,80],"e":[100,100]},{"t":599}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[16.168,-1.076],[3.203,-6.021],[3.203,-7.686],[-14.093,-4.996],[-3.715,7.559],[5.509,13.836]],"o":[[0,0],[-3.203,6.021],[-3.203,7.687],[14.093,4.997],[3.716,-7.558],[-5.509,-13.836]],"v":[[-13.596,-42.933],[-12.043,-21.456],[-22.804,-2.752],[-7.174,39.013],[22.292,23.383],[18.449,-17.869]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.882353001015,0.925490016563,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[653.053,394.6],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-32.541,2.563],[-7.471,7.136],[1.922,10.506],[-9.096,4.612],[-4.74,0.641],[-15.503,-0.257],[-2.051,-10.249],[12.555,-20.498],[39.918,-7.943],[13.067,25.75],[-0.113,13.376]],"o":[[24.69,-1.944],[3.814,-3.642],[-1.922,-10.506],[4.997,13.452],[4.74,-0.64],[15.501,0.257],[2.05,10.249],[-12.555,20.499],[-39.918,7.942],[-4.409,-8.69],[0,0]],"v":[[-45.569,5.509],[-0.839,-19.69],[0.297,-37.025],[14.133,-62.904],[30.019,-47.531],[55.13,-76.227],[85.109,-45.223],[64.61,14.733],[-5.544,68.542],[-81.184,30.364],[-87.046,-3.715]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.882353001015,0.925490016563,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[388.653,569.07],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-152.394,-11.708],[-77.955,179.845],[27.355,177.336],[123.697,116.354],[152.394,29.237],[82.7,-179.845],[48.876,-81.966],[-38.752,-12.272]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.592156982422,0.788234994926,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[532.755,459.506],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[44.73,-20.755],[-7.471,7.136],[1.922,10.506],[-9.096,4.612],[-0.817,-1.585]],"o":[[0,0],[-44.592,10.78],[24.69,-1.944],[3.814,-3.642],[-1.922,-10.506],[0.771,2.076],[0,0]],"v":[[24.826,-39.469],[24.823,-39.469],[-31.044,39.469],[13.686,14.269],[14.822,-3.066],[28.658,-28.945],[31.044,-23.468]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.780391977348,0.854902020623,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[374.128,535.111],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-74.544,-17.801],[11.53,-46.121],[44.584,-0.256],[-0.245,56.883]],"o":[[34.334,8.199],[-11.531,46.12],[-44.583,0.256],[0.236,-54.693]],"v":[[41.503,-81.164],[86.6,21.328],[-9.23,98.708],[-97.885,11.59]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.109803996367,0.192156997381,0.466666995778,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[400.486,295.486],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[93.779,50.221],[49.965,-62.006],[-21.01,-29.978],[-80.711,45.095]],"o":[[-38.646,-20.696],[-49.965,62.008],[22.018,31.416],[80.712,-45.096]],"v":[[62.904,-121.196],[-106.719,-86.862],[-110.819,69.437],[67.515,103.772]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.882353001015,0.925490016563,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[385.747,297.597],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"ix":13,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[28.226,-5.617],[2.342,-0.28],[0,0],[-3.694,0],[-28.834,8.719]],"o":[[-12.039,15.159],[-2.473,0.492],[0,0],[0,0],[11.622,0],[0,0]],"v":[[25.454,-22.495],[-31.919,12.609],[-39.14,13.764],[-34.667,22.389],[-28.887,22.495],[39.14,12.724]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.780391977348,0.854902020623,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[415.029,625.003],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"ix":14,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":0,"s":[{"i":[[0,0],[-38.948,-24.598],[-19.473,-16.11],[-19.474,-20.498],[-25.623,2.305],[-0.256,11.53],[12.043,6.149],[0.769,7.175],[5.637,29.723],[56.555,20.791],[0,0]],"o":[[0,0],[38.946,24.599],[19.472,16.111],[19.474,20.498],[25.623,-2.307],[0.257,-11.53],[-12.042,-6.15],[-0.769,-7.174],[-5.637,-29.722],[-53.552,-44.84],[0,0]],"v":[[-182.563,-121.965],[-100.569,-7.175],[28.569,31.547],[63.416,145.537],[135.929,176.285],[182.306,150.15],[169.494,122.477],[139.772,104.029],[119.786,-42.021],[13.708,-133.751],[-122.093,-159.374]],"c":true}],"e":[{"i":[[0,0],[-38.948,-24.598],[-21.029,-14.019],[-21.482,-18.382],[-25.249,4.935],[0.933,11.495],[12.612,4.876],[1.505,7.057],[15.655,25.887],[26.871,23.3],[0,0]],"o":[[0,0],[38.946,24.598],[21.029,14.019],[21.482,18.382],[25.249,-4.935],[-0.933,-11.495],[-12.612,-4.876],[-1.505,-7.056],[-19.951,-32.991],[-53.552,-44.84],[0,0]],"v":[[-182.563,-121.965],[-100.569,-7.175],[-19.352,57.972],[59.272,166.564],[134.567,189.676],[178.004,158.9],[162.409,132.695],[130.944,117.408],[81.584,-15.458],[13.708,-133.751],[-122.093,-159.374]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":150,"s":[{"i":[[0,0],[-38.948,-24.598],[-21.029,-14.019],[-21.482,-18.382],[-25.249,4.935],[0.933,11.495],[12.612,4.876],[1.505,7.057],[15.655,25.887],[26.871,23.3],[0,0]],"o":[[0,0],[38.946,24.598],[21.029,14.019],[21.482,18.382],[25.249,-4.935],[-0.933,-11.495],[-12.612,-4.876],[-1.505,-7.056],[-19.951,-32.991],[-53.552,-44.84],[0,0]],"v":[[-182.563,-121.965],[-100.569,-7.175],[-19.352,57.972],[59.272,166.564],[134.567,189.676],[178.004,158.9],[162.409,132.695],[130.944,117.408],[81.584,-15.458],[13.708,-133.751],[-122.093,-159.374]],"c":true}],"e":[{"i":[[0,0],[-38.948,-24.598],[-19.473,-16.11],[-19.474,-20.498],[-25.623,2.305],[-0.256,11.53],[12.043,6.149],[0.769,7.175],[5.637,29.723],[56.555,20.791],[0,0]],"o":[[0,0],[38.946,24.599],[19.472,16.111],[19.474,20.498],[25.623,-2.307],[0.257,-11.53],[-12.042,-6.15],[-0.769,-7.174],[-5.637,-29.722],[-53.552,-44.84],[0,0]],"v":[[-182.563,-121.965],[-100.569,-7.175],[28.569,31.547],[63.416,145.537],[135.929,176.285],[182.306,150.15],[169.494,122.477],[139.772,104.029],[119.786,-42.021],[13.708,-133.751],[-122.093,-159.374]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":298,"s":[{"i":[[0,0],[-38.948,-24.598],[-19.473,-16.11],[-19.474,-20.498],[-25.623,2.305],[-0.256,11.53],[12.043,6.149],[0.769,7.175],[5.637,29.723],[56.555,20.791],[0,0]],"o":[[0,0],[38.946,24.599],[19.472,16.111],[19.474,20.498],[25.623,-2.307],[0.257,-11.53],[-12.042,-6.15],[-0.769,-7.174],[-5.637,-29.722],[-53.552,-44.84],[0,0]],"v":[[-182.563,-121.965],[-100.569,-7.175],[28.569,31.547],[63.416,145.537],[135.929,176.285],[182.306,150.15],[169.494,122.477],[139.772,104.029],[119.786,-42.021],[13.708,-133.751],[-122.093,-159.374]],"c":true}],"e":[{"i":[[0,0],[-38.948,-24.598],[-21.029,-14.019],[-21.482,-18.382],[-25.249,4.935],[0.933,11.495],[12.612,4.876],[1.505,7.057],[15.655,25.887],[26.871,23.3],[0,0]],"o":[[0,0],[38.946,24.598],[21.029,14.019],[21.482,18.382],[25.249,-4.935],[-0.933,-11.495],[-12.612,-4.876],[-1.505,-7.056],[-19.951,-32.991],[-53.552,-44.84],[0,0]],"v":[[-182.563,-121.965],[-100.569,-7.175],[-19.352,57.972],[59.272,166.564],[134.567,189.676],[178.004,158.9],[162.409,132.695],[130.944,117.408],[81.584,-15.458],[13.708,-133.751],[-122.093,-159.374]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":451,"s":[{"i":[[0,0],[-38.948,-24.598],[-21.029,-14.019],[-21.482,-18.382],[-25.249,4.935],[0.933,11.495],[12.612,4.876],[1.505,7.057],[15.655,25.887],[26.871,23.3],[0,0]],"o":[[0,0],[38.946,24.598],[21.029,14.019],[21.482,18.382],[25.249,-4.935],[-0.933,-11.495],[-12.612,-4.876],[-1.505,-7.056],[-19.951,-32.991],[-53.552,-44.84],[0,0]],"v":[[-182.563,-121.965],[-100.569,-7.175],[-19.352,57.972],[59.272,166.564],[134.567,189.676],[178.004,158.9],[162.409,132.695],[130.944,117.408],[81.584,-15.458],[13.708,-133.751],[-122.093,-159.374]],"c":true}],"e":[{"i":[[0,0],[-38.948,-24.598],[-19.473,-16.11],[-19.474,-20.498],[-25.623,2.305],[-0.256,11.53],[12.043,6.149],[0.769,7.175],[5.637,29.723],[56.555,20.791],[0,0]],"o":[[0,0],[38.946,24.599],[19.472,16.111],[19.474,20.498],[25.623,-2.307],[0.257,-11.53],[-12.042,-6.15],[-0.769,-7.174],[-5.637,-29.722],[-53.552,-44.84],[0,0]],"v":[[-182.563,-121.965],[-100.569,-7.175],[28.569,31.547],[63.416,145.537],[135.929,176.285],[182.306,150.15],[169.494,122.477],[139.772,104.029],[119.786,-42.021],[13.708,-133.751],[-122.093,-159.374]],"c":true}]},{"t":599}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.882353001015,0.925490016563,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[550.411,745.226],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"ix":15,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":0,"s":[{"i":[[17.869,3.257],[0,0],[-8.209,-5.383],[-6.75,-1.725],[-7.76,-11.507],[-13.043,-12.897],[-0.851,-0.685],[-3.275,-1.007],[-9.421,8.05],[0,0],[15.73,21.192]],"o":[[0,0],[9.359,4.54],[13.748,0.813],[4.806,1.228],[23.961,35.532],[0.825,0.816],[2.972,2.391],[10.091,3.103],[0,-0.001],[-32.449,-13.19],[-10.824,-14.583]],"v":[[-41.792,-96.176],[-99.031,-59.946],[-72.602,-44.969],[-39.414,-41.246],[-20.106,-20.539],[38.578,75.661],[41.521,80.376],[53.296,93.659],[81.262,80.669],[81.262,80.668],[17.24,-70.841]],"c":true}],"e":[{"i":[[17.869,3.257],[0,0],[-8.209,-5.383],[-6.75,-1.725],[-5.794,-12.612],[-9.32,-27.051],[-0.082,-1.089],[-3.275,-1.007],[-7.904,5.843],[0,0],[15.73,21.192]],"o":[[0,0],[9.359,4.54],[13.177,4.221],[4.806,1.228],[16.465,35.842],[0.378,1.097],[0.307,4.058],[10.091,3.103],[0,-0.001],[-14.812,-24.099],[-10.825,-14.583]],"v":[[-68.7,-79.466],[-123.418,-43.62],[-75.715,-25.745],[-42.908,-12.838],[-21.804,15.729],[6.718,89.065],[13.958,107.952],[21.755,124.714],[41.524,116.948],[48.76,101.011],[-13.979,-44.047]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":150,"s":[{"i":[[17.869,3.257],[0,0],[-8.209,-5.383],[-6.75,-1.725],[-5.794,-12.612],[-9.32,-27.051],[-0.082,-1.089],[-3.275,-1.007],[-7.904,5.843],[0,0],[15.73,21.192]],"o":[[0,0],[9.359,4.54],[13.177,4.221],[4.806,1.228],[16.465,35.842],[0.378,1.097],[0.307,4.058],[10.091,3.103],[0,-0.001],[-14.812,-24.099],[-10.825,-14.583]],"v":[[-68.7,-79.466],[-123.418,-43.62],[-75.715,-25.745],[-42.908,-12.838],[-21.804,15.729],[6.718,89.065],[13.958,107.952],[21.755,124.714],[41.524,116.948],[48.76,101.011],[-13.979,-44.047]],"c":true}],"e":[{"i":[[17.869,3.257],[0,0],[-8.209,-5.383],[-6.75,-1.725],[-7.76,-11.507],[-13.043,-12.897],[-0.851,-0.685],[-3.275,-1.007],[-9.421,8.05],[0,0],[15.73,21.192]],"o":[[0,0],[9.359,4.54],[13.748,0.813],[4.806,1.228],[23.961,35.532],[0.825,0.816],[2.972,2.391],[10.091,3.103],[0,-0.001],[-32.449,-13.19],[-10.824,-14.583]],"v":[[-41.792,-96.176],[-99.031,-59.946],[-72.602,-44.969],[-39.414,-41.246],[-20.106,-20.539],[38.578,75.661],[41.521,80.376],[53.296,93.659],[81.262,80.669],[81.262,80.668],[17.24,-70.841]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":298,"s":[{"i":[[17.869,3.257],[0,0],[-8.209,-5.383],[-6.75,-1.725],[-7.76,-11.507],[-13.043,-12.897],[-0.851,-0.685],[-3.275,-1.007],[-9.421,8.05],[0,0],[15.73,21.192]],"o":[[0,0],[9.359,4.54],[13.748,0.813],[4.806,1.228],[23.961,35.532],[0.825,0.816],[2.972,2.391],[10.091,3.103],[0,-0.001],[-32.449,-13.19],[-10.824,-14.583]],"v":[[-41.792,-96.176],[-99.031,-59.946],[-72.602,-44.969],[-39.414,-41.246],[-20.106,-20.539],[38.578,75.661],[41.521,80.376],[53.296,93.659],[81.262,80.669],[81.262,80.668],[17.24,-70.841]],"c":true}],"e":[{"i":[[17.869,3.257],[0,0],[-8.209,-5.383],[-6.75,-1.725],[-5.794,-12.612],[-9.32,-27.051],[-0.082,-1.089],[-3.275,-1.007],[-7.904,5.843],[0,0],[15.73,21.192]],"o":[[0,0],[9.359,4.54],[13.177,4.221],[4.806,1.228],[16.465,35.842],[0.378,1.097],[0.307,4.058],[10.091,3.103],[0,-0.001],[-14.812,-24.099],[-10.825,-14.583]],"v":[[-68.7,-79.466],[-123.418,-43.62],[-75.715,-25.745],[-42.908,-12.838],[-21.804,15.729],[6.719,89.065],[13.958,107.952],[21.755,124.714],[41.524,116.948],[48.76,101.011],[-13.979,-44.047]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":451,"s":[{"i":[[17.869,3.257],[0,0],[-8.209,-5.383],[-6.75,-1.725],[-5.794,-12.612],[-9.32,-27.051],[-0.082,-1.089],[-3.275,-1.007],[-7.904,5.843],[0,0],[15.73,21.192]],"o":[[0,0],[9.359,4.54],[13.177,4.221],[4.806,1.228],[16.465,35.842],[0.378,1.097],[0.307,4.058],[10.091,3.103],[0,-0.001],[-14.812,-24.099],[-10.825,-14.583]],"v":[[-68.7,-79.466],[-123.418,-43.62],[-75.715,-25.745],[-42.908,-12.838],[-21.804,15.729],[6.719,89.065],[13.958,107.952],[21.755,124.714],[41.524,116.948],[48.76,101.011],[-13.979,-44.047]],"c":true}],"e":[{"i":[[17.869,3.257],[0,0],[-8.209,-5.383],[-6.75,-1.725],[-7.76,-11.507],[-13.043,-12.897],[-0.851,-0.685],[-3.275,-1.007],[-9.421,8.05],[0,0],[15.73,21.192]],"o":[[0,0],[9.359,4.54],[13.748,0.813],[4.806,1.228],[23.961,35.532],[0.825,0.816],[2.972,2.391],[10.091,3.103],[0,-0.001],[-32.449,-13.19],[-10.824,-14.583]],"v":[[-41.792,-96.176],[-99.031,-59.946],[-72.602,-44.969],[-39.414,-41.246],[-20.106,-20.539],[38.578,75.661],[41.521,80.376],[53.296,93.659],[81.262,80.669],[81.262,80.668],[17.24,-70.841]],"c":true}]},{"t":599}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372967888,0.890196018593,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[684.72,680.598],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"ix":16,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"fl","c":{"a":0,"k":[0.941175991881,0.960784014534,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[697.934,706.201],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":1,"cix":2,"ix":17,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":0,"s":[{"i":[[0,0],[-19.644,-5.019],[-21.522,-11.244],[-23.744,13.855],[-0.683,7.027],[8.712,5.66],[13.495,-8.634],[25.793,10.842],[0,0]],"o":[[0,0],[19.645,5.02],[21.523,11.243],[23.744,-13.853],[0.684,-7.027],[-8.711,-5.66],[-19.814,-54.011],[-25.794,-10.843],[0,0]],"v":[[-146.552,-16.665],[-56.98,-11.195],[36.203,122.779],[99.747,101.495],[145.869,63.748],[127.761,23.028],[80.274,25.6],[6.437,-117.989],[-97.718,-134.022]],"c":true}],"e":[{"i":[[0,0],[-18.476,-8.349],[-6.849,-23.297],[-26.455,-7.474],[-5.533,4.386],[5.516,22.512],[15.583,3.72],[25.793,10.842],[0,0]],"o":[[0,0],[21.684,9.798],[6.849,23.297],[26.454,7.474],[5.533,-4.386],[-2.472,-10.09],[-27.812,-123.548],[-25.794,-10.843],[0,0]],"v":[[-146.552,-16.665],[-61.585,17.085],[-2.09,144.871],[57.342,175.836],[116.529,182.83],[133.269,141.529],[86.236,113.579],[8.665,-94.324],[-97.718,-134.022]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":150,"s":[{"i":[[0,0],[-18.476,-8.349],[-6.849,-23.297],[-26.455,-7.474],[-5.533,4.386],[5.516,22.512],[15.583,3.72],[25.793,10.842],[0,0]],"o":[[0,0],[21.684,9.798],[6.849,23.297],[26.454,7.474],[5.533,-4.386],[-2.472,-10.09],[-27.812,-123.548],[-25.794,-10.843],[0,0]],"v":[[-146.552,-16.665],[-61.585,17.085],[-2.09,144.871],[57.342,175.836],[116.529,182.83],[133.269,141.529],[86.236,113.579],[8.665,-94.324],[-97.718,-134.022]],"c":true}],"e":[{"i":[[0,0],[-19.644,-5.019],[-21.522,-11.244],[-23.744,13.855],[-0.683,7.027],[8.712,5.66],[13.495,-8.634],[25.793,10.842],[0,0]],"o":[[0,0],[19.645,5.02],[21.523,11.243],[23.744,-13.853],[0.684,-7.027],[-8.711,-5.66],[-19.814,-54.011],[-25.794,-10.843],[0,0]],"v":[[-146.552,-16.665],[-56.98,-11.195],[36.203,122.779],[99.747,101.495],[145.869,63.748],[127.761,23.028],[80.274,25.6],[6.437,-117.989],[-97.718,-134.022]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":298,"s":[{"i":[[0,0],[-19.644,-5.019],[-21.522,-11.244],[-23.744,13.855],[-0.683,7.027],[8.712,5.66],[13.495,-8.634],[25.793,10.842],[0,0]],"o":[[0,0],[19.645,5.02],[21.523,11.243],[23.744,-13.853],[0.684,-7.027],[-8.711,-5.66],[-19.814,-54.011],[-25.794,-10.843],[0,0]],"v":[[-146.552,-16.665],[-56.98,-11.195],[36.203,122.779],[99.747,101.495],[145.869,63.748],[127.761,23.028],[80.274,25.6],[6.437,-117.989],[-97.718,-134.022]],"c":true}],"e":[{"i":[[0,0],[-18.476,-8.349],[-6.849,-23.297],[-26.455,-7.474],[-5.533,4.386],[5.516,22.512],[15.583,3.72],[25.793,10.842],[0,0]],"o":[[0,0],[21.684,9.798],[6.849,23.297],[26.454,7.474],[5.533,-4.386],[-2.472,-10.09],[-27.812,-123.548],[-25.794,-10.843],[0,0]],"v":[[-146.552,-16.665],[-61.585,17.085],[-2.09,144.871],[57.342,175.836],[116.529,182.83],[133.269,141.529],[86.236,113.579],[8.665,-94.324],[-97.718,-134.022]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":451,"s":[{"i":[[0,0],[-18.476,-8.349],[-6.849,-23.297],[-26.455,-7.474],[-5.533,4.386],[5.516,22.512],[15.583,3.72],[25.793,10.842],[0,0]],"o":[[0,0],[21.684,9.798],[6.849,23.297],[26.454,7.474],[5.533,-4.386],[-2.472,-10.09],[-27.812,-123.548],[-25.794,-10.843],[0,0]],"v":[[-146.552,-16.665],[-61.585,17.085],[-2.09,144.871],[57.342,175.836],[116.529,182.83],[133.269,141.529],[86.236,113.579],[8.665,-94.324],[-97.718,-134.022]],"c":true}],"e":[{"i":[[0,0],[-19.644,-5.019],[-21.522,-11.244],[-23.744,13.855],[-0.683,7.027],[8.712,5.66],[13.495,-8.634],[25.793,10.842],[0,0]],"o":[[0,0],[19.645,5.02],[21.523,11.243],[23.744,-13.853],[0.684,-7.027],[-8.711,-5.66],[-19.814,-54.011],[-25.794,-10.843],[0,0]],"v":[[-146.552,-16.665],[-56.98,-11.195],[36.203,122.779],[99.747,101.495],[145.869,63.748],[127.761,23.028],[80.274,25.6],[6.437,-117.989],[-97.718,-134.022]],"c":true}]},{"t":599}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.882353001015,0.925490016563,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[702.286,650.547],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":2,"cix":2,"ix":18,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[27.848,-15.56],[21.527,0],[13.254,4.332],[0,0],[-28.987,-0.019],[0,0],[-25.101,9.698]],"o":[[0,0],[-9.413,28.956],[-23.616,13.195],[-15.384,0],[0,0],[0,0],[0,0],[19.671,-0.011],[62.264,-24.056]],"v":[[95.554,-52.209],[83.643,-48.956],[27.138,21.178],[-41.185,39.596],[-84.369,32.595],[-95.554,45.903],[-46.968,52.209],[-46.719,52.209],[22.014,39.596]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.780391977348,0.854902020623,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[426.125,380.191],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"ix":19,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[7.687,-28.441],[-1.281,-19.058],[0,0],[0,0],[12.266,12.563],[45.865,-18.448]],"o":[[0,0],[-7.687,28.441],[37.377,34.591],[0,0],[0,0],[-12.267,-12.562],[-26.904,38.178]],"v":[[-123.053,-45.596],[-155.803,8.584],[-163.201,106.975],[22.019,112.612],[164.482,-54.961],[128.065,-113.373],[30.218,-123.118]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.882353001015,0.925490016563,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[464.81,458.38],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 34","np":2,"cix":2,"ix":20,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[4.996,-32.669],[0,0],[0,0],[0,0]],"o":[[0,0],[-4.997,32.669],[0,0],[0,0],[0,0]],"v":[[-113.753,-44.2],[-152.775,1.921],[-80.52,130.292],[157.772,1.921],[82.44,-130.292]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.780391977348,0.862744978362,0.976471007104,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[402.829,426.095],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 35","np":2,"cix":2,"ix":21,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"bm":0}],"markers":[]}')
    },
    c1be: function(i, t, a) {}
});
//# sourceMappingURL=app.5196e4e8.js.map