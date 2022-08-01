import PostListItem from "./PostListItem"

import "../components/styles/NewsList.css"

export const PostList = ({ posts }) => {
    return (
        <>
            <h2 className="newsList">News</h2>
            {posts.map(post => (
                <PostListItem key={ post.id } { ...post } />
            ))}
        </>
    )
}