require(["dojo/_base/lang"], function(lang){
  var myObj = {
    foo: "bar"
  };

  var func = lang.hitch(myObj, function(){
    console.log(this.foo);
  });

  func();
});