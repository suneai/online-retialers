// 查看更多
let readMore = (text, length, suffix) => {
    if (text) {
        if (text.length <= length) return text;
        return text.substring(0, length) + suffix;
    }
    return text;
};

export default readMore;


