# Deployment Guide for HosterPK.com

This guide will help you deploy your Forcyp Insights React/Vite application to hosterpk.com.

## Prerequisites

- ✅ Your domain is already registered and pointed to hosterpk.com
- ✅ You have FTP/cPanel access to your hosting account
- ✅ Node.js installed on your local machine (for building)

---

## Step 1: Build Your Production Version

1. **Open terminal/command prompt** in your project directory:
   ```bash
   cd "C:\Users\DELL\Desktop\Forcyp Insights"
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Build the production version**:
   ```bash
   npm run build
   ```

4. **Verify the build**:
   - After building, you should see a `dist` folder created
   - This folder contains all the production-ready files

---

## Step 2: Prepare Files for Upload

The `dist` folder contains everything you need to upload. It should have:
- `index.html`
- `assets/` folder (with CSS, JS, and image files)
- Other static files

---

## Step 3: Upload to HosterPK.com

### Option A: Using cPanel File Manager

1. **Login to cPanel**:
   - Go to `https://yourdomain.com/cpanel` or the cPanel URL provided by HosterPK
   - Login with your credentials

2. **Navigate to File Manager**:
   - Find and click "File Manager" in cPanel
   - Navigate to `public_html` folder (this is your website root)

3. **Clear existing files** (if any):
   - Select all files in `public_html`
   - Delete them (keep a backup if needed)

4. **Upload your files**:
   - Click "Upload" button in File Manager
   - Select ALL files from your local `dist` folder
   - Upload them to `public_html`
   - **Important**: Upload the CONTENTS of `dist` folder, not the `dist` folder itself

### Option B: Using FTP Client (FileZilla, WinSCP, etc.)

1. **Get FTP credentials** from HosterPK:
   - FTP Host: Usually `ftp.yourdomain.com` or IP address
   - FTP Username: Your cPanel username
   - FTP Password: Your cPanel password
   - Port: Usually `21` (or `22` for SFTP)

2. **Connect via FTP**:
   - Open your FTP client
   - Enter credentials and connect
   - Navigate to `public_html` folder

3. **Upload files**:
   - Navigate to your local `dist` folder
   - Select ALL files and folders inside `dist`
   - Drag and drop them to `public_html` on the server
   - Wait for upload to complete

---

## Step 4: Configure .htaccess for SPA Routing

Since this is a Single Page Application (SPA), you need to configure the server to handle client-side routing.

1. **Create `.htaccess` file** in your project root (same level as `package.json`):

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

2. **Upload `.htaccess` file**:
   - Copy the `.htaccess` file to your `dist` folder
   - Upload it to `public_html` along with other files

---

## Step 5: Verify Domain Configuration

1. **Check DNS Settings**:
   - Ensure your domain's A record points to HosterPK's server IP
   - Or ensure nameservers are set to HosterPK's nameservers
   - This should already be done if your domain is on HosterPK

2. **Check Domain in cPanel**:
   - In cPanel, go to "Addon Domains" or "Subdomains"
   - Verify your domain is properly configured

---

## Step 6: Test Your Website

1. **Visit your website**:
   - Open browser and go to `https://yourdomain.com`
   - Check if the website loads correctly

2. **Test navigation**:
   - Click through different sections
   - Test the contact form
   - Verify all images and assets load

3. **Check browser console**:
   - Press F12 to open Developer Tools
   - Check for any errors in Console tab

---

## Step 7: Enable HTTPS (SSL Certificate)

1. **In cPanel**:
   - Find "SSL/TLS" or "SSL/TLS Status"
   - Click on it

2. **Install SSL Certificate**:
   - HosterPK usually provides free SSL (Let's Encrypt)
   - Click "Run AutoSSL" or "Install SSL"
   - Wait for certificate to be issued

3. **Force HTTPS** (Optional):
   - Add this to your `.htaccess` file:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

---

## Troubleshooting

### Issue: Website shows 404 or blank page
**Solution**: 
- Verify `.htaccess` file is uploaded correctly
- Check file permissions (should be 644 for files, 755 for folders)
- Ensure `index.html` is in `public_html` root

### Issue: Images or assets not loading
**Solution**:
- Check file paths in browser console
- Verify all files from `dist` folder are uploaded
- Check file permissions

### Issue: Routing not working (404 on refresh)
**Solution**:
- Ensure `.htaccess` file is present and correct
- Contact HosterPK support to enable `mod_rewrite` module

### Issue: Contact form not working
**Solution**:
- Verify EmailJS credentials are correct
- Check browser console for errors
- Ensure EmailJS service is active

---

## Quick Deployment Checklist

- [ ] Build production version (`npm run build`)
- [ ] Create `.htaccess` file
- [ ] Upload all files from `dist` to `public_html`
- [ ] Upload `.htaccess` file
- [ ] Verify domain is pointing correctly
- [ ] Test website functionality
- [ ] Enable SSL certificate
- [ ] Test contact form
- [ ] Check mobile responsiveness

---

## File Structure After Upload

Your `public_html` should look like:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── images/
│       └── forcyp-logo.PNG
└── (other static files)
```

---

## Need Help?

If you encounter issues:
1. Check HosterPK's documentation
2. Contact HosterPK support
3. Check browser console for errors
4. Verify all files uploaded correctly

---

## Additional Notes

- **Keep your source code**: Don't delete your local project files
- **Regular backups**: Backup your `dist` folder before uploading
- **Updates**: When you make changes, rebuild (`npm run build`) and re-upload
- **EmailJS**: Make sure EmailJS is configured correctly for production

---

**Good luck with your deployment! 🚀**

