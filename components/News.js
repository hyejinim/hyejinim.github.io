
export default function News(news){
    return `
    <section id="news">
    <div class="page-intro main bg-color">
            <div class="page-intro-inner">
        <h1 class="title">News</h1>
        <div class="search">
            <input type="text" name='news' placeholder="Search News...">
        </div>
        <div class="news-list">
            ${NewsItems(news)}
        </div>
        </div>
        </div>
    </section>
    `
}

export function NewsItems(news){
    return news.map(d=>`
        <div class="row">
            <div class="col-3 date">
                ${d.date}
            </div>
            <div class="col-9">
                ${d.title}
            </div>
           
        </div>
    `).join('');
}


export function handleNewsFilter(data){
    let newsSearch = document.querySelector('.search input[name="news"');

    newsSearch.addEventListener('input', function(event){
        // News(allNews.filter(''))
        console.log('value', this.value);
        if (this.value!=''){
            let filtered = data.news.filter(d=>{
                let text = (d.title + ' ' + d.date);
                return text.toLowerCase().includes(this.value.toLowerCase());
            })
            document.querySelector('.news-list').innerHTML = NewsItems(filtered);
        }else{
            document.querySelector('.news-list').innerHTML = NewsItems(data.news);
        }
    });
}