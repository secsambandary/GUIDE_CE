document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('globalSearchInput');
    const resultsContainer = document.getElementById('globalSearchResults');
    const searchWrapper = document.querySelector('.hero-search-wrapper');

    if (!searchInput || !resultsContainer || !searchWrapper) {
        console.error("Search components not found on the page. Global search will not work.");
        return;
    }

    // Check if the searchIndex is loaded
    if (typeof searchIndex === 'undefined') {
        console.error("The search index ('search-index.js') is not loaded. Search will not work.");
        resultsContainer.innerHTML = '<p class="search-error">Erreur: L\'index de recherche n\'a pas pu être chargé.</p>';
        return;
    }

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 3) {
            resultsContainer.innerHTML = '';
            searchWrapper.classList.remove('has-results');
            return;
        }

        const results = searchIndex.filter(item => {
            const fullText = `${item.title} ${item.description} ${item.keywords}`.toLowerCase();
            return fullText.includes(query);
        });

        displayResults(results, query);
    });

    function displayResults(results, query) {
        if (results.length === 0) {
            resultsContainer.innerHTML = `<div class="search-no-results"><i class="fas fa-exclamation-circle"></i> Aucun document trouvé pour "<strong>${escapeHTML(query)}</strong>".</div>`;
            searchWrapper.classList.add('has-results');
            return;
        }

        // Group results by page
        const groupedResults = results.reduce((acc, item) => {
            if (!acc[item.pageUrl]) {
                acc[item.pageUrl] = {
                    pageName: item.pageName,
                    pageUrl: item.pageUrl,
                    items: []
                };
            }
            acc[item.pageUrl].items.push(item);
            return acc;
        }, {});

        let html = `<div class="search-results-header">Résultats de la recherche pour "<strong>${escapeHTML(query)}</strong>"</div>`;
        
        for (const page in groupedResults) {
            const group = groupedResults[page];
            html += `
                <div class="search-result-group">
                    <h4 class="result-page-title">
                        <i class="fas fa-folder-open"></i>
                        Trouvé dans : <a href="${group.pageUrl}">${group.pageName}</a>
                    </h4>
                    <ul class="result-items-list">
            `;
            
            group.items.forEach(item => {
                html += `
                    <li class="result-item">
                        <a href="${item.docUrl}" target="_blank">
                            <div class="result-item-icon"><i class="fas fa-file-alt"></i></div>
                            <div class="result-item-content">
                                <span class="result-item-title">${highlightText(item.title, query)}</span>
                                <span class="result-item-description">${highlightText(item.description, query)}</span>
                            </div>
                            <div class="result-item-action"><i class="fas fa-external-link-alt"></i></div>
                        </a>
                    </li>
                `;
            });

            html += `</ul></div>`;
        }

        resultsContainer.innerHTML = html;
        searchWrapper.classList.add('has-results');
    }

    function highlightText(text, highlight) {
        if (!text) return '';
        const safeHighlight = escapeHTML(highlight);
        const regex = new RegExp(`(${safeHighlight})`, 'gi');
        return escapeHTML(text).replace(regex, '<mark>$1</mark>');
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"']/g, function(match) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[match];
        });
    }
});
