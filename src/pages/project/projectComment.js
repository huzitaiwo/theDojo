import { useState } from "react"
import { timestamp } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"

export default function projectComment() {
  const [newComment, setNewComment ] = useState('')
  const { user } = useAuthContext()

  const handleSubmit =  async (e) => {
    e.preventDefault()

    // const comm
  }

  return (
    <div onSubmit={handleSubmit} className="project-comments">
      <h4>Project comments</h4>
      <form className="add-comment">
        <label>
          <span>Add new comment</span>
          <textarea
            required
            onChange={e => {setNewComment(e.target.value)}}
            value={newComment}          
          ></textarea>
          <button className="btn">Add comment</button>
        </label>
      </form>
    </div>
  )
}
