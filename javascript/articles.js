var Articles = function() {
    this.articles = [];
}

Articles.prototype.collect = function(dirs) {
    var self = this;
    dirs.forEach(function(dir) {
        self.collect(dir.dirs());
        dir.pages().forEach(function (page) {
            self.articles.push(page);
        });
    });
    return this;
}

Articles.prototype.forEach = function() {
    this.articles.forEach.apply(this.articles, arguments);
}

return Articles;