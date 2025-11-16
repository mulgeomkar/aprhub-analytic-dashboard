# APR Hub - Analytics Dashboard & Report Builder

A comprehensive analytics platform demo featuring a Shopify/Meta Ads dashboard and a drag-and-drop report builder.

## Features

### 📊 Analytics Dashboard
- **Key Metrics**: Revenue, Orders, AOV, Conversion Rate, ROAS, CTR, and more
- **Interactive Charts**: Sales over time, Ad Spend vs ROAS visualization
- **Data Tables**: Top products and campaign performance tracking
- **Clean Design**: Modern UI inspired by best-in-class analytics platforms

### 🎨 Drag-and-Drop Report Builder
- **Component Palette**: Metrics, charts, tables, text blocks, and filters
- **Visual Canvas**: Drag, drop, resize, and position components freely
- **Property Editor**: Customize component settings in real-time
- **Report Management**: Save, preview, and export custom reports

## Tech Stack

- **React** with TypeScript
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **react-rnd** for drag-and-drop functionality
- **Shadcn UI** components
- **Lucide React** icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify

1. Push code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Usage

### Dashboard View
Navigate to the dashboard to see:
- Real-time metrics with trend indicators
- Interactive charts showing sales and ad performance
- Top products ranked by revenue
- Campaign performance breakdown

### Report Builder View
Switch to the Report Builder to:
1. **Add Components**: Click components from the left panel to add them to the canvas
2. **Arrange Layout**: Drag components to reposition them
3. **Resize Components**: Drag edges/corners to resize
4. **Edit Properties**: Select a component to edit its properties in the right panel
5. **Save Report**: Use the toolbar to save, preview, or export your custom report

## Data

All data in this demo is placeholder/mock data for demonstration purposes. In a production environment, this would connect to actual Shopify and Meta Ads APIs.

## License

MIT
