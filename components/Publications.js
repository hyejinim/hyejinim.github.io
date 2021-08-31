import MaterialIcon from './MaterialIcon.js';

export default function Publications(pubs){
    return `
    <section id="publications">
        <div class="full-page bg-sub-color">
            <div class="page-intro-inner">
                <h1 class="title">Publications</h1>
                <div class="news-list">
                    ${PubItems(pubs)}
                </div>
            </div>
        </div>
    </section>
    `
}

export function PubItems(pubs){
    return pubs.map(d=>`
        <div class="pub-item">
            <div class="pub-title">
                <a href="${d.paper}" target="_blank"><strong>${d.title}</strong></a>
            </div>
            <div class="pub-authors">
                ${d.authors}
            </div>
            <div class="pub-venue">
                <em>${d.venue}</em>
            </div>
            <div class="pub-awards">
                <strong>${d.award}</strong>
            </div>
        </div>
    `).join('');
}