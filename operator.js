const add = (a,b)  =>  {
    return a+b;
};
const sub = (a,b)  =>  {
    return a-b;
};
const mul = (a,b)  =>  {
    return a*b;
};
const div = (a,b)  =>  {
    return a/b;
};


const name="kaif_shaikh";

//module.exports=name;

//for exporting multiple files
/*module.exports.add=add;
module.exports.sub=sub;
module.exports.mul=mul;
*/

//if you want to write code in oneline for exporting
module.exports={add,sub,mul,name};

