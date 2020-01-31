var selects = document.querySelectorAll('.tmcp-select');
console.log(selects);
selects.forEach(e=>{
   var options = Array.from(e.options);

   options.forEach(o=>{
       console.log(o.text,o.value,clean(o.getAttribute('data-rules')));
      
   })
});

function clean(str) {
    if(str==='[""]'){
        return '0';
    }
    return str.replace(/[^0-9a-z-A-Z ]/g, "").replace(/ +/, " ")
}