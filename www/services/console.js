/* Copyright (c) 2012 Sergiy Kovalchuk (serg472@gmail.com) under the Apache License 2.0 */
(function(){function d(a){window.console[a]=function(){}}function e(a){"undefined"===typeof window.console[a]&&d(a)}if("#debug"==window.location.hash.toLowerCase()||window.location.href.match(/[&?]debug\b/i))DEBUG=!0;var b=["log","debug","info","warn","error"],c="assert,clear,count,dir,dirxml,exception,group,groupCollapsed,groupEnd,markTimeline,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace".split(",");if("undefined"===typeof window.console||"undefined"===typeof DEBUG||
"boolean"===typeof DEBUG&&!DEBUG||"string"===typeof DEBUG&&"off"==DEBUG.toLowerCase()){window.console={};for(var b=c.concat(b),a=0;a<b.length;a++)d(b[a])}else if("undefined"!==typeof window.console){for(a=0;a<c.length;a++)"boolean"===typeof DEBUG&&DEBUG||"string"===typeof DEBUG&&"on"==DEBUG.toLowerCase()?e(c[a]):d(c[a]);c=b[0];"string"===typeof DEBUG&&(c="on"==DEBUG.toLowerCase()?b[0]:DEBUG);for(var f=!1,a=0;a<b.length;a++)b[a]==c&&(f=!0),f?e(b[a]):d(b[a])}})();

$(me).on('create', function() {
    me.jendri.register('console', {});
})