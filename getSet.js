var generator = {
    getSetGen: function () {
        for (var item in this) {
            if (item != "getSetGen" && typeof this[item] !="function") {
                this["get" + item] =
                    (function (itm) {
                        return function () {
                            return this[itm];
                        };
                    })(item)

                this["set" + item] =  (function (itm) {
                        return function (val) {
                             this[itm] = val;
                        };
                    })(item)
            }
        }
    }
}

var student = {};
student.name = "mario";
student.age = 22;
student.tel = "01288233002";
student.f = function() {console.log("hello");}

generator.getSetGen.apply(student);
