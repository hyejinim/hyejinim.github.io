

fetch('assets/data.json')
.then(resp=>resp.json())
.then(data=>{
    // console.log('loaded:',d);
    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.id===params.get('project'));
        ProjectPage(project);
    }

    
});

export default function Projects(projects){
    return `
    <section id="projects">
        <h1 class="title">Projects</h1>
        <div class="filter">
            <label>
                <input type="radio" name="filter" value="all" checked>
                All
            </label>
            <label>
                <input type="radio" name="filter" value="journal">
                Journal
            </label>
            <label>
                <input type="radio" name="filter" value="conference">
                Conference
            </label>
            <label>
                <input type="radio" name="filter" value="system">
                System
            </label>
            <label>
                <input type="radio" name="filter" value="technique">
                Technique
            </label>
            <label>
                <input type="radio" name="filter" value="evaluation">
                Evaluation
            </label>
        </div>
        <div class="project-list">
            ${ProjectItems(projects)}
        </div>
    </section>`;
}

export function ProjectItems(projects){
    return projects.map(d=>`
        <div class="row">
            <div class="col-6">
                <div class="project-title">
                    <a href="?project=${d.id}"><strong>${d.title}</strong></a>
                </div>
                <div class="project-authors">
                    ${d.authors}<br>
                </div>
                <div class="project-source">
                    <em>${d.source}</em>
                </div>
                <div class="project-tags">
                    ${d.tags.map(tag=>`
                        <span class="tag ${tag.toLowerCase()}">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <div class="project-materials">
                    ${d.materials.map(m=>`
                        <span>
                            <a href="${m.path}" target="_blank">${MaterialIcon(m.label)} 
                            ${m.label}
                            </a>
                        </span>
                    `).join('')}
                    
                </div>
            </div> 
            <div class="col-6">
                <img src="${d.teaser}" width="100%">
            </div>
        </div>
    `).join('');
}


export function handleProjectFilter(data){

    
    let conds = document.querySelectorAll('.filter input[name="filter"]');
    console.log(typeof conds);
    conds.forEach(cond=>cond.addEventListener('change', function(event){
        
        let checked = event.target.value; //Array.from(conds).filter(d=>d.checked).map(d=>d.value);
        if (checked==='all'){
            document.querySelector('.project-list').innerHTML = ProjectItems(data.projects);
        }else{
            let filtered = data.projects.filter(d=>{
                return d.tags.some(tag=>checked === tag.toLowerCase());
            });
            // console.log('filtered', filtered);
        
            document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
        }
    
    }));
    
}