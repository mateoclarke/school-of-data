(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{322:function(t,e,a){t.exports=a(681)},327:function(t,e,a){},676:function(t,e,a){},681:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),l=a(21),i=a.n(l),c=(a(327),a(296)),r=a(297),s=a(320),u=a(298),m=a(321),p=a(299),d=a.n(p),f=a(300),h=a.n(f),g=a(686),v=a(685),y=a(683),w=a(684),E=a(23),_=a.n(E);a(676);_.a.Icon.Default.imagePath=".",delete _.a.Icon.Default.prototype._getIconUrl,_.a.Icon.Default.mergeOptions({iconRetinaUrl:a(673),iconUrl:a(674),shadowUrl:a(675)});var b=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={data:{},isDataLoaded:!1},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"getDataFromEndpoint",value:function(t){var e=this;d.a.get(t).then(function(t){console.log(t),e.setState({data:t.data,isDataLoaded:!0})}).catch(function(t){console.log(t.response)})}},{key:"componentWillMount",value:function(){this.getDataFromEndpoint("http://schoolofdata.austintexas.io/signal_requests")}},{key:"render",value:function(){var t={PHB:{color:"#fff",weight:1,fillColor:"#a65628",fillOpacity:.8},TRAFFIC:{color:"#fff",weight:1,fillColor:"#237FB4",fillOpacity:.8}};return o.a.createElement("div",{className:"App"},this.state.isDataLoaded&&o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement(h.a,{title:"Signal Requests",columns:[{title:"Location Name",field:"location_name"},{title:"Type",field:"eval_type"},{title:"Request Status",field:"request_status"}],data:this.state.data})),o.a.createElement("div",{className:"col map-container"},o.a.createElement(g.a,{center:[30.28,-97.735],zoom:10,style:{width:"100%",height:"100vh"}},o.a.createElement(v.a,{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> \u2014 Map data \xa9 <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',url:"http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}",ext:"png",subdomains:"abcd"}),this.state.data.map(function(e,a){return o.a.createElement(y.a,{center:[e.location_latitude,e.location_longitude],radius:500,key:"".concat(a,"_marker"),fillColor:t[e.eval_type].fillColor,color:t[e.eval_type].color,weight:t[e.eval_type].weight,fillOpacity:t[e.eval_type].fillOpacity},o.a.createElement(w.a,null,o.a.createElement("h3",null,"".concat(e.eval_type," REQUEST")),o.a.createElement("p",null,"".concat(e.location_name)),o.a.createElement("p",null,"Status ".concat(e.request_status))))})))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[322,2,1]]]);
//# sourceMappingURL=main.111cfe49.chunk.js.map