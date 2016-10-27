/**
 * Created by fantaros on 2016/10/27.
 */

window.$c = (function AppDomain(caspian, undefined){
    function _protofunctionclass_ ( method ) {
        var _current_, _after_, _before_;
        if (typeof method === "function") {
            _current_ = method;
        }
        var _protofunctional_ = function _functional_ (method) {
            if (typeof method === "function") {
                _current_ = method;
            }
            return _protofunctional_;
        };

        _protofunctional_.after = function _aftermethod_ ( afterexec ) {
            if(typeof afterexec === "function") {
                _after_ = afterexec;
            }
            return _protofunctional_;
        }

        _protofunctional_.before = function _beforemethod_ ( beforeexec ) {
            if(typeof beforeexec === "function") {
                _before_ = beforeexec;
            }
            return _protofunctional_;
        }

        _protofunctional_.run = function _runmethod_ () {
            if(typeof _before_ === "function") {
                _before_.apply(this, Array.prototype.slice.apply(arguments));
            }
            if(typeof _current_ === "function") {
                _current_.apply(this, Array.prototype.slice.apply(arguments));
            }
            if(typeof _after_ === "function") {
                _after_.apply(this, Array.prototype.slice.apply(arguments));
            }
         }

        return _protofunctional_;
    }

    if( typeof caspian != "function" ) {
        caspian = new _protofunctionclass_(caspian);
    }

    return caspian;
})(window.$c);
