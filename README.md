# The Story of Us

A private, static relationship timeline for Michael + Karla, created as a 13th wedding anniversary gift on June 1, 2026.

## Install

Install the project once:

```bash
npm install
```

## Run Locally

Start the local site:

```bash
npm run dev
```

Then open the local address shown in the terminal.

## Build

Create the production files:

```bash
npm run build
```

The finished static site will be in `dist/`.

## Preview The Build

Check the production build locally:

```bash
npm run preview
```

## Change The Password

Open `src/App.jsx` and change this line near the top:

```js
export const ANNIVERSARY_PASSWORD = "allyouneedislove";
```

This password gate is lightweight privacy for a static site. It keeps casual visitors out, but it is not strong security.

## Update The Story

Most content lives in `src/data.js`. Edit that file to update:

- Couple names
- Anniversary dates
- Hero text and hero photo
- Chapter titles, years, summaries, tags, and photo guidance
- Memories, captions, dates, locations, and photo placeholders
- Closing message

## Add Photos

Place photos in `public/assets/photos/` by chapter:

- `public/assets/photos/01-start/`
- `public/assets/photos/02-falling/`
- `public/assets/photos/03-wedding/`
- `public/assets/photos/04-building/`
- `public/assets/photos/05-parents/`
- `public/assets/photos/06-japan/`
- `public/assets/photos/07-next/`
- `public/assets/photos/08-now/`
- `public/assets/photos/hero/`
- `public/assets/photos/og/`

To replace a placeholder, add a photo path to a photo object in `src/data.js`:

```js
{ src: "/assets/photos/01-start/example.jpg", label: "first photo together" }
```

If `src` is empty or `null`, the placeholder stays visible.

## Change The Song

The anniversary song lives here:

```text
public/assets/audio/contigo-karla.mp3
```

To replace it later, add a new audio file to `public/assets/audio/` and update `SONG_SRC` near the top of `src/App.jsx`. The player loops the song and appears after the password screen. Some browsers require one tap before sound can start, so the player includes play, pause, restart, and mute controls.

## Add A New Memory

Inside the chapter's `memories` array in `src/data.js`, add another object:

```js
{
  kicker: "Memory",
  title: "A new favorite day",
  caption: "A sentence or two about why this moment belongs here.",
  location: "Home",
  date: "2026",
  photos: [
    { src: "/assets/photos/08-now/example.jpg", label: "new favorite photo" }
  ]
}
```

## Add A New Annual Chapter

Copy one chapter object in `src/data.js`, give it a new `id`, `num`, `title`, `years`, `summary`, `photoFolder`, tags, and memories. Then create a matching folder under `public/assets/photos/`, for example:

```text
public/assets/photos/09-fourteen/
```

The navigation and page sections are generated from the chapter list automatically.

## Deploy As A Static Site

Run:

```bash
npm run build
```

Deploy the contents of `dist/` to any static host, such as Netlify, Vercel, Cloudflare Pages, GitHub Pages, or an S3 bucket. No backend, database, or external photo service is required.
