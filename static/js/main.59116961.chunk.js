(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(n,t,e){},138:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e.n(a),c=e(33),i=e.n(c),b=(e(93),e(2)),o=e(36),u=e(26),s=e(14),d=e(40),l=e.n(d),O=e(66),j=e(81),f=e(82),p=e(45),m=e(37),v=e(144),h=e(147),w=e(80),g=e(145);function x(){var n=Object(s.a)(["\n  width: 70%;\n  max-width: 700px;\n  background: #fff;\n  border-radius: 3px;\n  padding: 32px;\n  margin: 32px auto;\n\n  @media (min-width: 420px) {\n    width: 50%;\n  }\n"]);return x=function(){return n},n}var y=Object(b.a)(x());function k(){var n=Object(s.a)(["\n          font-size: 18px;\n          color: #505f79;\n        "]);return k=function(){return n},n}var D=function(n){var t=n.onSubmit,e=Object(a.useCallback)(function(n){return n.includes("@")?void 0:"INVALID_EMAIL"},[]);return Object(b.b)("div",{css:y},Object(b.b)("h1",{css:Object(b.a)(k())},"Log in to donor portal"),Object(b.b)(p.c,{onSubmit:t},function(n){var t=n.formProps,r=n.submitting;return Object(b.b)("form",t,Object(b.b)(m.b,{name:"email",defaultValue:"",label:"Email",isRequired:!0,validate:e},function(n){var t=n.fieldProps,e=n.error;return Object(b.b)(a.Fragment,null,Object(b.b)(g.a,t),e&&Object(b.b)(v.a,null,"Please enter a valid email address"))}),Object(b.b)(m.b,{name:"password",type:"password",defaultValue:"",label:"Password",isRequired:!0},function(n){var t=n.fieldProps;return Object(b.b)(g.a,Object.assign({type:"password"},t))}),Object(b.b)(h.a,null,Object(b.b)(w.b,{type:"submit",appearance:"primary",isLoading:r},"Submit")))}))};function L(){var n=Object(s.a)(["\n              font-size: 20px;\n              font-weight: bold;\n            "]);return L=function(){return n},n}function I(){var n=Object(s.a)(["\n            margin-top: 16px;\n          "]);return I=function(){return n},n}function S(){var n=Object(s.a)(["\n          ","\n\n          @media (min-width: 420px) {\n            flex-direction: column;\n          }\n        "]);return S=function(){return n},n}function A(){var n=Object(s.a)(["\n            font-size: 18px;\n            color: #505f79;\n            margin: 0;\n            margin-bottom: 16px;\n          "]);return A=function(){return n},n}function E(){var n=Object(s.a)(["\n          ","\n          justify-content: space-between;\n        "]);return E=function(){return n},n}function R(){var n=Object(s.a)(["\n          position: fixed;\n          right: 24px;\n          padding: 8px;\n\n          > button {\n            background: #fff;\n          }\n        "]);return R=function(){return n},n}function _(){var n=Object(s.a)(["\n        dl {\n          margin: 0;\n        }\n\n        dd {\n          margin-left: 0;\n        }\n      "]);return _=function(){return n},n}function P(){var n=Object(s.a)(["\n  ","\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 420px) {\n    width: 50%;\n    flex-direction: row;\n  }\n"]);return P=function(){return n},n}function C(){var n=Object(s.a)(["\n  font-weight: bold;\n  color: #36b37e;\n  font-size: 32px;\n"]);return C=function(){return n},n}var N=Object(b.a)(C()),z=Object(b.a)(P(),y),B=function(n){return n.toLocaleString(void 0,{maximumFractionDigits:2})},G=function(n){var t=n.dashboardData,e=t.first_name,a=t.donation_sum,r=t.annual_distribution_percent,c=t.charities,i=t.fund_value,o=n.onLogOut;return Object(b.b)("div",{css:Object(b.a)(_())},Object(b.b)("div",{css:Object(b.a)(R())},Object(b.b)(w.a,{onClick:o},"Log out")),Object(b.b)("div",{css:Object(b.a)(E(),z)},Object(b.b)("h1",{css:Object(b.a)(A())},"Welcome ",e,"!"),Object(b.b)("div",null,"Donated this year:",Object(b.b)("div",{css:N},"$",B(a)))),Object(b.b)("div",{css:z},Object(b.b)("dl",null,Object(b.b)("dd",null,"Your fund value is"),Object(b.b)("dt",{css:N},"$",B(i)))),Object(b.b)("div",{css:z},Object(b.b)("dl",null,Object(b.b)("dd",null,"Your annual distribution is"),Object(b.b)("dt",{css:N},B(r),"%"))),Object(b.b)("div",{css:Object(b.a)(S(),z)},Object(b.b)("div",null,"Each year, you distribute:"),Object(b.b)("table",{css:Object(b.a)(I())},Object(b.b)("thead",{css:Object(b.a)(L())},Object(b.b)("tr",null,Object(b.b)("td",null,"Cause"),Object(b.b)("td",null,"Distribution"),Object(b.b)("td",null,"Total amount"))),Object(b.b)("tbody",null,c.map(function(n){var t=n.cause,e=n.charity_name,a=n.percent;return Object(b.b)("tr",{key:t},Object(b.b)("td",null,e,Object(b.b)("br",null),Object(b.b)("small",null,t)),Object(b.b)("td",{css:N},B(a),"%"),Object(b.b)("td",{css:N},"$",B(r/100*i*(a/100))))})))))},H=e(77),$=e.n(H);function V(){var n=Object(s.a)(["\n        height: 100vh;\n        overflow-y: hidden;\n        background: #57d9a3;\n      "]);return V=function(){return n},n}var W=function(n,t){return Object(f.a)({},n,t)},q=function(){var n,t=Object(a.useReducer)(W,{email:"",step:"LOGIN",dashboardData:void 0}),e=Object(j.a)(t,2),r=e[0],c=e[1],i=Object(a.useCallback)(function(){var n=Object(O.a)(l.a.mark(function n(t,e,a){var r,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e=t.email,b=t.password,$.a.post("".concat("https://rhok-i4c-winter2019-fe-pyserv.herokuapp.com/","/get"),{email:e,password:b});case 2:r=n.sent,i=r.data,a(),c({email:t.email,step:"DASHBOARD",dashboardData:i});case 6:case"end":return n.stop()}var e,b},n)}));return function(t,e,a){return n.apply(this,arguments)}}(),[]),o=Object(a.useCallback)(function(){c({email:"",step:"LOGIN",dashboardData:void 0})},[]);switch(r.step){case"LOGIN":n=Object(b.b)(D,{onSubmit:i});break;case"DASHBOARD":n=r.dashboardData&&Object(b.b)(G,{dashboardData:r.dashboardData,onLogOut:o})}return Object(b.b)("div",{css:Object(b.a)(V())},n)},F=e(83);function J(){var n=Object(s.a)(["\n              & > a {\n                width: 300px !important;\n                height: 50px !important;\n\n                & > * {\n                  width: 100% !important;\n                }\n              }\n            "]);return J=function(){return n},n}function M(){var n=Object(s.a)(["\n      min-height: 100px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: #eee;\n    "]);return M=function(){return n},n}var T=function(){return Object(b.b)("header",{css:Object(b.a)(M())},Object(b.b)(w.b,{appearance:"primary",href:"/dashboard",component:r.a.forwardRef(function(n,t){var e=n.href,a=void 0===e?"":e,r=n.children,c=Object(F.a)(n,["href","children"]);return Object(b.b)("div",{css:Object(b.a)(J())},Object(b.b)(o.b,Object.assign({},c,{to:a,innerRef:t}),r))})},"Log in"))},Y=function(){return Object(b.b)("div",null,Object(b.b)(T,null),"THIS IS HOMEPAGE")};e(137);var K=function(){return Object(b.b)("div",{className:"App"},Object(b.b)(o.a,null,Object(b.b)(u.a,{path:"/",exact:!0,component:Y}),Object(b.b)(u.a,{path:"/dashboard",exact:!0,component:q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},88:function(n,t,e){n.exports=e(138)},93:function(n,t,e){}},[[88,1,2]]]);
//# sourceMappingURL=main.59116961.chunk.js.map