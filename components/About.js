export default function About(about){
    return `
    <section id="about">
        <div class="page-intro main bg-color">
            <div class="page-intro-inner">
                <h1 class="title">${about.name}</h1>
                <p class="highlight-color">
                    <strong>${about.title}</strong>
                </p>
                <p>
                ${about.desc}
                </p>
                <p class="highlight-color">
                    <strong>${about.title2}</strong>
                </p>
                <p>
                ${about.desc2}
                </p>
                <br>
                <ul class="social-media">
                    <li><a href="${about.linkedin}" target="_blank"><i class="fa wp-icon fa-linkedin fa-lg"></i></a></li>
                    <li><a href="${about.github}" target="_blank"><i class="fa wp-icon fa-github fa-lg"></i></a></li>
                    <li><a href="${about.googlescholar}" target="_blank"><i class="ai ai-google-scholar fa-lg"></i></a></li>
                    <li><a href="${about.twitter}" target="_blank"><i class="fa wp-icon fa-twitter fa-lg"></i></a></li>
                </ul>
                <div><a href="#projects"><button class="purple-bt">↓ VIEW MY PROJECTS</button></div> 
            </div>
        </div>    
    </section>`
}

