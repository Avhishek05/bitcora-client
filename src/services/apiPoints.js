const BASE_URL = "http://localhost:3000/api";

export const postsListUrl= () => {
    return `${BASE_URL}/posts/allPosts/`;
    // return `https://hacker-news.firebaseio.com/v0/item/126809.json?print=pretty`;
};