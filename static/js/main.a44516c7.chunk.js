(this.webpackJsonpweathersender=this.webpackJsonpweathersender||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/weather.f197597c.svg"},139:function(e,t,a){e.exports=a(238)},144:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),i=(a(144),a(58)),o=a(59),l=a(26),u=a(66),m=a(64),b=a(89),d=(a(91),a(108)),h=a.n(d),p=a(241),f=p.a.Title,g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"TitleContainer"},r.a.createElement("div",{className:"ImageContainer"},r.a.createElement("img",{src:h.a,alt:"sunlogo",className:"App-logo"})),r.a.createElement("div",{className:"TitleTextContainer"},r.a.createElement(f,{level:3},"Weather",r.a.createElement("br",null),"Sender"))))}}]),a}(n.Component),v=a(243),E=a(242),S=a(244),x=a(240),y=a(245),N=a(246),C=a(247),T=a(248),k=(v.a.Step,E.a.Option,p.a.Text),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={apiResponse:"",dbResponse:"",isLoading:!1,subscribeError:"",phoneNumber:"",zipcode:"",timePreference:"A",phoneNumberStatus:"#c8c8c8",zipcodeStatus:"#c8c8c8",resultBoxVisible:"hidden"},n.onTextboxChangePhoneNumber=n.onTextboxChangePhoneNumber.bind(Object(l.a)(n)),n.onTextboxChangeZipcode=n.onTextboxChangeZipcode.bind(Object(l.a)(n)),n.onTextboxChangeTimePreference=n.onTextboxChangeTimePreference.bind(Object(l.a)(n)),n.onSubscribe=n.onSubscribe.bind(Object(l.a)(n)),n.unsubscribeClicked=n.unsubscribeClicked.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.callAPI(),this.callDB()}},{key:"callAPI",value:function(){var e=this;fetch("https://weathersenderapp.herokuapp.com/testAPI").then((function(e){return e.text()})).then((function(t){return e.setState({apiResponse:t})})).catch((function(e){return e}))}},{key:"callDB",value:function(){var e=this;fetch("https://weathersenderapp.herokuapp.com/testDB").then((function(e){return e.text()})).then((function(t){return e.setState({dbResponse:t})})).catch((function(e){return e}))}},{key:"onTextboxChangePhoneNumber",value:function(e){this.setState({phoneNumber:e.target.value}),10==e.target.value.length?this.setState({phoneNumberStatus:"#009100"}):0!=e.target.value.length&&10!=e.target.value.length?this.setState({phoneNumberStatus:"#f0a400"}):this.setState({phoneNumberStatus:"#c8c8c8"})}},{key:"onTextboxChangeZipcode",value:function(e){this.setState({zipcode:e.target.value}),5==e.target.value.length?this.setState({zipcodeStatus:"#009100"}):0!=e.target.value.length&&5!=e.target.value.length?this.setState({zipcodeStatus:"#f0a400"}):this.setState({zipcodeStatus:"#c8c8c8"})}},{key:"onTextboxChangeTimePreference",value:function(e){var t=document.getElementById("preferencea").checked,a=document.getElementById("preferenceb").checked;t?this.setState({timePreference:"A"}):a&&this.setState({timePreference:"B"})}},{key:"onSubscribe",value:function(){var e=this,t=this.state,a=t.phoneNumber,n=t.zipcode,r=t.timePreference;this.setState({isLoading:!0,resultBoxVisible:"hidden"}),fetch("https://weathersenderapp.herokuapp.com/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:a,zipcode:n,timePreference:r})}).then((function(e){return e.json()})).then((function(t){setTimeout((function(){e.setState({isLoading:!1}),t.success?e.setState({subscribeError:t.message,phoneNumber:"",zipcode:"",resultBoxVisible:"visible",phoneNumberStatus:"#c8c8c8",zipcodeStatus:"#c8c8c8"}):e.setState({subscribeError:t.message,resultBoxVisible:"visible"})}),500)}))}},{key:"unsubscribeClicked",value:function(){var e=document.getElementById("unsubscribeMessage").style;"none"==e.display||""==e.display?e.display="inline-block":e.display="none"}},{key:"render",value:function(){var e=this.state,t=(e.apiResponse,e.dbResponse,e.isLoading),a=e.subscribeError,n=e.phoneNumber,c=e.zipcode,s=(e.timePreference,e.phoneNumberStatus),i=e.zipcodeStatus,o=e.resultBoxVisible;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"parentContainer"},r.a.createElement("div",{className:"Introduction"},r.a.createElement(k,{strong:!0},"Welcome to WeatherSender!"),r.a.createElement("br",null),r.a.createElement(k,null,"Subscribe to our free daily weather updates via SMS."),r.a.createElement("br",null),r.a.createElement(k,null,"Available for United States only."),r.a.createElement("br",null),r.a.createElement("div",{className:"unsubscribeText"},r.a.createElement("span",{id:"unsubscribeButton",onClick:this.unsubscribeClicked},r.a.createElement(k,{code:!0},"Unsubscribe")),r.a.createElement(k,null," anytime.")),r.a.createElement("div",{id:"unsubscribeMessage"},r.a.createElement(k,{copyable:{text:"2058755346"}},"To unsubscribe, text 'REMOVE' to +1 (205) 875-5346"))),r.a.createElement("div",{className:"InputContainer"},r.a.createElement("div",{className:"InputField"},r.a.createElement(S.a,{type:"number",value:n,onChange:this.onTextboxChangePhoneNumber,addonBefore:r.a.createElement(N.a,{style:{color:"#08c"}}),suffix:r.a.createElement(C.a,{style:{color:s}}),size:"large",placeholder:"Phone Number"})),r.a.createElement("div",{className:"InputField"},r.a.createElement(S.a,{type:"number",value:c,onChange:this.onTextboxChangeZipcode,addonBefore:r.a.createElement(T.a,{style:{color:"#08c"}}),suffix:r.a.createElement(C.a,{style:{color:i}}),size:"large",placeholder:"Zipcode"}))),r.a.createElement("div",{className:"RadioContainer"},r.a.createElement(k,null,"Send weather updates at:"),r.a.createElement(x.default.Group,{defaultValue:"preferencea",size:"large"},r.a.createElement(x.default.Button,{id:"preferencea",value:"preferencea",className:"RadioButton",onChange:this.onTextboxChangeTimePreference},"9pm for next day"),r.a.createElement("br",null),r.a.createElement(x.default.Button,{id:"preferenceb",value:"preferenceb",className:"RadioButton",onChange:this.onTextboxChangeTimePreference},"6am for same day"))),r.a.createElement("div",{className:"subscribeButton"},r.a.createElement(b.a,{type:"primary",onClick:this.onSubscribe,size:"large",shape:"round",loading:t},"Subscribe")),r.a.createElement("div",{id:"subscriptionStatusBox",style:{visibility:o}},r.a.createElement(y.a,{message:a,type:"S"!=a.slice(0,1)?"error":"success",showIcon:!0}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){}},[[139,1,2]]]);
//# sourceMappingURL=main.a44516c7.chunk.js.map