var Utils = require("/system/utils");

exports.path_of_article = function (article) {
    return /article/ + Utils.convert_to_pinyin(article.name) + ".html";
}

exports.path_of_group = function(group, page_index) {
    if (page_index == 0) {
        return "/group/"+ group.name;
    }
    return "/group/"+ group.name +"/page/"+ page_index;
}

exports.path_of_total_article_page = function(page_index) {
    if (page_index == 0) {
        return "/";
    }
    return ["/page", page_index].join("/");
}