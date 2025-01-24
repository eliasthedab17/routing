# **Dynamic Web Page Server with Node.js**

## **Description**
This project creates a dynamic Node.js web server that serves multiple HTML pages based on the URL. It allows users to navigate between the Home, About Us, and Contact Us pages seamlessly, providing a clean and structured experience.

---

## **Features**
1. **Dynamic Page Serving**:  
   - Serves different HTML pages (`home.html`, `aboutus.html`, `contactus.html`) depending on the requested URL.

2. **Routing**:  
   - `/` or `/home.html`: Displays the **Home** page.  
   - `/aboutus.html`: Displays the **About Us** page.  
   - `/contactus.html`: Displays the **Contact Us** page.  
   - Invalid routes return a **404 Page Not Found** message.

3. **Custom Error Handling**:  
   - Handles invalid URLs with a custom 404 message.

4. **Clean Directory Structure**:  
   - HTML files are stored in a `templates` folder for better organization and scalability.

---

## **How It Works**
1. The server is built using Node.js and listens for requests on port 3000.  
2. Based on the incoming URL, the server dynamically loads the appropriate HTML page from the `templates` folder and sends it to the client.  
3. If a user navigates to an invalid URL, the server responds with a custom 404 error message.  

---

## **Usage**
1. Start the server using the command:  
   ```bash
   node index.js
   ```
2. Open your browser and navigate to:
   - `http://localhost:3000/` or `http://localhost:3000/home.html` for the Home page.
   - `http://localhost:3000/aboutus.html` for the About Us page.
   - `http://localhost:3000/contactus.html` for the Contact Us page.
3. Navigate between the pages or test invalid URLs to see the 404 error handling.

---

## **Folder Structure**
```
project/
│
├── templates/
│   ├── home.html
│   ├── aboutus.html
│   └── contactus.html
│
├── index.js
```

---

## **Authors**
- **אליאס דבאג**  
- **נור עמאר**

--- 
