var Utils = require("/system/utils");

exports.path_of_article = function (article) {
    return /articles/ + Utils.convert_to_pinyin(article.name) + ".html";
}