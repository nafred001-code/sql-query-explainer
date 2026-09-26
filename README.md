# sql-query-explainer

Explains what a SQL query does, clause by clause, in plain English, on-device. Built with [Tether's QVAC SDK](https://github.com/tetherto/qvac) — the model runs on-device, so nothing leaves your machine.

## What it does

Explains what a SQL query does, clause by clause, in plain English, on-device.

**QVAC functions used:** `loadModel` and `completion`.

![sql-query-explainer demo](demo.png)

## Why I built it

Inheriting a 60-line query with four joins and no comments is a special kind of pain.

## Requirements

- Node.js >= 22
- `@qvac/sdk` `^0.19.0` (installed automatically via `npm install`)

## Install

```bash
git clone https://github.com/nafred001-code/sql-query-explainer.git
cd sql-query-explainer
npm install
```

## Run

```bash
npm start
```

An example input is included: `query.example.sql`.

See the comments at the top of `index.js` for the exact input this app expects. On first run, QVAC downloads the model it needs once and caches it locally; every run after that is fully offline.

## SDK version used

`@qvac/sdk` `0.19.1`

## License

MIT — see [LICENSE](LICENSE).
