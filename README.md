# UVerify Discovery

The landing page for [uverify.io](https://uverify.io) — an explainer for the UVerify service. It provides a comprehensive overview of the features offered by UVerify, a decentralized application that lets users place verifiable data fingerprints on the Cardano blockchain.

**Stack:** React 19 · React Router v7 (framework mode, SSG) · Tailwind CSS v4 · Vite · TypeScript

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/UVerify-io/uverify-discovery.git
   cd uverify-discovery
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3050`.

## Build

```bash
npm run build
```

The build output lands in `dist/client/` — this is the folder to deploy. It contains pre-rendered static HTML for all routes (`/`, `/terms-of-use`, `/privacy-policy`), so crawlers receive full content without needing JavaScript.

The `dist/server/` folder is an intermediate SSR bundle used during the build to generate the HTML; it does not need to be deployed.

## Deployment

The project deploys to GitHub Pages automatically on every push to `main` via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

For manual Firebase deployment:

```bash
npm run deploy
```

## Routes

| Path | Description |
|---|---|
| `/` | Landing page (About, How It Works, Stats, Use Cases, Features, Developer Docs, Roadmap, Contact) |
| `/terms-of-use` | Terms of Use |
| `/privacy-policy` | Privacy Policy |

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the GPLv3 License. See `LICENSE` for more information.

## Contact

UVerify team — [hello@uverify.io](mailto:hello@uverify.io)
