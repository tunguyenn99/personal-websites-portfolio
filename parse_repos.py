import json
import urllib.request
import urllib.error
import concurrent.futures
import time

# Use the existing search output
with open('/home/tunguyenn99/.gemini/antigravity/brain/acec29b2-879e-42a3-a56b-77604c7cf57a/.system_generated/steps/135/output.txt', 'r') as f:
    data = json.load(f)

items = data['items']

def fetch_readme(repo_name, default_branch):
    urls = [
        f"https://raw.githubusercontent.com/tunguyenn99/{repo_name}/{default_branch}/README.md",
        f"https://raw.githubusercontent.com/tunguyenn99/{repo_name}/main/README.md",
        f"https://raw.githubusercontent.com/tunguyenn99/{repo_name}/master/README.md",
        f"https://raw.githubusercontent.com/tunguyenn99/{repo_name}/{default_branch}/README.MD",
        f"https://raw.githubusercontent.com/tunguyenn99/{repo_name}/{default_branch}/readme.md"
    ]
    for url in urls:
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as response:
                if response.status == 200:
                    return response.read().decode('utf-8', errors='ignore')
        except Exception:
            continue
    return ""

def process_repo(repo):
    name = repo.get('name', '')
    desc = repo.get('description') or ''
    default_branch = repo.get('default_branch', 'main')
    is_fork = repo.get('fork', False)
    readme = fetch_readme(name, default_branch)
    readme_lower = readme.lower()
    
    content_to_check = (name + " " + desc + " " + readme_lower)
    
    tags = set()
    
    # 1. Analytics Engineering
    if any(x in content_to_check for x in ['dbt', 'dagster', 'airflow', 'trino', 'mage', 'iceberg', 'snowflake', 'elt', 'kestra', 'pipeline']):
        tags.add('Analytics Engineering')
        
    # 2. Data Analytics
    if any(x in content_to_check for x in ['analytics', 'analysis', 'cohort', 'machine learning', 'ml', 'faker', 'jupyter', 'crawl', 'scraping']):
        tags.add('Data Analytics')
        
    # 3. Business Intelligence
    if any(x in content_to_check for x in ['power bi', 'dashboard', 'metabase', 'pbi', 'bi ', 'visualization', 'business intelligence']):
        tags.add('Business Intelligence')
        
    # 4. Self-learning
    if any(x in content_to_check for x in ['i-learn', 'learn-', 'intro-to', 'foundations', 'fundamentals', 'tutorial', 're-learn', 'notes', 'docs', 'leetcode']):
        tags.add('Self-learning')
        
    # 5. Community contribution
    # We'll use specific keywords or status (like forks or specific public project names)
    if is_fork or any(x in content_to_check for x in ['community', 'contribution', 'public', 'free', 'xom data', 'shared', 'open-source']):
        tags.add('Community contribution')

    # Fallback
    if not tags:
        tags.add('Other Projects')
    
    # Extract techstack from README
    techstack = extract_techstack(readme)
        
    return {
        'id': repo['id'],
        'title': name,
        'description': desc,
        'url': repo['html_url'],
        'language': repo.get('language') or 'N/A',
        'stars': repo.get('stargazers_count', 0),
        'forks': repo.get('forks_count', 0),
        'tags': list(tags),
        'techstack': techstack
    }

def extract_techstack(readme):
    """Extract tech stack information from README"""
    if not readme:
        return []
    
    readme_lower = readme.lower()
    
    # Map of tech names to search patterns
    tech_map = {
        'Python': ['python'],
        'SQL': ['sql', 'postgres', 'mysql', 'snowflake', 't-sql', 'bigquery'],
        'Pandas': ['pandas'],
        'NumPy': ['numpy'],
        'Spark': ['spark', 'pyspark'],
        'Airflow': ['airflow'],
        'dbt': ['dbt'],
        'DBT': ['dbt'],
        'Dagster': ['dagster'],
        'Trino': ['trino', 'presto'],
        'Mage': ['mage'],
        'Docker': ['docker'],
        'Kubernetes': ['kubernetes', 'k8s'],
        'AWS': ['aws', 'amazon web services'],
        'GCP': ['gcp', 'google cloud', 'bigquery'],
        'Azure': ['azure', 'microsoft azure'],
        'Docker': ['docker'],
        'Jupyter': ['jupyter'],
        'Streamlit': ['streamlit'],
        'FastAPI': ['fastapi'],
        'Flask': ['flask'],
        'Django': ['django'],
        'React': ['react'],
        'JavaScript': ['javascript', 'node.js', 'nodejs'],
        'PowerBI': ['power bi', 'powerbi', 'pbi'],
        'Tableau': ['tableau'],
        'Metabase': ['metabase'],
        'Looker': ['looker'],
        'Elasticsearch': ['elasticsearch'],
        'MongoDB': ['mongodb'],
        'PostgreSQL': ['postgresql', 'postgres'],
        'MySQL': ['mysql'],
        'Redis': ['redis'],
        'Kafka': ['kafka'],
        'Git': ['git'],
        'GitHub': ['github'],
        'Scikit-learn': ['scikit-learn', 'sklearn'],
        'TensorFlow': ['tensorflow'],
        'PyTorch': ['pytorch'],
        'Matplotlib': ['matplotlib'],
        'Seaborn': ['seaborn'],
        'Plotly': ['plotly'],
        'Iceberg': ['iceberg', 'apache iceberg'],
        'Parquet': ['parquet'],
        'Avro': ['avro'],
        'Excel': ['excel', 'xlsxwriter'],
        'VS Code': ['vs code', 'vscode'],
    }
    
    detected_tech = set()
    
    for tech, patterns in tech_map.items():
        for pattern in patterns:
            if pattern in readme_lower:
                detected_tech.add(tech)
                break
    
    return sorted(list(detected_tech))

# Filter only public repos
public_items = [item for item in items if not item.get('private', False)]

print(f"Fetching and analyzing readmes for {len(public_items)} public repos...")
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    results = list(executor.map(process_repo, public_items))

# Sort by stars descending
results.sort(key=lambda x: x['stars'], reverse=True)

with open('/home/tunguyenn99/my-project/personal-websites-portfolio/src/data/projects.json', 'w') as f:
    json.dump(results, f, indent=2)

print("Done. Saved to src/data/projects.json")
