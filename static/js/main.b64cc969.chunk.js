(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(n,t,e){},136:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e.n(a),c=e(33),b=e.n(c),i=(e(91),e(2)),u=e(77),o=e(26),s=e(17),d=e(39),l=e.n(d),O=e(65),j=e(81),f=e(82),p=e(44),m=e(36),v=e(143),h=e(146),w=e(80),g=e(144);function x(){var n=Object(s.a)(["\n  width: 70%;\n  max-width: 700px;\n  background: #fff;\n  border-radius: 3px;\n  padding: 32px;\n  margin: 32px auto;\n\n  @media (min-width: 420px) {\n    width: 50%;\n  }\n"]);return x=function(){return n},n}var y=Object(i.a)(x());function D(){var n=Object(s.a)(["\n          font-size: 18px;\n          color: #505f79;\n        "]);return D=function(){return n},n}var k=function(n){var t=n.onSubmit,e=Object(a.useCallback)(function(n){return n.includes("@")?void 0:"INVALID_EMAIL"},[]);return Object(i.b)("div",{css:y},Object(i.b)("h1",{css:Object(i.a)(D())},"Log in to donor portal"),Object(i.b)(p.c,{onSubmit:t},function(n){var t=n.formProps,r=n.submitting;return Object(i.b)("form",t,Object(i.b)(m.b,{name:"email",defaultValue:"",label:"Email",isRequired:!0,validate:e},function(n){var t=n.fieldProps,e=n.error;return Object(i.b)(a.Fragment,null,Object(i.b)(g.a,t),e&&Object(i.b)(v.a,null,"Please enter a valid email address"))}),Object(i.b)(m.b,{name:"password",type:"password",defaultValue:"",label:"Password",isRequired:!0},function(n){var t=n.fieldProps;return Object(i.b)(g.a,Object.assign({type:"password"},t))}),Object(i.b)(h.a,null,Object(i.b)(w.b,{type:"submit",appearance:"primary",isLoading:r},"Submit")))}))};function L(){var n=Object(s.a)(["\n              font-size: 20px;\n              font-weight: bold;\n            "]);return L=function(){return n},n}function A(){var n=Object(s.a)(["\n            margin-top: 16px;\n          "]);return A=function(){return n},n}function I(){var n=Object(s.a)(["\n          ","\n\n          @media (min-width: 420px) {\n            flex-direction: column;\n          }\n        "]);return I=function(){return n},n}function S(){var n=Object(s.a)(["\n            font-size: 18px;\n            color: #505f79;\n            margin: 0;\n            margin-bottom: 16px;\n          "]);return S=function(){return n},n}function _(){var n=Object(s.a)(["\n          ","\n          justify-content: space-between;\n        "]);return _=function(){return n},n}function C(){var n=Object(s.a)(["\n          position: fixed;\n          right: 24px;\n          padding: 8px;\n\n          > button {\n            background: #fff;\n          }\n        "]);return C=function(){return n},n}function E(){var n=Object(s.a)(["\n        dl {\n          margin: 0;\n        }\n\n        dd {\n          margin-left: 0;\n        }\n      "]);return E=function(){return n},n}function N(){var n=Object(s.a)(["\n  ","\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 420px) {\n    width: 50%;\n    flex-direction: row;\n  }\n"]);return N=function(){return n},n}function P(){var n=Object(s.a)(["\n  font-weight: bold;\n  color: #36b37e;\n  font-size: 32px;\n"]);return P=function(){return n},n}var R=Object(i.a)(P()),z=Object(i.a)(N(),y),B=function(n){return n.toLocaleString(void 0,{maximumFractionDigits:2})},G=function(n){var t=n.dashboardData,e=t.first_name,a=t.donation_sum,r=t.annual_distribution_percent,c=t.charities,b=t.fund_value,u=n.onLogOut;return Object(i.b)("div",{css:Object(i.a)(E())},Object(i.b)("div",{css:Object(i.a)(C())},Object(i.b)(w.a,{onClick:u},"Log out")),Object(i.b)("div",{css:Object(i.a)(_(),z)},Object(i.b)("h1",{css:Object(i.a)(S())},"Welcome ",e,"!"),Object(i.b)("div",null,"Donated this year:",Object(i.b)("div",{css:R},"$",B(a)))),Object(i.b)("div",{css:z},Object(i.b)("dl",null,Object(i.b)("dd",null,"Your fund value is"),Object(i.b)("dt",{css:R},"$",B(b)))),Object(i.b)("div",{css:z},Object(i.b)("dl",null,Object(i.b)("dd",null,"Your annual distribution is"),Object(i.b)("dt",{css:R},B(r),"%"))),Object(i.b)("div",{css:Object(i.a)(I(),z)},Object(i.b)("div",null,"Each year, you distribute:"),Object(i.b)("table",{css:Object(i.a)(A())},Object(i.b)("thead",{css:Object(i.a)(L())},Object(i.b)("tr",null,Object(i.b)("td",null,"Cause"),Object(i.b)("td",null,"Distribution"),Object(i.b)("td",null,"Total amount"))),Object(i.b)("tbody",null,c.map(function(n){var t=n.cause,e=n.charity_name,a=n.percent;return Object(i.b)("tr",{key:t},Object(i.b)("td",null,e,Object(i.b)("br",null),Object(i.b)("small",null,t)),Object(i.b)("td",{css:R},B(a),"%"),Object(i.b)("td",{css:R},"$",B(r/100*b*(a/100))))})))))},V=e(76),$=e.n(V);function q(){var n=Object(s.a)(["\n        height: 100vh;\n        overflow-y: hidden;\n        background: #57d9a3;\n      "]);return q=function(){return n},n}var F=function(n,t){return Object(f.a)({},n,t)},H=function(){var n,t=Object(a.useReducer)(F,{email:"",step:"LOGIN",dashboardData:void 0}),e=Object(j.a)(t,2),r=e[0],c=e[1],b=Object(a.useCallback)(function(){var n=Object(O.a)(l.a.mark(function n(t,e,a){var r,b;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e=t.email,i=t.password,$.a.post("".concat("https://rhok-i4c-winter2019-fe-pyserv.herokuapp.com/","/get"),{email:e,password:i});case 2:r=n.sent,b=r.data,a(),c({email:t.email,step:"DASHBOARD",dashboardData:b});case 6:case"end":return n.stop()}var e,i},n)}));return function(t,e,a){return n.apply(this,arguments)}}(),[]),u=Object(a.useCallback)(function(){c({email:"",step:"LOGIN",dashboardData:void 0})},[]);switch(r.step){case"LOGIN":n=Object(i.b)(k,{onSubmit:b});break;case"DASHBOARD":n=r.dashboardData&&Object(i.b)(G,{dashboardData:r.dashboardData,onLogOut:u})}return Object(i.b)("div",{css:Object(i.a)(q())},n)};e(134);var J=function(){return Object(i.b)("div",{className:"App"},Object(i.b)(u.a,null,Object(i.b)(o.b,{exact:!0,path:"/",render:function(){return Object(i.b)(o.a,{to:"/dashboard"})}}),Object(i.b)(o.b,{exact:!0,path:"/dashboard",component:H})))};b.a.render(r.a.createElement(J,null),document.getElementById("root"))},86:function(n,t,e){n.exports=e(136)},91:function(n,t,e){}},[[86,1,2]]]);
//# sourceMappingURL=main.b64cc969.chunk.js.map