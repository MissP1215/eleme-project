define(function(require, exports) {
    var template = require('template');
    var public = {
        tpl: function(urlTpl, ele, datas) {
            $.ajax({
                type: 'GET',
                url: urlTpl,
                data: '',
                dataType: 'text',
                saync: 'false',
                success: function(tpls) {
                    var tpls = template.compile(tpls);
                    var data = tpls(datas);
                    ele.html(data);
                }
            });
        },
        // 获取url参数 ---@param 为url参数name   ---@调用方式: public.getUrlParam('debug');
        getUrlParam: function (param) {
            var uri = window.location.search;
            var re = new RegExp("" + param + "=([^&?]*)", "ig");
            return ((uri.match(re)) ? (decodeURIComponent(uri.match(re)[0].substr(param.length + 1))) : '');
        },
    }
    exports.public = public;
});