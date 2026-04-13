import json
import urllib.request
import urllib.error
import concurrent.futures

def fetch_github_repos(username):
    """Fetch all public repos from GitHub API"""
    repos = []
    page = 1
    per_page = 100
    
    while True:
        url = f"https://api.github.com/users/{username}/repos?per_page={per_page}&page={page}&sort=updated&direction=desc"
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/vnd.github.v3+json'
            })
            with urllib.request.urlopen(req, timeout=10) as response:
                page_data = json.loads(response.read().decode('utf-8'))
                if not page_data:
                    break
                repos.extend(page_data)
                page += 1
        except Exception as e:
            print(f"Error fetching page {page}: {e}")
            break
    
    return repos

def fetch_readme(repo_name, default_branch='main'):
    """Fetch README content from a repo"""
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

def analyze_repo(repo):
    """Analyze a single repository"""
    name = repo.get('name', '')
    desc = repo.get('description') or 'N/A'
    url = repo.get('html_url', '')
    default_branch = repo.get('default_branch', 'main')
    is_fork = repo.get('fork', False)
    is_private = repo.get('private', False)
    language = repo.get('language') or 'N/A'
    stars = repo.get('stargazers_count', 0)
    forks = repo.get('forks_count', 0)
    created_at = repo.get('created_at', '')[:10]
    updated_at = repo.get('updated_at', '')[:10]
    topics = repo.get('topics', [])
    
    readme = fetch_readme(name, default_branch)
    readme_lines = len(readme.split('\n')) if readme else 0
    
    return {
        'name': name,
        'description': desc,
        'url': url,
        'language': language,
        'stars': stars,
        'forks': forks,
        'is_fork': is_fork,
        'is_private': is_private,
        'created_at': created_at,
        'updated_at': updated_at,
        'topics': topics,
        'has_readme': bool(readme),
        'readme_lines': readme_lines,
        'readme_excerpt': readme[:500] if readme else 'No README'
    }

print("🔄 Fetching all public repos from GitHub...")
repos = fetch_github_repos('tunguyenn99')
print(f"✅ Found {len(repos)} total repos\n")

# Filter only public repos
public_repos = [r for r in repos if not r.get('private', False)]
print(f"📍 Analyzing {len(public_repos)} PUBLIC repos...\n")

# Analyze all public repos
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    results = list(executor.map(analyze_repo, public_repos))

# Sort by stars
results.sort(key=lambda x: x['stars'], reverse=True)

# Print detailed report
print("=" * 100)
print("📊 COMPREHENSIVE GITHUB REPOS ANALYSIS")
print("=" * 100)
print()

for idx, repo in enumerate(results, 1):
    print(f"{idx}. 📌 {repo['name'].upper()}")
    print(f"   Description: {repo['description']}")
    print(f"   URL: {repo['url']}")
    print(f"   📈 Stars: {repo['stars']} | Forks: {repo['forks']}")
    print(f"   🔧 Language: {repo['language']}")
    print(f"   📅 Created: {repo['created_at']} | Updated: {repo['updated_at']}")
    print(f"   🏷️  Topics: {', '.join(repo['topics']) if repo['topics'] else 'None'}")
    print(f"   📄 Has README: {'✅ Yes' if repo['has_readme'] else '❌ No'} ({repo['readme_lines']} lines)")
    if repo['is_fork']:
        print(f"   🍴 Fork: Yes")
    if repo['readme_excerpt'] and repo['has_readme']:
        excerpt = repo['readme_excerpt'].replace('\n', ' ')[:100]
        print(f"   📋 README excerpt: {excerpt}...")
    print()

# Summary statistics
print("=" * 100)
print("📈 SUMMARY STATISTICS")
print("=" * 100)
total_stars = sum(r['stars'] for r in results)
total_forks = sum(r['forks'] for r in results)
repos_with_readme = sum(1 for r in results if r['has_readme'])
fork_count = sum(1 for r in results if r['is_fork'])
languages = {}
for r in results:
    lang = r['language']
    if lang != 'N/A':
        languages[lang] = languages.get(lang, 0) + 1

print(f"\nTotal Public Repos: {len(results)}")
print(f"Total Stars: {total_stars}")
print(f"Total Forks: {total_forks}")
print(f"Repos with README: {repos_with_readme}/{len(results)} ({100*repos_with_readme//len(results)}%)")
print(f"Fork Repos: {fork_count}")
print(f"\nLanguages used:")
for lang, count in sorted(languages.items(), key=lambda x: x[1], reverse=True):
    print(f"  • {lang}: {count}")
print()

# Save detailed report as JSON
with open('/home/tunguyenn99/my-project/personal-websites-portfolio/repos_analysis.json', 'w') as f:
    json.dump(results, f, indent=2)
print(f"💾 Detailed report saved to repos_analysis.json")
