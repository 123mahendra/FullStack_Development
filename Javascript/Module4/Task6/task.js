const form = document.querySelector('#searchForm');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const input = document.querySelector('#searchInput').value.trim();

    results.innerHTML = '';

    if (!input) {
        results.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }

    const apiUrl = `https://api.chucknorris.io/jokes/search?query=${input}`

    await fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.result.length === 0) {
            results.innerHTML = '<p>No jokes found.</p>';
            return;
        }
        data.result.forEach(joke => {
            const article = document.createElement('article');
            const p = document.createElement('p');
            p.textContent = joke.value;
            article.appendChild(p);
            results.appendChild(article);
          });
        })
        .catch(error => {
          results.innerHTML = `<p>Error fetching jokes: ${error}</p>`;
        });
    });