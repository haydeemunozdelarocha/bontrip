(this.webpackJsonpbontrip=this.webpackJsonpbontrip||[]).push([[0],{108:function(e){e.exports=JSON.parse('{"placeholders":{"city_autocomplete":"A d\xf3nde?","city_array":["Tokyo","Paris","Munich","Hong Kong","Ciudad de M\xe9xico","Sao Paolo","Beijing","Madrid"],"contact":{"email":"email","password":"contrase\xf1a","confirm_password":"confirma tu contrase\xf1a"}},"forms":{"city_dates_form_title":"Selecciona una ciudad:","submit":"Enviar"},"pages":{"signup":{"title":"Crea una cuenta"}}}')},109:function(e){e.exports=JSON.parse('{"hello":"test","placeholders":{"city_autocomplete":"Where to?","city_array":["Tokyo","Paris","Munich","Hong Kong","Mexico City","Sao Paolo","Beijing","Madrid"],"contact":{"email":"email","password":"password","confirm_password":"confirm password"}},"forms":{"city_dates_form_title":"Select city:","submit":"Submit"},"pages":{"signup":{"title":"Create an account"}}}')},118:function(e,t,n){e.exports=n(189)},175:function(e){e.exports=JSON.parse('{"home":["/images/paris.jpg","/images/sardinia.jpg","/images/iceland.jpg","/images/madrid.jpg","/images/tokyo.jpg","/images/patagonia.jpg"]}')},188:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(51),i=n(30),c=n(58);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createElement("defs",null),d=r.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",fontFamily:"Futura-Medium, Futura",fontSize:48,fontWeight:400},r.a.createElement("text",{id:"bontrip",className:"bontrip-logo",fill:"#FFF"},r.a.createElement("tspan",{x:-3,y:40},"bontrip"))),m=function(e){var t=e.svgRef,n=e.title,a=l(e,["svgRef","title"]);return r.a.createElement("svg",s({width:"151px",height:"53px",viewBox:"0 0 151 53",ref:t},a),n?r.a.createElement("title",null,n):null,u,d)},g=r.a.forwardRef((function(e,t){return r.a.createElement(m,s({svgRef:t},e))})),p=(n.p,function(e){var t=e.isTransparent;return a.createElement("div",{className:"header ".concat(t?"is-transparent":"")},a.createElement("a",{className:"logo",href:"/"},a.createElement(g,null)))}),f=n(103),b={duration:5e3,transitionDuration:1e3,infinite:!0,indicators:!1,arrows:!1,pauseOnHover:!0},h=function(e){var t=e.images;return a.createElement(f.Fade,b,t.map((function(e,t){return a.createElement("div",{className:"slideshow__item",key:t,style:{backgroundImage:"url(".concat(e,")")}})})))},v=n(17),y=n(8),O=n(9),j=function(){function e(){Object(y.a)(this,e)}return Object(O.a)(e,null,[{key:"isInput",value:function(e){return"input"===e.tagName.toLowerCase()}}]),e}(),E=function(){function e(){Object(y.a)(this,e)}return Object(O.a)(e,null,[{key:"typing",value:function(t){var n=t.element,a=t.wordsArray,r=t.defaultPlaceholder,o=t.index,i=void 0===o?0:o,c=t.addListener,s=void 0===c||c;if(n&&j.isInput(n)){var l=n&&"true"===n.dataset.typingAnimationPaused,u=i||0,d=l&&u<=a.length-1?r:a&&a[u]?a[u]:"",m=function(e,t){return t.target.dataset.typingAnimationPaused=e};s&&(n.addEventListener("focusin",(function(e){return m("true",e)})),n.addEventListener("focusout",(function(e){return m("false",e)}))),n.setAttribute("placeholder",d),l||setTimeout((function(){return e.typing({element:n,wordsArray:a,defaultPlaceholder:r,index:u===a.length-1?0:u+1,addListener:!1})}),this.animationTimeout)}}}]),e}();E.animationTimeout=2e3;var C,D,_=n(104),k=n.n(_),I=n(18),w=function(){function e(){Object(y.a)(this,e)}return Object(O.a)(e,null,[{key:"getComponentType",value:function(e){switch(e.types[0]){case"locality":case"administrative_area_level_3":return"name";case"country":return"country";case"administrative_area_level_1":return"state"}}},{key:"isComponentValid",value:function(e){return e.long_name.length>0}}]),e}(),S=n(105),T=n(148),A=function(){function e(t){Object(y.a)(this,e),this.name=void 0,this.endDate=void 0,this.startDate=void 0,this.id=void 0,this.coordinates=void 0,this.color=void 0,this.distance=void 0,this.duration=void 0,this.name=(t||{}).name||"",this.startDate=(t||{}).startDate||null,this.endDate=(t||{}).endDate||null,this.id=(t||{}).id||Object(S.v4)(),this.coordinates=Object(I.a)({},(t||{}).coordinates)||{},this.color=(t||{}).color||null,this.distance=(t||{}).distance||null,this.duration=(t||{}).duration||null}return Object(O.a)(e,[{key:"generateColor",value:function(e){this.color||(this.color=T(e%2?{luminosity:"bright",hue:"red"}:e%3?{luminosity:"bright",hue:"orange"}:{luminosity:"bright",hue:"blue"}))}},{key:"getCoordinatesArray",value:function(){return[this.coordinates.lat,this.coordinates.lng]}},{key:"normalize",value:function(){return{id:this.id,color:this.color,startDate:this.startDate,endDate:this.endDate,name:this.name,coordinates:this.coordinates,distance:this.distance,duration:this.duration}}},{key:"parseCityObject",value:function(t){var n=new e;return t.address_components.forEach((function(e){if(w.isComponentValid(e)){var t=w.getComponentType(e);n[t]=e.long_name}})),n.coordinates=t.geometry.location,n}}]),e}(),N=n(28),P=n.n(N),R=n(40),x=n.n(R),F=function(){function e(){Object(y.a)(this,e)}return Object(O.a)(e,null,[{key:"byCoordinates",value:function(e,t){return new x.a((function(n,a){P.a.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,",").concat(t,".json?types=place&access_token=").concat("pk.eyJ1IjoiaGF5ZGVlbXVub3oiLCJhIjoiY2pjbDhlaHFmMDR2ejMycXE0cng1dTR3bCJ9.0TAB6eibuUih8GaLPvaIpA")).then((function(e){if(e.data&&e.data.features&&200===e.status){var t=e.data.features.map((function(e){return{name:e.matching_place_name?e.matching_place_name:e.place_name,coordinates:{lat:e.geometry.coordinates[0],lng:e.geometry.coordinates[1]}}}));n(t[0])}})).catch((function(e){console.log("error in catch"),a(e)}))}))}},{key:"byName",value:function(e){return new x.a((function(t,n){e&&P.a.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,".json?types=place&access_token=").concat("pk.eyJ1IjoiaGF5ZGVlbXVub3oiLCJhIjoiY2pjbDhlaHFmMDR2ejMycXE0cng1dTR3bCJ9.0TAB6eibuUih8GaLPvaIpA")).then((function(e){var n=[];e.data.features.map((function(e){n.push(new A({name:e.matching_place_name||e.place_name,coordinates:{lat:e.geometry.coordinates[0],lng:e.geometry.coordinates[1]}}))})),t(n)})).catch((function(e){P.a.isCancel(e)?console.log("Request canceled",e.message):n(e)}))}))}}]),e}(),M=function(e){var t=e.animatedPlaceholderWords,n=e.placeholder,r=e.onSelect,o=Object(a.useState)(""),i=Object(v.a)(o,2),c=i[0],s=i[1],l=Object(a.useState)([]),u=Object(v.a)(l,2),d=u[0],m=u[1];Object(a.useEffect)((function(){g()}),[c]);var g=function(){c&&c.length>0&&F.byName(c).then((function(e){m(e)}))};return a.createElement(k.a,{"data-cy":"city-search-input",ref:function(e){return e&&E.typing({element:e.input,wordsArray:t,defaultPlaceholder:n,addListener:!0})},suggestions:d,onSuggestionsFetchRequested:g,onSuggestionsClearRequested:function(){return m([])},getSuggestionValue:function(e){return e.name},renderSuggestion:function(e){return a.createElement("ul",{className:"autocomplete-results"},a.createElement("li",{className:"autocomplete-results-item"},e.name))},onSuggestionSelected:r,inputProps:{placeholder:n,value:c,onChange:function(e,t){s(t.newValue||"")}}})},L=n(106),J=n(111),V=n(14),B=n(10),G=(n(174),n(15)),H={add:Object(B.b)("CITIES::ADD"),remove:Object(B.b)("CITIES::REMOVE"),updateOne:Object(B.b)("CITIES::UPDATE_ONE")},Y=Object(B.c)({},(C={},Object(G.a)(C,H.add.type,(function(e,t){var n=t.payload.city;return e[n.id]=n.normalize(),e})),Object(G.a)(C,H.remove.type,(function(e,t){return delete e[t.payload.cityId],e})),Object(G.a)(C,H.updateOne.type,(function(e,t){var n=t.payload,a=n.cityId,r=n.update;return e[a]&&(e[a]=Object(I.a)(Object(I.a)({},e[a]),r),console.log("updated city",e[a])),e})),C)),U={setActiveCity:Object(B.b)("USER::SET_ACTIVE_CITY")},X=Object(B.c)({activeCityId:null,activeTripId:null},Object(G.a)({},U.setActiveCity.type,(function(e,t){var n=t.payload.cityId;return e.activeCityId=n,e}))),W={add:Object(B.b)("DIRECTIONS::ADD"),remove:Object(B.b)("DIRECTIONS::REMOVE")},K=Object(B.c)({},(D={},Object(G.a)(D,W.add.type,(function(e,t){var n=t.payload.directions;return console.log("DIRECTIONS!",n),e[n.id]=n,e})),Object(G.a)(D,W.remove.type,(function(e,t){var n=t.payload.directionsId;return e[n]&&delete e[n],e})),D)),Z=Object(V.c)({cities:Y,user:X,directions:K}),q=Object(B.d)({serializableCheck:{ignoredActions:[H.add.type,U.setActiveCity.type,H.updateOne.type]}}),z=Object(J.a)(q);var Q=function(){try{var e=localStorage.getItem("bontrip-user");if(null===e)return;return JSON.parse(e)}catch(t){console.error("There was an error loading the state.")}}(),$=Object(B.a)({reducer:Z,middleware:z,preloadedState:Q});$.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("bontrip-user",t)}catch(n){console.error("There was an error saving the state.")}}($.getState())}));var ee=n(20),te=n(22),ne=n.n(te),ae=Object(ee.a)([function(e){return e.cities}],(function(e){return Object.keys(e)&&Object.keys(e).map((function(t){return new A(e[t])})).sort((function(e,t){return e.startDate&&ne()(e.startDate).isBefore(ne()(t.startDate))?-1:1}))})),re=(Object(ee.a)([ae],(function(e){return e.map((function(e){return e.getCoordinatesArray()}))})),Object(ee.a)([ae,function(e){return e.user}],(function(e,t){return e.find((function(e){return e.id===t.activeCityId}))||e[0]}))),oe=Object(ee.a)([ae],(function(e){return e.map((function(e){return e.color}))})),ie=function(){return ae},ce=function(){function e(){Object(y.a)(this,e)}return Object(O.a)(e,null,[{key:"get",value:function(e,t){var n=this;return new x.a((function(a,r){var o=n.getParsedPointString(e);P.a.get("https://api.mapbox.com/directions/v5/mapbox/".concat(t,"/").concat(o,"?geometries=geojson&access_token=").concat("pk.eyJ1IjoiaGF5ZGVlbXVub3oiLCJhIjoiY2pjbDhlaHFmMDR2ejMycXE0cng1dTR3bCJ9.0TAB6eibuUih8GaLPvaIpA")).then((function(e){e.data&&200===e.status&&a(e.data)})).catch((function(e){console.log("error in catch"),r(e)}))}))}},{key:"getParsedPointString",value:function(e){var t="";return e.forEach((function(n,a){t=t.concat(t,"".concat(n[0].toString(),","),"".concat(n[1].toString(),";")),e.length-1===a&&(t=t.substring(0,t.length-1))})),t}}]),e}(),se=Object(ee.a)([function(e){return e.directions}],(function(e){return Object.keys(e)&&Object.keys(e).map((function(t){return e[t].routes[0]}))})),le=function(){return se},ue=function(e){return function(t,n){var a=ie()(n()),r=a.findIndex((function(t){return t.id===e.id})),o=a[r-1]&&a[r-1].getCoordinatesArray();t(W.remove({directionsId:e.id})),o?ce.get([o,e.getCoordinatesArray()],"driving").then((function(n){var a=Object(I.a)({id:e.id},n);t(H.updateOne({cityId:e.id,update:{distance:"".concat((n.routes[0].distance/1e3).toFixed(2)," km"),duration:"".concat(te.utc(1e3*n.routes[0].duration).format("HH:mm")," h")}})),t(W.add({directions:a}))})):t(H.updateOne({cityId:e.id,update:{distance:null,duration:null}}))}},de=function(e){return function(t,n){var a=ie()(n()),r=a.length>0&&a.find((function(t){return t.name===e.name})),o=a[a.length-1],i=e.startDate?new Date(e.startDate):o?new Date(o.endDate):new Date,c=e.endDate?new Date(e.endDate):new Date((new Date).setDate(i.getDate()+1));console.log("city",e);var s=new A(Object(I.a)(Object(I.a)({},e),{},{startDate:i,endDate:c})),l=a.length>0?a.length-1:0;s.generateColor(l),r||(t(H.add({city:s})),t(U.setActiveCity({cityId:s.id})),a.length>0&&t(ue(s)))}},me=function(e){return function(t,n){t(H.remove({cityId:e})),t(W.remove({directionsId:e}));var a=n();if(ie()(a).length<2){var r=le()(a)||[];Object.keys(r).forEach((function(e){t(W.remove({directionsId:e}))}))}}},ge=function(e,t,n){return function(a,r){var o=ie()(r());console.log("savedCitiesBefore",o),a(H.updateOne({cityId:e,update:{startDate:t,endDate:n}}));var i=ie()(r());console.log("savedCitiesAfter",i),i.length>1&&i.forEach((function(e,t){(0==t&&t!==i.length-1?o[t+1].id!==i[t+1].id:o[t-1].id!==i[t-1].id)&&a(ue(e))}))}},pe=function(){function e(){Object(y.a)(this,e)}return Object(O.a)(e,null,[{key:"goTo",value:function(e){i.c.push(e)}}]),e}(),fe=n(175),be=Object(L.b)((function(e){var t=e.intl.messages.placeholders.city_autocomplete,n=e.intl.messages.placeholders.city_array;return a.createElement("div",{className:"cover-page-layout"},a.createElement(p,{isTransparent:!0}),a.createElement(h,{isFullscreen:!0,images:fe.home}),a.createElement("div",{className:"l-page-overlay"},a.createElement(M,{animatedPlaceholderWords:n,placeholder:t,onSelect:function(e,t){$.dispatch(de(t.suggestion)),pe.goTo("/newtrip")}})))})),he=n(36),ve=n(54),ye=n.n(ve),Oe=Object(he.e)({accessToken:"pk.eyJ1IjoiaGF5ZGVlbXVub3oiLCJhIjoiY2pjbDhlaHFmMDR2ejMycXE0cng1dTR3bCJ9.0TAB6eibuUih8GaLPvaIpA"}),je=function(e){var t=e.markersData,n=e.location,r=e.directions;return a.createElement(Oe,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100vh",width:"100vw"},onClick:function(e,t){return function(e,t){var n=t.lngLat,a=n.lng,r=n.lat;F.byCoordinates(a,r).then((function(e){$.dispatch(de(e))}))}(0,t)},center:n},r.map((function(e,t){return a.createElement(a.Fragment,null,a.createElement(he.c,{key:"route-source".concat(t),id:"directions-source-".concat(t),tileJsonSource:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:e.geometry.coordinates}}}}),a.createElement(he.a,{sourceId:"directions-source-".concat(t),key:"route-layer".concat(t),type:"line",paint:{"line-color":"#2144b7","line-width":3,"line-opacity":1},layout:{"line-join":"round","line-cap":"round"}}))})),t.map((function(e,t){return a.createElement(he.b,{coordinates:[e.coordinates.lat,e.coordinates.lng],key:"marker-".concat(t),onClick:function(){return alert(e.color)},anchor:"bottom",offset:[0,0]},a.createElement("div",{style:{color:e.color},key:"marker-wrapper-".concat(t)},a.createElement(ye.a,{key:"marker-icon-".concat(t),id:"map-marker",src:"/images/marker.svg",preProcessor:function(e){return e.replace(/fill=".*?"/g,'fill="currentColor"')}})))})),a.createElement(he.d,{position:"bottom-right"}))},Ee=n(24),Ce=n.n(Ee),De=function(e){var t=e.image,n=e.orientation,r=e.index,o=e.color,i=e.children,c=Object(a.useState)(!1),s=Object(v.a)(c,2),l=s[0],u=s[1],d=Ce()({sidepanel:!0,"sidepanel-open":l,"sidepanel-left":"left"===n,"sidepanel-right":"right"===n});return a.createElement("div",{className:d,style:{backgroundColor:o}},a.createElement("div",{className:"sidepanel-content"},i),a.createElement("div",{className:"sidepanel-tab",onClick:function(){return u(!l)},style:{top:"".concat(70*r,"px"),backgroundColor:o}},a.createElement("img",{className:"sidepanel-tab-image",src:t})))},_e=n(107),ke=n(55),Ie="card",we=r.a.forwardRef((function(e,t){var n=e.id,o=e.text,i=e.subtitle,c=(e.footerText,e.indicatorColor),s=e.classNames,l=e.isDragging,u=e.connectDragSource,d=e.connectDropTarget,m=e.onRemove,g=Object(a.useRef)(null);u(g),d(g);var p=l?0:1;return Object(a.useImperativeHandle)(t,(function(){return{getNode:function(){return g.current}}})),r.a.createElement("div",{ref:g,className:"draggable-card ".concat(s),style:{opacity:p}},r.a.createElement(ye.a,{key:"remove-icon-".concat(n),width:"14",height:"14",onClick:function(){return m(n)},className:"draggable-card__remove-icon",src:"/images/close.svg"}),r.a.createElement("span",{className:"draggable-card__content"},r.a.createElement("div",{className:"draggable-card__indicator",style:{backgroundColor:c}}),r.a.createElement("span",null,o)),r.a.createElement("span",{className:"draggable-card__subtitle"},i),r.a.createElement("span",{className:"draggable-card__handle"}))})),Se=Object(ke.DropTarget)(Ie,{hover:function(e,t,n){if(!n)return null;var a=n.getNode();if(!a)return null;var r=t.getItem().index,o=e.index;if(r!==o){var i=a.getBoundingClientRect(),c=(i.bottom-i.top)/2,s=t.getClientOffset().y-i.top;r<o&&s<c||r>o&&s>c||(e.moveCard(r,o),t.getItem().index=o)}}},(function(e){return{connectDropTarget:e.dropTarget()}}))(Object(ke.DragSource)(Ie,{beginDrag:function(e){return{id:e.id,index:e.index}}},(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))(we)),Te=function(e){var t=e.cards,n=e.moveCard,a=e.clickCard,o=e.removeCard;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(Se,{key:e.name,indicatorColor:e.color,index:t,id:e.id,text:e.name,subtitle:e.startDate&&e.endDate?"".concat(ne()(e.endDate).diff(ne()(e.startDate),"days")+1," day(s)"):"0 days",moveCard:n,clickCard:function(){return a(e.id)},class:"draggable-card",onRemove:o})})))},Ae=new Date,Ne=function(e){var t=Object(a.useState)([]),n=Object(v.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)([0,0]),c=Object(v.a)(i,2),s=c[0],l=c[1],u=e.colors,d=e.cities,m=e.activeCityId,g=e.title;Object(a.useEffect)((function(){p()}),[d]),Object(a.useEffect)((function(){var e=f();l([e,e])}),[m]);var p=function(){var e=d.map((function(e,t){var n=d[t-1];if(e){var a=e.startDate?new Date(e.startDate):n?new Date(n.endDate):Ae,r=e.endDate?new Date(e.endDate):new Date((new Date).setDate(a.getDate()+1));return{startDate:a,endDate:r,key:e.id}}}));o(e)},f=function(){return d.findIndex((function(e){return e&&e.id===m}))};return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("p",null,"Select dates:"),a.createElement(_e.DateRangePicker,{rangeColors:u,focusedRange:s,initialFocusedRange:s,ranges:r,onChange:function(e){return function(e){var t=Object.values(e)&&Object.values(e).length>0&&Object.values(e)[0],n=t.key,a=t.startDate,r=t.endDate;$.dispatch(ge(n,new Date(a),new Date(r)))}(e)},scroll:{enabled:!0},direction:"vertical",months:1,moveRangeOnFirstSelection:!1,onRangeFocusChange:function(){var e=f(),t=e!==d.length-1?d[e+1]:d[0];$.dispatch(U.setActiveCity({cityId:t.id}))}}),a.createElement(Te,{cards:d,removeCard:function(e){return $.dispatch(me(e))},title:g,clickCard:function(e){return function(e){return $.dispatch(U.setActiveCity({cityId:e}))}(e)}})))},Pe=Object(L.b)(Object(c.b)((function(e){var t=ie(),n=re,a=oe,r=le();return{selectedCities:t(e),activeCity:n(e),cityColors:a(e),directions:r(e)}}))((function(e){var t=e.selectedCities,n=e.activeCity,r=e.cityColors,o=e.directions,i=e.intl.messages.forms.city_dates_form_title,c=n?[n.coordinates.lat,n.coordinates.lng]:[-73.935242,40.73061];return a.createElement("div",null,a.createElement(p,{hasNavigation:!1,isTransparent:!1}),a.createElement(De,{index:1,image:"/images/map.png",orientation:"left"},a.createElement(Ne,{title:i,colors:r,cities:t,activeCityId:n?n.id:""})),a.createElement(je,{directions:o,isLoaded:!1,location:c,markersData:t}))}))),Re=(n(188),n(193)),xe=n(110),Fe=n(194),Me=n(108),Le=n(109),Je=function(){function e(){Object(y.a)(this,e)}return Object(O.a)(e,null,[{key:"register",value:function(e){return P.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_PAYMENT_LOCATION:"CWVE6ED2522BC",REACT_APP_PAYMENT_ID:"sandbox-sq0idb-KMIdVglwNDsvnn3bA4BoLw",REACT_APP_MASPOST_SOURCE:"http://localhost:8000/",REACT_APP_BONTRIP_MAP_KEY:"pk.eyJ1IjoiaGF5ZGVlbXVub3oiLCJhIjoiY2pjbDhlaHFmMDR2ejMycXE0cng1dTR3bCJ9.0TAB6eibuUih8GaLPvaIpA"}).REACT_API_URL,"users"),e)}}]),e}(),Ve=Object(L.b)((function(e){var t=e.intl.messages.pages.signup.title,n=Object(a.useState)({email:"",password:"",confirm_password:""}),r=Object(v.a)(n,2),o=r[0],i=r[1],c=function(e){if(e.target){var t=e.target.name;i(Object(I.a)(Object(I.a)({},o),{},Object(G.a)({},t,e.target.value)))}};return a.createElement("div",{className:"cover-page-layout"},a.createElement(p,{isTransparent:!1}),a.createElement("div",{className:"page page__center-vertical"},a.createElement("form",{className:"centered-block centered-block__med centered-block__with-background"},a.createElement("h2",{className:"centered-block__title"},t),a.createElement("input",{name:"email",onChange:c,value:o.email,type:"text",placeholder:e.intl.messages.placeholders.contact.email}),a.createElement("input",{name:"password",onChange:c,type:"password",value:o.password,placeholder:e.intl.messages.placeholders.contact.password}),a.createElement("input",{name:"confirm_password",onChange:c,type:"password",value:o.confirm_password,placeholder:e.intl.messages.placeholders.contact.confirm_password}),a.createElement("button",{className:"button",onClick:function(){Je.register(o).then((function(e){console.log(e)})).catch((function(){console.log("catch")}))}},e.intl.messages.forms.submit))))})),Be={es:Me,en:Le},Ge=navigator.language.split(/[-_]/)[0];te.defaultFormat="YYYY/MM/DD";var He=function(){return a.createElement(Fe.a,{locale:Ge,defaultLocale:"en",messages:Be[Ge]},a.createElement(Re.a,{backend:xe.a},a.createElement(c.a,{store:$},a.createElement(i.b,{history:i.c},a.createElement(i.a,{path:"/",component:be}),a.createElement(i.a,{path:"/register",component:Ve}),a.createElement(i.a,{path:"/newtrip",component:Pe})))))},Ye=document.getElementById("app");Object(o.render)(a.createElement(He,null),Ye)}},[[118,1,2]]]);
//# sourceMappingURL=main.31525825.chunk.js.map