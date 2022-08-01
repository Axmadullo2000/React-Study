import "../components/styles/PostListItem.css"

const PostListItem = ({ id, title, description }) => {
  return (
    <div>
        <div className="post">
            <div className="post__content">
                <h2>{ id }. { title }</h2>
                <p>{ description }</p>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default PostListItem
