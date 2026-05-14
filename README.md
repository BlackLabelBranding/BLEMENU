# 🍽️ Black Label Branding Catering Menu

A mobile-friendly React application for catering orders. Customers can scan a QR code, browse menu items, select quantities, enter their information, and download a professional PDF of their order.

## Features

✅ **Mobile Optimized**
- Fully responsive design for all devices
- Touch-friendly interface
- Optimized for QR code scanning

✅ **Interactive Menu**
- Browse items by category (Appetizers, Main Course, Sides, Desserts)
- Add/remove items with quantity selectors
- Real-time order summary with tax calculation

✅ **Customer Information Collection**
- Name, email, phone
- Event date picker
- Special notes and dietary restrictions

✅ **PDF Generation**
- Professional, printable order format
- Unique order IDs for tracking
- Auto-download to device
- Includes customer details, item list, and totals

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BlackLabelBranding/BLEMENU.git
   cd BLEMENU
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## Customization

### Update Menu Items
Edit `src/utils/menuData.js` to add, remove, or modify menu items:

```javascript
{
  id: 'unique-id',
  category: 'Category Name',
  name: 'Item Name',
  description: 'Item description',
  price: 9.99,
  servings: 'per serving'
}
```

### Update Branding
- Update company name and colors in component files
- Modify header text in `src/components/MenuForm.js`
- Update colors in CSS files (currently using orange/yellow theme)

### Change Tax Rate
Edit the `TAX_RATE` variable in `src/components/OrderSummary.js` and `src/utils/pdfGenerator.js`

### Deploy to Production

The app can be deployed to:
- **Vercel**: `npm install -g vercel` then `vercel`
- **Netlify**: Connect GitHub repo to Netlify dashboard
- **GitHub Pages**: `npm run build` and push to `gh-pages` branch
- **Any hosting**: Upload contents of `build/` folder

## Project Structure

```
BLEMENU/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MenuForm.js
│   │   ├── MenuForm.css
│   │   ├── MenuItems.js
│   │   ├── MenuItems.css
│   │   ├── OrderSummary.js
│   │   └── OrderSummary.css
│   ├── utils/
│   │   ├── menuData.js
│   │   └── pdfGenerator.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- **React 18**: UI framework
- **jsPDF**: PDF generation
- **html2canvas**: PDF styling support
- **CSS3**: Responsive design

## QR Code Setup

1. Deploy the app to a public URL
2. Generate a QR code pointing to your domain using any QR code generator
3. Customers can scan the QR code with their phone to access the menu

## Notes

- All PDFs are generated client-side (no server required)
- Data is not stored - each order is independent
- Mobile-first design ensures excellent UX on phones
- Tax rate defaults to 8% (configurable)

## License

Copyright © 2026 Black Label Branding. All rights reserved.
