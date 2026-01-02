# Wedding Invitation Card

A beautiful, responsive wedding invitation website with interactive features.

## Features

✅ **Fully Functional CSS & JavaScript**
- Responsive design with modern styling
- Live countdown timer to the wedding date
- Smooth scrolling navigation
- Interactive calendar export (Google, Apple, Outlook)
- Dynamic RSVP form with validation

## How to Use

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/hoangchung16-00/wedding-invitation-card.git
   cd wedding-invitation-card
   ```

2. **Serve the files locally**
   
   You can use any local web server. Here are some options:
   
   **Python:**
   ```bash
   python3 -m http.server 8080
   ```
   
   **Node.js (http-server):**
   ```bash
   npx http-server -p 8080
   ```
   
   **PHP:**
   ```bash
   php -S localhost:8080
   ```

3. **Open in browser**
   ```
   http://localhost:8080
   ```

### GitHub Pages Deployment

The website is already configured to work with GitHub Pages:

1. Go to your repository settings
2. Navigate to Pages section
3. Select the branch (usually `main`)
4. Set the source to root directory `/`
5. Save and wait a few minutes for deployment

Your site will be available at: `https://hoangchung16-00.github.io/wedding-invitation-card/`

## File Structure

```
wedding-invitation-card/
├── index.html      # Main HTML file
├── styles.css      # All styling (responsive design included)
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Verification

All files are working correctly:

### CSS (styles.css)
- ✅ Properly linked in `index.html` (line 7)
- ✅ Provides complete styling for all sections
- ✅ Includes responsive design for mobile devices
- ✅ CSS animations and transitions working

### JavaScript (script.js)
- ✅ Properly linked in `index.html` (line 246)
- ✅ Countdown timer updates every second
- ✅ Navigation smooth scrolling functional
- ✅ Calendar export buttons working
- ✅ RSVP form validation and submission working
- ✅ Dynamic form fields (guest count appears when attending)

## Troubleshooting

### If CSS/JS appears not to work:

1. **Clear browser cache**
   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   
2. **Check browser console**
   - Press `F12` to open Developer Tools
   - Look for any error messages in the Console tab
   
3. **Verify file paths**
   - Ensure all three files (`index.html`, `styles.css`, `script.js`) are in the same directory
   - File names are case-sensitive on some servers
   
4. **Check Content-Type headers (if using a web server)**
   - CSS should be served as `text/css`
   - JS should be served as `text/javascript`
   - Most web servers handle this automatically

5. **Test with local server**
   - Don't open `index.html` directly with `file://` protocol
   - Use a local web server (see instructions above)

## Customization

To customize the website for your wedding:

1. **Update wedding details** in `index.html`
   - Couple names (line 32)
   - Wedding date (line 33, 3)
   - Event location (lines 112-113)
   - All other text content

2. **Replace placeholder images**
   - Replace `<div class="*-image-placeholder">` sections with actual images
   - Use `` tags or update CSS background images

3. **Customize colors** in `styles.css`
   - Edit CSS variables in `:root` (lines 8-15)
   - Primary color, secondary color, text colors, etc.

4. **Update calendar dates** in `script.js`
   - Wedding date on line 3
   - Calendar export dates (lines 66, 67, 79, 80, 104, 105)

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## License

Free to use and customize for personal wedding invitations.
