export default function About(about){
    return `
    <section id="about">
        <div class="page-intro main bg-color">
            <div class="page-intro-inner">
                <h1 class="title">${about.name}</h1>
                <p class="highlight-color">
                    <strong>${about.title}</strong><br>
                    

                    
                </p>
                <p>
                ${about.desc}
                </p>
                <p class="highlight-color">
                <strong>${about.title2}</strong><br>
                </p>
                <p>
                ${about.desc2}
                </p>
                <br>
                <a href="#projects"><button class="purple-bt">↓ VIEW MY PROJECTS</button> 
            </div>
        </div>    
    </section>`
}

