(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports=n(25)},17:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(8),o=n.n(i),u=n(1),s=n(2),c=n(4),l=n(3),h=n(5),b=(n(17),function t(e){var n=this;Object(u.a)(this,t),this.asNumber=function(){return n.year},this.isLeapYear=function(){return n.year%4===0&&n.year%100!==0||n.year%100===0&&n.year%400===0},this.equals=function(t){return n.year===t.year},this.year=e});b.getCurrentYear=function(){return new b((new Date).getFullYear())};var f=n(10);var d=function t(){Object(u.a)(this,t)};d.START_CALENDAR_HEADER_ON=1;var m=function t(e,n,r){var a=this;Object(u.a)(this,t),this.getDayOfTheWeek=function(){return a.toDate().getDay()},this.isFirstOfMonth=function(){return 1===a.day},this.isLastOfMonth=function(){return a.day===a.month.getNumberOfDays()},this.asNumber=function(){return a.day},this.getMonth=function(){return a.month},this.getYear=function(){return a.year},this.isToday=function(){var t=new Date;return t.getFullYear()===a.year.asNumber()&&t.getMonth()===a.month.asNumber()&&t.getDate()===a.day},this.toDate=function(){return new Date(Date.UTC(a.year.asNumber(),a.month.asNumber(),a.day))},this.year=new b(e),this.month=new v(e,n),this.day=r},y={SUNDAY:0,MONDAY:1,TUESDAY:2,WEDNESDAY:3,THURSDAY:4,FRIDAY:5,SATURDAY:6,asString:function(t){switch(t){case y.MONDAY:return"Monday";case y.TUESDAY:return"Tuesday";case y.WEDNESDAY:return"Wednesday";case y.THURSDAY:return"Thursday";case y.FRIDAY:return"Friday";case y.SATURDAY:return"Saturday";case y.SUNDAY:return"Sunday";default:return""}},getFirstDayOfWeek:function(){return d.START_CALENDAR_HEADER_ON},getLastDayOfWeek:function(){return(y.getFirstDayOfWeek()+6)%7}},v=function t(e,n){var r=this;Object(u.a)(this,t),this.asNumber=function(){return r.month},this.asString=function(){switch(r.month){case p.JANUARY:return"January";case p.FEBRUARY:return"February";case p.MARCH:return"March";case p.APRIL:return"April";case p.MAY:return"May";case p.JUNE:return"June";case p.JULY:return"July";case p.AUGUST:return"August";case p.SEPTEMBER:return"September";case p.OCTOBER:return"October";case p.NOVEMBER:return"November";case p.DECEMBER:return"December"}},this.getNumberOfDays=function(){if(r.month===p.FEBRUARY)return r.year.isLeapYear()?29:28;if([0,2,4,6,7,9,11].indexOf(r.month)>-1)return 31;if([3,5,8,10].indexOf(r.month)>-1)return 30;throw new Error("Unreachable code")},this.getDays=function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(f.a)(Array(t).keys()).map(function(t){return parseInt(t)+e})}(r.getNumberOfDays(),1).map(function(t){return new m(r.year.asNumber(),r.month,t)})},this.getStartDate=function(){return new Date(Date.UTC(r.getYear().asNumber(),r.asNumber(),1))},this.getEndDate=function(){return new Date(Date.UTC(r.getYear().asNumber(),r.asNumber(),r.getNumberOfDays()))},this.getYear=function(){return r.year},this.getNextMonth=function(){var e=r.year.asNumber(),n=r.month+1;return n>p.DECEMBER&&(n=p.JANUARY,e+=1),new t(e,n)},this.getPreviousMonth=function(){var e=r.year.asNumber(),n=r.month-1;return n<p.JANUARY&&(n=p.DECEMBER,e-=1),new t(e,n)},this.equals=function(t){return r.month===t.month&&r.getYear().equals(t.getYear())},this.year=new b(e),this.month=n};v.getCurrentMonth=function(){var t=new Date;return new v(t.getFullYear(),t.getMonth())};var p={JANUARY:0,FEBRUARY:1,MARCH:2,APRIL:3,MAY:4,JUNE:5,JULY:6,AUGUST:7,SEPTEMBER:8,OCTOBER:9,NOVEMBER:10,DECEMBER:11},g=n(6),O=n.n(g),E=n(9),D=function t(e,n,r,a){var i=this;Object(u.a)(this,t),this.lighten=function(e){var n=i.red+e<=255?i.red+e:255,r=i.green+e<=255?i.green+e:255,a=i.blue+e<=255?i.blue+e:255;return new t(n,r,a,i.alpha)},this.darken=function(e){var n=i.red-e>=0?i.red-e:0,r=i.green-e>=0?i.green-e:0,a=i.blue-e>=0?i.blue-e:0;return new t(n,r,a,i.alpha)},this.toCssString=function(){return"rgba(".concat(i.red,", ").concat(i.green,", ").concat(i.blue,", ").concat(i.alpha,")")},this.red=e,this.green=n,this.blue=r,this.alpha=a};D.RED=new D(255,0,0,1),D.GREEN=new D(0,255,0,1),D.BLUE=new D(0,0,255,1),D.GRAY=new D(128,128,128,1),D.fromHexString=function(t){var e=parseInt(t.substr(1,2),16),n=parseInt(t.substr(3,2),16),r=parseInt(t.substr(5,2),16);return new D(e,n,r,1)},D.fromString=function(t){return D.fromHexString(function(t){for(var e=0,n=0;n<t.length;n++)e=t.charCodeAt(n)+((e<<5)-e);for(var r="#",a=0;a<3;a++)r+=("00"+(e>>8*a&255).toString(16)).substr(-2);return r}(t))};var M=function t(e,n,r){var a=this;Object(u.a)(this,t),this.getColor=function(){return D.fromString(a.location)},this.startDate=e,this.endDate=n,this.location=r};M.fromRAW=function(t){return new M(new Date(t.startDate),new Date(t.endDate),t.location)};var k=function t(){var e=this;Object(u.a)(this,t),this.getData=Object(E.a)(O.a.mark(function t(){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://gist.githubusercontent.com/mark-poussard/a43eade3e2426b64ca97932a23748fe8/raw/calendar.json",{cache:"no-store"}).then(function(t){return t.json()}).then(function(t){return e.deserializeData(t)}));case 1:case"end":return t.stop()}},t)})),this.deserializeData=function(t){return t.map(function(t){return M.fromRAW(t)})}},j=new function t(){var e=this;Object(u.a)(this,t),this.init=function(){e.dataGetter.getData().then(function(t){return e.data=t}).then(e.doCallbacks)},this.onDataReady=function(t){null!=e.data?e.doCallback(t):e.callbacks.push(t)},this.getEntriesForDate=function(t){if(null==e.data)throw new Error("Data was not ready to consume");var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e.data[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var s=o.value;t.getTime()>=s.startDate.getTime()&&t.getTime()<=s.endDate.getTime()&&n.push(s)}}catch(c){a=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n},this.getEntriesForMonth=function(t){if(null==e.data)throw new Error("Data was not ready to consume");var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e.data[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var s=o.value,c=s.endDate.getTime()<t.getStartDate().getTime(),l=s.startDate.getTime()>t.getEndDate().getTime();c||l||n.push(s)}}catch(h){a=!0,i=h}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n},this.doCallbacks=function(){var t=!0,n=!1,r=void 0;try{for(var a,i=e.callbacks[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value;e.doCallback(o)}}catch(u){n=!0,r=u}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}e.callbacks=[]},this.doCallback=function(t){if(e.callbackLock)throw new Error("Can't call a callback in a callback");e.callbackLock=!0,t(),e.callbackLock=!1},this.dataGetter=new k,this.callbacks=[],this.callbackLock=!1},w=function(t){function e(t){return Object(u.a)(this,e),Object(c.a)(this,Object(l.a)(e).call(this,t))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){if(0===this.props.locations.length)return null;var t=[],e=!0,n=!1,a=void 0;try{for(var i,o=this.props.locations[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var u=i.value;t.push(r.createElement("div",{key:"LIST_LOCATION_".concat(u)},u))}}catch(s){n=!0,a=s}finally{try{e||null==o.return||o.return()}finally{if(n)throw a}}return r.createElement("div",{style:{position:"absolute"}},t)}}]),e}(r.Component),S=function t(e){var n=this;Object(u.a)(this,t),this.subscribeToValue=function(t){if(n.isInCallback)throw new Error("Tried to subscribe to value in a callback.");var e=n.subscriptionsIdGenerator++;return n.subscriptions.set(e,t),n.doCallback(t),e},this.unsubscribe=function(t){if(n.isInCallback)throw new Error("Tried to unsubscribe to value in a callback.");n.subscriptions.delete(t)},this.setValue=function(t){if(n.isInCallback)throw new Error("Tried to set value in a callback.");n.value=t,n.subscriptions.forEach(function(t){return n.doCallback(t)})},this.getValue=function(){return n.value},this.doCallback=function(t){n.isInCallback=!0,t(n.value),n.isInCallback=!1},this.value=e,this.subscriptions=new Map,this.subscriptionsIdGenerator=0,this.isInCallback=!1},A=new function t(){var e=this;Object(u.a)(this,t),this.getMobileMode=function(){return e.mobileMode},this.isMobileMode=function(){var t=window,e=document,n=e.documentElement,r=e.getElementsByTagName("body")[0],a=t.innerWidth||n.clientWidth||r.clientWidth,i=t.innerHeight||n.clientHeight||r.clientHeight;return a<800||i<20},this.initMobileMode=function(){e.mobileMode.setValue(e.isMobileMode()),window.addEventListener("resize",function(){return e.mobileMode.setValue(e.isMobileMode())})},this.mobileMode=new S(!1)},N=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t))).computeGradient=function(){var t="linear-gradient(",e=100/n.state.entries.length,r=0,a=!0,i=!0,o=!1,u=void 0;try{for(var s,c=n.state.entries[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=s.value;a||(t+=", "),t+=l.getColor().toCssString()+" "+r+"%, "+l.getColor().toCssString()+" "+(r+e)+"%",r+=e,a=!1}}catch(h){o=!0,u=h}finally{try{i||null==c.return||c.return()}finally{if(o)throw u}}return t+=")"},n.state={entries:j.getEntriesForDate(n.props.day.toDate()),mobileMode:A.getMobileMode().getValue()},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.mobileModeSubscription=A.getMobileMode().subscribeToValue(function(e){t.setState({mobileMode:e})})}},{key:"componentWillUnmount",value:function(){null!=this.mobileModeSubscription&&(A.getMobileMode().unsubscribe(this.mobileModeSubscription),this.mobileModeSubscription=void 0)}},{key:"componentDidUpdate",value:function(t){t.day.toDate().getTime()!==this.props.day.toDate().getTime()&&this.setState({entries:j.getEntriesForDate(this.props.day.toDate())})}},{key:"render",value:function(){var t=this.props.day.isToday()?"today":"";return a.a.createElement("div",{className:"calendar-grid-item calendar-block ".concat(t),style:{background:this.computeGradient()}},this.props.day.asNumber(),!this.state.mobileMode&&a.a.createElement(w,{locations:this.state.entries.map(function(t){return t.location})}))}}]),e}(a.a.Component),C=function(t){function e(){return Object(u.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"calendar-grid-item"})}}]),e}(a.a.Component),R=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t))).getOffset=function(){var t=n.props.days[0];return t.isFirstOfMonth()?((t.getDayOfTheWeek()-d.START_CALENDAR_HEADER_ON)%7+7)%7:0},n.getBuffer=function(){var t=n.props.days[n.props.days.length-1];return t.isLastOfMonth()?((8-t.getDayOfTheWeek()-d.START_CALENDAR_HEADER_ON)%7+7)%7:0},n.renderOffsetBlocks=function(){for(var t=[],e=0;e<n.getOffset();e++)t.push(a.a.createElement(C,{key:"OFFSET_".concat(e)}));return t},n.renderBufferBlocks=function(){for(var t=[],e=0;e<n.getBuffer();e++)t.push(a.a.createElement(C,{key:"BUFFER_".concat(e)}));return t},n.renderDays=function(){var t=[],e=!0,r=!1,i=void 0;try{for(var o,u=n.props.days[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var s=o.value;t.push(a.a.createElement(N,{key:"".concat(s.getYear().asNumber(),"-").concat(s.getMonth().asNumber(),"-").concat(s.asNumber()),day:s}))}}catch(c){r=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(r)throw i}}return t},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,this.renderOffsetBlocks(),this.renderDays(),this.renderBufferBlocks())}}]),e}(a.a.Component),T=function(t){function e(){var t,n;Object(u.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(i)))).renderEmptyLine=function(){for(var t=[],e=0;e<7;e++)t.push(a.a.createElement(C,null));return t},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{style:{height:"9vw",border:"transparent 1px solid"}},this.renderEmptyLine())}}]),e}(a.a.Component),Y=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t))).state={},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=[],e=[],n=0,r=this.props.month.getDays(),i=!0,o=!1,u=void 0;try{for(var s,c=r[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=s.value;e.push(l),(l.getDayOfTheWeek()===y.getLastDayOfWeek()||l.isLastOfMonth())&&(t.push(a.a.createElement(R,{key:"CALENDAR_LINE_".concat(n++),days:e})),e=[])}}catch(h){o=!0,u=h}finally{try{i||null==c.return||c.return()}finally{if(o)throw u}}return t.length<6&&t.push(a.a.createElement(T,null)),a.a.createElement("div",{className:"calendar-body"},t)}}]),e}(a.a.Component),U=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t))).renderDay=function(t){var e=n.state.mobileMode?y.asString(t).substring(0,3)+".":y.asString(t);return a.a.createElement("div",{key:"DAY_LEGEND_".concat(t),className:"calendar-legend"},e)},n.getOrderedDays=function(){for(var t=[],e=d.START_CALENDAR_HEADER_ON,n=0;n<7;n++){var r=(n+e)%7;t.push(r)}return t},n.state={mobileMode:A.getMobileMode().getValue()},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.mobileModeSubscription=A.getMobileMode().subscribeToValue(function(e){t.setState({mobileMode:e})})}},{key:"componentWillUnmount",value:function(){null!=this.mobileModeSubscription&&(A.getMobileMode().unsubscribe(this.mobileModeSubscription),this.mobileModeSubscription=void 0)}},{key:"render",value:function(){var t=[],e=this.getOrderedDays(),n=!0,r=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var s=o.value;t.push(this.renderDay(s))}}catch(c){r=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(r)throw i}}return a.a.createElement("div",null,t)}}]),e}(a.a.Component),L=function(t){function e(t){return Object(u.a)(this,e),Object(c.a)(this,Object(l.a)(e).call(this,t))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,this.props.month.asString()+" ",this.props.month.getYear().asNumber())}}]),e}(a.a.Component),B=function(t){function e(t){return Object(u.a)(this,e),Object(c.a)(this,Object(l.a)(e).call(this,t))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"calendar-header"},a.a.createElement(L,{month:this.props.month}),a.a.createElement(U,null))}}]),e}(a.a.Component),F=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t))).doNextMonth=function(){n.props.setMonth(n.props.month.getNextMonth())},n.doPreviousMonth=function(){n.props.setMonth(n.props.month.getPreviousMonth())},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("button",{onClick:this.doPreviousMonth},"Previous month"),a.a.createElement("button",{onClick:this.doNextMonth},"Next month"))}}]),e}(a.a.Component),_=(n(21),function(t){function e(t){return Object(u.a)(this,e),Object(c.a)(this,Object(l.a)(e).call(this,t))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{style:{backgroundColor:D.fromString(this.props.location).toCssString(),border:"1px solid black"}},this.props.location)}}]),e}(a.a.Component)),x=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t))).getLocations=function(){var t=new Set;return j.getEntriesForMonth(n.props.month).forEach(function(e){return t.add(e.location)}),t},n.state={locations:n.getLocations()},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidUpdate",value:function(t){t.month.equals(this.props.month)||this.setState({locations:this.getLocations()})}},{key:"render",value:function(){var t=[],e=!0,n=!1,r=void 0;try{for(var i,o=this.state.locations[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var u=i.value;t.push(a.a.createElement(_,{key:u,location:u}))}}catch(s){n=!0,r=s}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}return t}}]),e}(a.a.Component),I=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t))).setMonth=function(t){n.setState({month:t})},n.state={month:v.getCurrentMonth(),mobileMode:A.getMobileMode().getValue()},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.mobileModeSubscription=A.getMobileMode().subscribeToValue(function(e){t.setState({mobileMode:e})})}},{key:"componentWillUnmount",value:function(){null!=this.mobileModeSubscription&&(A.getMobileMode().unsubscribe(this.mobileModeSubscription),this.mobileModeSubscription=void 0)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(B,{month:this.state.month}),a.a.createElement(Y,{month:this.state.month}),a.a.createElement(F,{month:this.state.month,setMonth:this.setMonth}),this.state.mobileMode&&a.a.createElement(x,{month:this.state.month}))}}]),e}(a.a.Component),W=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t))).state={loading:!0},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;j.init(),j.onDataReady(function(){return t.setState({loading:!1})})}},{key:"render",value:function(){return this.state.loading?a.a.createElement("div",null,"Loading..."):a.a.createElement("div",null,a.a.createElement(I,null))}}]),e}(a.a.Component);n(23);A.initMobileMode(),o.a.render(a.a.createElement(W,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.5cad1a3e.chunk.js.map