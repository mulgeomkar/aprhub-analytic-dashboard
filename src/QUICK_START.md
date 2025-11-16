# Quick Start Guide

Get your APR Hub demo up and running in 5 minutes!

## 🚀 Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Run
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📱 Using the Demo

### Dashboard Tab
1. View the **Analytics Dashboard** with live metrics
2. Explore interactive charts (hover for details)
3. Check top products and campaign performance
4. Use the date range selector (top right) to filter data

### Report Builder Tab
1. Click **Report Builder** in the navigation
2. **Add Components**: Click any component in the left sidebar
3. **Position**: Drag components to move them
4. **Resize**: Drag edges/corners to resize
5. **Edit**: Click a component, then edit properties on the right
6. **Delete**: Select a component and click the trash icon
7. **Save**: Click "Save Report" when done

## 🎯 Demo Features

### What Works
✅ Full analytics dashboard with 8 metrics  
✅ Interactive charts with tooltips  
✅ Data tables with hover effects  
✅ Drag-and-drop report builder  
✅ Component resizing and positioning  
✅ Property editor for customization  
✅ Responsive design  

### What's Simulated
⚠️ Data is static/placeholder (no real API)  
⚠️ Date range selector doesn't filter data  
⚠️ Save/Export buttons are UI-only  
⚠️ Preview shows same view as canvas  

## 📦 Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` folder.

## 🌐 Deploy in 2 Minutes

### Vercel (Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

Or use the web dashboards:
- Vercel: [vercel.com/new](https://vercel.com/new)
- Netlify: [app.netlify.com/start](https://app.netlify.com/start)

## 🐛 Common Issues

### "Module not found: react-rnd"
```bash
npm install react-rnd
```

### "Module not found: recharts"
```bash
npm install recharts
```

### Port 5173 already in use
```bash
# Kill the process or use a different port
npm run dev -- --port 3000
```

### Charts not showing
- Clear browser cache
- Check browser console for errors
- Ensure recharts is installed

## 📚 Documentation

- **README.md**: Project overview and features
- **FEATURES.md**: Detailed feature descriptions
- **DEPLOYMENT.md**: Complete deployment guide
- **QUICK_START.md**: This file!

## 💡 Tips

1. **Test Both Views**: Make sure to showcase both Dashboard and Report Builder
2. **Mobile Testing**: Check responsive design on different screen sizes
3. **Demo Script**: Prepare talking points for each feature
4. **Performance**: The app is optimized but use latest Chrome/Firefox for best experience

## 🎓 Next Steps

1. ✅ Run locally and test all features
2. ✅ Push to GitHub repository
3. ✅ Deploy to Vercel or Netlify
4. ✅ Share live demo URL
5. ✅ Prepare presentation/walkthrough

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Try `npm install && npm run build` locally
4. Check the deployment logs on Vercel/Netlify

---

**Time to Deploy**: ~2-5 minutes  
**Time to Present**: ~10-15 minutes for full demo  

Good luck with your demo! 🚀
