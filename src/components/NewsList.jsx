export function NewsList({news}) {
    return <section> {news.map((hackNew, index) => {
                return <div key={index+1} className="flex space-x-2 text-white text-opacity-90">
                    <div className="text-opacity-50 text-lg">
                        {index+1}.
                    </div>
                    <div className="flex items-top justify-center">
                        <p className="p-1 text-sm"><a href={`https://news.ycombinator.com/vote?id=${hackNew.id}&how=up&goto=news`} target="_blank">▲</a></p>     
                        <div>                 
                            <a href={`${hackNew.url}`} target="_blank"><p className="text-xl">{hackNew.title}</p></a>
                            <p className="text-opacity-50 text-white text-sm">
                                {`${hackNew.score} points by ${hackNew.by} | hide | `}
                                <a href={`/item?id=${hackNew.id}`} className="hover:underline">{`${hackNew.descendants} comments`}</a>
                            </p>
                        </div> 
                    </div>
                </div>
    })}</section>
}

export function NewsSkeleton() {
    
    function Skelly() {
            return <div className="flex items-top w-screen justify-center animate-pulse">  
                    <div className="space-y-2 w-[54%]">   
                        <div className="bg-opacity-25 rounded-sm size-4 text-lg bg-white animate-pulse">
                    </div>              
                        <div className="bg-white bg-opacity-25 animate-pulse h-4 w-full"></div>
                        <div className="bg-white bg-opacity-15 animate-pulse h-2 w-40"></div>
                    </div> 
                </div>
        
            
    }

    return (
        <>
            <Skelly></Skelly>
            <Skelly></Skelly>
            <Skelly></Skelly>
            <Skelly></Skelly>
            <Skelly></Skelly>
            <Skelly></Skelly>
            <Skelly></Skelly>
            <Skelly></Skelly>
            <Skelly></Skelly>
            <Skelly></Skelly>
        </>
    )
}