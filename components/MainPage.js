import Navbar from './Navbar.js';
import About from './About.js';
import News, {handleNewsFilter} from './News.js';
import Projects, {handleProjectFilter} from './Projects.js';
import Publications from './Publications.js';

export default function MainPage(data){
    
    document.querySelector('.container').innerHTML = `
        
        ${About(data.about)}
        
        ${Projects(data.projects)}

        ${Publications(data.publications)} 

        ${News(data.news)}
        <footer>Designed and Built by Hyejin Im</footer>
    `
    
    handleNewsFilter(data);
    handleProjectFilter(data);
}

