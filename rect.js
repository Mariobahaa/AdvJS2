function Rectangle(w, h) {
    this.width = w || 0;
    this.height = h || 0;
    this.area = function () {
        return h * w;
    };
    this.perimeter = function () {
        return 2 * (w + h);
    };
    this.displayInfo = function () {
        for (var item in this) {
            if (item != "displayInfo") {
                if (typeof this[item] != "function") {
                    console.log(item + ": " + this[item]);
                } else {
                    console.log(item + ": " + this[item]());
                }
            }
        }
    };
}

var rect = new Rectangle(5, 5);
rect.displayInfo();
