import { useEffect, useState } from "react";
import { getTopStories, getStoryInfo } from "../services/hacker-api";
import newsData from '../mocks/news.json'

export async function fetchNews(start, end) {
    const topStories = await getTopStories(start, end)
    const news = await Promise.all(topStories.map(getStoryInfo))

    return news
}

export default function useNews() {

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchNews() {
            setLoading(true)
            const topStories = await getTopStories(1, 10)
            const news = await Promise.all(topStories.map(getStoryInfo))
            setNews(news)
            setLoading(false)
        } 
        fetchNews()
    }, [])

    return {news, loading, setNews}
}