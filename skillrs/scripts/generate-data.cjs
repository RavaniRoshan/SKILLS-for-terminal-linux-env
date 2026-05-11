const fs = require('fs');
const path = require('path');

const ROOT = '/home/shiva/projects/SKILLS-for-terminal-linux-env';
const SKILLRS_SRC = path.join(ROOT, 'skillrs/src/data');

function parseYAML(yamlStr) {
  const result = {};
  let currentKey = null;
  let currentValue = '';
  const lines = yamlStr.split('\n');
  for (const line of lines) {
    if (/^\w+:/.test(line)) {
      if (currentKey && currentValue) {
        result[currentKey] = currentValue.trim().replace(/^["']|["']$/g, '').replace(/\n\s+/g, ' ');
      }
      const idx = line.indexOf(':');
      currentKey = line.slice(0, idx).trim();
      currentValue = line.slice(idx + 1).trim();
      if (currentValue.startsWith('"') || currentValue.startsWith("'")) {
        const q = currentValue[0];
        const endIdx = currentValue.lastIndexOf(q);
        if (endIdx > 0) {
          currentValue = currentValue.slice(1, endIdx);
        }
      }
    } else if (currentKey && line.trim()) {
      currentValue += ' ' + line.trim().replace(/^["']|["']$/g, '');
    }
  }
  if (currentKey && currentValue) {
    result[currentKey] = currentValue.trim();
  }
  return result;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
  if (!match) {
    const titleMatch = content.match(/^#\s+(.+)/m);
    return { name: titleMatch ? titleMatch[1].trim() : '', description: '', body: content };
  }
  const frontmatter = parseYAML(match[1]);
  return { name: frontmatter.name || '', description: frontmatter.description || '', body: match[2] };
}

const iconMap = {
  'agents-sdk': 'Bot',
  'ai-context-engineering': 'BrainCircuit',
  'ai-evaluation-frameworks': 'BarChart3',
  'find-skills': 'Search',
  'build-web-apps-ai-agent': 'Cloud',
  'caveman': 'Zap',
  'build-web-apps-react': 'Code2',
  'build-web-apps-stripe-best-practices': 'CreditCard',
  'build-web-apps-supabase-postgres-best-practices': 'Database',
  'build-web-apps-web-design-guidelines': 'Paintbrush',
  'build-web-apps-aspnet-core': 'Globe',
  'build-web-apps-mcp-server': 'Server',
  'deployment-vercel': 'Rocket',
  'deployment-cloudflare': 'CloudSun',
  'operations-debugging-root-cause': 'Bug',
  'operations-execution-planning': 'ListChecks',
  'operations-qa-verification': 'TestTube',
  'thinking-constraint-analysis': 'Cog',
  'thinking-systems-decomposition': 'Layers',
  'frontend-skill': 'Palette',
  'frontend-interaction-psychology': 'HeartHandshake',
  'frontend-perceived-performance': 'Gauge',
  'gsap': 'Play',
  'shadcn': 'Component',
  'uiux-pro-max': 'Sparkles',
  'hyperframes': 'Video',
  'hyperframes-cli': 'Terminal',
  'hyperframes-registry': 'Package',
  'claude-design-hyperframes': 'Clapperboard',
  'website-to-hyperframes': 'Camera',
  'crafting-effective-readmes': 'FileText',
  'pdf-knowledge-packaging': 'FileOutput',
  'pdf-structured-reporting': 'FileSpreadsheet',
  'presentation-narrative-design': 'Presentation',
  'research-paper-distillation': 'ScrollText',
  'research-synthesis-frameworks': 'GitBranch',
  'writing-technical-specs': 'BookOpen',
};

const categoryMap = {
  'agents-sdk': 'AI & Agents',
  'ai-context-engineering': 'AI & Agents',
  'ai-evaluation-frameworks': 'AI & Agents',
  'find-skills': 'AI & Agents',
  'build-web-apps-ai-agent': 'AI & Agents',
  'caveman': 'AI & Agents',
  'build-web-apps-react': 'Web Development',
  'build-web-apps-stripe-best-practices': 'Web Development',
  'build-web-apps-supabase-postgres-best-practices': 'Web Development',
  'build-web-apps-web-design-guidelines': 'Web Development',
  'build-web-apps-aspnet-core': 'Web Development',
  'build-web-apps-mcp-server': 'Web Development',
  'deployment-vercel': 'Web Development',
  'deployment-cloudflare': 'Web Development',
  'operations-debugging-root-cause': 'Systems & Debugging',
  'operations-execution-planning': 'Systems & Debugging',
  'operations-qa-verification': 'Systems & Debugging',
  'thinking-constraint-analysis': 'Systems & Debugging',
  'thinking-systems-decomposition': 'Systems & Debugging',
  'frontend-skill': 'Frontend & Design',
  'frontend-interaction-psychology': 'Frontend & Design',
  'frontend-perceived-performance': 'Frontend & Design',
  'gsap': 'Frontend & Design',
  'shadcn': 'Frontend & Design',
  'uiux-pro-max': 'Frontend & Design',
  'hyperframes': 'HyperFrames',
  'hyperframes-cli': 'HyperFrames',
  'hyperframes-registry': 'HyperFrames',
  'claude-design-hyperframes': 'HyperFrames',
  'website-to-hyperframes': 'HyperFrames',
  'crafting-effective-readmes': 'Content & Writing',
  'pdf-knowledge-packaging': 'Content & Writing',
  'pdf-structured-reporting': 'Content & Writing',
  'presentation-narrative-design': 'Content & Writing',
  'research-paper-distillation': 'Content & Writing',
  'research-synthesis-frameworks': 'Content & Writing',
  'writing-technical-specs': 'Content & Writing',
};

function titleize(str) {
  return str
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\b(Ai|Sdk|Api|Mcp|Ui|Ux|Pdf|Ocr|Ssl|Claude|Vercel|Cloudflare|Supabase|Postgres|Stripe|Aspnet|Gsap|Shadcn|Readme)\b/gi, m => {
      const overrides = {
        ai: 'AI', sdk: 'SDK', api: 'API', mcp: 'MCP', ui: 'UI', ux: 'UX',
        pdf: 'PDF', ocr: 'OCR', ssl: 'SSL', claude: 'Claude', vercel: 'Vercel',
        cloudflare: 'Cloudflare', supabase: 'Supabase', postgres: 'Postgres',
        stripe: 'Stripe', aspnet: 'ASP.NET', gsap: 'GSAP', shadcn: 'shadcn',
        readme: 'README'
      };
      return overrides[m.toLowerCase()] || m;
    });
}

function cleanName(raw) {
  if (!raw || raw === '>') return '';
  let name = raw.replace(/["']/g, '').trim();
  if (name.includes(':')) {
    name = name.split(':').pop().trim();
  }
  name = name.replace(/^Build Web Apps:/i, '').replace(/^Cloudflare:/i, '');
  name = titleize(name);
  return name;
}

function cleanDescription(desc, body) {
  if (desc && desc !== '>' && desc !== '|') {
    return desc.trim().replace(/^["']|["']$/g, '');
  }
  const m = body.match(/#{1,2}\s+(?:Purpose|Overview)\s*\n\n([^.]+)/);
  if (m) return m[1].trim();
  const m2 = body.match(/##?\s+(?:Purpose|Overview)\s*\n\n([^。\n]+)/);
  if (m2) return m2[1].trim();
  const m3 = body.match(/^\*\*Purpose\*\*\s*\n([^.]+)/m);
  if (m3) return m3[1].trim();
  return '';
}

const nameOverrides = {
  'build-web-apps-ai-agent': 'Build AI Agent on Cloudflare',
  'build-web-apps-mcp-server': 'Build MCP Server on Cloudflare',
  'build-web-apps-aspnet-core': 'ASP.NET Core',
  'deployment-cloudflare': 'Cloudflare Deploy',
  'deployment-vercel': 'Deploy to Vercel',
  'build-web-apps-react': 'React Best Practices',
  'build-web-apps-stripe-best-practices': 'Stripe Best Practices',
  'build-web-apps-supabase-postgres-best-practices': 'Supabase Postgres Best Practices',
  'build-web-apps-web-design-guidelines': 'Web Design Guidelines',
  'operations-debugging-root-cause': 'Systematic Debugging',
  'operations-execution-planning': 'Planning & Task Breakdown',
  'operations-qa-verification': 'QA Verification',
  'thinking-constraint-analysis': 'Constraint Analysis',
  'thinking-systems-decomposition': 'Systems Decomposition',
  'frontend-skill': 'Frontend Design',
  'frontend-interaction-psychology': 'Interaction Psychology',
  'frontend-perceived-performance': 'Perceived Performance',
  'uiux-pro-max': 'UI/UX Pro Max',
  'hyperframes-cli': 'HyperFrames CLI',
  'hyperframes-registry': 'HyperFrames Registry',
  'claude-design-hyperframes': 'Claude Design HyperFrames',
  'website-to-hyperframes': 'Website to HyperFrames',
  'hyperframes': 'HyperFrames',
  'crafting-effective-readmes': 'Crafting Effective READMEs',
  'presentation-narrative-design': 'Presentation Narrative Design',
  'writing-technical-specs': 'Writing Technical Specs',
  'ai-context-engineering': 'Context Engineering',
  'ai-evaluation-frameworks': 'AI Evaluation Frameworks',
  'research-paper-distillation': 'Research Paper Distillation',
  'research-synthesis-frameworks': 'Research Synthesis Frameworks',
  'pdf-knowledge-packaging': 'PDF Knowledge Packaging',
  'pdf-structured-reporting': 'PDF Structured Reporting',
};

function makeInstallCommand(dir) {
  const cmdMap = {
    'agents-sdk': 'npx apply agents-sdk',
    'ai-context-engineering': 'npx apply context-engineering',
    'ai-evaluation-frameworks': 'npx apply ai-eval',
    'find-skills': 'npx apply find-skills',
    'build-web-apps-ai-agent': 'npx apply build-ai-agent',
    'caveman': 'npx apply caveman',
    'build-web-apps-react': 'npx apply react-best-practices',
    'build-web-apps-stripe-best-practices': 'npx apply stripe-guide',
    'build-web-apps-supabase-postgres-best-practices': 'npx apply supabase-postgres',
    'build-web-apps-web-design-guidelines': 'npx apply web-design-guide',
    'build-web-apps-aspnet-core': 'npx apply aspnet-core',
    'build-web-apps-mcp-server': 'npx apply build-mcp-server',
    'deployment-vercel': 'npx apply deploy-vercel',
    'deployment-cloudflare': 'npx apply deploy-cloudflare',
    'operations-debugging-root-cause': 'npx apply systematic-debugging',
    'operations-execution-planning': 'npx apply task-planner',
    'operations-qa-verification': 'npx apply qa-verify',
    'thinking-constraint-analysis': 'npx apply constraint-analysis',
    'thinking-systems-decomposition': 'npx apply systems-decompose',
    'frontend-skill': 'npx apply frontend-design',
    'frontend-interaction-psychology': 'npx apply interaction-psych',
    'frontend-perceived-performance': 'npx apply perceived-perf',
    'gsap': 'npx apply gsap-animations',
    'shadcn': 'npx apply shadcn-ui',
    'uiux-pro-max': 'npx apply uiux-pro',
    'hyperframes': 'npx apply hyperframes',
    'hyperframes-cli': 'npx apply hyperframes-cli',
    'hyperframes-registry': 'npx apply hyperframes-registry',
    'claude-design-hyperframes': 'npx apply claude-hf',
    'website-to-hyperframes': 'npx apply site-to-hf',
    'crafting-effective-readmes': 'npx apply readme-craft',
    'pdf-knowledge-packaging': 'npx apply pdf-pack',
    'pdf-structured-reporting': 'npx apply pdf-report',
    'presentation-narrative-design': 'npx apply presentation-design',
    'research-paper-distillation': 'npx apply paper-distill',
    'research-synthesis-frameworks': 'npx apply research-synth',
    'writing-technical-specs': 'npx apply write-spec',
  };
  return cmdMap[dir] || `npx apply ${dir}`;
}

const dirs = fs.readdirSync(ROOT).filter(d =>
  fs.statSync(path.join(ROOT, d)).isDirectory() &&
  d !== 'docs' && d !== 'skillrs' && d !== 'notebooklm' && d !== 'firecrawl-cli-skill' && d !== '.kilo' && d !== '.git'
);

const skills = [];

dirs.forEach(dir => {
  const skillPath = path.join(ROOT, dir, 'SKILL.md');
  if (!fs.existsSync(skillPath)) {
    if (dir === 'shadcn' && fs.existsSync(path.join(ROOT, 'shadcn/ui/SKILL.md'))) {
      const skillPath2 = path.join(ROOT, 'shadcn/ui/SKILL.md');
      const buf2 = Buffer.alloc(4);
      const fd2 = fs.openSync(skillPath2, 'r');
      fs.readSync(fd2, buf2, 0, 4, 0);
      fs.closeSync(fd2);
      if (buf2[0] === 0x50 && buf2[1] === 0x4B) return;
      const content = fs.readFileSync(skillPath2, 'utf-8');
      const p = parseFrontmatter(content);
      skills.push({
        id: 'shadcn',
        name: 'shadcn/ui',
        icon: iconMap['shadcn'] || 'Package',
        category: categoryMap['shadcn'] || 'Frontend & Design',
        description: cleanDescription(p.description, p.body) || 'Manages shadcn/ui components',
        version: '2.0.0',
        stars: 5,
        installCommand: makeInstallCommand('shadcn'),
        content: p.body
      });
    }
    return;
  }
  const stat = fs.statSync(skillPath);
  if (stat.size < 100 || stat.size > 500000) return;
  const buf = Buffer.alloc(4);
  const fd = fs.openSync(skillPath, 'r');
  fs.readSync(fd, buf, 0, 4, 0);
  fs.closeSync(fd);
  if (buf[0] === 0x50 && buf[1] === 0x4B) return;

  if (!categoryMap[dir]) return;

  const content = fs.readFileSync(skillPath, 'utf-8');
  const parsed = parseFrontmatter(content);
  const displayName = nameOverrides[dir] || cleanName(parsed.name) || titleize(dir);
  const description = cleanDescription(parsed.description, parsed.body);

  skills.push({
    id: dir,
    name: displayName,
    icon: iconMap[dir] || 'FileCode',
    category: categoryMap[dir],
    description: description || '',
    version: '1.0.0',
    stars: Math.floor(Math.random() * 2) + 4,
    installCommand: makeInstallCommand(dir),
    content: parsed.body
  });
});

const categoryOrder = ['AI & Agents', 'Web Development', 'Systems & Debugging', 'Frontend & Design', 'HyperFrames', 'Content & Writing'];
skills.sort((a, b) => {
  const ci = categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
  if (ci !== 0) return ci;
  return a.name.localeCompare(b.name);
});

const output = `export const categories = ${JSON.stringify(categoryOrder, null, 2)};

export const skills = ${JSON.stringify(skills, null, 2)};
`;

fs.writeFileSync(path.join(SKILLRS_SRC, 'skills.js'), output);
console.log(`Generated ${skills.length} skills across ${categoryOrder.length} categories`);
