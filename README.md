# Portfolio Website

## Adding Your Profile Photo

To add your profile photo to the portfolio:

1. **Prepare your photo:**
   - Use a square image (recommended: 400x400px or higher)
   - Ensure good lighting and professional appearance
   - Save as JPG or PNG format

2. **Add the photo:**
   - Place your photo file in the same folder as `index.html`
   - Rename your photo to `profile-photo.jpg` 
   - Or update the `src` attribute in the HTML file to match your photo's filename

3. **Location in code:**
   - The profile photo is referenced in `index.html` at line ~45
   - Look for: `<img src="profile-photo.jpg" alt="Samson Jose J" class="profile-img">`

## Current Photo Status
- Currently shows a placeholder emoji (📸)
- Will automatically display your photo once `profile-photo.jpg` is added to the folder

## Features
- Animated glowing border
- Hover effects with scaling
- Status indicator showing availability
- Responsive design for mobile devices
- Professional styling with neon accents

## File Structure
```
sam portfolio/
├── index.html
├── styles.css
├── script.js
├── profile-photo.jpg (add your photo here)
└── README.md
```
