export function renderErrorPage() {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Something went wrong</title>
    <style>
      :root { color-scheme: dark; font-family: Inter, system-ui, sans-serif; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #050816; color: #f8fafc; }
      .card { max-width: 560px; padding: 2rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.12); background: rgba(10,14,24,0.95); box-shadow: 0 20px 60px rgba(0,0,0,0.35); }
      h1 { margin: 0 0 0.75rem; font-size: 1.5rem; }
      p { margin: 0; line-height: 1.6; color: #cbd5e1; }
    </style>
  </head>
  <body>
    <main class="card">
      <h1>Something went wrong</h1>
      <p>The page could not be rendered. Please refresh the page or try again shortly.</p>
    </main>
  </body>
</html>`;
}
