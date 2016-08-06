var Page = require("/system/pages");

function Articles() {
    this.articles = [];
}

Articles.prototype.collect = function(dirs) {
    var self = this;
    dirs.forEach(function(dir) {
        self.collect(dir.dirs());
        dir.pages().forEach(function (page) {
            if (page.get("published")) {
                self.articles.push(page);
            }
        });
    });
    return this;
}

Articles.prototype.pages = function(num_each_page) {
    return new Page(this.articles, num_each_page);
}

Articles.prototype.forEach = function() {
    this.articles.forEach.apply(this.articles, arguments);
}

return Articles;