# Course Glossaries - Navigating Global Development Finance

An elegant slide-based glossary system for the Navigating Global Development Finance course, featuring four comprehensive modules with interactive navigation.

## Features

- **One-term-at-a-time presentation** - Learners see individual terms in an elegant slide format
- **Smooth transitions** - Beautiful animations between terms
- **Interactive navigation** - Previous/Next buttons, keyboard shortcuts, and quick navigation grid
- **Progress tracking** - Visual progress bar and term counter
- **Responsive design** - Works on desktop, tablet, and mobile devices
- **Accessibility features** - Keyboard navigation and screen reader friendly
- **Professional styling** - Clean, modern design with consistent branding

## Modules

1. **Module 1: Data Foundations** (24 terms)
   - Data types, structures, and sourcing
   - Statistical measures and concepts

2. **Module 2: Data Journalism** (20 terms)
   - Transparency, accountability, and reporting techniques
   - Ethics and professional standards

3. **Module 3: Critical Data Analysis & Visualization** (23 terms)
   - Statistical analysis and visualization principles
   - Design foundations and analytical tools

4. **Module 4: International Development Finance** (20 terms)
   - Finance models, donors, and credit mechanisms
   - Global aid dynamics and cooperation models

## Usage

1. Open `index.html` in a web browser
2. Select a module to explore its glossary
3. Navigate through terms using:
   - **Previous/Next buttons**
   - **Arrow keys** (←/→ or ↑/↓)
   - **Spacebar** for next term
   - **Home/End keys** for first/last term
   - **Quick navigation grid** for direct access

## Color Customization

To update the green color theme to match your brand:

1. Open `styles/main.css` and `styles/glossary.css`
2. Update the CSS custom properties in the `:root` section:

```css
:root {
    --primary-green: #2d6e3a;      /* Main brand green */
    --light-green: #4a9960;        /* Lighter shade */
    --lighter-green: #e8f5ea;      /* Very light background */
    --dark-green: #1e4d2a;         /* Darker shade for hover states */
}
```

Replace these hex color values with your exact brand colors.

## File Structure

```
Glossaries/
├── index.html                     # Main module selection page
├── module1.html                   # Data Foundations glossary
├── module2.html                   # Data Journalism glossary
├── module3.html                   # Critical Data Analysis glossary
├── module4.html                   # International Development Finance glossary
├── styles/
│   ├── main.css                   # Main page styles
│   └── glossary.css               # Glossary slide styles
├── js/
│   └── glossary.js                # Interactive functionality
└── README.md                      # This file
```

## Technical Details

- **Pure HTML/CSS/JavaScript** - No external dependencies
- **Progressive enhancement** - Works without JavaScript (basic functionality)
- **Mobile-first responsive design**
- **Cross-browser compatible**
- **WCAG accessibility guidelines compliant**

## Embedding in LMS

To embed in a Learning Management System:

1. Upload all files maintaining the folder structure
2. Link to individual module pages directly, or
3. Use the main index page for module selection
4. Ensure relative paths are preserved

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 16+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Created for educational use in the Data Foundations & Analysis course.
