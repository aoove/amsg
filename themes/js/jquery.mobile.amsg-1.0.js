//http://amsg.aoove.com/
;$.amsg = function(){
    var h = '<div class="m-amsg">\
                <div class="p-wrap">\
                    <i class="p-backdrop"></i>\
                    <div class="p-content">\
                        <div class="p-header"></div>\
                        <div class="p-body"></div>\
                        <div class="p-footer">\
                            <a class="p-cancle">取消</a>\
                            <a class="p-confirm">确定</a>\
                        </div>\
                    </div>\
                </div>\
            </div>';
    var p = function(m,s,t){
        var r = $(h);
        r.find('.p-wrap').empty().html('<div class="p-popup p-content"><i></i><p></p></div>');
        $("body").append(r);
        m&&setText(m,r.find('p'));
        s&&r.find('i').attr('class',s);
        !t&&(t=1000);
        setTimeout(function(){
            r.remove();
        },t);
    };
    var a = function(t,m,f,b){
        var r = $(h);
        r.find('.p-cancle').remove();
        ac(r,t,m,f,b);
    };
    var c = function(t,m,f,b){
        var r = $(h);
        ac(r,t,m,f,b);
    }
    function ac(r,t,m,f,b){
        $("body").append(r);
        t&&setText(t,r.find('.p-header'));
        m&&setText(m,r.find('.p-body'));
        b&&setButton(b,r.find('.p-footer'));
        r.find('.p-cancle').on('tap',function(){
            r.remove();
        });
        r.find('.p-confirm').on('tap',function(){
            r.remove();
            f&&f();
        });
    }
    function setText(m,b){
        if(typeof m == 'string'){
            b.html(m);
        }else if(typeof m == 'object' && m.left){
            b.css({'textAlign':'left'}).html(m.left);
        }else if(typeof m == 'object' && m.center){
            b.css({'textAlign':'center'}).html(m.center);
        }else if(typeof m == 'object' && m.auto){
            b.html(m.auto);
            var lineHeight = parseInt(b.css('lineHeight'));
            var height = b.height();
            if(Math.floor(height/lineHeight) <=1)
                b.css({'textAlign':'center'});
            else
                b.css({'textAlign':'left'});
        }
    }
    function setButton(b,footer){
        b.confirm&&footer.find('.p-confirm').text(b.confirm);
        b.cancle&&footer.find('.p-cancle').text(b.cancle);
    }
    return{p:p,a:a,c:c};
}();