import { useState, useEffect } from 'react'
import { getStoryInfo } from '../services/hacker-api'
import parse from 'html-react-parser'

function Comment({id}) {
    const [comment, setComment] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchComment() {
            setLoading(true)
            const commentInfo = await getStoryInfo(id)
            setComment(commentInfo)
            setLoading(false)
        } 
        fetchComment()
    }, [])

    return (
        <div className="px-6">
            {loading 
            ? <div className="flex space-x-2 w-screen">
                    <div className="flex items-top w-full space-x-2 my-4">
                        <div className='size-4 bg-white bg-opacity-25 animate-pulse'></div>     
                        <div className="w-1/2 flex flex-col space-y-2 ">                 
                            <div className="bg-opacity-25 rounded-sm w-full h-4 bg-white animate-pulse">
                            </div>
                            <div className="bg-white px-12 bg-opacity-15 animate-pulse h-4 w-full"></div>
                        </div>
                    </div>
                </div> 
            : <details open className="flex space-x-2 text-white text-opacity-90">
                    <summary className='flex items-center space-x-2'>
                        <p className="p-1 text-sm"><a href={`https://news.ycombinator.com/vote?id=${comment.id}&how=up&goto=item%3Fid%3D${comment.parent}`}>▲</a></p>  
                        <p className="text-opacity-50 text-white text-sm">{comment.by}</p>
                        <p className="text-opacity-50 text-white text-sm">{`parent | next`}</p>                        
                    </summary>  
                <div className="flex-col items-top justify-center">
                    
                    <div className="w-auto">                 
                        <p className="text-sm px-0 md:px-12">{comment.text ? parse(comment.text) : ''}</p>
                    </div> 
                    <div>
                        {comment.kids && comment.kids.map((id, index) => {
                            return <Comment key={index} id={id} />
                        }
                        )}
                    </div>
                </div>
            </details>
            }
        </div>
    )
}

export default function CommentsList({commentsIds}) {
    return (
        <>
            {commentsIds?.map((id) => {
                return <Comment id={id} />
            })}
        </>
    )
}