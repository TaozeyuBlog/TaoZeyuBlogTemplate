var Utils = require("/system/utils");

exports.path_of_article = function (article) {
    return /article/ + Utils.convert_to_pinyin(article.name) + ".html";
}

exports.path_of_total_article_page = function(page_index) {
    return ["/page", page_index].join("/");
}