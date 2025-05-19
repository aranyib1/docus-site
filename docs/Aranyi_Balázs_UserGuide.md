---
sidebar_position: 2
title: 'Petstore API'
---

# Pestrore API használata

A dokumentum célja, hogy megismertesse a [**Petsore API**](https://petstore.swagger.io/) néhány funkcióját.

## Új kisállat (Pet) létrehozása

Ebben a fejezetben bemutatásra kerül, hogy hogyan lehet új kisállatot létrehozni a `/pet` végponton keresztül.

### Alap információk

- **Végpont**: `POST /pet`
- **URL**: `https://petstore.swagger.io/pet`
- **Típus**: JSON alapú HTTP kérés
- **Autentikáció**: nem szükséges

---

### 1. Lépés – JSON kérés összeállítása

A kisállatot JSON formátumban kell megadni. Az alábbi mezők használhatók:

#### Kötelező mezők:

- `id`: egyedi azonosító (szám)
- `name`: kisállat neve
- `photoUrls`: legalább egy URL-es kép a kisállatról
- `status`: elérhetőségi állapot (`available`, `pending`, `sold`)

#### Példa kérés:

```json
{
  "id": 12345,
  "name": "Szaffi",
  "category": {
    "id": 1,
    "name": "macska"
  },
  "photoUrls": [
    "https://example.com/szaffi.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "barátságos"
    }
  ],
  "status": "available"
}
```

---

### 2. Lépés – Kérés elküldése

#### Használhatsz például `curl`-t:

```bash
curl -X POST "https://petstore.swagger.io/pet" \
  -H "Content-Type: application/json" \
  -d '{
    "id": 12345,
    "name": "Szaffi",
    "category": {
      "id": 1,
      "name": "macska"
    },
    "photoUrls": ["https://example.com/szaffi.jpg"],
    "tags": [{"id": 1, "name": "barátságos"}],
    "status": "available"
  }'
```

#### Vagy Postman-ben:

1. Válaszd a `POST` metódust.
2. URL: `https://petstore.swagger.io/pet`
3. `Headers` fülön:
   - `Content-Type`: `application/json`
4. `Body` fülön:
   - Válaszd a `raw` és `JSON` opciót
   - Illeszd be a fenti JSON-t

---

### 3. Lépés – Válasz értelmezése

#### Sikeres válasz (`200 OK`):

```json
{
  "id": 12345,
  "name": "Szaffi",
  "category": {
    "id": 1,
    "name": "macska"
  },
  "photoUrls": [
    "https://example.com/szaffi.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "barátságos"
    }
  ],
  "status": "available"
}
```

#### Hiba esetén:

- `405 Method Not Allowed`: ha a bemenet hibás vagy hiányzik egy kötelező mező

### Kapcsolódó dokumentáció

- Swagger UI: [https://petstore.swagger.io/#/pet](https://petstore.swagger.io/#/pet)

## Létrehozott kisállat adatainak lekérdezése

A következőkben bemutatásra kerül az, hogy hogyan lehet lekérdezni egy kisállat adatait a `GET /pet/{petId}` végponton keresztül.

### Alap információk

- **Végpont**: `GET /pet/{petId}`
- **URL minta**: `https://petstore.swagger.io/pet/12345`
- **Típus**: HTTP GET kérés
- **Autentikáció**: nem szükséges

---

### 1. Lépés – Azonosító (petId) meghatározása

A lekérdezni kívánt kisállat egyedi azonosítóját (`petId`) ismerned kell. Ez lehet például egy korábban létrehozott állat ID-ja.

---

### 2. Lépés – Kérés elküldése

####  `curl` példa:

```bash
curl -X GET "https://petstore.swagger.io/pet/12345"
```

####  Postman használata:

1. Válaszd a `GET` metódust.
2. URL: `https://petstore.swagger.io/pet/12345` (az `12345` helyére írd be a saját `petId`-t)
3. Nincs szükség fejléc vagy body beállításra.

---

### 3.  Lépés – Válasz értelmezése

#### Sikeres válasz (`200 OK`):

```json
{
  "id": 12345,
  "name": "Szaffi",
  "category": {
    "id": 1,
    "name": "macska"
  },
  "photoUrls": [
    "https://example.com/szaffi.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "barátságos"
    }
  ],
  "status": "available"
}
```
#### Hiba válaszok:

- `404 Not Found`: az adott `petId`-val nem található kisállat
- `400 Bad Request`: ha az `id` nem megfelelő formátumú
---

###  Kapcsolódó dokumentáció

- Swagger UI: [https://petstore.swagger.io/#/pet/getPetById](https://petstore.swagger.io/#/pet/getPetById)

##  Kisállat adatainak frissítése

Ez az útmutató bemutatja, hogyan lehet egy meglévő kisállat adatait frissíteni a `PUT /pet` végponton keresztül. A példában a korábban létrehozott `12345` azonosítójú kisállat nevét módosítjuk **"Buksira"**.

### Alap információk

- **Végpont**: `PUT /pet`
- **URL**: `https://petstore.swagger.io/pet`
- **Típus**: JSON alapú HTTP kérés
- **Autentikáció**: nem szükséges

---

### 1. Lépés – Meglévő kisállat adatainak ismerete

A `PUT /pet` végpont **teljes kisállat objektumot vár**, ezért minden mezőt meg kell adni – nemcsak a változtatott adatot (például a nevet), hanem az összes többit is, különben az API úgy értelmezi, hogy azok törlésre kerülnek.

---

### 2. Lépés – JSON kérés összeállítása

Tegyük fel, hogy a kisállat azonosítója `12345`, korábban a neve „Szaffi” volt, és most „Buksi”-ra szeretnénk módosítani.

#### Frissített kérés:

```json
{
  "id": 12345,
  "name": "Buksi",
  "category": {
    "id": 1,
    "name": "macska"
  },
  "photoUrls": [
    "https://example.com/szaffi.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "barátságos"
    }
  ],
  "status": "available"
}
```

---

### 3. Lépés – Kérés elküldése

####  `curl` példa:

```bash
curl -X PUT "https://petstore.swagger.io/pet" \
  -H "Content-Type: application/json" \
  -d '{
    "id": 12345,
    "name": "Buksi",
    "category": {
      "id": 1,
      "name": "macska"
    },
    "photoUrls": ["https://example.com/szaffi.jpg"],
    "tags": [{"id": 1, "name": "barátságos"}],
    "status": "available"
  }'
```

#### Postman használata:

1. Válaszd a `PUT` metódust.
2. URL: `https://petstore.swagger.io/pet`
3. `Headers`:
   - `Content-Type`: `application/json`
4. `Body`:
   - `raw` + `JSON` formátum
   - Illeszd be a fenti JSON-t

---

### 4. Lépés – Válasz értelmezése

#### Sikeres válasz (`200 OK`):

```json
{
  "id": 12345,
  "name": "Buksi",
  "category": {
    "id": 1,
    "name": "macska"
  },
  "photoUrls": [
    "https://example.com/szaffi.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "barátságos"
    }
  ],
  "status": "available"
}
```

#### Hibák:

- `400 Bad Request`: ha hiányzik egy kötelező mező
- `404 Not Found`: ha az adott `id`-val nem létezik kisállat
- `405 Method Not Allowed`: hibás metódus vagy formátum

---

### Kapcsolódó dokumentáció

- Swagger UI: [https://petstore.swagger.io/#/pet/updatePet](https://petstore.swagger.io/#/pet/updatePet)

## Kisállat törlése

Ez az útmutató bemutatja, hogyan lehet egy kisállatot véglegesen törölni a  `DELETE /pet/{petId}` végponton keresztül. A példában az `12345` azonosítójú kisállat kerül törlésre.

###  Alap információk

- **Végpont**: `DELETE /pet/{petId}`
- **URL minta**: `https://petstore.swagger.io/pet/12345`
- **Típus**: HTTP DELETE kérés
- **Autentikáció**: opcionális (API key)

---

### 1. Lépés – Azonosító (`petId`) meghatározása

A törölni kívánt kisállat egyedi azonosítóját (`petId`) ismerned kell. Ez egy korábban létrehozott állat ID-ja.

---

### 2. Lépés – Kérés elküldése

#### ✅ `curl` példa:

```bash
curl -X DELETE "https://petstore.swagger.io/pet/12345"
```

##### (Ha az API kulcs szükséges lenne, hozzáadhatod így:)

```bash
curl -X DELETE "https://petstore.swagger.io/pet/12345" \
  -H "api_key: special-key"
```

####  Postman használata:

1. Válaszd a `DELETE` metódust.
2. URL: `https://petstore.swagger.io/pet/12345` (az `12345` helyére írd be a saját `petId`-t)
3. **Headers** fül (opcionális):
   - `api_key`: `special-key` (ha szükséges)
4. Nem kell body-t küldeni.

---

### 3. Lépés – Válasz értelmezése

#### Sikeres válasz (`200 OK`):

```json
{
  "code": 200,
  "type": "unknown",
  "message": "12345"
}
```

Ez azt jelenti, hogy a `12345` azonosítójú kisállat sikeresen törlésre került.

#### Hiba válaszok:

- `400 Bad Request`: ha az `id` nem megfelelő formátumú
- `404 Not Found`: ha a kisállat nem található az adott `petId`-val

---

#### Fontos!

- A törlés **végleges**, nincs „visszavonás” lehetőség.
- Érdemes a törlés előtt a `GET /pet/{petId}` végponttal lekérdezni az állat adatait.

---

###  Kapcsolódó dokumentáció

- Swagger UI: [https://petstore.swagger.io/#/pet/deletePet](https://petstore.swagger.io/#/pet/deletePet)
