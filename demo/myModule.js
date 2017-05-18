require([
  "dojo/_base/lang"
], function(
  lang) {
  var myObj = {
    foo: "Bar"
  };

  // Attahces a context to a function!!
  var test = lang.hitch(myObj, function(){
    console.log(`Foo ${this.foo}!!`);
  });

  this.foo = "Cafe";
  
  test();
});
