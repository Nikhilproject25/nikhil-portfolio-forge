
const aiTools = [
  { name: 'ChatGPT', company: 'OpenAI', type: 'Conversational AI' },
  { name: 'GitHub Copilot', company: 'Microsoft', type: 'Pair Programming' },
  { name: 'Claude', company: 'Anthropic', type: 'AI Assistant' },
  { name: 'Gemini', company: 'Google AI', type: 'Multimodal AI' },
  { name: 'Mistral', company: 'Mistral AI', type: 'Language Model' },
  { name: 'Perplexity AI', company: 'Perplexity', type: 'Search AI' },
  { name: 'Koda', company: 'Koda AI', type: 'Code Assistant' },
  { name: 'Lovable', company: 'Lovable', type: 'Web Development' },
  { name: '21st.dev', company: '21st Century', type: 'AI Notebooks' },
];


export const AITools = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-8">AI & Generative Tools Stack</h2>
      
      <div>
        <h3 className="text-2xl font-semibold text-white mb-6">AI Platforms</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiTools.map((tool, index) => (
            <div 
              key={tool.name}
              className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-4 hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4 className="font-semibold text-white">{tool.name}</h4>
              <p className="text-sm text-purple-300">{tool.company}</p>
              <p className="text-xs text-gray-400 mt-1">{tool.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
