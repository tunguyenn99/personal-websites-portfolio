import json
import urllib.request
import urllib.error
import concurrent.futures
import time

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
    readme = fetch_readme(name, default_branch).lower()
    
    content_to_check = name.lower() + " " + desc.lower() + " " + readme
    
    # Classification logic
    tags = set()
    if any(x in content_to_check for x in ['dbt', 'dagster', 'airflow', 'trino', 'mage', 'iceberg', 'snowflake', 'elt', 'kestra', 'n8n', 'airbyte']):
        tags.add('Analytics Engineering')
    if any(x in content_to_check for x in ['power bi', 'dashboard', 'metabase', 'pbi', 'bi ', 'business intelligence']):
        tags.add('Business Intelligence')
    if any(x in content_to_check for x in ['kafka', 'flink', 'streaming', 'spark']):
        tags.add('Data Engineering')
    if any(x in content_to_check for x in ['analytics', 'analysis', 'cohort', 'machine learning', 'ml', 'faker']):
        tags.add('Data Analytics')
    if any(x in content_to_check for x in ['docker', 'kubernetes', 'k8s', 'wsl', 'ubuntu', 'linux', 'aws']):
        tags.add('System & DevOps')
    
    if not tags:
        tags.add('Software Engineering & Others')
        
    return {
        'id': repo['id'],
        'title': name,
        'description': desc,
        'url': repo['html_url'],
        'language': repo.get('language') or 'N/A',
        'stars': repo.get('stargazers_count', 0),
        'forks': repo.get('forks_count', 0),
        'tags': list(tags)
    }

print("Fetching and analyzing readmes...")
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    results = list(executor.map(process_repo, items))

# Sort by stars descending
results.sort(key=lambda x: x['stars'], reverse=True)

with open('/home/tunguyenn99/my-project/personal-websites-portfolio/src/data/projects.json', 'w') as f:
    json.dump(results, f, indent=2)

print("Done. Saved to src/data/projects.json")
