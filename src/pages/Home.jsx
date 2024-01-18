import useNews from "../hooks/useNews"
import { fetchNews } from "../hooks/useNews"
import { useEffect, useState } from "react"
import {NewsList, NewsSkeleton} from "../components/NewsList"
export default function Home() {

    const {news, loading, setNews} = useNews()
    const [newLoading, setNewLoading] = useState(false)
    let index = 0

    const handleOnLoad = () => {
        index += 1
        setNewLoading(true)
        fetchNews(index*10, (index + 1) * 10).then((news) => {
            setNews((prevNews) => [...prevNews, ...news])
            setNewLoading(false)
            document.scrollingElement.scrollTop = document.body.scrollHeight
        })
    }

    useEffect(() => {   
        document.title = "Hacky News"
    }, [])

    return (
        <main className="flex flex-col justify-center items-center space-y-6">
            {loading ? <NewsSkeleton /> : <NewsList news={news} />}
            {newLoading ? <NewsSkeleton /> : <button onClick={handleOnLoad} className="border border-white py-2 px-6 text-white text-lg bg-transparent">Load more</button>}
        </main>
    )
}