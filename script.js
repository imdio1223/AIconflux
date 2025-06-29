// AI Tools Database
const aiToolsData = {
    education: {
        name: "Education & Learning",
        tools: [
            {
                name: "ChatGPT",
                description: "AI-powered conversational assistant for learning and research",
                pricing: "Free tier available, Plus: $20/month",
                features: ["Text generation", "Code assistance", "Research help", "Language learning"],
                url: "https://chat.openai.com",
                category: "Free & Paid"
            },
            {
                name: "Grammarly",
                description: "AI writing assistant for grammar, style, and tone",
                pricing: "Free tier available, Premium: $12/month",
                features: ["Grammar checking", "Style suggestions", "Plagiarism detection", "Writing insights"],
                url: "https://grammarly.com",
                category: "Free & Paid"
            },
            {
                name: "Duolingo",
                description: "AI-powered language learning platform",
                pricing: "Free tier available, Plus: $6.99/month",
                features: ["Personalized lessons", "Speech recognition", "Gamified learning", "Progress tracking"],
                url: "https://duolingo.com",
                category: "Free & Paid"
            },
            {
                name: "Khan Academy",
                description: "Free educational content with AI-powered recommendations",
                pricing: "Completely Free",
                features: ["Video lessons", "Practice exercises", "Progress tracking", "Personalized learning"],
                url: "https://khanacademy.org",
                category: "Free"
            },
            {
                name: "Coursera",
                description: "Online courses with AI-powered learning paths",
                pricing: "Free courses available, Specializations: $39-79/month",
                features: ["University courses", "Certificates", "AI recommendations", "Peer learning"],
                url: "https://coursera.org",
                category: "Free & Paid"
            },
            {
                name: "Notion AI",
                description: "AI-powered workspace for notes, docs, and collaboration",
                pricing: "Free tier available, AI add-on: $8/month",
                features: ["Note taking", "Document creation", "Task management", "AI writing assistance"],
                url: "https://notion.so",
                category: "Free & Paid"
            }
        ]
    },
    content: {
        name: "Content Creation",
        tools: [
            {
                name: "Jasper",
                description: "AI content creation platform for marketing and writing",
                pricing: "Creator: $39/month, Teams: $99/month",
                features: ["Blog writing", "Social media posts", "Email campaigns", "SEO optimization"],
                url: "https://jasper.ai",
                category: "Paid"
            },
            {
                name: "Canva",
                description: "AI-powered design platform with templates and tools",
                pricing: "Free tier available, Pro: $12.99/month",
                features: ["Graphic design", "Video editing", "AI image generation", "Brand kits"],
                url: "https://canva.com",
                category: "Free & Paid"
            },
            {
                name: "Midjourney",
                description: "AI art generation from text descriptions",
                pricing: "Basic: $10/month, Standard: $30/month",
                features: ["Image generation", "Art styles", "High resolution", "Commercial use"],
                url: "https://midjourney.com",
                category: "Paid"
            },
            {
                name: "DALL-E 2",
                description: "OpenAI's AI image generation system",
                pricing: "$0.02 per image",
                features: ["Photo-realistic images", "Artistic styles", "Variations", "Editing"],
                url: "https://openai.com/dall-e-2",
                category: "Paid"
            },
            {
                name: "Copy.ai",
                description: "AI copywriting tool for marketing content",
                pricing: "Free tier available, Pro: $36/month",
                features: ["Marketing copy", "Product descriptions", "Social media", "Email sequences"],
                url: "https://copy.ai",
                category: "Free & Paid"
            },
            {
                name: "Lumen5",
                description: "AI video creation from text content",
                pricing: "Free tier available, Premium: $19/month",
                features: ["Video creation", "Text-to-video", "Templates", "Branding"],
                url: "https://lumen5.com",
                category: "Free & Paid"
            }
        ]
    },
    business: {
        name: "Business & Productivity",
        tools: [
            {
                name: "Notion",
                description: "All-in-one workspace for notes, docs, and collaboration",
                pricing: "Free tier available, Personal Pro: $4/month",
                features: ["Note taking", "Project management", "Databases", "Team collaboration"],
                url: "https://notion.so",
                category: "Free & Paid"
            },
            {
                name: "Slack",
                description: "AI-enhanced team communication platform",
                pricing: "Free tier available, Pro: $7.25/month",
                features: ["Team chat", "File sharing", "Integrations", "AI summaries"],
                url: "https://slack.com",
                category: "Free & Paid"
            },
            {
                name: "Zapier",
                description: "AI-powered automation between apps",
                pricing: "Free tier available, Starter: $19.99/month",
                features: ["Workflow automation", "App integrations", "AI triggers", "Custom actions"],
                url: "https://zapier.com",
                category: "Free & Paid"
            },
            {
                name: "Calendly",
                description: "AI scheduling assistant for meetings",
                pricing: "Free tier available, Professional: $8/month",
                features: ["Meeting scheduling", "Calendar integration", "AI suggestions", "Analytics"],
                url: "https://calendly.com",
                category: "Free & Paid"
            },
            {
                name: "Trello",
                description: "AI-powered project management with boards",
                pricing: "Free tier available, Standard: $5/month",
                features: ["Task management", "Team collaboration", "AI automation", "Templates"],
                url: "https://trello.com",
                category: "Free & Paid"
            },
            {
                name: "Asana",
                description: "Work management platform with AI insights",
                pricing: "Free tier available, Premium: $10.99/month",
                features: ["Project planning", "Task tracking", "AI recommendations", "Reporting"],
                url: "https://asana.com",
                category: "Free & Paid"
            }
        ]
    },
    development: {
        name: "Development & Programming",
        tools: [
            {
                name: "GitHub Copilot",
                description: "AI pair programmer for code completion",
                pricing: "Individual: $10/month, Business: $19/month",
                features: ["Code completion", "Function suggestions", "Documentation", "Multi-language support"],
                url: "https://github.com/features/copilot",
                category: "Paid"
            },
            {
                name: "Replit",
                description: "AI-powered online IDE and coding platform",
                pricing: "Free tier available, Hacker: $7/month",
                features: ["Online IDE", "AI code assistance", "Deployment", "Collaboration"],
                url: "https://replit.com",
                category: "Free & Paid"
            },
            {
                name: "Tabnine",
                description: "AI code completion for developers",
                pricing: "Free tier available, Pro: $12/month",
                features: ["Code completion", "Full-line suggestions", "IDE integration", "Team features"],
                url: "https://tabnine.com",
                category: "Free & Paid"
            },
            {
                name: "CodeWhisperer",
                description: "Amazon's AI code generator",
                pricing: "Free for individual use",
                features: ["Code generation", "Security scanning", "IDE integration", "AWS integration"],
                url: "https://aws.amazon.com/codewhisperer",
                category: "Free"
            },
            {
                name: "Cursor",
                description: "AI-first code editor built on VS Code",
                pricing: "Free tier available, Pro: $20/month",
                features: ["AI chat", "Code generation", "Bug fixing", "Documentation"],
                url: "https://cursor.sh",
                category: "Free & Paid"
            },
            {
                name: "Codeium",
                description: "Free AI code completion and chat",
                pricing: "Completely Free",
                features: ["Code completion", "AI chat", "Multi-language", "IDE support"],
                url: "https://codeium.com",
                category: "Free"
            }
        ]
    },
    design: {
        name: "Design & Creative",
        tools: [
            {
                name: "Figma",
                description: "AI-enhanced design and prototyping tool",
                pricing: "Free tier available, Professional: $12/month",
                features: ["UI/UX design", "Prototyping", "Collaboration", "AI plugins"],
                url: "https://figma.com",
                category: "Free & Paid"
            },
            {
                name: "Adobe Firefly",
                description: "AI-powered creative tools from Adobe",
                pricing: "Included with Creative Cloud ($52.99/month)",
                features: ["Image generation", "Text effects", "Vector graphics", "3D creation"],
                url: "https://adobe.com/firefly",
                category: "Paid"
            },
            {
                name: "Remove.bg",
                description: "AI background removal tool",
                pricing: "Free tier available, Pro: $9.99/month",
                features: ["Background removal", "Object removal", "Batch processing", "High resolution"],
                url: "https://remove.bg",
                category: "Free & Paid"
            },
            {
                name: "Uizard",
                description: "AI-powered UI design and prototyping",
                pricing: "Free tier available, Pro: $12/month",
                features: ["UI design", "Prototyping", "AI generation", "Collaboration"],
                url: "https://uizard.io",
                category: "Free & Paid"
            },
            {
                name: "Looka",
                description: "AI logo maker and brand identity platform",
                pricing: "Free tier available, Premium: $20/month",
                features: ["Logo design", "Brand identity", "Business cards", "Social media kits"],
                url: "https://looka.com",
                category: "Free & Paid"
            },
            {
                name: "Runway",
                description: "AI video editing and generation platform",
                pricing: "Free tier available, Pro: $15/month",
                features: ["Video editing", "AI generation", "Motion graphics", "Collaboration"],
                url: "https://runwayml.com",
                category: "Free & Paid"
            }
        ]
    },
    data: {
        name: "Data & Analytics",
        tools: [
            {
                name: "Tableau",
                description: "AI-powered data visualization and analytics",
                pricing: "Creator: $70/month, Explorer: $42/month",
                features: ["Data visualization", "Business intelligence", "AI insights", "Collaboration"],
                url: "https://tableau.com",
                category: "Paid"
            },
            {
                name: "Power BI",
                description: "Microsoft's AI business analytics platform",
                pricing: "Free tier available, Pro: $9.99/month",
                features: ["Data visualization", "AI insights", "Excel integration", "Real-time dashboards"],
                url: "https://powerbi.microsoft.com",
                category: "Free & Paid"
            },
            {
                name: "Google Analytics",
                description: "AI-powered web analytics platform",
                pricing: "Free tier available, 360: Custom pricing",
                features: ["Web analytics", "AI insights", "Conversion tracking", "Audience analysis"],
                url: "https://analytics.google.com",
                category: "Free & Paid"
            },
            {
                name: "Mixpanel",
                description: "AI product analytics for user behavior",
                pricing: "Free tier available, Growth: $25/month",
                features: ["User analytics", "Funnel analysis", "A/B testing", "AI insights"],
                url: "https://mixpanel.com",
                category: "Free & Paid"
            },
            {
                name: "Amplitude",
                description: "AI-powered product analytics platform",
                pricing: "Free tier available, Growth: Custom pricing",
                features: ["Product analytics", "User behavior", "AI insights", "Cohort analysis"],
                url: "https://amplitude.com",
                category: "Free & Paid"
            },
            {
                name: "Hotjar",
                description: "AI-powered user behavior analytics",
                pricing: "Free tier available, Plus: $32/month",
                features: ["Heatmaps", "Session recordings", "AI insights", "Feedback tools"],
                url: "https://hotjar.com",
                category: "Free & Paid"
            }
        ]
    }
};

// Create tools modal
function createToolsModal() {
    const modal = document.createElement('div');
    modal.className = 'tools-modal';
    modal.innerHTML = `
        <div class="tools-modal-overlay"></div>
        <div class="tools-modal-content">
            <div class="tools-modal-header">
                <h2 id="modal-title">AI Tools</h2>
                <button class="tools-modal-close">&times;</button>
            </div>
            <div class="tools-modal-body">
                <div class="tools-filters">
                    <button class="filter-btn active" data-filter="all">All Tools</button>
                    <button class="filter-btn" data-filter="free">Free</button>
                    <button class="filter-btn" data-filter="paid">Paid</button>
                    <button class="filter-btn" data-filter="freepaid">Free & Paid</button>
                </div>
                <div class="tools-grid" id="tools-grid"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.tools-modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.querySelector('.tools-modal-overlay').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    return modal;
}

// Display tools for a specific sector
function displayTools(sectorKey) {
    const sectorData = aiToolsData[sectorKey];
    if (!sectorData) return;
    
    const modal = document.querySelector('.tools-modal') || createToolsModal();
    const modalTitle = modal.querySelector('#modal-title');
    const toolsGrid = modal.querySelector('#tools-grid');
    
    modalTitle.textContent = sectorData.name + ' AI Tools';
    
    // Render all tools initially
    renderTools(sectorData.tools, toolsGrid);
    
    // Show modal
    modal.classList.add('active');
    
    // Filter functionality
    const filterBtns = modal.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            let filteredTools = sectorData.tools;
            
            if (filter === 'free') {
                filteredTools = sectorData.tools.filter(tool => tool.category === 'Free');
            } else if (filter === 'paid') {
                filteredTools = sectorData.tools.filter(tool => tool.category === 'Paid');
            } else if (filter === 'freepaid') {
                filteredTools = sectorData.tools.filter(tool => tool.category === 'Free & Paid');
            }
            
            renderTools(filteredTools, toolsGrid);
        });
    });
}

// Render tools in the grid
function renderTools(tools, container) {
    container.innerHTML = tools.map(tool => `
        <div class="tool-card">
            <div class="tool-header">
                <h3>${tool.name}</h3>
                <span class="tool-category ${tool.category.toLowerCase().replace(' & ', '-')}">${tool.category}</span>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-pricing">
                <strong>Pricing:</strong> ${tool.pricing}
            </div>
            <div class="tool-features">
                <strong>Features:</strong>
                <ul>
                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="tool-actions">
                <a href="${tool.url}" target="_blank" class="btn btn-primary">Visit Tool</a>
                <button class="btn btn-outline tool-details-btn">Learn More</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners for tool detail buttons
    container.querySelectorAll('.tool-details-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showToolDetails(tools[index]);
        });
    });
}

// Show detailed tool information
function showToolDetails(tool) {
    const detailModal = document.createElement('div');
    detailModal.className = 'tool-detail-modal';
    detailModal.innerHTML = `
        <div class="tool-detail-overlay"></div>
        <div class="tool-detail-content">
            <div class="tool-detail-header">
                <h2>${tool.name}</h2>
                <button class="tool-detail-close">&times;</button>
            </div>
            <div class="tool-detail-body">
                <div class="tool-detail-section">
                    <h3>Description</h3>
                    <p>${tool.description}</p>
                </div>
                <div class="tool-detail-section">
                    <h3>Pricing</h3>
                    <p>${tool.pricing}</p>
                </div>
                <div class="tool-detail-section">
                    <h3>Key Features</h3>
                    <ul>
                        ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="tool-detail-actions">
                    <a href="${tool.url}" target="_blank" class="btn btn-primary">Visit Website</a>
                    <button class="btn btn-outline tool-detail-close-btn">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(detailModal);
    detailModal.classList.add('active');
    
    // Close functionality
    detailModal.querySelector('.tool-detail-close').addEventListener('click', () => {
        detailModal.remove();
    });
    
    detailModal.querySelector('.tool-detail-close-btn').addEventListener('click', () => {
        detailModal.remove();
    });
    
    detailModal.querySelector('.tool-detail-overlay').addEventListener('click', () => {
        detailModal.remove();
    });
}

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles
    createParticles();
    
    // Add click handlers for sector explore links
    document.querySelectorAll('.sector-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectorKey = this.textContent.toLowerCase().replace('explore ', '').replace(' ', '');
            displayTools(sectorKey);
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link, .explore-button').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                if (this.classList.contains('nav-link')) {
                    this.classList.add('active');
                }
                
                // Close mobile menu if open
                if (window.innerWidth <= 1024) {
                    document.querySelector('.sidebar').classList.remove('active');
                    document.querySelector('.mobile-menu-toggle').classList.remove('active');
                }
            }
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuToggle && sidebar) {
        mobileMenuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            this.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });

    // Newsletter signup form
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const roleSelect = this.querySelector('.form-select');
            const selectedRole = roleSelect.value;
            
            if (!selectedRole) {
                showNotification('Please select your role', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you! Your personalized newsletter is on its way.', 'success');
            this.reset();
        });
    }

    // Tool logo mapping
    const toolLogos = {
        'Figma': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg',
        'Canva': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg',
        'ChatGPT': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
        'Jasper': 'https://app.jasper.ai/favicon.ico',
        'Copy.ai': 'https://assets-global.website-files.com/5f6b7190899c3a1c1a3c7c3a/5f7f7e2e7c2b2e2e2e2e2e2e_favicon-32x32.png',
        'Grammarly': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/grammarly.svg',
        'Midjourney': 'https://cdn.midjourney.com/favicon-32x32.png',
        'Cursor': 'https://www.cursor.sh/favicon.ico',
        'Replit': 'https://replit.com/public/icons/favicon-prompt-192.png',
        'Zapier': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg',
        'Google Analytics': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googleanalytics.svg',
        'Power BI': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/powerbi.svg',
        'Tableau': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tableau.svg',
        'Notion': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg',
        'Uizard': 'https://uizard.io/favicon.ico',
        'BrowserStack': 'https://www.browserstack.com/favicon.ico',
        'Mixpanel': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mixpanel.svg',
    };

    function extractToolNames(step) {
        // Find all tool names in the step by matching known tool names
        return Object.keys(toolLogos).filter(tool => step.includes(tool));
    }

    function renderWorkflowSteps(steps) {
        return `
            <ol class="workflow-steps">
                ${steps.map((step, i) => {
                    const toolNames = extractToolNames(step);
                    const logos = toolNames.map(tool => `<span class="workflow-step-logo"><img src="${toolLogos[tool]}" alt="${tool} logo" title="${tool}"></span>`).join('');
                    return `
                        <li class="workflow-step">
                            <span class="workflow-step-number">${i + 1}</span>
                            ${logos}
                            <span class="workflow-step-content">${step}</span>
                        </li>
                    `;
                }).join('')}
            </ol>
        `;
    }

    // Workflow generator form
    const workflowForm = document.querySelector('.generator-form');
    if (workflowForm) {
        const generateBtn = workflowForm.querySelector('.btn');
        const input = workflowForm.querySelector('.workflow-input');
        const resultDiv = workflowForm.parentElement.querySelector('.workflow-result');

        function getWorkflow(goal) {
            const g = goal.toLowerCase();
            // Website creation workflow
            if (g.includes('website')) {
                return [
                    `Create the UI: Use <a href="https://www.figma.com" target="_blank">Figma</a> or <a href="https://www.canva.com" target="_blank">Canva</a> to design your clothing website interface.`,
                    `Generate content: Use <a href="https://chat.openai.com" target="_blank">ChatGPT</a> to write product descriptions, about page, and FAQs.`,
                    `Develop the site: Use <a href="https://www.cursor.sh" target="_blank">Cursor</a> or <a href="https://replit.com" target="_blank">Replit</a> to build your website with code and AI assistance.`,
                    `Create product images: Use <a href="https://www.canva.com" target="_blank">Canva</a> or <a href="https://www.midjourney.com" target="_blank">Midjourney</a> for product and banner images.`,
                    `Automate workflows: Use <a href="https://zapier.com" target="_blank">Zapier</a> to automate order notifications, emails, and inventory updates.`,
                    `Launch & monitor: Use <a href="https://analytics.google.com" target="_blank">Google Analytics</a> to track visitors and optimize your site.`
                ];
            }
            // Mobile app workflow
            if (g.includes('app')) {
                return [
                    `Design the app UI: Use <a href="https://www.figma.com" target="_blank">Figma</a> or <a href="https://uizard.io" target="_blank">Uizard</a> for wireframes and mockups.`,
                    `Generate app copy: Use <a href="https://chat.openai.com" target="_blank">ChatGPT</a> for onboarding text, tooltips, and help content.`,
                    `Develop the app: Use <a href="https://www.cursor.sh" target="_blank">Cursor</a> or <a href="https://replit.com" target="_blank">Replit</a> for coding with AI help.`,
                    `Test your app: Use <a href="https://www.browserstack.com" target="_blank">BrowserStack</a> for cross-device testing.`,
                    `Automate releases: Use <a href="https://zapier.com" target="_blank">Zapier</a> for CI/CD and notifications.`,
                    `Analyze usage: Use <a href="https://analytics.google.com" target="_blank">Google Analytics</a> or <a href="https://mixpanel.com" target="_blank">Mixpanel</a>.`
                ];
            }
            // Content creation workflow
            if (g.includes('content') || g.includes('blog') || g.includes('article')) {
                return [
                    `Research topics: Use <a href="https://chat.openai.com" target="_blank">ChatGPT</a> or <a href="https://www.jasper.ai" target="_blank">Jasper</a> to brainstorm ideas and outlines.`,
                    `Write drafts: Use <a href="https://chat.openai.com" target="_blank">ChatGPT</a> or <a href="https://www.copy.ai" target="_blank">Copy.ai</a> for first drafts.`,
                    `Edit and improve: Use <a href="https://www.grammarly.com" target="_blank">Grammarly</a> for grammar and style suggestions.`,
                    `Create visuals: Use <a href="https://www.canva.com" target="_blank">Canva</a> or <a href="https://www.midjourney.com" target="_blank">Midjourney</a> for images.`,
                    `Schedule posts: Use <a href="https://zapier.com" target="_blank">Zapier</a> to automate publishing.`,
                    `Analyze performance: Use <a href="https://analytics.google.com" target="_blank">Google Analytics</a>.`
                ];
            }
            // Data analysis workflow
            if (g.includes('data') || g.includes('analytics')) {
                return [
                    `Collect data: Use <a href="https://zapier.com" target="_blank">Zapier</a> to automate data collection from various sources.`,
                    `Clean and prepare: Use <a href="https://www.powerbi.com" target="_blank">Power BI</a> or <a href="https://tableau.com" target="_blank">Tableau</a> for data cleaning and prep.`,
                    `Analyze: Use <a href="https://chat.openai.com" target="_blank">ChatGPT</a> for insights and <a href="https://tableau.com" target="_blank">Tableau</a> for visualization.`,
                    `Build dashboards: Use <a href="https://tableau.com" target="_blank">Tableau</a> or <a href="https://www.powerbi.com" target="_blank">Power BI</a>.`,
                    `Automate reports: Use <a href="https://zapier.com" target="_blank">Zapier</a> to send scheduled reports.`,
                    `Share results: Use <a href="https://www.notion.so" target="_blank">Notion</a> for sharing and collaboration.`
                ];
            }
            // Default generic workflow
            return [
                `Define your goal: <strong>${goal}</strong>`,
                'Research and select the best AI tools for your needs',
                'Set up and configure the chosen tools',
                'Integrate tools into your workflow',
                'Test and optimize the workflow',
                'Monitor results and iterate as needed'
            ];
        }

        generateBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const goal = input.value.trim();
            if (!goal) {
                showNotification('Please describe your goal', 'error');
                return;
            }

            showNotification('Generating your personalized workflow...', 'info');
            resultDiv.innerHTML = '';

            setTimeout(() => {
                const steps = getWorkflow(goal);
                resultDiv.innerHTML = `
                    <div class="workflow-card generated-workflow">
                        <div class="workflow-icon">⚡</div>
                        <h4 class="bright-heading">Your AI Workflow</h4>
                        ${renderWorkflowSteps(steps)}
                    </div>
                `;
                input.value = '';
            }, 1500);
        });
    }

    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .sector-card, .workflow-card, .community-feature, .benefit-card, .pricing-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .feature-card, .sector-card, .workflow-card, .community-feature, .benefit-card, .pricing-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Create animated background particles
function createParticles() {
    const background = document.querySelector('.animated-background');
    
    if (!background) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = particle.style.height = Math.random() * 10 + 5 + 'px';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        background.appendChild(particle);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shape, .neural-network');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Smooth reveal animations for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        if (scrollTop + windowHeight > sectionTop + sectionHeight * 0.3) {
            section.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add CSS for revealed sections
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .notification {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        const sidebar = document.querySelector('.sidebar');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (sidebar && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
        
        // Close modals
        const modals = document.querySelectorAll('.tools-modal, .tool-detail-modal');
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                modal.remove();
            }
        });
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Update active navigation
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shape, .neural-network');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 16)); // ~60fps 