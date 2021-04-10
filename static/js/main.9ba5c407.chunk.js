(this["webpackJsonpreact-just-give-me-space"]=this["webpackJsonpreact-just-give-me-space"]||[]).push([[0],{30:function(e,t,c){},32:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(23),i=c.n(s),r=c(7),l=(c(30),c(13)),o=c(6),j=c.n(o),A=c(11),d=c(3),h=c(4),b=c(18),u=(c(32),c(1));function p(e){var t=e.apodData;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),t.length?Object(u.jsxs)("div",{className:"Home fadeIn",children:[Object(u.jsx)("h1",{children:"Welcome."}),Object(u.jsx)("p",{children:"Welcome to JUST GIVE ME SPACE, a website for space nerds. Feel free to explore using the spaceship navigation on the right. You'll find a a dark sky forecast page that will display the viewing conditions in your chosen locale, a SpaceX information page, a gallery of astronomy pictures, and a collection of films that revolve around space themes, 'orbit' pun intended."}),Object(u.jsx)("p",{children:"I hope you enjoy the content on this website. May you always find dark skies and a big telescope waiting."}),Object(u.jsx)("p",{children:Object(u.jsx)("span",{className:"heavy",children:"-Shawn"})}),Object(u.jsxs)("div",{className:"quote",children:[Object(u.jsxs)("h2",{children:[Object(u.jsx)(b.a,{className:"accent-color quote-icon"}),"If you wish to make an apple pie from scratch, you must first invent the universe",Object(u.jsx)(b.b,{className:"accent-color quote-icon"})]}),Object(u.jsx)("h2",{className:"light",children:"-Carl Sagan"})]}),Object(u.jsxs)("div",{className:"apod-div",children:[Object(u.jsx)("h1",{children:"Astronomy Picture of the Day"}),Object(u.jsx)(r.b,{to:"/apodgallery",className:"apod-link",children:Object(u.jsx)("p",{children:"View Gallery"})}),Object(u.jsx)("div",{className:"apod-img-div",children:Object(u.jsx)("img",{src:t[t.length-1].url,alt:t[t.length-1].title})}),Object(u.jsx)("h2",{children:t[t.length-1].title}),Object(u.jsx)("p",{children:t[t.length-1].explanation})]})]}):""}c(39);var O=c(15);function x(e){return console.log(e),e.showModal?Object(u.jsxs)("div",{className:"ApodModal center fadeIn1",children:[Object(u.jsxs)("div",{className:"modal-title-div",onClick:e.handleClick,children:[Object(u.jsx)(O.b,{className:"close"}),Object(u.jsx)("h1",{children:e.data.title})]}),Object(u.jsx)("img",{src:e.data.url,alt:e.data.title}),Object(u.jsx)("p",{children:e.data.explanation}),Object(u.jsx)("a",{href:e.data.hdurl,id:"download",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:"Download Hi-Def Version"})})]}):null}var m=c(49);c(40);function f(e){var t=e.apodData,c=Object(a.useState)(!1),n=Object(d.a)(c,2),s=n[0],i=n[1],l=Object(a.useState)({}),o=Object(d.a)(l,2),j=o[0],A=o[1],h=function(e){i(!s),0===Object.values(j).length?A(t.find((function(t){return t.url===e.target.currentSrc}))):A({}),console.log("Show Modal: ".concat(s))};return Object(u.jsxs)("div",{className:"ApodGallery fadeIn",children:[Object(u.jsx)("h1",{children:"Astronomy Picture of the Day Gallery"}),Object(u.jsx)("br",{}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"light",children:"Data Provided by "}),Object(u.jsx)("b",{children:"NASA"})]}),Object(u.jsx)("div",{className:"apod-flex",children:t.map((function(e){return"video"===e.media_type?"":Object(u.jsxs)("div",{className:"tile-div",children:[Object(u.jsx)("div",{className:"tile-link",onClick:h,children:Object(u.jsx)("img",{src:e.url,className:"tile-img",alt:e.title})}),Object(u.jsx)("h4",{children:e.title})]},Object(m.a)())}))}),Object(u.jsx)("div",{className:"button-div",children:Object(u.jsx)(r.b,{to:"/",className:"button link",children:"Back to Home"})}),Object(u.jsx)(x,{handleClick:h,showModal:s,data:j})]})}function v(){var e=Object(a.useState)(),t=Object(d.a)(e,2),c=t[0],n=t[1],s=function(){var e=Object(A.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.spacexdata.com/v4/company");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),void 0!==c?Object(u.jsxs)("div",{className:"CompanyInfo fadeIn",children:[Object(u.jsx)("h1",{children:"Company Info"}),Object(u.jsx)("h2",{children:"Video"}),Object(u.jsx)("div",{className:"youtube",children:Object(u.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube-nocookie.com/embed/A0FZIwabctw?start=48",title:"YouTube video player",frameborder:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(u.jsx)("h2",{children:"Summary"}),Object(u.jsx)("p",{children:c.summary}),Object(u.jsx)("h2",{children:"Links"}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:c.links.website,children:Object(u.jsx)("b",{children:"SpaceX Website"})})}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:c.links.elon_twitter,children:Object(u.jsx)("b",{children:"Elon's Twitter"})})}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:c.links.twitter,children:Object(u.jsx)("b",{children:"SpaceX' Twitter"})})}),Object(u.jsx)("h2",{children:"Stats"}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"info-field",children:"Founded: "}),c.founded]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"info-field",children:"CEO: "}),c.ceo]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"info-field",children:"COO: "}),c.coo]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"info-field",children:"CTO: "}),c.cto]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"info-field",children:"CTO of Propulsion: "}),c.cto_propulsion]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"info-field",children:"Number of Employees: "}),c.employees]})]}):Object(u.jsx)("h2",{children:"Loading"})}function g(e){var t=e.data;if(void 0!==t){var c=new Date(t.date_local);return c?(console.log(t),Object(u.jsxs)("div",{className:"launch-div fadeIn",children:[t.links.patch.small?Object(u.jsx)("img",{className:"patch",src:t.links.patch.small,alt:"patch for mission ".concat(t.name)}):Object(u.jsx)("img",{className:"patch",src:"data:image/png;base64,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",alt:"spaceX logo substitute for missing mission patch"}),Object(u.jsxs)("div",{className:"launch-info",children:[Object(u.jsx)("h2",{children:t.name}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"info-field",children:"Flight Number"}),": ",t.flight_number]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"info-field",children:"Expected Launch Date"}),": ","".concat(c.toLocaleString("default",{month:"long",day:"numeric",year:"numeric"}))]}),t.links.wikipedia?Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"info-field",children:"WikiPage"}),": ",Object(u.jsx)("a",{href:t.links.wikipedia,children:t.links.wikipedia})]}):""]})]})):""}return Object(u.jsx)("h2",{children:"Loading"})}function w(){var e=Object(a.useState)(),t=Object(d.a)(e,2),c=t[0],n=t[1],s=function(){var e=Object(A.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.spacexdata.com/v4/launches/upcoming");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n(c),console.log(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),!c||c.length>0?Object(u.jsxs)("div",{className:"UpcomingLaunches fadeIn",children:[Object(u.jsx)("h1",{children:"Upcoming Launches"}),c?c.map((function(e){return Object(u.jsx)("div",{className:"launches-div",children:Object(u.jsx)(g,{data:e})},e.id)})):Object(u.jsx)("h2",{children:"Loading"})]}):Object(u.jsx)("h2",{children:"Loading"})}var B=[{name:"Home",path:"/",class:"nav-item"},{name:"SpaceX",path:"/spacex",class:"nav-item"},{name:"DarkSkies",path:"/darkskies",class:"nav-item"},{name:"APOD Gallery",path:"/apodgallery",class:"nav-item"},{name:"Film And TV",path:"/filmandtv",class:"nav-item"}],k=["contact","the martian","space odyssey 2001","interstellar","event horizon","Apollo 13","arrival","Deep impact","europa report","star wars","spaceballs","for all mankind"],y=new Date,N=new Date(y-2592e6).toLocaleDateString("en-US").split("/"),S=Object(d.a)(N,3),D=S[0],Q=S[1],C=S[2];1===Q.length&&(Q="0"+Q),1===D.length&&(D="0"+D);var I="".concat(C,"-").concat(D,"-").concat(Q),X=["Choose Content","Company Info","Upcoming Launches"],Z=c.p+"static/media/falcon9.d4a91d7b.png";c(41);function W(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),i=Object(d.a)(s,2),r=i[0],l=i[1];return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(u.jsxs)("div",{className:"SpaceX fadeIn",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"SpaceX"}),Object(u.jsx)("p",{className:"get-content-p",children:"SpaceX currently leads the world in private space exploration and they are a constant inspiration to me. Here, you'll find info on upcoming launches as well as details on their program."})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"pages",children:Object(u.jsx)("p",{className:"get-content-p",children:"Select information to view:"})}),Object(u.jsx)("select",{onChange:function(e){switch(console.log(e.target.options.selectedIndex),n(!1),l(!1),e.target.options.selectedIndex){case 0:break;case 1:n(!0);break;case 2:l(!0)}},name:"selectedPage",id:"pages",children:X.map((function(e){return Object(u.jsx)("option",{children:e},Object(m.a)())}))})]}),c?Object(u.jsx)(v,{}):"",r?Object(u.jsx)(w,{}):"",Object(u.jsx)("div",{className:"falcon-div",children:Object(u.jsx)("img",{src:Z,alt:"falcon 9 dramatically entering screen simulating launch",className:"falcon"})})]})}var U=c.p+"static/media/loading.01b22d1d.gif";c(42);function L(e){var t=e.lat,c=e.long,a=e.renderSkyStats,n=e.skyData;return a?Object(u.jsxs)("div",{className:"SkyStats fadeIn",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Your Location"}),Object(u.jsxs)("h4",{children:["Latitude: ",t.toFixed(2)]}),Object(u.jsxs)("h4",{children:["Longitude: ",c.toFixed(2)]}),"a"]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"AstroConditions"}),Object(u.jsxs)("h4",{children:["Seeing ",Object(u.jsx)("span",{className:"light",children:"(lower is better)"}),": ",n.seeing]}),Object(u.jsxs)("h4",{children:["Atmosphere Transparency ",Object(u.jsx)("span",{className:"light",children:"(lower is better)"}),": ",n.transparency]})]})]}),Object(u.jsx)("img",{className:"fadeIn sky-results",src:"https://www.7timer.info/bin/astro.php?lon=".concat(c,"&lat=").concat(t,"ac=0&lang=en&unit=british&output=internal&tzshift=0"),alt:"png graphic showing astro conditions in detail"})]}):Object(u.jsx)("img",{className:"loading",src:U,alt:"Loading Website..."})}c(43);function J(e){var t=Object(a.useState)(null),c=Object(d.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(null),l=Object(d.a)(i,2),o=l[0],h=l[1],b=Object(a.useState)({}),p=Object(d.a)(b,2),O=p[0],x=p[1],m=Object(a.useState)(!1),f=Object(d.a)(m,2),v=f[0],g=f[1],w=Object(a.useState)(!1),B=Object(d.a)(w,2),k=B[0],y=B[1],N=function(){var e=Object(A.a)(j.a.mark((function e(t,c){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.7timer.info/bin/astro.php?lon=".concat(c,"&lat=").concat(t,"&ac=0&unit=british&output=json&tzshift=0"));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log(n),x(n.dataseries[0]),g(!0),console.log(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){window.scrollTo(0,0)})),Object(u.jsxs)("div",{className:"DarkSkies fadeIn",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"DarkSkies"}),Object(u.jsx)("p",{children:"You can use this utility to check the astronomy forcast for your location! Be sure to allow location sharing when it pops up for it to work properly."}),Object(u.jsxs)("p",{className:"heavy",children:[Object(u.jsx)("span",{className:"light",children:"Data Provided by "}),"7-Timer"]})]}),Object(u.jsx)("div",{className:"render-div",children:Object(u.jsx)("div",{className:"button link",onClick:function(){y(!0),navigator.geolocation.getCurrentPosition((function(e){s(e.coords.latitude),h(e.coords.longitude),N(e.coords.latitude,e.coords.longitude)}))},children:"Get My AstroConditions"})}),k?Object(u.jsx)(L,{lat:n,long:o,renderSkyStats:v,skyData:O}):"",Object(u.jsx)("div",{className:"button-div",children:Object(u.jsx)("div",{className:"",children:Object(u.jsx)(r.b,{to:"/",className:"button link",children:"Back to Home"})})})]})}c(44);function R(e){var t=Object(a.useState)({}),c=Object(d.a)(t,2),n=c[0],s=c[1],i=function(){var t=Object(A.a)(j.a.mark((function t(){var c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.omdbapi.com/?apikey=".concat("a529c1df","&s=").concat(e.title));case 3:return c=t.sent,t.next=6,c.json();case 6:a=t.sent,s(Object(l.a)({},a.Search[0])),console.log(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),Object(u.jsxs)("div",{className:"FilmTile",children:[Object(u.jsx)("img",{src:n.Poster,alt:"poster for the movie ".concat(n.Title)}),Object(u.jsxs)("h1",{children:[n.Title," (",n.Year,")"]})]})}c(45);function P(){return Object(u.jsxs)("div",{className:"FilmAndTv fadeIn",children:[Object(u.jsx)("h1",{children:"Space-related Film and TV"}),Object(u.jsx)("p",{children:"Below find a small collection of amazing films and television shows that feature space as the main theme."}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"light",children:"Data Provided by "}),Object(u.jsx)("b",{children:"OMDb"})]}),Object(u.jsx)("div",{className:"films-div",children:k.map((function(e){return Object(u.jsx)(R,{title:e})}))}),Object(u.jsx)("div",{className:"button-div",id:"tv-home",children:Object(u.jsx)(r.b,{to:"/",className:"button link",children:"Back to Home"})})]})}c(46);function V(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),i=Object(d.a)(s,2),l=i[0],o=i[1],j=Object(a.useState)(!1),A=Object(d.a)(j,2),h=A[0],b=A[1],p=function(){n(!c),b(!h)};return Object(a.useEffect)((function(){setTimeout((function(){return o(!0)}),3e3)})),Object(u.jsx)("div",{className:l?"navbar-div show":"navbar-div",children:Object(u.jsxs)("div",{onMouseEnter:p,onMouseLeave:p,className:c?" navbar-container slide-in":"navbar-container",children:[Object(u.jsx)("div",{className:h?"nav-icon rotate":"nav-icon",children:Object(u.jsx)(O.a,{})}),Object(u.jsx)("ul",{className:"nav-list",children:B.map((function(e){return Object(u.jsx)(r.b,{to:e.path,children:Object(u.jsx)("li",{className:e.class,children:e.name})},Object(m.a)())}))})]})})}var G=c(25);c(47);function F(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=function(){var e=Object(A.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Beginning APOD API Fetch"),"https://api.nasa.gov/planetary/apod?",e.prev=2,e.next=5,fetch("".concat("https://api.nasa.gov/planetary/apod?","start_date=").concat(I,"&api_key=").concat("ka0YhEL0DID0w5D3a7t8prVx8MDyAH49Gyd4ryW8"));case 5:return t=e.sent,e.next=8,t.json();case 8:c=e.sent,console.log(c),n(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error("Fetch error: ".concat(e.t0));case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){window.scrollTo(0,0),s()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("main",{children:[Object(u.jsx)(V,{}),Object(u.jsxs)(h.c,{children:[Object(u.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(u.jsx)(p,Object(l.a)(Object(l.a)({},e),{},{apodData:c}))}}),Object(u.jsx)(h.a,{path:"/apodgallery",exact:!0,render:function(e){return Object(u.jsx)(f,Object(l.a)(Object(l.a)({},e),{},{apodData:c}))}}),Object(u.jsx)(h.a,{path:"/darkskies",component:J}),Object(u.jsx)(h.a,{path:"/filmandtv",component:P}),Object(u.jsx)(h.a,{path:"/spacex",component:W})]})]}),Object(u.jsx)("footer",{className:"fadeInPause",children:c.length>1?Object(u.jsxs)("p",{className:"footer-p",children:["Web Design ",Object(u.jsx)(G.a,{className:"copyright"}),C," \u2022 Shawn Clary \u2022 Sleeptil3Software"]}):""})]})}i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)("header",{children:Object(u.jsx)("div",{className:"header-div",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{className:"site-heading",children:["just give me ",Object(u.jsx)("span",{className:"space",children:"SPACE"})]}),Object(u.jsxs)("p",{className:"site-sub",children:["A Website for ",Object(u.jsx)("span",{className:"nerds",children:"Space Nerds"})]})]})})}),Object(u.jsx)(F,{})]})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.9ba5c407.chunk.js.map