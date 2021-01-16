var durationFormatter = durationFormatter || new function(){
  
    var _this = this,
        _s2m = 60,
        _s2h = _s2m*60,
        _s2d = _s2h*24,
        _s2y = _s2d*365,
        _duration = {};

    function getText(unit, val){
        var txt = "";
        if( val > 0){
            txt = val + " " + (val == 1 ? unit : unit+"s");
        }
        return txt
    }
    function formatDuration(val) {
        if(typeof val === "number" && Number.isInteger(val) && val >= 0){
            if(val === 0){
                return 'now'
            }else{

                console.log(_duration)
                var res = "";

                _duration['year'] = Math.floor(val / _s2y),
                _duration['day'] = Math.floor(val % _s2y / _s2d),
                _duration['hour'] = Math.floor(val % _s2d / _s2h),
                _duration['minute'] = Math.floor(val % _s2h / _s2m),
                _duration['second'] = Math.floor(val % _s2h % _s2m);
                
                for (var key in _duration) { 
                    if(_duration[key] === 0){
                        delete _duration[key];
                    }
                }
                for (var key in _duration) { 
                    var len = Object.keys(_duration).length;
                    var link_txt = '';
                    if(len >= 2){
                        if(len == 2){
                            link_txt = ' and ';
                        }else{
                            link_txt = ', ';
                        }
                    }
                    res = res + getText(key,_duration[key]) + link_txt;
                    delete _duration[key];
                }
                return res;
            }
        }else{
            return 'Please enter a non-negative integer'
        }

        
    };
    _this.init = function(){
        // var res = formatDuration(366*3600*24+500+10);
        // var res = formatDuration(3600*24+1);
        // var res = formatDuration(1);
        // var res = formatDuration(62);
        // var res = formatDuration(3662);
        // console.log(res);

        var button = document.getElementById("button");
        var input = document.getElementById("input");
        var resbox = document.getElementById("res");
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                var res =  formatDuration(Number(input.value));
                resbox.innerHTML = res;
            }
        });
        button.addEventListener("click", function() {
            var res =  formatDuration(Number(input.value));
            resbox.innerHTML = res;
        });

    };

    return _this;
};
  
  
  