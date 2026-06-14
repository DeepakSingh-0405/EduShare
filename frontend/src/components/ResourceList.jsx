export default function ResourceList({ resources }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {resources.map(res => (
        <div key={res._id} className="p-6 border border-gray-800 rounded-xl hover:bg-gray-900/100 transition-colors bg-gray-950">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-bold text-purple-400">{res.title}</h4>
            <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">@{res.owner.username}</span>
          </div>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">{res.description}</p>
          <a 
            href={res.url} 
            target="_blank" 
            rel="noreferrer" 
            className="text-xs font-mono uppercase tracking-widest text-purple-600 hover:text-purple-500"
          >
            Visit Resource →
          </a>
        </div>
      ))}
    </div>
  );
}
