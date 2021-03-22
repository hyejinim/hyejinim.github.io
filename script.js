function openLearned() {
    var x = document.getElementById("learned");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openList() {
    var x = document.getElementById("projects");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openAbout() {
    var x = document.getElementById("about");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";

}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy email";

}

import Projects, {ProjectItems, handleProjectFilter} from './Projects.js';

export default function MainPage(data){

    document.querySelector('.projects-auto').innerHTML = `
        ${Projects(data.projects)}
    `

    handleProjectFilter(data);
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