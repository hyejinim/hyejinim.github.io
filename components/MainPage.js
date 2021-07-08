import Navbar from './Navbar.js';
import About from './About.js';
import News, {NewsItems, handleNewsFilter} from './News.js';
import Projects, {ProjectItems, handleProjectFilter} from './Projects.js';

export default function MainPage(data){
    
    document.querySelector('.container').innerHTML = `
        
        ${About(data.about)}
        
        ${Projects(data.projects)}

        ${News(data.news)}
        <footer>Designed and Built by Hyejin Im</footer>
    `
    
    handleNewsFilter(data);
    handleProjectFilter(data);
}

