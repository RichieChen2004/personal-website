
export default function BlogContainer(
    {
        title,
        summary,
        date,
    }: {
        title: string;
        summary: string;
        date: string;
    } 
) 
{

    return (
        <div>
            <div className="text-white p-4 border border-gray-700 rounded-lg mb-6 hover:bg-gray-800 transition duration-300">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-300">{summary}</p>
            </div>
        </div>
    )
}
