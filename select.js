var selects = document.querySelectorAll('.tmcp-select');
// console.log(selects);
var all = [];
selects.forEach(e=>{
   var options = Array.from(e.options);
   let coption = []
   options.forEach(o=>{
    //    console.log(o.text,o.value,clean(o.getAttribute('data-rules')));

    coption.push([o.text]);
      
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
    return r.toString();
}
var data = [
    [1,2],
    [3,4,5],
    [6,7]
]
console.log(cartesian(all));