import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, User, Menu, X, Code, Eye, Bot, Image as ImageIcon, Type, PlusCircle, Trash2 } from 'lucide-react';

// Mock AI Content Generation
const generateContent = async (prompt) => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (prompt.includes("e-commerce product description")) {
        resolve("Introducing the new 'Aura' smartwatch. Sleek design, long-lasting battery, and all the smart features you need to stay connected. Perfect for the modern lifestyle.");
      } else if (prompt.includes("tech blog post")) {
        resolve("## The Future of AI: Trends to Watch\n\nArtificial intelligence is evolving at an unprecedented pace. From generative models to advancements in machine learning, this year is set to be a landmark for AI innovation. We'll explore the top trends you need to keep an eye on.");
      } else if (prompt.includes("portfolio introduction")) {
        resolve("A passionate and creative full-stack developer with a knack for building beautiful and functional web applications. Explore my projects to see my skills in action.");
      } else if (prompt.includes("business 'About Us'")) {
        resolve("Founded in 2024, 'Innovate Inc.' is dedicated to providing top-tier solutions for businesses looking to optimize their digital presence. Our team of experts is committed to excellence and customer satisfaction.");
      } else {
        resolve("This is some AI-generated content based on your request. Feel free to edit it further to perfectly match your needs!");
      }
    }, 1000);
  });
};

// Main App Component
export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [websiteData, setWebsiteData] = useState(null);
  const [viewMode, setViewMode] = useState('desktop'); // desktop, tablet, mobile
  const [showChatbot, setShowChatbot] = useState(false);

  const templates = [
    { id: 'ecomm1', name: 'Modern E-Commerce', category: 'E-Commerce', preview: 'https://placehold.co/400x300/1a202c/ffffff?text=E-Commerce' },
    { id: 'business1', name: 'Corporate Business', category: 'Business', preview: 'https://placehold.co/400x300/4a5568/ffffff?text=Business' },
    { id: 'blog1', name: 'Minimalist Blog', category: 'Blog', preview: 'https://placehold.co/400x300/718096/ffffff?text=Blog' },
    { id: 'portfolio1', name: 'Creative Portfolio', category: 'Portfolio', preview: 'https://placehold.co/400x300/2d3748/ffffff?text=Portfolio' },
    { id: 'ecomm2', name: 'Luxury Goods Store', category: 'E-Commerce', preview: 'https://placehold.co/400x300/1a202c/ffffff?text=Luxury+E-Comm' },
    { id: 'business2', name: 'Startup Landing Page', category: 'Business', preview: 'https://placehold.co/400x300/4a5568/ffffff?text=Startup' },
    { id: 'blog2', name: 'Travel Journal', category: 'Blog', preview: 'https://placehold.co/400x300/718096/ffffff?text=Travel+Blog' },
    { id: 'portfolio2', name: "Photographer's Gallery", category: 'Portfolio', preview: 'https://placehold.co/400x300/2d3748/ffffff?text=Photography' },
    // Add 12 more templates to reach 20
    { id: 'ecomm3', name: 'Gadget Shop', category: 'E-Commerce', preview: 'https://placehold.co/400x300/1a202c/ffffff?text=Gadgets' },
    { id: 'business3', name: 'Consulting Firm', category: 'Business', preview: 'https://placehold.co/400x300/4a5568/ffffff?text=Consulting' },
    { id: 'blog3', name: 'Food & Recipe Blog', category: 'Blog', preview: 'https://placehold.co/400x300/718096/ffffff?text=Food+Blog' },
    { id: 'portfolio3', name: 'Developer Portfolio', category: 'Portfolio', preview: 'https://placehold.co/400x300/2d3748/ffffff?text=Developer' },
    { id: 'ecomm4', name: 'Fashion Boutique', category: 'E-Commerce', preview: 'https://placehold.co/400x300/1a202c/ffffff?text=Fashion' },
    { id: 'business4', name: 'Real Estate Agency', category: 'Business', preview: 'https://placehold.co/400x300/4a5568/ffffff?text=Real+Estate' },
    { id: 'blog4', name: 'Tech News', category: 'Blog', preview: 'https://placehold.co/400x300/718096/ffffff?text=Tech+News' },
    { id: 'portfolio4', name: 'Graphic Designer', category: 'Portfolio', preview: 'https://placehold.co/400x300/2d3748/ffffff?text=Designer' },
    { id: 'ecomm5', name: 'Bookstore', category: 'E-Commerce', preview: 'https://placehold.co/400x300/1a202c/ffffff?text=Bookstore' },
    { id: 'business5', name: 'Marketing Agency', category: 'Business', preview: 'https://placehold.co/400x300/4a5568/ffffff?text=Marketing' },
    { id: 'blog5', name: 'Personal Finance', category: 'Blog', preview: 'https://placehold.co/400x300/718096/ffffff?text=Finance+Blog' },
    { id: 'portfolio5', name: 'Writer/Author', category: 'Portfolio', preview: 'https://placehold.co/400x300/2d3748/ffffff?text=Writer' },
  ];

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    // Initialize website data based on template
    setWebsiteData(generateInitialWebsiteData(template.id));
    setIsCustomizing(true);
  };

  const generateInitialWebsiteData = (templateId) => {
    // In a real app, this would be more complex, loading template structures
    const baseData = {
      header: {
        logo: "My Site",
        nav: ["Home", "About", "Contact"],
        icons: [],
      },
      sections: [
        { id: 1, type: 'hero', title: "Welcome to Your New Website", subtitle: "This is a starting point. Make it your own!", image: "https://placehold.co/1200x600/2d3748/ffffff?text=Hero+Image" },
        { id: 2, type: 'content', title: "About Us", content: "Here's some default text about your company or project. You can easily change this." },
      ]
    };

    if (templateId.includes('ecomm')) {
      baseData.header.nav = ["Shop", "New Arrivals", "Sales", "Contact"];
      baseData.header.icons = ['search', 'cart', 'profile'];
      baseData.sections.push({ id: 3, type: 'product_grid', title: "Featured Products", products: [
        { name: "Product 1", price: "$19.99", image: "https://placehold.co/300x300/4a5568/ffffff?text=Product+1" },
        { name: "Product 2", price: "$29.99", image: "https://placehold.co/300x300/4a5568/ffffff?text=Product+2" },
        { name: "Product 3", price: "$39.99", image: "https://placehold.co/300x300/4a5568/ffffff?text=Product+3" },
      ]});
    } else if (templateId.includes('blog')) {
      baseData.header.nav = ["Articles", "Categories", "About Me"];
      baseData.sections.push({ id: 3, type: 'blog_list', title: "Latest Posts", posts: [
        { title: "My First Post", excerpt: "This is the beginning of my blogging journey...", date: "2024-08-27" },
        { title: "Another Interesting Topic", excerpt: "Exploring new ideas and sharing my thoughts with the world.", date: "2024-08-26" },
      ]});
    }
    return baseData;
  };

  const handleBack = () => {
    setIsCustomizing(false);
    setSelectedTemplate(null);
    setWebsiteData(null);
  };

  if (!isCustomizing) {
    return <TemplateSelector templates={templates} onSelect={handleSelectTemplate} />;
  }

  return (
    <div className="flex h-screen font-sans bg-gray-100">
      <CustomizationPanel websiteData={websiteData} setWebsiteData={setWebsiteData} onBack={handleBack} />
      <div className="flex-1 flex flex-col">
        <PreviewToolbar viewMode={viewMode} setViewMode={setViewMode} />
        <WebsitePreview websiteData={websiteData} viewMode={viewMode} />
      </div>
      <ChatbotAssistant show={showChatbot} setShow={setShowChatbot} setWebsiteData={setWebsiteData} />
      <button onClick={() => setShowChatbot(!showChatbot)} className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 z-50">
        {showChatbot ? <X size={24} /> : <Bot size={24} />}
      </button>
    </div>
  );
}

// Template Selection Screen
const TemplateSelector = ({ templates, onSelect }) => {
  const categories = [...new Set(templates.map(t => t.category))];

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">Website Builder</h1>
        <p className="text-xl text-gray-400">Choose a template to start your journey</p>
      </div>
      {categories.map(category => (
        <div key={category} className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {templates.filter(t => t.category === category).map(template => (
              <div key={template.id} className="group cursor-pointer" onClick={() => onSelect(template)}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img src={template.preview} alt={template.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-bold">Customize</span>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-center">{template.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Customization Panel
const CustomizationPanel = ({ websiteData, setWebsiteData, onBack }) => {
    const [activeTab, setActiveTab] = useState('elements');

    const updateElement = (path, value) => {
        setWebsiteData(prevData => {
            let newData = JSON.parse(JSON.stringify(prevData)); // Deep copy
            let current = newData;
            for (let i = 0; i < path.length - 1; i++) {
                current = current[path[i]];
            }
            current[path[path.length - 1]] = value;
            return newData;
        });
    };
    
    const addSection = () => {
        setWebsiteData(prevData => {
            const newSection = {
                id: Date.now(),
                type: 'content',
                title: 'New Section',
                content: 'This is a newly added section. Customize it as you wish!'
            };
            return {
                ...prevData,
                sections: [...prevData.sections, newSection]
            };
        });
    };

    const deleteSection = (sectionId) => {
        setWebsiteData(prevData => ({
            ...prevData,
            sections: prevData.sections.filter(s => s.id !== sectionId)
        }));
    };

    return (
        <div className="w-80 bg-white shadow-md flex flex-col h-full">
            <div className="p-4 border-b flex items-center justify-between">
                <h2 className="text-xl font-bold">Customize</h2>
                <button onClick={onBack} className="text-sm text-blue-600 hover:underline">Change Template</button>
            </div>
            
            <div className="border-b">
                <nav className="flex">
                    <button onClick={() => setActiveTab('elements')} className={`flex-1 p-3 text-sm font-medium ${activeTab === 'elements' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
                        Elements
                    </button>
                    <button onClick={() => setActiveTab('global')} className={`flex-1 p-3 text-sm font-medium ${activeTab === 'global' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
                        Global Styles
                    </button>
                </nav>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {activeTab === 'elements' && (
                    <div>
                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold mb-2">Header</h3>
                            <label className="text-xs text-gray-500">Logo Text</label>
                            <input
                                type="text"
                                value={websiteData.header.logo}
                                onChange={(e) => updateElement(['header', 'logo'], e.target.value)}
                                className="w-full p-2 border rounded mt-1 text-sm"
                            />
                        </div>
                        {websiteData.sections.map((section, index) => (
                            <div key={section.id} className="mb-4 p-3 bg-gray-50 rounded-lg relative group">
                                <h3 className="font-semibold mb-2 capitalize">{section.type.replace('_', ' ')} Section</h3>
                                {Object.keys(section).map(key => {
                                    if (key === 'id' || key === 'type' || typeof section[key] === 'object') return null;
                                    return (
                                        <div key={key} className="mt-2">
                                            <label className="text-xs text-gray-500 capitalize">{key}</label>
                                            <input
                                                type="text"
                                                value={section[key]}
                                                onChange={(e) => updateElement(['sections', index, key], e.target.value)}
                                                className="w-full p-2 border rounded mt-1 text-sm"
                                            />
                                        </div>
                                    );
                                })}
                                <button onClick={() => deleteSection(section.id)} className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        ))}
                        <button onClick={addSection} className="w-full mt-4 p-2 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600">
                            <PlusCircle size={16} className="mr-2"/> Add Section
                        </button>
                    </div>
                )}
                {activeTab === 'global' && (
                    <div className="p-3 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold mb-2">Global Styles</h3>
                        <p className="text-sm text-gray-600">Global style settings (e.g., fonts, colors) would go here. (Feature in development)</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// Preview Toolbar
const PreviewToolbar = ({ viewMode, setViewMode }) => {
  return (
    <div className="bg-white p-2 shadow-md flex justify-center items-center space-x-2">
      <button onClick={() => setViewMode('desktop')} className={`p-2 rounded ${viewMode === 'desktop' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      </button>
      <button onClick={() => setViewMode('tablet')} className={`p-2 rounded ${viewMode === 'tablet' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
      </button>
      <button onClick={() => setViewMode('mobile')} className={`p-2 rounded ${viewMode === 'mobile' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
      </button>
    </div>
  );
};

// Website Preview
const WebsitePreview = ({ websiteData, viewMode }) => {
  const getWidthClass = () => {
    switch (viewMode) {
      case 'tablet': return 'w-full max-w-3xl';
      case 'mobile': return 'w-full max-w-sm';
      default: return 'w-full';
    }
  };

  const Icon = ({ name }) => {
    switch(name) {
      case 'search': return <Search size={20} />;
      case 'cart': return <ShoppingCart size={20} />;
      case 'profile': return <User size={20} />;
      default: return null;
    }
  };

  return (
    <div className="flex-1 bg-gray-200 p-4 overflow-y-auto flex justify-center">
      <div className={`bg-white shadow-lg transition-all duration-300 ${getWidthClass()}`}>
        <iframe
          srcDoc={`
            <html>
              <head>
                <script src="https://cdn.tailwindcss.com"></script>
                <style>
                  body { font-family: sans-serif; }
                </style>
              </head>
              <body>
                <header class="shadow-md">
                  <div class="container mx-auto p-4 flex justify-between items-center">
                    <h1 class="text-2xl font-bold">${websiteData.header.logo}</h1>
                    <nav class="hidden md:flex space-x-6 items-center">
                      ${websiteData.header.nav.map(item => `<a href="#" class="text-gray-600 hover:text-black">${item}</a>`).join('')}
                    </nav>
                    <div class="flex items-center space-x-4">
                      ${websiteData.header.icons.map(icon => `<div><!-- ${icon} icon --></div>`).join('')}
                      <button class="md:hidden"><!-- menu icon --></button>
                    </div>
                  </div>
                </header>
                <main>
                  ${websiteData.sections.map(section => {
                    if (section.type === 'hero') {
                      return `<section class="relative text-white">
                        <img src="${section.image}" alt="Hero" class="w-full h-96 object-cover"/>
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
                          <h2 class="text-4xl font-bold mb-2">${section.title}</h2>
                          <p class="text-lg">${section.subtitle}</p>
                        </div>
                      </section>`;
                    }
                    if (section.type === 'content') {
                      return `<section class="container mx-auto p-8">
                        <h2 class="text-3xl font-bold mb-4">${section.title}</h2>
                        <p class="text-gray-700">${section.content}</p>
                      </section>`;
                    }
                    if (section.type === 'product_grid' && section.products) {
                      return `<section class="container mx-auto p-8">
                        <h2 class="text-3xl font-bold mb-6 text-center">${section.title}</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                          ${section.products.map(p => `
                            <div class="border rounded-lg overflow-hidden shadow-sm">
                              <img src="${p.image}" alt="${p.name}" class="w-full h-64 object-cover"/>
                              <div class="p-4">
                                <h3 class="font-semibold text-lg">${p.name}</h3>
                                <p class="text-gray-600">${p.price}</p>
                              </div>
                            </div>
                          `).join('')}
                        </div>
                      </section>`;
                    }
                    if (section.type === 'blog_list' && section.posts) {
                        return `<section class="container mx-auto p-8">
                          <h2 class="text-3xl font-bold mb-6">${section.title}</h2>
                          <div class="space-y-8">
                            ${section.posts.map(p => `
                              <div class="border-b pb-4">
                                <p class="text-sm text-gray-500">${p.date}</p>
                                <h3 class="text-2xl font-semibold hover:text-blue-600 cursor-pointer">${p.title}</h3>
                                <p class="text-gray-700 mt-2">${p.excerpt}</p>
                              </div>
                            `).join('')}
                          </div>
                        </section>`;
                      }
                    return '';
                  }).join('')}
                </main>
              </body>
            </html>
          `}
          title="Website Preview"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
};

// AI Chatbot Assistant
const ChatbotAssistant = ({ show, setShow, setWebsiteData }) => {
    const [messages, setMessages] = useState([{ text: "Hi! How can I help you generate content for your website?", sender: 'bot' }]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const aiResponse = await generateContent(input);
        const botMessage = { text: aiResponse, sender: 'bot', isContent: true };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
    };

    const addContentToPage = (content) => {
        setWebsiteData(prevData => {
            const newSection = {
                id: Date.now(),
                type: 'content',
                title: 'AI Generated Content',
                content: content.replace(/## (.*)/g, '$1') // Basic markdown removal
            };
            return {
                ...prevData,
                sections: [...prevData.sections, newSection]
            };
        });
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-20 right-4 w-96 h-[60vh] bg-white rounded-lg shadow-2xl flex flex-col z-40">
            <div className="p-4 bg-blue-600 text-white rounded-t-lg">
                <h3 className="font-bold text-lg">AI Content Assistant</h3>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                            <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                            {msg.isContent && (
                                <button onClick={() => addContentToPage(msg.text)} className="mt-2 text-xs bg-white text-blue-600 font-semibold py-1 px-2 rounded-md hover:bg-gray-100">
                                    Add to Page
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                {isLoading && (
                     <div className="flex justify-start">
                        <div className="p-3 rounded-lg bg-gray-200">
                           <div className="flex items-center space-x-1">
                                <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t">
                <div className="flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="e.g., 'Write a tech blog post'"
                        className="flex-1 p-2 border rounded-l-md text-sm"
                        disabled={isLoading}
                    />
                    <button onClick={handleSend} disabled={isLoading} className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 disabled:bg-blue-300">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
