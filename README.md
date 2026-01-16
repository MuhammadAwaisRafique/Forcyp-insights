# Forcyp Insights

A modern, responsive cybersecurity services website built with React and Vite. This single-page application showcases Forcyp Insights' comprehensive range of technology services including cybersecurity, data science, AI/ML, web development, and digital marketing solutions.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations and 3D effects
- **Interactive Hero Section**: Engaging parallax background with animated particles
- **Service Showcase**: Comprehensive display of all services offered
- **Contact Forms**: Integrated EmailJS for seamless contact form submissions
- **Trial Request Modal**: Easy-to-use trial request functionality
- **Cookie Consent Banner**: GDPR-compliant cookie management
- **Content Protection**: Built-in protection against common developer tools and content copying
- **Interactive Map Section**: Visual representation of global presence
- **Newsletter Integration**: Email subscription functionality
- **Partner Showcase**: Display of trusted partners and clients
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **React 18.2.0**: Modern React with hooks and functional components
- **Vite 5.0.8**: Fast build tool and development server
- **React Router DOM 6.20.0**: Client-side routing (if needed)
- **EmailJS 4.4.1**: Email service integration for contact forms
- **CSS3**: Custom styling with modern CSS features
- **JavaScript (ES6+)**: Modern JavaScript features

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher recommended)
- **npm** (v7 or higher) or **yarn**

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Forcyp Insights"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (Optional, for contact form functionality)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the EmailJS configuration in `src/components/ContactModal/ContactModal.jsx`:
     ```javascript
     const EMAILJS_SERVICE_ID = 'your_service_id'
     const EMAILJS_TEMPLATE_ID = 'your_template_id'
     const EMAILJS_PUBLIC_KEY = 'your_public_key'
     ```

## 🎯 Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (automatically opens in your browser).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
Forcyp Insights/
├── public/                 # Static assets (if any)
├── src/
│   ├── assets/
│   │   └── images/        # Image assets (logos, etc.)
│   ├── components/         # React components
│   │   ├── AboutSection/  # About company section
│   │   ├── ContactModal/  # Contact form modal
│   │   ├── ContactSection/# Contact information section
│   │   ├── CookieBanner/  # Cookie consent banner
│   │   ├── Footer/        # Site footer
│   │   ├── Header/        # Navigation header
│   │   ├── Hero/          # Hero section with animations
│   │   ├── IdentitySection/# Identity protection section
│   │   ├── MapSection/    # Global presence map
│   │   ├── NewsletterSection/# Newsletter subscription
│   │   ├── NewsSection/   # News/blog section
│   │   ├── Partners/      # Partners showcase
│   │   ├── PlatformSection/# Platform features
│   │   ├── ProductsSlider/# Products carousel
│   │   ├── ServicesSection/# Services showcase
│   │   └── TrialModal/    # Trial request modal
│   ├── styles/
│   │   └── index.css     # Global styles
│   ├── utils/
│   │   └── protection.js # Content protection utilities
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── package.json          # Project dependencies
└── README.md            # This file
```

## 🎨 Key Components

### Header
- Responsive navigation menu
- Contact and Trial request buttons
- Mobile-friendly hamburger menu

### Hero Section
- Animated 3D parallax background
- Particle effects
- Call-to-action buttons
- Partners showcase

### Services Section
- Comprehensive service listings
- Interactive service cards
- Service categories:
  - Cyber Security
  - Forensic & Detective Services
  - Data Analysis & Data Science
  - Artificial Intelligence & Machine Learning
  - Web Development
  - App Development
  - SEO & Digital Marketing
  - 2D Animation & Graphics Designing

### Contact Modal
- Full-featured contact form
- EmailJS integration
- Form validation
- Error handling and success messages
- Service interest dropdown

### Trial Modal
- Trial request form
- Quick access to trial services

### About Section
- Company mission and vision
- Global reach information
- Company values and approach

### Map Section
- Interactive map visualization
- Global presence display

## 🔒 Security Features

The application includes built-in content protection features:

- **Right-click Protection**: Prevents context menu access
- **Developer Tools Protection**: Blocks common shortcuts (F12, Ctrl+Shift+I, etc.)
- **Copy Protection**: Prevents text selection and copying
- **Drag & Drop Protection**: Prevents image dragging
- **View Source Protection**: Blocks Ctrl+U shortcut
- **Console Protection**: Disables console methods in production

> **Note**: These protections are client-side only and can be bypassed by determined users. They serve as a basic deterrent.

## ⚙️ Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{to_email}}`
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{service_interest}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{reply_to}}`
   - `{{name}}`
4. Get your Public Key from EmailJS Dashboard → Account → General
5. Update the configuration in `src/components/ContactModal/ContactModal.jsx`

### Vite Configuration

The Vite configuration is located in `vite.config.js`. Default settings:
- Development server runs on port 3000
- Auto-opens browser on start
- Supports PNG, JPG, JPEG image formats

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## 🐛 Troubleshooting

### EmailJS Not Working
- Verify your EmailJS credentials are correctly set
- Check browser console for error messages
- Ensure your EmailJS template variables match the code
- Verify your EmailJS service is active

### Build Issues
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: Delete `.vite` folder if it exists
- Check Node.js version compatibility

### Port Already in Use
- Change the port in `vite.config.js`:
  ```javascript
  server: {
    port: 3001, // Change to available port
  }
  ```

## 📄 License

This project is private and proprietary. All rights reserved.

## 👥 Contact

- **Email**: Support@forcyp.com
- **Phone**: +1 (551) 325-5677 | +92 355 8753346
- **Location**: Islamabad, Pakistan
- **Office Hours**: Mon-Fri 9AM-6PM PKT

## 🙏 Acknowledgments

- Built with React and Vite
- EmailJS for contact form functionality
- Inter font family for typography

---

**Forcyp Insights** - Empowering organizations with robust security frameworks and innovative technology solutions.

