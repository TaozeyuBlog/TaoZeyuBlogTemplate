var Utils = require("/system/utils");

M.path_of_article = function (article) {
    return /articles/ + Utils.convert_to_pinyin(article.name) + ".html";
}