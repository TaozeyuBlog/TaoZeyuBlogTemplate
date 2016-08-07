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
    this.articles.sort(function(article1, article2) {
        var date1 = article_date(article1);
        var date2 = article_date(article2);
        return date2.localeCompare(date1);
    });
    return this;
}

Articles.prototype.pages = function(num_each_page) {
    return new Page(this.articles, num_each_page);
}

Articles.prototype.forEach = function() {
    this.articles.forEach.apply(this.articles, arguments);
}

function article_date(article) {
    var matches = article.getName().match(/\d{4}\-\d{2}\-\d{2}/);
    if (!matches) {
        return "";
    }
    return matches[0];
}

return Articles;