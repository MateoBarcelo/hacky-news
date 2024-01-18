export const getTopStories = async (page, limit) => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const data = await response.json()

    const startIndex = (page-1) * limit
    const endIndex = startIndex + limit
    const ids = data.slice(startIndex, endIndex)

    return ids
}

export const getStoryInfo = async (id) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    return await response.json()
}