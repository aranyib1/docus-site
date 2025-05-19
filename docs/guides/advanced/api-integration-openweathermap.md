# Példa API Integráció – Időjárás lekérdezés (OpenWeatherMap)

Ez a leírás bemutatja, hogyan integráljunk egy külső API-t egy frontend alkalmazásba JavaScript segítségével. A példában az [OpenWeatherMap](https://openweathermap.org/api) szolgáltatás időjárási adatait kérjük le.

---

## Cél

Lekérni egy adott város aktuális időjárási adatait és megjeleníteni a felhasználónak.

---

## API hozzáférés

1. Regisztrálj a [https://openweathermap.org](https://openweathermap.org) oldalon.
2. Hozz létre egy API kulcsot.

---

## Példa API URL

```http
GET https://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=YOUR_API_KEY&units=metric
```

| Paraméter | Leírás                | Példa érték   |
|-----------|------------------------|----------------|
| `q`       | Város neve             | `Budapest`     |
| `appid`   | API kulcs              | `abc123xyz`    |
| `units`   | Mértékegység típusa    | `metric`       |

---

## Példa válasz (JSON)

```json
{
  "name": "Budapest",
  "main": {
    "temp": 18.7,
    "humidity": 53
  },
  "weather": [
    {
      "description": "clear sky",
      "icon": "01d"
    }
  ]
}

```