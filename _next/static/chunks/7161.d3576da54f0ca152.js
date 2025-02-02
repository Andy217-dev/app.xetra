"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7161],{17161:function(e,t,a){a.r(t);var r=a(57437),s=a(2265);t.default=()=>{let[e,t]=(0,s.useState)(""),[a,d]=(0,s.useState)(null),[o,l]=(0,s.useState)("guessing"),[i,n]=(0,s.useState)(0),[c,m]=(0,s.useState)(0),[h,x]=(0,s.useState)(""),[u,g]=(0,s.useState)(0),b=[{name:"Alexandria",coords:"31.2001,29.9187",region:"Ancient Mediterranean",magicalLore:"Home of the great lighthouse, one of the Seven Wonders ✨",historicRoute:"The Silk Road's western terminus"},{name:"Constantinople",coords:"41.0082,28.9784",region:"Byzantine Empire",magicalLore:"Where the gates between East and West stand eternal \uD83C\uDFF0",historicRoute:"The Royal Road's end point"},{name:"Samarkand",coords:"39.6270,66.9750",region:"Central Asia",magicalLore:"Crossroads of mystic traders and ancient wisdom \uD83D\uDC2B",historicRoute:"Heart of the Silk Road"},{name:"Timbuktu",coords:"16.7666,-3.0026",region:"West Africa",magicalLore:"City of 333 saints and countless scrolls \uD83D\uDCDC",historicRoute:"Trans-Saharan trade route hub"},{name:"Cusco",coords:"-13.5319,-71.9675",region:"Inca Empire",magicalLore:"The navel of the world, center of the four quarters \uD83C\uDF1E",historicRoute:"Qhapaq \xd1an royal road system"},{name:"Kyoto",coords:"35.0116,135.7681",region:"Ancient Japan",magicalLore:"Where dragons guard the imperial gates \uD83D\uDC09",historicRoute:"Tōkaidō road endpoint"},{name:"Venice",coords:"45.4408,12.3155",region:"Medieval Europe",magicalLore:"Where merchants trade in dreams and possibilities \uD83C\uDFAD",historicRoute:"Maritime Silk Road terminus"},{name:"Petra",coords:"30.3285,35.4444",region:"Ancient Arabia",magicalLore:"The rose-red city, half as old as time \uD83C\uDFDB️",historicRoute:"Incense Route hub"}],k=(e,t)=>{let[a,r]=e.split(",").map(Number),[s,d]=t.split(",").map(Number),o=(s-a)*Math.PI/180,l=(d-r)*Math.PI/180,i=Math.sin(o/2)*Math.sin(o/2)+Math.cos(a*Math.PI/180)*Math.cos(s*Math.PI/180)*Math.sin(l/2)*Math.sin(l/2);return Math.round(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))*6371)},p=()=>{let e;let a=b[Math.floor(Math.random()*b.length)];do e=b[Math.floor(Math.random()*b.length)];while(a===e);let r=k(a.coords,e.coords);d({cityFrom:a,cityTo:e,actualDistance:r}),x("https://www.google.com/maps/embed/v1/directions"+"?key=".concat("AIzaSyAcYS7Qjwa1CxL1LettOIKGYoMOoJYsqEk")+"&origin=".concat(a.coords)+"&destination=".concat(e.coords)+"&maptype=satellite&zoom=5"),l("guessing"),t("")};(0,s.useEffect)(()=>{p()},[]);let y=(e,t)=>{let a=Math.abs(e-t)/e*100;return a<=5?100:a<=10?80:a<=20?60:a<=30?40:a<=40?20:10},f=()=>{if(!a||!e)return;let t=parseInt(e),r=y(a.actualDistance,t),s=Math.round((1-Math.abs(a.actualDistance-t)/a.actualDistance)*100);n(e=>e+r),m(s),l("result"),g(e=>e+1)};return(0,r.jsxs)("div",{className:"w-full max-w-4xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-950 rounded-2xl shadow-2xl p-8",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)("div",{className:"bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl shadow-lg",children:(0,r.jsx)("svg",{className:"w-6 h-6 text-white",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 dark:from-emerald-400 dark:to-teal-400 text-transparent bg-clip-text",children:"Distance Calculator"}),(0,r.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Test your geography knowledge"})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow text-sm text-gray-600 dark:text-gray-400",children:["Round ",u]}),(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md flex items-center gap-2",children:[(0,r.jsx)("span",{className:"text-emerald-600 dark:text-emerald-400 font-medium",children:"Score"}),(0,r.jsx)("span",{className:"text-2xl font-bold text-teal-600 dark:text-teal-400",children:i})]})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,r.jsx)("div",{className:"space-y-4",children:a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white mb-4",children:"Route Details"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800",children:[(0,r.jsx)("div",{className:"text-sm text-emerald-700 dark:text-emerald-400 font-medium mb-1",children:"Starting Point"}),(0,r.jsx)("div",{className:"font-semibold text-gray-800 dark:text-white mb-1",children:a.cityFrom.name}),(0,r.jsx)("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:a.cityFrom.region})]}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)("svg",{className:"w-6 h-6 text-emerald-500",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})}),(0,r.jsxs)("div",{className:"p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800",children:[(0,r.jsx)("div",{className:"text-sm text-teal-700 dark:text-teal-400 font-medium mb-1",children:"Destination"}),(0,r.jsx)("div",{className:"font-semibold text-gray-800 dark:text-white mb-1",children:a.cityTo.name}),(0,r.jsx)("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:a.cityTo.region})]})]})]}),"guessing"===o?(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Estimate Distance (km)"}),(0,r.jsx)("input",{type:"number",min:"0",step:"100",placeholder:"Enter your guess...",value:e,onChange:e=>t(e.target.value),className:"w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500",onKeyPress:e=>"Enter"===e.key&&f()})]}),(0,r.jsx)("button",{onClick:f,className:"w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg shadow-lg shadow-emerald-500/20 transition-all font-medium",children:"Check Distance"})]}):(0,r.jsx)("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:(0,r.jsxs)("div",{className:"text-center space-y-4",children:[(0,r.jsx)("div",{className:"inline-flex p-3 rounded-full bg-emerald-50 dark:bg-emerald-900/20",children:(0,r.jsx)("svg",{className:"w-6 h-6 text-emerald-500",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7"})})}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1",children:[a.actualDistance," km"]}),(0,r.jsxs)("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Your guess: ",e," km"]}),(0,r.jsxs)("div",{className:"mt-2 text-sm font-medium text-emerald-600 dark:text-emerald-400",children:["Accuracy: ",c,"%"]})]}),(0,r.jsx)("button",{onClick:p,className:"w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg shadow-lg shadow-emerald-500/20 transition-all font-medium",children:"Next Round"})]})})]})}),(0,r.jsxs)("div",{className:"md:col-span-2",children:[(0,r.jsx)("div",{className:"w-full h-[500px] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md",children:h?(0,r.jsx)("iframe",{title:"Distance Map",width:"100%",height:"100%",frameBorder:"0",src:h,allowFullScreen:!0,className:"transition-opacity duration-500"}):(0,r.jsxs)("div",{className:"h-full flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 p-6",children:[(0,r.jsx)("svg",{className:"w-16 h-16 mb-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"})}),(0,r.jsx)("p",{children:"Loading map..."})]})}),"result"===o&&(null==a?void 0:a.cityFrom.historicRoute)&&(0,r.jsxs)("div",{className:"mt-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-sm",children:[(0,r.jsx)("h3",{className:"font-medium text-gray-800 dark:text-white mb-2",children:"Historical Connection"}),(0,r.jsxs)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["These cities were connected through historic trade routes:"," ",a.cityFrom.historicRoute,"and ",a.cityTo.historicRoute]})]})]})]})]})}}}]);