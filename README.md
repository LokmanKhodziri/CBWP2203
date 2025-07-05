# Virtual Career Fair 2025

A modern, responsive web application for hosting virtual career fairs, connecting students and job seekers with leading employers.

## 🌟 Features

### 📱 **Fully Responsive Design**

- **Mobile-first approach** with breakpoints at 480px, 768px, and 1024px
- **Touch-friendly interface** optimized for mobile devices
- **Adaptive layouts** that work seamlessly across all screen sizes
- **Mobile navigation** with hamburger menu

### 🎯 **Core Functionality**

- **Home Page**: Hero section with event overview and featured companies
- **About Page**: Institution information, career fair history, success stories, and partnerships
- **Companies Page**: Interactive company listings with industry filters and search
- **Schedule Page**: Event timeline with filtering by event type
- **Resources Page**: Career development resources, templates, and video tutorials
- **Registration Page**: Comprehensive registration form with validation

### 🎨 **Design Features**

- **Modern UI/UX** with clean, professional design
- **Consistent color scheme** using blue (#3498db) and dark gray (#2c3e50)
- **Smooth animations** and hover effects
- **Accessible design** with proper contrast and navigation

## 📁 Project Structure

```
CBWP2203/
├── index.html              # Home page
├── about.html              # About page
├── companies.html          # Companies page
├── schedule.html           # Schedule page
├── resources.html          # Resources page
├── registration.html       # Registration page
├── css/
│   ├── base.css           # Base styles and typography
│   ├── layout.css         # Layout and navigation
│   ├── utilities.css      # Utility classes
│   ├── home.css           # Home page styles
│   ├── about.css          # About page styles
│   ├── companies.css      # Companies page styles
│   ├── schedule.css       # Schedule page styles
│   ├── resources.css      # Resources page styles
│   └── registration.css   # Registration page styles
├── js/
│   ├── mobile-nav.js      # Mobile navigation functionality
│   ├── home.js            # Home page scripts
│   ├── about.js           # About page scripts
│   ├── companies.js       # Companies page scripts
│   ├── schedule.js        # Schedule page scripts
│   ├── resources.js       # Resources page scripts
│   └── registration.js    # Registration page scripts
└── src/
    ├── HERO.png           # Hero background image
    ├── institution.jpg    # Institution image
    ├── registration.png   # Registration image
    ├── man-avatar.png     # Success story avatar
    ├── woman-avatar.png   # Success story avatar
    ├── jabil.png          # Company logo
    ├── lion-group.png     # Company logo
    ├── stellar-med.png    # Company logo
    ├── seek.png           # Company logo
    ├── KPT-min.png        # Partner logo
    ├── BIM-min.jpg        # Partner logo
    ├── MBOT-min.png       # Partner logo
    └── JOBSTREET-min.png  # Partner logo
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 481px - 768px
- **Desktop**: 769px and above

### Mobile Features

- **Hamburger navigation** with smooth animations
- **Touch-friendly** buttons and form elements
- **Optimized typography** for mobile reading
- **Responsive images** that scale appropriately
- **Mobile-optimized** tables with horizontal scroll

### Tablet Features

- **Adaptive layouts** that utilize tablet screen space
- **Touch-optimized** interface elements
- **Responsive grids** that adjust to tablet dimensions

## 🎨 Design System

### Color Palette

- **Primary Blue**: #3498db
- **Dark Blue**: #2980b9
- **Dark Gray**: #2c3e50
- **Light Gray**: #f8f9fa
- **Success Green**: #28a745
- **Warning Orange**: #ffc107
- **Danger Red**: #dc3545

### Typography

- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Responsive scaling** for different screen sizes
- **Consistent line heights** for readability

### Components

- **Cards**: Consistent styling with shadows and hover effects
- **Buttons**: Multiple styles (primary, secondary, success, danger)
- **Forms**: Responsive form elements with validation
- **Navigation**: Mobile-friendly navigation system

## 📄 Pages Overview

### Home Page (`index.html`)

- **Hero section** with background image and call-to-action
- **Announcement banner** with key event dates
- **Event overview** with benefits and target audience
- **Featured companies** grid

### About Page (`about.html`)

- **Institution information** with responsive layout
- **Career fair history** timeline
- **Success stories** with testimonials
- **Partnership section** with partner logos

### Companies Page (`companies.html`)

- **Industry filters** for browsing companies
- **Company cards** with job openings
- **Search functionality** for finding specific companies
- **Responsive grid** layout

### Schedule Page (`schedule.html`)

- **Event timeline** organized by day
- **Filter buttons** for event types
- **Responsive tables** with registration buttons
- **Important notes** section

### Resources Page (`resources.html`)

- **Resource categories** (Resume, Cover Letters, Interviews, Career Development)
- **Video tutorials** section
- **Additional resources** with external links
- **Responsive grid** layouts

### Registration Page (`registration.html`)

- **Multi-section form** with validation
- **Responsive form layout** for mobile devices
- **Success modal** and confirmation
- **Registration process** guide

## 🔧 Customization

### Adding New Companies

1. Edit `companies.html`
2. Add new company cards following the existing structure
3. Update company images in the `src/` directory
4. Add company data to the filter system

### Updating Event Schedule

1. Edit `schedule.html`
2. Modify the schedule tables for each day
3. Update event details, times, and speakers
4. Ensure proper data-category attributes for filtering

### Modifying Styling

1. Edit the appropriate CSS file in the `css/` directory
2. Follow the existing responsive design patterns
3. Test changes across different screen sizes
4. Maintain consistency with the design system

## 📱 Mobile Navigation

The mobile navigation system includes:

- **Automatic hamburger menu** generation
- **Smooth animations** for menu transitions
- **Touch-friendly** interface
- **Auto-close** functionality
- **Responsive behavior** that adapts to screen size

### JavaScript Features

- **Mobile menu toggle** with icon changes
- **Smooth scrolling** for anchor links
- **Form loading states** with user feedback
- **Touch support** for mobile devices
- **Prevent zoom** on double tap (iOS)

## 🎯 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile browsers**: iOS Safari, Chrome Mobile

## 📝 Development Notes

### CSS Architecture

- **Modular CSS** with separate files for each page
- **Responsive design** using CSS Grid and Flexbox
- **Mobile-first** approach with progressive enhancement
- **Consistent naming** conventions

### JavaScript Features

- **Vanilla JavaScript** for compatibility
- **Event-driven** architecture
- **Progressive enhancement** approach
- **Touch and mouse** event handling

### Performance Optimizations

- **Optimized images** for web delivery
- **Minimal JavaScript** for faster loading
- **Efficient CSS** with minimal redundancy
- **Responsive images** that scale appropriately

## 🤝 Contributing

1. Follow the existing code structure and naming conventions
2. Test changes across different devices and screen sizes
3. Ensure responsive design principles are maintained
4. Update documentation for any new features

## 📄 License

This project is created for educational purposes as part of the Virtual Career Fair 2025 initiative.

## 📞 Support

For technical support or questions about the Virtual Career Fair 2025 website, please contact the development team.

---

**Last Updated**: 2025  
**Version**: 1.0  
**Status**: Production Ready
