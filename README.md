# Instalacja

1. Wejdź na [contentful](https://app.contentful.com/spaces/uptjwx8hy2jg/api/keys/1tToU2WLSCcibaDHlmDAAe) i zapisz odpowiednie klucze w pliku `.env`

2. zainstaluj biblioteki

```bash
$ yarn
```

### Uruchomienie

```
yarn run dev
```

### Running locally

Copy `.env.example` to `.env` and adapt the environment to your setup:

- `CF_SPACE_ID`: The ID of a Compose compatible space to be used
- `CF_DELIVERY_ACCESS_TOKEN`: A delivery API key for the space
- `CF_PREVIEW_ACCESS_TOKEN`: A preview API key for the space

and then

```
yarn run dev
```

to start the website on `http://localhost:3000`

## Tech used

- [Next.js 12.x][nextjs]
- [TypeScript 4.x][typescript]
- [Tailwind CSS][tailwind]
