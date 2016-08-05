M.date_from_article_name = function(title) {
    var matches = title.match(/^\d{4}-\d{2}-\d{2}/);
    if (matches) {
        return matches[0];
    }
    return "";
}

M.title_from_article_name = function(title) {
    return title.replace(/\d{4}-\d{2}-\d{2}\s*/g, "");
}