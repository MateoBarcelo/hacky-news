import { useParams } from "wouter"
import { getStoryInfo } from "../services/hacker-api"
import { useEffect } from "react"
import { useState } from "react"
import CommentsList from "../components/CommentsList"

export default function NewDetail() {

    const id = new URLSearchParams(document.location.search).get("id")
    const [story, setStory] = useState({})
    const [loading, setLoading] = useState(false)
    const [commentsIds, setCommentsIds] = useState([])

    useEffect(() => {
        async function fetchStory() {
            setLoading(true)
            const storyInfo = await getStoryInfo(id)
            document.title = storyInfo.title + " | Hacky News"
            setCommentsIds(storyInfo.kids)
            setStory(storyInfo)
            setLoading(false)
        } 
        fetchStory()
    }, [])
    
    return (
        <div className="p-2 md:py-6 md:px-24">

            {loading 
            ? <div className="flex space-x-2 mb-12">
                <div className="flex items-top justify-center">
                    <p className="p-1 text-sm"><a href={`https://news.ycombinator.com/vote?id=${story.id}&how=up&goto=news`} target="_blank">▲</a></p>
                    <div className="w-auto flex flex-col space-y-4">                 
                        <div className="bg-opacity-25 rounded-sm w-full h-5 text-lg bg-white animate-pulse">
                        </div>
                        <div className="bg-white bg-opacity-25 animate-pulse h-4 w-full"></div>
                        <textarea className="w-[50vw] h-32 p-2 mt-4 bg-gray-800 bg-opacity-70 text-white text-opacity-90" placeholder="Add your comment"></textarea>
                        <button className="bg-slate-500 w-36 text-[1rem] my-2 text-black">add comment</button>
                    </div> 
                </div>
            </div> 
            : <div className="flex space-x-2 text-white text-opacity-90 mb-12">
                <div className="flex items-top justify-center">
                    <p className="p-1 text-sm"><a href={`https://news.ycombinator.com/vote?id=${story.id}&how=up&goto=news`} target="_blank">▲</a></p>     
                    <div className="w-auto flex flex-col">                 
                        <a href={story.url}><p className="text-xl">{story.title}</p></a>
                        <p className="text-opacity-50 text-white text-sm">{`${story.score} points by ${story.by} | hide | ${story.descendants} comments`}</p>
                        <textarea className="w-[50vw] h-32 p-2 mt-4 bg-gray-800 bg-opacity-70 text-white text-opacity-90" placeholder="Add your comment"></textarea>
                        <button className="bg-slate-500 w-36 text-[1rem] my-2 text-black">add comment</button>
                    </div> 
                </div>
            </div>
            }
            

            <CommentsList commentsIds={commentsIds} />
        </div>
    )
}