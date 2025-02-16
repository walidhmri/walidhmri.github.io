import requests

url = "https://translator-api.glosbe.com/translateByLangWithScore?sourceLang=fr&targetLang=kab"
headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,ar;q=0.6",
    "Content-Type": "text/plain;charset=UTF-8",
    "Origin": "https://glosbe.com",
    "Referer": "https://glosbe.com/",
    "sec-ch-ua": '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
}

data = "bonjour"

response = requests.post(url, headers=headers, data=data)
print(response.status_code)
print(response.text)
