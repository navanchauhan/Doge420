
var OpenBabelModule = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(OpenBabelModule) {
  OpenBabelModule = OpenBabelModule || {};



  return OpenBabelModule
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = OpenBabelModule;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return OpenBabelModule; });
    else if (typeof exports === 'object')
      exports["OpenBabelModule"] = OpenBabelModule;