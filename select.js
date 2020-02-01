var selects = document.querySelectorAll('.tmcp-select');
// console.log(selects);
var all = [];
selects.forEach(e=>{
   var options = Array.from(e.options);
   let coption = []
   options.forEach((o,index)=>{
    //    console.log(o.text,o.value,clean(o.getAttribute('data-rules')));

    coption.push({index:index,text:o.text,value:o.value,price:clean(o.getAttribute('data-rules'))});
      
   })
   all.push(coption);
});

function clean(str) {
    if(str==='[""]'){
        return '0';
    }
    return str.replace(/[^0-9a-z-A-Z ]/g, "").replace(/ +/, " ")
}

function cartesian(arg) {
    var r = [], max = arg.length-1;
    
    function helper(arr, i) {
        for (var j=0, l=arg[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(arg[i][j]);
            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}

var master = cartesian(all);
var allopt = document.getElementById('alloption');
var strender = [];
master.map((m,index)=>{
   strender.push(mapText(m,index));
})


function mapText(m,index){
    let obj = {
        index:0,
        text:'',
        value:[],
        id:[],price:0
    }
    
    m.map((t)=>{
        obj.index = index
        obj.text+=t.text+' ';
        obj.value.push(t.value);
        obj.id.push(t.index);
        obj.price += parseFloat(t.price);
       
    })
    return obj;
}

strender.map(e=>{
    let html='<div class="newoption">';
    html+= e.text + '<p>'+e.price+'</p></div>';
    $('#alloption').append(html);


})

$('#alloption ').on('click','.newoption',function(){

    let index = ($(this).index());
    console.log(strender[index]);
});