import MaterialIcon from './MaterialIcon.js';
export default function Projects(projects){
    return `
    
    <section id="projects">
    <div class="wide">
        <div class="filter" id="filter">
            
            <input type="radio" name="filter" id="item1" value="all" checked>
            <label for="item1">All</label>

            <input type="radio" name="filter" id="item2" value="featured" >
            <label for="item2">Featured</label>
            
            <input type="radio" name="filter" id="item3" value="ux/ui">
            <label for="item3">UX/UI</label>
            
            <input type="radio" name="filter" id="item4" value="development">
            <label for="item4">Development</label>
            
            <input type="radio" name="filter" id="item5" value="research">
            <label for="item5">Research</label>
        
        </div>
        <div class="project-list">
            ${ProjectItems(projects)}
        </div>
        </div>
    </section>`
}

export function ProjectItems(projects){
    return projects.map(d=>`

  
        <div class="project-item">
            <img class="project-thumbnail"  src="${d.teaser}">

            
            <div class="project-title">
                <a href="?project=${d.id}">${d.title}</a>
            </div>
            
            <div class="project-short-desc">
                ${d.subtitle}
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