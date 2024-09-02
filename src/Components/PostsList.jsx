import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPost } from "../Redux/AsyncPost/PostActions"

function PostsList() {
    const dispatch = useDispatch()
    const { loading, error, data } = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])
    if (loading) return <p>loading....</p>
    return <>
        <p>posts list</p>
        {
            loading ? <p>loading....</p> : error ? <p>{error}</p> :
                <div>
                    {
                        data.map(item =>
                            <p key={item.id}>{item?.title}</p>
                        )
                    }
                </div>
        }
    </>
}
export default PostsList
