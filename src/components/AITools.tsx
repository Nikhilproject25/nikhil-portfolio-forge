
const aiTools = [
  { name: 'ChatGPT', company: 'OpenAI', type: 'Conversational AI' },
  { name: 'Claude', company: 'Anthropic', type: 'AI Assistant' },
  { name: 'Gemini', company: 'Google AI', type: 'Multimodal AI' },
  { name: 'Mistral', company: 'Mistral AI', type: 'Language Model' },
  { name: 'Perplexity AI', company: 'Perplexity', type: 'Search AI' },
  { name: 'Koda', company: 'Koda AI', type: 'Code Assistant' },
  { name: 'Lovable', company: 'Lovable', type: 'Web Development' },
  { name: '21st.dev', company: '21st Century', type: 'AI Notebooks' },
];

const specialties = [
  'Multi-agent orchestration',
  'Prompt Engineering',
  'API Integration',
  'AI Workflow Automation',
  'Model Fine-tuning',
  'AI-powered Development'
];

export const AITools = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-8">AI & Generative Tools Stack</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">AI Platforms</h3>
          <div className="grid sm:grid-cols-2 gap-4">
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
        
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">AI Specialties</h3>
          <div className="space-y-3">
            {specialties.map((specialty, index) => (
              <div 
                key={specialty}
                className="bg-gray-800 border-l-4 border-green-500 p-4 rounded-r-lg hover:bg-gray-750 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-green-300 font-medium">{specialty}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-3">AI Integration Expertise</h4>
            <p className="text-gray-300">
              Extensive experience integrating AI models and APIs into production systems, 
              building multi-agent workflows, and leveraging generative AI for automation 
              and enhanced user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
