
export default function Publications(pubs){
    return `
    <section id="publications">
        <div class="page-intro main bg-color">
            <div class="page-intro-inner">
                <h2 class="title">Publications</h2>
                <div class="news-list">
                    ${NewsItems(pubs)}
                </div>
            </div>
        </div>
    </section>
    `
}

export function PubItems(pubs){
    return news.map(d=>`
        <div class="row">
            <div class="pub-title">
                <strong>${d.title}<strong>
            </div>
            <div class="pub-authors">
                ${d.authors}
            </div>
            <div class="pub-venue">
                <em>${d.venue}</em>
            </div>
            <div class="pub-awards">
                <strong>${d.award}<strong>
            </div>
        </div>
    `).join('');
}