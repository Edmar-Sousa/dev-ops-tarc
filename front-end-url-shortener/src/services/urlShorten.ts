
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

const apiUrl = import.meta.env.VITE_API_URL;

interface ShortenResponseInterface {
    id: number
    shortId: string
    originalUrl: string
    createdAt: string
}

export async function shortenUrl(url: string): Promise<ShortenResponseInterface> {
    const body = {
        url,
    };

    const response = await fetch(`${apiUrl}/shortener`, { 
        headers, 
        method: 'POST',
        body: JSON.stringify(body), 
    });

    const json = await response.json();
    return json;
}
