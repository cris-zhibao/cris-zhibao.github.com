 function rnd() {
    $.ajax({
        type:'POST',
        url:'../a.txt',
        success:function(str){
            var str = eval('('+str+')');
            if(str.message=='未中奖'){
                
            }else{
                
            }
        }
    })
}