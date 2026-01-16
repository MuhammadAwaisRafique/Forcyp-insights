# Complete cPanel Deployment Guide for HosterPK.com

This is a detailed, step-by-step guide to deploy your Forcyp Insights website using cPanel on hosterpk.com.

---

## 📋 Prerequisites Checklist

Before starting, make sure you have:
- ✅ Your domain is already registered and connected to HosterPK
- ✅ Your cPanel login credentials (username and password)
- ✅ Your project files ready on your computer
- ✅ Node.js installed (for building the project)

---

## 🚀 STEP 1: Build Your Project Locally

### 1.1 Open Command Prompt/Terminal

**On Windows:**
- Press `Windows Key + R`
- Type `cmd` and press Enter
- Or search for "Command Prompt" in Start Menu

**On Mac/Linux:**
- Open Terminal application

### 1.2 Navigate to Your Project Folder

Type this command (adjust the path if your project is in a different location):

```bash
cd "C:\Users\DELL\Desktop\Forcyp Insights"
```

Press Enter.

### 1.3 Install Dependencies (First Time Only)

If you haven't installed dependencies yet, run:

```bash
npm install
```

Wait for it to complete. This may take 2-5 minutes.

### 1.4 Build Production Version

Run this command:

```bash
npm run build
```

**What happens:**
- Vite will compile and optimize your React app
- Creates a `dist` folder with production-ready files
- This may take 30 seconds to 2 minutes

### 1.5 Verify Build Success

You should see:
```
✓ built in X.XXs
```

And a new `dist` folder should appear in your project directory.

**Check the dist folder:**
- Open File Explorer
- Navigate to: `C:\Users\DELL\Desktop\Forcyp Insights\dist`
- You should see: `index.html` and an `assets` folder

---

## 📁 STEP 2: Prepare .htaccess File

### 2.1 Locate .htaccess File

The `.htaccess` file should already be in your project root folder:
- Location: `C:\Users\DELL\Desktop\Forcyp Insights\.htaccess`

### 2.2 Copy .htaccess to dist Folder

**Important:** You need to copy `.htaccess` into the `dist` folder before uploading.

1. Open File Explorer
2. Go to: `C:\Users\DELL\Desktop\Forcyp Insights`
3. Find `.htaccess` file (it might be hidden - enable "Show hidden files" in View menu)
4. Copy the `.htaccess` file
5. Paste it into the `dist` folder

**Your dist folder should now contain:**
```
dist/
├── index.html
├── .htaccess
└── assets/
    ├── (various .js files)
    ├── (various .css files)
    └── images/
```

---

## 🌐 STEP 3: Access cPanel on HosterPK.com

### 3.1 Login to HosterPK

1. **Open your web browser** (Chrome, Firefox, Edge, etc.)

2. **Go to HosterPK website:**
   - Visit: `https://hosterpk.com`
   - Or use the direct cPanel URL provided by HosterPK (usually: `https://yourdomain.com/cpanel` or `https://cpanel.hosterpk.com`)

3. **Login:**
   - Enter your **cPanel username**
   - Enter your **cPanel password**
   - Click "Log in" or press Enter

### 3.2 Navigate to File Manager

Once logged into cPanel:

1. **Look for "Files" section** in cPanel dashboard
2. **Click on "File Manager"** icon
   - It usually has a folder icon
   - Located in the "Files" section

3. **Select Document Root:**
   - A popup may appear asking "Select the document root"
   - Choose: **"public_html"** or **"public_html/yourdomain.com"**
   - Check the box: **"Show Hidden Files (dotfiles)"** (IMPORTANT!)
   - Click "Go" or "OK"

---

## 📤 STEP 4: Upload Files to cPanel

### 4.1 Navigate to public_html

In File Manager:
1. **Look at the left sidebar** - you should see a folder tree
2. **Click on "public_html"** folder
   - This is your website's root directory
   - All files here will be accessible via your domain

### 4.2 Clear Existing Files (If Any)

**If there are existing files in public_html:**

1. **Select all files:**
   - Click "Select All" button at the top
   - Or manually select files (Ctrl+A or Cmd+A)

2. **Delete them:**
   - Click "Delete" button
   - Confirm deletion in popup
   - **Note:** Keep a backup if these files are important!

**If public_html is empty, skip this step.**

### 4.3 Upload Your Files

**Method 1: Using Upload Button (Recommended for beginners)**

1. **Click "Upload" button** at the top of File Manager

2. **Upload interface opens:**
   - You'll see a file upload area

3. **Select files from your dist folder:**
   - Open File Explorer on your computer
   - Navigate to: `C:\Users\DELL\Desktop\Forcyp Insights\dist`
   - **Select ALL files and folders:**
     - Click on `index.html`
     - Hold `Ctrl` (or `Cmd` on Mac) and click on:
       - `.htaccess` file
       - `assets` folder
     - Or simply press `Ctrl+A` to select all

4. **Drag and drop:**
   - Drag the selected files into the upload area in cPanel
   - Or click "Select File" and browse to select files

5. **Wait for upload:**
   - You'll see upload progress
   - Wait until all files are uploaded (100%)
   - This may take 1-5 minutes depending on file size

6. **Close upload window:**
   - Click "Go Back" or close the upload interface

**Method 2: Using Compress/Extract (For large projects)**

1. **On your computer:**
   - Navigate to `dist` folder
   - Select all files (Ctrl+A)
   - Right-click → "Send to" → "Compressed (zipped) folder"
   - Name it: `website.zip`

2. **In cPanel File Manager:**
   - Click "Upload" button
   - Upload the `website.zip` file
   - After upload, right-click on `website.zip`
   - Select "Extract"
   - Delete the `website.zip` file after extraction

### 4.4 Verify Files Are Uploaded

In File Manager, your `public_html` should now show:
- ✅ `index.html`
- ✅ `.htaccess` (if you enabled "Show Hidden Files")
- ✅ `assets` folder

**To see hidden files:**
- Click "Settings" button in File Manager
- Check "Show Hidden Files"
- Click "Save"

---

## ⚙️ STEP 5: Set File Permissions

### 5.1 Set Permissions for Files

1. **Select all files** in public_html (Ctrl+A)

2. **Right-click** → Select "Change Permissions"

3. **Set permissions:**
   - **Files:** `644` (read/write for owner, read for others)
   - **Folders:** `755` (read/write/execute for owner, read/execute for others)

4. **Click "Change Permissions"**

**Or manually:**
- Right-click on `index.html` → Change Permissions → Set to `644`
- Right-click on `.htaccess` → Change Permissions → Set to `644`
- Right-click on `assets` folder → Change Permissions → Set to `755`

---

## 🔒 STEP 6: Configure Domain & SSL

### 6.1 Verify Domain Setup

1. **In cPanel, look for "Domains" section**
2. **Click "Addon Domains" or "Subdomains"**
3. **Verify your domain is listed:**
   - Your domain should appear here
   - If not, you may need to add it (contact HosterPK support if needed)

### 6.2 Enable SSL Certificate (HTTPS)

1. **In cPanel, find "Security" section**
2. **Click "SSL/TLS Status"** or "SSL/TLS"
3. **Find your domain in the list**
4. **Click "Run AutoSSL"** or "Issue SSL" button
5. **Wait 5-10 minutes** for SSL certificate to be issued
6. **Refresh the page** - you should see a green checkmark

**Alternative:**
- Look for "Let's Encrypt" in cPanel
- Click "Manage SSL Sites"
- Select your domain
- Click "Run AutoSSL"

---

## ✅ STEP 7: Test Your Website

### 7.1 Visit Your Website

1. **Open a new browser tab**
2. **Type your domain:** `https://yourdomain.com`
   - Replace `yourdomain.com` with your actual domain
3. **Press Enter**

### 7.2 Check Website Loading

**You should see:**
- ✅ Your Forcyp Insights homepage loads
- ✅ Logo and images display correctly
- ✅ Navigation works
- ✅ All sections are visible

**If you see errors:**
- Check browser console (F12 → Console tab)
- Verify all files uploaded correctly
- Check `.htaccess` file is present

### 7.3 Test Navigation

1. **Click on different sections:**
   - Services
   - About
   - Contact
2. **Verify smooth scrolling works**
3. **Test "Free Trial" button** - should scroll to contact section

### 7.4 Test Contact Form

1. **Scroll to Contact section**
2. **Fill out the contact form**
3. **Submit the form**
4. **Check if you receive the email** (via EmailJS)

---

## 🔧 STEP 8: Troubleshooting Common Issues

### Issue 1: Website Shows "Index of" or File List

**Problem:** `index.html` not recognized as default file

**Solution:**
1. In cPanel File Manager, go to public_html
2. Right-click on `index.html`
3. Select "Rename" - make sure it's exactly `index.html` (lowercase)
4. Refresh your website

### Issue 2: 404 Error on Page Refresh

**Problem:** `.htaccess` not working or missing

**Solution:**
1. Verify `.htaccess` file is uploaded
2. Enable "Show Hidden Files" in File Manager Settings
3. Check `.htaccess` permissions (should be 644)
4. Verify file content is correct
5. Contact HosterPK support to enable `mod_rewrite` module

### Issue 3: Images Not Loading

**Problem:** File paths or permissions incorrect

**Solution:**
1. Check `assets` folder is uploaded completely
2. Verify folder permissions (755)
3. Check file permissions (644)
4. Clear browser cache (Ctrl+F5)

### Issue 4: CSS/JavaScript Not Working

**Problem:** Assets not loading

**Solution:**
1. Open browser console (F12)
2. Check "Network" tab for failed requests
3. Verify all files in `assets` folder are uploaded
4. Check file permissions

### Issue 5: Contact Form Not Working

**Problem:** EmailJS configuration issue

**Solution:**
1. Check EmailJS credentials in code
2. Verify EmailJS service is active
3. Check browser console for errors
4. Test EmailJS configuration

### Issue 6: SSL Certificate Not Working

**Problem:** HTTPS not enabled

**Solution:**
1. Wait 10-15 minutes after enabling AutoSSL
2. Clear browser cache
3. Try accessing `http://yourdomain.com` - should redirect to HTTPS
4. Contact HosterPK support if issue persists

---

## 📝 STEP 9: Final Checklist

Before considering deployment complete, verify:

- [ ] All files uploaded to `public_html`
- [ ] `.htaccess` file is present and uploaded
- [ ] File permissions set correctly (644 for files, 755 for folders)
- [ ] Website loads at `https://yourdomain.com`
- [ ] All pages/sections accessible
- [ ] Images and assets load correctly
- [ ] Navigation works smoothly
- [ ] Contact form functional
- [ ] SSL certificate active (green padlock in browser)
- [ ] Mobile responsiveness works
- [ ] No console errors (F12 → Console)

---

## 🔄 STEP 10: Updating Your Website (Future)

When you make changes to your website:

1. **Make changes** in your local project
2. **Build again:**
   ```bash
   npm run build
   ```
3. **Delete old files** in cPanel File Manager (public_html)
4. **Upload new files** from `dist` folder
5. **Test** your website

---

## 📞 Getting Help

If you encounter issues:

1. **Check HosterPK Documentation:**
   - Visit HosterPK support/knowledge base

2. **Contact HosterPK Support:**
   - Use live chat or ticket system
   - Provide specific error messages

3. **Check Browser Console:**
   - Press F12
   - Look at Console and Network tabs
   - Take screenshots of errors

4. **Verify File Upload:**
   - Make sure all files uploaded completely
   - Check file sizes match local files

---

## 🎉 Success!

Once your website is live, you should be able to:
- ✅ Access it at `https://yourdomain.com`
- ✅ Share it with clients
- ✅ Use it for business purposes

**Congratulations on deploying your website! 🚀**

---

## Quick Reference Commands

**Build project:**
```bash
cd "C:\Users\DELL\Desktop\Forcyp Insights"
npm run build
```

**Project location:**
```
C:\Users\DELL\Desktop\Forcyp Insights
```

**Files to upload:**
```
dist/ folder contents (index.html, .htaccess, assets/)
```

**Upload destination:**
```
public_html/ in cPanel
```

---

**Need more help?** Refer to the main DEPLOYMENT.md file or contact support.

