require([
  "dojo/_base/lang"
], function(
  lang) {
  var myObj = {
    foo: "Bar"
  };

  var func = lang.hitch(myObj, function(){
    console.log(`Foo ${this.foo}!!`);
  });

  func();
});
