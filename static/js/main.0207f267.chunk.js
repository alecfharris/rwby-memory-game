(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Ruby Rose",image:"https://vignette.wikia.nocookie.net/rwbytest/images/3/34/Ruby_Rose_Emblem.svg/revision/latest/scale-to-width-down/240?cb=20160624160005"},{id:2,name:"Weiss Schnee",image:"https://vignette.wikia.nocookie.net/rwby/images/b/b0/Weiss_Schnee_Emblem.svg/revision/latest/scale-to-width-down/240?cb=20150103071936"},{id:3,name:"Blake Belladonna",image:"https://vignette.wikia.nocookie.net/rwby/images/3/34/Blake_Belladonna_Emblem.svg/revision/latest/scale-to-width-down/240?cb=20150103071936"},{id:4,name:"Yang Xiaolong",image:"https://vignette.wikia.nocookie.net/rwby/images/0/0c/Yang_emblem_trans.png/revision/latest/scale-to-width-down/240?cb=20140810194747"},{id:5,name:"Jaune Arc",image:"https://vignette.wikia.nocookie.net/rwby/images/e/ef/Jaune_Arc_Emblem.svg/revision/latest/scale-to-width-down/240?cb=20150103071944"},{id:6,name:"Nora Valkyrie",image:"https://vignette.wikia.nocookie.net/rwby/images/7/79/Nora_Valkyrie_Emblem.svg/revision/latest/scale-to-width-down/240?cb=20150103071944"},{id:7,name:"Lie Ren ",image:"https://vignette.wikia.nocookie.net/rwby/images/0/08/Lie_Ren_Emblem.svg/revision/latest/scale-to-width-down/240?cb=20150103071945"},{id:8,name:"Pyrrha Nikos",image:"https://vignette.wikia.nocookie.net/rwby/images/1/17/Pyrrha_Nikos_Emblem.svg/revision/latest/scale-to-width-down/240?cb=20150103071945"},{id:9,name:"Oscar Pine",image:"https://vignette.wikia.nocookie.net/rwby/images/5/5a/Oscar_emblem.svg/revision/latest/scale-to-width-down/240?cb=20180804054604"},{id:10,name:"Qrow Branwen",image:"https://vignette.wikia.nocookie.net/rwby/images/7/74/Qrow_Emblem.svg/revision/latest/scale-to-width-down/240?cb=20150725213904"},{id:11,name:"Roman Torchwick",image:"https://vignette.wikia.nocookie.net/rwby/images/9/9c/Roman_Torchwick_Emblem.svg/revision/latest/scale-to-width-down/240?cb=20150103071938"},{id:12,name:"Cinder Fall",image:"https://vignette.wikia.nocookie.net/rwby/images/e/e2/Cinder_Fall_Emblem.svg/revision/latest/scale-to-width-down/240?cb=20150103071937"}]},,,function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),s=a.n(o),r=(a(15),a(3)),c=a(4),m=a(7),l=a(5),d=a(8);a(17);var g=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(19);var u=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container",onClick:function(){return e.checkGuess(e.id)}},i.a.createElement("img",{alt:e.name,src:e.image})))};a(21);var w=function(e){return i.a.createElement("div",{className:"card-container-flex"},i.a.createElement("div",{className:"main"},e.children))};a(23);var h=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"header"},i.a.createElement("div",{id:"header-flex"},i.a.createElement("div",{className:"header-flex-item",id:"header-title"},"RWBY Memory Game"),i.a.createElement("div",{className:"header-flex-item",id:"header-main-text"},e.mainText),i.a.createElement("div",{className:"header-flex-item",id:"header-score"},"Score: ",e.score," | Top Score: ",e.topScore))))};a(25);var v=function(e){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{id:"footer-top"}," ",null),i.a.createElement("div",{id:"footer-bottom"}," ",null))},b=(a(27),a(6)),k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={emblems:b,guessedEmblems:[],score:0,topScore:0,mainText:"Click an image to begin!"},a.checkGuess=function(e){!0===a.correctGuess(e)?(a.setState({score:a.state.score+1,mainText:"Correct guess!"}),a.state.score>=a.state.topScore&&a.setState({topScore:a.state.score+1})):a.setState({guessedEmblems:[],score:0,mainText:"Incorrect guess!"})},a.correctGuess=function(e){var t=!0,n=a.state.guessedEmblems;return n.map(function(a){if(a===e)return t=!1}),!0===t&&(n.push(e),a.setState({guessedEmblems:n})),a.shuffle(),t},a.shuffle=function(){for(var e,t,n=a.state.emblems,i=n.length;0!==i;)t=Math.floor(Math.random()*i),e=n[i-=1],n[i]=n[t],n[t]=e;a.setState({emblems:n})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(g,null,i.a.createElement(h,{mainText:this.state.mainText,score:this.state.score,topScore:this.state.topScore}),i.a.createElement(w,null,this.state.emblems.map(function(t){return i.a.createElement(u,{id:t.id,key:t.id,name:t.name,image:t.image,checkGuess:e.checkGuess})})),i.a.createElement(v,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.0207f267.chunk.js.map