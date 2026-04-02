const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Statické soubory (frontend) budeme mít ve složce 'public'
app.use(express.static('public'));
app.use(express.json());

// Hlavní endpoint pro vyhledávání
app.get('/api/search', async (req, res) => {
    const query = req.query.q;
    const apiKey = process.env.SERP_API_KEY; // Načte klíč z .env
    
    if (!query) {
        return res.status(400).json({ error: 'Chybí vyhledávací dotaz' });
    }

    try {
        // Volání SerpApi
        const response = await axios.get('https://serpapi.com/search.json', {
            params: {
                q: query,
                api_key: apiKey,
                engine: "google",
                hl: "cs", // Jazyk čeština
                gl: "cz"  // Lokalita Česko
            }
        });

        // Vytáhneme pouze "organic_results" (přirozené vyhledávání - Bod 3 zadání)
        const organicResults = response.data.organic_results.map(item => ({
            title: item.title,
            link: item.link,
            snippet: item.snippet
        }));
        
        res.json(organicResults);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Chyba při komunikaci se SerpApi' });
    }
});

app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});