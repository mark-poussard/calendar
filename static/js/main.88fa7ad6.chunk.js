(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports=n(25)},17:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=n(1),u=n(2),s=n(4),l=n(3),h=n(5),f=(n(17),function t(e){var n=this;Object(i.a)(this,t),this.asNumber=function(){return n.year},this.isLeapYear=function(){return n.year%4===0&&n.year%100!==0||n.year%100===0&&n.year%400===0},this.year=e});f.getCurrentYear=function(){return new f((new Date).getFullYear())};var d=n(10);var y=function t(){Object(i.a)(this,t)};y.START_CALENDAR_HEADER_ON=1;var m=function t(e,n,a){var r=this;Object(i.a)(this,t),this.getDayOfTheWeek=function(){return r.toDate().getDay()},this.isFirstOfMonth=function(){return 1===r.day},this.isLastOfMonth=function(){return r.day===r.month.getNumberOfDays()},this.asNumber=function(){return r.day},this.isToday=function(){var t=new Date;return t.getFullYear()===r.year.asNumber()&&t.getMonth()===r.month.asNumber()&&t.getDate()===r.day},this.toDate=function(){return new Date(Date.UTC(r.year.asNumber(),r.month.asNumber(),r.day))},this.year=new f(e),this.month=new O(e,n),this.day=a},b={SUNDAY:0,MONDAY:1,TUESDAY:2,WEDNESDAY:3,THURSDAY:4,FRIDAY:5,SATURDAY:6,asString:function(t){switch(t){case b.MONDAY:return"Monday";case b.TUESDAY:return"Tuesday";case b.WEDNESDAY:return"Wednesday";case b.THURSDAY:return"Thursday";case b.FRIDAY:return"Friday";case b.SATURDAY:return"Saturday";case b.SUNDAY:return"Sunday"}},getFirstDayOfWeek:function(){return y.START_CALENDAR_HEADER_ON},getLastDayOfWeek:function(){return(b.getFirstDayOfWeek()+6)%7}},O=function t(e,n){var a=this;Object(i.a)(this,t),this.asNumber=function(){return a.month},this.asString=function(){switch(a.month){case v.JANUARY:return"January";case v.FEBRUARY:return"February";case v.MARCH:return"March";case v.APRIL:return"April";case v.MAY:return"May";case v.JUNE:return"June";case v.JULY:return"July";case v.AUGUST:return"August";case v.SEPTEMBER:return"September";case v.OCTOBER:return"October";case v.NOVEMBER:return"November";case v.DECEMBER:return"December"}},this.getNumberOfDays=function(){if(a.month===v.FEBRUARY)return a.year.isLeapYear()?29:28;if([0,2,4,6,7,9,11].indexOf(a.month)>-1)return 31;if([3,5,8,10].indexOf(a.month)>-1)return 30;throw new Error("Unreachable code")},this.getDays=function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(d.a)(Array(t).keys()).map(function(t){return parseInt(t)+e})}(a.getNumberOfDays(),1).map(function(t){return new m(a.year.asNumber(),a.month,t)})},this.getYear=function(){return a.year},this.getNextMonth=function(){var e=a.year.asNumber(),n=a.month+1;return n>v.DECEMBER&&(n=v.JANUARY,e+=1),new t(e,n)},this.getPreviousMonth=function(){var e=a.year.asNumber(),n=a.month-1;return n<v.JANUARY&&(n=v.DECEMBER,e-=1),new t(e,n)},this.year=new f(e),this.month=n};O.getCurrentMonth=function(){var t=new Date;return new O(t.getFullYear(),t.getMonth())};var v={JANUARY:0,FEBRUARY:1,MARCH:2,APRIL:3,MAY:4,JUNE:5,JULY:6,AUGUST:7,SEPTEMBER:8,OCTOBER:9,NOVEMBER:10,DECEMBER:11},p=n(6),E=n.n(p),D=n(9),j=function t(e,n,a){Object(i.a)(this,t),this.startDate=e,this.endDate=n,this.location=a};j.fromRAW=function(t){return new j(new Date(t.startDate),new Date(t.endDate),t.location)};var g=function t(){var e=this;Object(i.a)(this,t),this.getData=Object(D.a)(E.a.mark(function t(){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://gist.githubusercontent.com/mark-poussard/a43eade3e2426b64ca97932a23748fe8/raw/calendar.json",{cache:"no-store"}).then(function(t){return t.json()}).then(function(t){return e.deserializeData(t)}));case 1:case"end":return t.stop()}},t)})),this.deserializeData=function(t){return t.map(function(t){return j.fromRAW(t)})}},A=new function t(){var e=this;Object(i.a)(this,t),this.init=function(){e.dataGetter.getData().then(function(t){return e.data=t}).then(e.doCallbacks)},this.onDataReady=function(t){null!=e.data?e.doCallback(t):e.callbacks.push(t)},this.getLocationsForDate=function(t){if(null==e.data)throw new Error("Data was not ready to consume");var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e.data[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var u=c.value;t.getTime()>=u.startDate.getTime()&&t.getTime()<=u.endDate.getTime()&&n.push(u.location)}}catch(s){r=!0,o=s}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n},this.doCallbacks=function(){var t=!0,n=!1,a=void 0;try{for(var r,o=e.callbacks[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var c=r.value;e.doCallback(c)}}catch(i){n=!0,a=i}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}e.callbacks=[]},this.doCallback=function(t){if(e.callbackLock)throw new Error("Can't call a callback in a callback");e.callbackLock=!0,t(),e.callbackLock=!1},this.dataGetter=new g,this.callbacks=[],this.callbackLock=!1},k=function(t){function e(t){return Object(i.a)(this,e),Object(s.a)(this,Object(l.a)(e).call(this,t))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){if(0===this.props.locations.length)return null;var t=[],e=!0,n=!1,r=void 0;try{for(var o,c=this.props.locations[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var i=o.value;t.push(a.createElement("div",{key:"LIST_LOCATION_".concat(i)},i))}}catch(u){n=!0,r=u}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}return a.createElement("div",{style:{position:"absolute"}},t)}}]),e}(a.Component),N=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).state={locations:A.getLocationsForDate(n.props.day.toDate())},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidUpdate",value:function(t){t.day.toDate().getTime()!==this.props.day.toDate().getTime()&&this.setState({locations:A.getLocationsForDate(this.props.day.toDate())})}},{key:"render",value:function(){var t=this.props.day.isToday()?"today":"";return r.a.createElement("div",{className:"calendar-grid-item calendar-block ".concat(t)},this.props.day.asNumber(),r.a.createElement(k,{locations:this.state.locations}))}}]),e}(r.a.Component),R=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"calendar-grid-item"})}}]),e}(r.a.Component),w=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).getOffset=function(){var t=n.props.days[0];return t.isFirstOfMonth()?((t.getDayOfTheWeek()-y.START_CALENDAR_HEADER_ON)%7+7)%7:0},n.getBuffer=function(){var t=n.props.days[n.props.days.length-1];return t.isLastOfMonth()?((8-t.getDayOfTheWeek()-y.START_CALENDAR_HEADER_ON)%7+7)%7:0},n.renderOffsetBlocks=function(){for(var t=[],e=0;e<n.getOffset();e++)t.push(r.a.createElement(R,{key:"OFFSET_".concat(e)}));return t},n.renderBufferBlocks=function(){for(var t=[],e=0;e<n.getBuffer();e++)t.push(r.a.createElement(R,{key:"BUFFER_".concat(e)}));return t},n.renderDays=function(){var t=[],e=!0,a=!1,o=void 0;try{for(var c,i=n.props.days[Symbol.iterator]();!(e=(c=i.next()).done);e=!0){var u=c.value;t.push(r.a.createElement(N,{key:"DAY_".concat(u.asNumber()),day:u}))}}catch(s){a=!0,o=s}finally{try{e||null==i.return||i.return()}finally{if(a)throw o}}return t},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderOffsetBlocks(),this.renderDays(),this.renderBufferBlocks())}}]),e}(r.a.Component),M=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).renderEmptyLine=function(){for(var t=[],e=0;e<7;e++)t.push(r.a.createElement(R,null));return t},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"9vw",border:"transparent 1px solid"}},this.renderEmptyLine())}}]),e}(r.a.Component),T=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).state={},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=[],e=[],n=0,a=this.props.month.getDays(),o=!0,c=!1,i=void 0;try{for(var u,s=a[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){var l=u.value;e.push(l),(l.getDayOfTheWeek()===b.getLastDayOfWeek()||l.isLastOfMonth())&&(t.push(r.a.createElement(w,{key:"CALENDAR_LINE_".concat(n++),days:e})),e=[])}}catch(h){c=!0,i=h}finally{try{o||null==s.return||s.return()}finally{if(c)throw i}}return t.length<6&&t.push(r.a.createElement(M,null)),r.a.createElement("div",{className:"calendar-body"},t)}}]),e}(r.a.Component),C=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).renderDay=function(t){return r.a.createElement("div",{key:"DAY_LEGEND_".concat(t),className:"calendar-legend"},b.asString(t))},n.getOrderedDays=function(){for(var t=[],e=y.START_CALENDAR_HEADER_ON,n=0;n<7;n++){var a=(n+e)%7;t.push(a)}return t},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=[],e=this.getOrderedDays(),n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var u=c.value;t.push(this.renderDay(u))}}catch(s){a=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r.a.createElement("div",null,t)}}]),e}(r.a.Component),S=function(t){function e(t){return Object(i.a)(this,e),Object(s.a)(this,Object(l.a)(e).call(this,t))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.month.asString()+" ",this.props.month.getYear().asNumber())}}]),e}(r.a.Component),Y=function(t){function e(t){return Object(i.a)(this,e),Object(s.a)(this,Object(l.a)(e).call(this,t))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"calendar-header"},r.a.createElement(S,{month:this.props.month}),r.a.createElement(C,null))}}]),e}(r.a.Component),L=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).doNextMonth=function(){n.props.setMonth(n.props.month.getNextMonth())},n.doPreviousMonth=function(){n.props.setMonth(n.props.month.getPreviousMonth())},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{onClick:this.doPreviousMonth},"Previous month"),r.a.createElement("a",{onClick:this.doNextMonth},"Next month"))}}]),e}(r.a.Component),U=(n(21),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).setMonth=function(t){n.setState({month:t})},n.state={month:O.getCurrentMonth()},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Y,{month:this.state.month}),r.a.createElement(T,{month:this.state.month}),r.a.createElement(L,{month:this.state.month,setMonth:this.setMonth}))}}]),e}(r.a.Component)),_=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).state={loading:!0},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;A.init(),A.onDataReady(function(){return t.setState({loading:!1})})}},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,r.a.createElement(U,null))}}]),e}(r.a.Component);n(23);c.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.88fa7ad6.chunk.js.map