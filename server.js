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
    
    if (!query) {
        return res.status(400).json({ error: 'Chybí vyhledávací dotaz' });
    }

    try {
        // Tady pak napojíme SerpApi nebo jiný scraper
        // Pro teď jen simulujeme odpověď
        const mockData = [
            { title: "Výsledek 1", link: "https://example.com", snippet: "Popisek webu..." },
            { title: "Výsledek 2", link: "https://test.cz", snippet: "Další popisek..." }
        ];
        
        res.json(mockData);
    } catch (error) {
        res.status(500).json({ error: 'Něco se pokazilo při komunikaci s Googlem' });
    }
});

app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});