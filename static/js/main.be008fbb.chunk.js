(this["webpackJsonpreact-just-give-me-space"]=this["webpackJsonpreact-just-give-me-space"]||[]).push([[0],{69:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(62),i=a.n(s),r=a(10),l=a.p+"static/media/saturn.3f385327.png",o=(a(69),a(24)),j=a(12),d=a.n(j),A=a(21),b=a(7),h=a(8),u=a(57),p=a.p+"static/media/carlsagan.4415c424.jpg",O=a(79),m=a(1);function x(e){var t=e.apodData;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),t.length?Object(m.jsxs)(O.a.div,{className:"Home fadeIn",animate:{opacity:1},transition:{ease:"easeOut",duration:1},children:[Object(m.jsx)("h1",{children:"Welcome."}),Object(m.jsx)("p",{children:"Welcome to JUST GIVE ME SPACE, a website for space nerds. Feel free to explore and I hope you enjoy the site! You'll find a a dark sky forecast page that will display the viewing conditions in your chosen locale, a SpaceX information page, a gallery of astronomy pictures, and a collection of films that revolve around space themes, 'orbit' pun intended."}),Object(m.jsx)("p",{children:"I hope you enjoy the content on this website. May you always find dark skies and a big telescope waiting."}),Object(m.jsx)("p",{children:Object(m.jsx)("span",{className:"heavy",children:"-Shawn"})}),Object(m.jsxs)("div",{className:"quote",children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("h2",{children:[Object(m.jsx)(u.a,{className:"quote-icon"}),"If you wish to make an apple pie from scratch, you must first invent the universe",Object(m.jsx)(u.b,{className:"accent-color quote-icon"})]}),Object(m.jsx)("h2",{className:"light",children:"-Carl Sagan"})]}),Object(m.jsx)("img",{src:p})]}),Object(m.jsxs)("div",{className:"apod-div",children:[Object(m.jsx)("h1",{children:"Astronomy Picture of the Day"}),Object(m.jsx)(r.b,{to:"/apodgallery",className:"apod-link",children:Object(m.jsx)("p",{children:"View Gallery"})}),Object(m.jsx)("div",{className:"apod-img-div",children:Object(m.jsx)("img",{src:t[t.length-1].url,alt:t[t.length-1].title})}),Object(m.jsx)("h3",{children:t[t.length-1].title}),Object(m.jsx)("p",{children:t[t.length-1].explanation})]})]}):""}var f=a(47);function v(e){return console.log(e),e.showModal?Object(m.jsxs)("div",{className:"ApodModal center fadeIn1",children:[Object(m.jsxs)("div",{className:"modal-title-div",onClick:e.handleClick,children:[Object(m.jsx)(f.b,{className:"close"}),Object(m.jsx)("h1",{children:e.data.title})]}),Object(m.jsx)("img",{src:e.data.url,alt:e.data.title}),Object(m.jsx)("p",{children:e.data.explanation}),Object(m.jsx)("a",{href:e.data.hdurl,id:"download",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("h3",{children:"Download Hi-Def Version"})})]}):null}var g=a(80);function w(e){var t=e.apodData,a=Object(c.useState)(!1),n=Object(b.a)(a,2),s=n[0],i=n[1],l=Object(c.useState)({}),o=Object(b.a)(l,2),j=o[0],d=o[1],A=function(e){i(!s),0===Object.values(j).length?d(t.find((function(t){return t.url===e.target.currentSrc}))):d({}),console.log("Show Modal: ".concat(s))};return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(m.jsxs)(O.a.div,{animate:{opacity:1},transition:{ease:"easeOut",duration:1},className:"ApodGallery",children:[Object(m.jsx)("h1",{children:"Astronomy Picture of the Day Gallery"}),Object(m.jsxs)("p",{children:["To see a collection of APOD videos, ",Object(m.jsx)(r.b,{to:"/apodvideogallery",children:"click here"})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"light",children:"Data Provided by "}),Object(m.jsx)("b",{children:"NASA"})]}),Object(m.jsx)("div",{className:"apod-flex",children:t.map((function(e){return Object(m.jsxs)("div",{className:"tile-div",children:[Object(m.jsx)("div",{className:"tile-link",onClick:A,children:Object(m.jsx)("img",{src:e.url,className:"tile-img",alt:e.title})}),Object(m.jsx)("h4",{children:e.title})]},Object(g.a)())}))}),Object(m.jsx)("div",{className:"button-div",children:Object(m.jsx)(r.b,{to:"/",className:"button link",children:"Back to Home"})}),Object(m.jsx)(v,{handleClick:A,showModal:s,data:j})]})}function y(e){var t=e.apodData;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(m.jsxs)(O.a.div,{animate:{opacity:1},transition:{ease:"easeOut",duration:1},className:"ApodVideoGallery fadeIn",children:[Object(m.jsx)("h1",{children:"Astronomy Picture of the Day Video Gallery"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"light",children:"Data Provided by "}),Object(m.jsx)("b",{children:"NASA"})]}),Object(m.jsx)("div",{className:"apod-video-flex",children:t.map((function(e){return Object(m.jsxs)("div",{className:"tile-video-div",children:[Object(m.jsx)("div",{className:"tile-video",children:Object(m.jsx)("iframe",{src:e.url+"&modestbranding=1&color=white&iv_load_policy=3",alt:e.title,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(m.jsx)("h3",{children:e.title})]},Object(g.a)())}))}),Object(m.jsxs)("div",{className:"button-div",children:[Object(m.jsx)(r.b,{to:"/apodgallery",className:"button link",children:"Back to Photos"})," ",Object(m.jsx)(r.b,{to:"/",className:"button link",children:"Back to Home"})]})]})}function N(){var e=Object(c.useState)(),t=Object(b.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(A.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.spacexdata.com/v4/company");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),void 0!==a?Object(m.jsxs)(O.a.div,{animate:{opacity:1},transition:{ease:"linear",duration:1},className:"CompanyInfo",children:[Object(m.jsx)("h1",{children:"Company Info"}),Object(m.jsx)("h2",{children:"Summary"}),Object(m.jsx)("p",{children:a.summary}),Object(m.jsx)("h2",{children:"Links"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:a.links.website,children:Object(m.jsx)("b",{children:"SpaceX Website"})})}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:a.links.elon_twitter,children:Object(m.jsx)("b",{children:"Elon's Twitter"})})}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:a.links.twitter,children:Object(m.jsx)("b",{children:"SpaceX' Twitter"})})}),Object(m.jsx)("h2",{children:"Stats"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"info-field",children:"Founded: "}),a.founded]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"info-field",children:"CEO: "}),a.ceo]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"info-field",children:"COO: "}),a.coo]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"info-field",children:"CTO: "}),a.cto]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"info-field",children:"CTO of Propulsion: "}),a.cto_propulsion]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"info-field",children:"Number of Employees: "}),a.employees]})]}):Object(m.jsx)("h2",{children:"Loading"})}function B(e){var t=e.data;if(void 0!==t){var a=new Date(t.date_local);return a?(console.log(t),Object(m.jsxs)(O.a.div,{animate:{opacity:1},transition:{from:0,ease:"easeOut",duration:1},className:"launch-div",children:[t.links.patch.small?Object(m.jsx)("img",{className:"patch",src:t.links.patch.small,alt:"patch for mission ".concat(t.name)}):Object(m.jsx)("img",{className:"patch",src:"data:image/png;base64,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",alt:"spaceX logo substitute for missing mission patch"}),Object(m.jsxs)("div",{className:"launch-info",children:[Object(m.jsx)("h2",{children:t.name}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"info-field",children:"Flight Number"}),": ",t.flight_number]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"info-field",children:"Expected Launch Date"}),": ","".concat(a.toLocaleString("default",{month:"long",day:"numeric",year:"numeric"}))]}),t.links.wikipedia?Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"info-field",children:"WikiPage"}),": ",Object(m.jsx)("a",{href:t.links.wikipedia,children:t.links.wikipedia})]}):""]})]})):""}return Object(m.jsx)("h2",{children:"Loading"})}function k(){var e=Object(c.useState)(),t=Object(b.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(A.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.spacexdata.com/v4/launches/upcoming");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n(a),console.log(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),!a||a.length>0?Object(m.jsxs)(O.a.div,{animate:{opacity:1},transition:{from:0,ease:"easeOut",duration:1},className:"UpcomingLaunches fadeIn",children:[Object(m.jsx)("h1",{children:"Upcoming Launches"}),a?a.map((function(e){return Object(m.jsx)("div",{className:"launches-div",children:Object(m.jsx)(B,{data:e})},e.id)})):Object(m.jsx)("h2",{children:"Loading"})]}):Object(m.jsx)("h2",{children:"Loading"})}var S=[{name:"Home",path:"/",class:"nav-item"},{name:"SpaceX",path:"/spacex",class:"nav-item"},{name:"DarkSkies",path:"/darkskies",class:"nav-item"},{name:"APOD Gallery",path:"/apodgallery",class:"nav-item"},{name:"Videos",path:"/apodvideogallery",class:"nav-item"},{name:"Film And TV",path:"/filmandtv",class:"nav-item"}],D=["contact","the martian","space odyssey 2001","interstellar","event horizon","Apollo 13","arrival","Deep impact","europa report","star wars","spaceballs","for all mankind"],Q=new Date,C=new Date(Q-2592e6).toLocaleDateString("en-US").split("/"),X=Object(b.a)(C,3),Z=X[0],I=X[1],W=X[2];1===I.length&&(I="0"+I),1===Z.length&&(Z="0"+Z);var U="".concat(W,"-").concat(Z,"-").concat(I),L=["Choose Content","Company Info","Upcoming Launches"],P=a.p+"static/media/falcon9.d4a91d7b.png";function V(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),i=Object(b.a)(s,2),r=i[0],l=i[1];return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(m.jsxs)(O.a.div,{animate:{opacity:1},transition:{duration:1},className:"SpaceX",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"SpaceX"}),Object(m.jsx)("div",{className:"youtube",children:Object(m.jsx)("iframe",{src:"https://www.youtube-nocookie.com/embed/A0FZIwabctw?start=48",title:"YouTube video player",frameborder:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"})}),Object(m.jsx)("p",{className:"get-content-p",children:"SpaceX currently leads the world in private space exploration and they are a constant inspiration to me. Here, you'll find info on upcoming launches as well as details on their program."})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{for:"pages",children:Object(m.jsx)("p",{className:"get-content-p",children:"Select information to view:"})}),Object(m.jsx)("select",{onChange:function(e){switch(n(!1),l(!1),e.target.options.selectedIndex){case 0:break;case 1:n(!0);break;case 2:l(!0)}},name:"selectedPage",id:"pages",children:L.map((function(e){return Object(m.jsx)("option",{children:e},Object(g.a)())}))})]}),a?Object(m.jsx)(N,{}):"",r?Object(m.jsx)(k,{}):"",Object(m.jsx)("div",{className:"falcon-div",children:Object(m.jsx)("img",{src:P,alt:"falcon 9 dramatically entering screen simulating launch",className:"falcon"})})]})}var G=a.p+"static/media/loading.01b22d1d.gif";function H(e){var t=e.lat,a=e.long,c=e.renderSkyStats,n=e.skyData;return c?Object(m.jsxs)("div",{className:"SkyStats fadeIn",children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Your Location"}),Object(m.jsxs)("h4",{children:["Latitude: ",t.toFixed(2)]}),Object(m.jsxs)("h4",{children:["Longitude: ",a.toFixed(2)]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"AstroConditions"}),Object(m.jsxs)("h4",{children:["Seeing ",Object(m.jsx)("span",{className:"light",children:"(lower is better)"}),": ",n.seeing]}),Object(m.jsxs)("h4",{children:["Atmosphere Transparency ",Object(m.jsx)("span",{className:"light",children:"(lower is better)"}),": ",n.transparency]})]})]}),Object(m.jsx)("img",{className:"fadeIn sky-results",src:"https://www.7timer.info/bin/astro.php?lon=".concat(a,"&lat=").concat(t,"ac=0&lang=en&unit=british&output=internal&tzshift=0"),alt:"png graphic showing astro conditions in detail"})]}):Object(m.jsx)("img",{className:"loading",src:G,alt:"Loading Website..."})}function J(e){var t=Object(c.useState)(null),a=Object(b.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(null),l=Object(b.a)(i,2),o=l[0],j=l[1],h=Object(c.useState)({}),u=Object(b.a)(h,2),p=u[0],x=u[1],f=Object(c.useState)(!1),v=Object(b.a)(f,2),g=v[0],w=v[1],y=Object(c.useState)(!1),N=Object(b.a)(y,2),B=N[0],k=N[1],S=function(){var e=Object(A.a)(d.a.mark((function e(t,a){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.7timer.info/bin/astro.php?lon=".concat(a,"&lat=").concat(t,"&ac=0&unit=british&output=json&tzshift=0"));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,console.log(n),x(n.dataseries[0]),w(!0),console.log(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){window.scrollTo(0,0)})),Object(m.jsxs)(O.a.div,{animate:{opacity:1},transition:{ease:"easeOut",duration:1},className:"DarkSkies",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"DarkSkies"}),Object(m.jsx)("p",{children:"You can use this utility to check the astronomy forcast for your location! Be sure to allow location sharing when it pops up for it to work properly."}),Object(m.jsxs)("p",{className:"heavy",children:[Object(m.jsx)("span",{className:"light",children:"Data Provided by "}),"7-Timer"]})]}),Object(m.jsx)("div",{className:"render-div",children:Object(m.jsx)("div",{className:"button link",onClick:function(){k(!0),navigator.geolocation.getCurrentPosition((function(e){s(e.coords.latitude),j(e.coords.longitude),S(e.coords.latitude,e.coords.longitude)}))},children:"Get My AstroConditions"})}),B?Object(m.jsx)(H,{lat:n,long:o,renderSkyStats:g,skyData:p}):"",Object(m.jsx)("div",{className:"button-div",children:Object(m.jsx)("div",{className:"",children:Object(m.jsx)(r.b,{to:"/",className:"button link",children:"Back to Home"})})})]})}function R(e){var t=Object(c.useState)({}),a=Object(b.a)(t,2),n=a[0],s=a[1],i=function(){var t=Object(A.a)(d.a.mark((function t(){var a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.omdbapi.com/?apikey=".concat("a529c1df","&s=").concat(e.title));case 3:return a=t.sent,t.next=6,a.json();case 6:c=t.sent,s(Object(o.a)({},c.Search[0])),console.log(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(m.jsxs)("div",{className:"FilmTile",children:[Object(m.jsx)("img",{src:n.Poster,alt:"poster for the movie ".concat(n.Title)}),Object(m.jsxs)("h1",{children:[n.Title," (",n.Year,")"]})]})}function E(){return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(m.jsxs)(O.a.div,{animate:{opacity:1},transition:{duration:1},className:"FilmAndTv",children:[Object(m.jsx)("h1",{children:"Space-related Film and TV"}),Object(m.jsx)("p",{children:"Below find a small collection of amazing films and television shows that feature space as the main theme."}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"light",children:"Data Provided by "}),Object(m.jsx)("b",{children:"OMDb"})]}),Object(m.jsx)(O.a.div,{animate:{opacity:1},transition:{from:0,duration:1},className:"films-div",children:D.map((function(e){return Object(m.jsx)(R,{title:e})}))}),Object(m.jsx)("div",{className:"button-div",id:"tv-home",children:Object(m.jsx)(r.b,{to:"/",className:"button link",children:"Back to Home"})})]})}function F(){return Object(m.jsx)(O.a.img,{animate:{transform:["scale(0)","scale(1.2)","scale(1)"]},transition:{ease:"easeOut",times:[0,.3,.6],duration:1.5,delay:2},src:l,alt:"saturn next to the site title"})}function K(){return Object(m.jsx)(r.b,{to:"/",className:"header",children:Object(m.jsxs)(O.a.header,{animate:{top:"0px"},transition:{ease:"easeOut",duration:2},children:[Object(m.jsx)("div",{className:"header-div",children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{className:"site-heading",children:["just give me ",Object(m.jsx)("span",{className:"space",children:"SPACE"})]}),Object(m.jsxs)("p",{className:"site-sub",children:["A Website for ",Object(m.jsx)("span",{className:"nerds",children:"Space Nerds"})]})]})}),Object(m.jsx)(F,{})]})})}function T(){return Object(m.jsx)(O.a.div,{className:"stars",animate:{opacity:[null,1,.3]},transition:{ease:"easeOut",duration:4}})}var q=a(81);function Y(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),a=t[0],n=(t[1],Object(q.a)());return Object(c.useEffect)((function(){console.log(a)}),[a]),Object(m.jsx)(O.a.div,{className:"NavSlider",animate:{right:[null,"-570px","-505px","-570px"]},transition:{ease:"easeOut",duration:2,times:[0,.6,.7,1],delay:3.5},children:Object(m.jsxs)(O.a.div,{className:"NavSlider-container",whileHover:{right:"570px"},transition:{ease:"easeOut",duration:.2},onHoverStart:function(){return n.start({transform:"rotate(0deg)"})},onHoverEnd:function(){return n.start({transform:"rotate(180deg)"})},children:[Object(m.jsx)(O.a.div,{className:"nav-icon",animate:n,transition:{duration:1,delay:.6},initial:{transform:"rotate(180deg)"},children:Object(m.jsx)(f.a,{})}),Object(m.jsx)("ul",{className:"nav-list",children:S.map((function(e){return Object(m.jsx)(r.b,{to:e.path,children:Object(m.jsx)("li",{className:e.class,children:e.name})},Object(g.a)())}))})]})})}var M=a(64);function z(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),r=i[0],l=i[1],j=function(){var e=Object(A.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.nasa.gov/planetary/apod?",e.prev=1,e.next=4,fetch("".concat("https://api.nasa.gov/planetary/apod?","start_date=").concat(U,"&api_key=").concat("ka0YhEL0DID0w5D3a7t8prVx8MDyAH49Gyd4ryW8"));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log(a),n(a.filter((function(e){return"image"===e.media_type}))),l(a.filter((function(e){return"video"===e.media_type}))),console.log(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.error("Fetch error: ".concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){window.scrollTo(0,0),j()}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(T,{}),Object(m.jsx)(K,{}),Object(m.jsxs)("main",{children:[Object(m.jsx)(Y,{}),Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(m.jsx)(x,Object(o.a)(Object(o.a)({},e),{},{apodData:a}))}}),Object(m.jsx)(h.a,{path:"/apodgallery",render:function(e){return Object(m.jsx)(w,Object(o.a)(Object(o.a)({},e),{},{apodData:a}))}}),Object(m.jsx)(h.a,{path:"/apodvideogallery",render:function(e){return Object(m.jsx)(y,Object(o.a)(Object(o.a)({},e),{},{apodData:r}))}}),Object(m.jsx)(h.a,{path:"/darkskies",component:J}),Object(m.jsx)(h.a,{path:"/filmandtv",component:E}),Object(m.jsx)(h.a,{path:"/spacex",component:V})]})]}),Object(m.jsx)("footer",{className:"fadeInPause",children:a.length>1?Object(m.jsxs)("p",{className:"footer-p",children:["Web Design ",Object(m.jsx)(M.a,{className:"copyright"}),W," \u2022 Shawn Clary \u2022 Sleeptil3Software"]}):""})]})}i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(r.a,{children:Object(m.jsx)(z,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.be008fbb.chunk.js.map