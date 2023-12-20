# Shortener Documentation

This document outlines the functionalities of the implemented user registration, login, and URL shortening features in the application.

## User Registration

### Register Endpoint

To register a new user, send a `POST` request to the `/register` endpoint with the following parameters:

- **Username:** The desired username for the new user.
- **Email:** The email address of the new user.
- **Password:** The password for the new user.

#### Example Request:

```json
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "secure_password"
}

```

#### Example Response:

```
{
  "registration": "Successful",
  "message": "User registered successfully"
}

```

# User Login

## Login Endpoint

To log in, send a POST request to the `/login` endpoint with the following parameters:

- **Email:** The email address of the user.
- **Password:** The password for the user.

### Example Request:

```json
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "secure_password"
}

```

### Example Response:

```
{
  "login": "Successful",
  "token": "your_generated_token_here"
}

```

## URL Shortener

### Shorten URL Endpoint

To shorten a URL, send a `POST` request to the `/shorten` endpoint with the following parameter:

- **Original URL:** The lengthy URL to be shortened

#### Example Request.

```
Content-Type: application/json
Authorization: your_generated_token_here

{
  "originalUrl": "https://www.example.com/long-url-path"
}

```

#### Example Response

```
{
  "originalUrl": "https://www.example.com/long-url-path",
  "shortUrl": "http://localhost:8080/lleO5p3Ta"
}
```

# Redirecting to Original URL:

To access the original URL, visit the generated short URL. For example:

```
http://localhost:8080/lleO5p3Ta

```

## Installation Guide for Node.js Project

To integrate the provided Node.js project into your environment, follow these steps:

1. **Clone the Repository:**

   - Clone the Git repository containing the Node.js project using the following command:

     ```bash
     git clone https://github.com/hariomfw21/GuruCool-URLShortener.git
     ```

2. **Navigate to the Project:**

   - Change into the project directory:

     ```bash
     cd GuruCool-URLShortener
     ```

3. **Install Dependencies:**

   - Make sure you have Node.js installed on your machine. If not, download and install it from [Node.js](https://nodejs.org/).
   - Run the following command to install project dependencies:

     ```bash
     npm install
     ```

4. **Configure the Project:**

   - Open the Node.js file or configuration files in a text editor of your choice.
   - Review and update any configuration settings, such as API endpoints, credentials, or other relevant parameters.

5. **Run the Application:**

   - Execute the following command to run the Node.js application:

     ```bash
     node index.js
     ```

6. **Customization (Optional):**
   - Feel free to customize the Node.js files to meet your specific implementation and requirements.

# Thank You!

Thank you for choosing our API documentation template. We're thrilled to assist you in integrating our services. If you have any questions or need further assistance, feel free to reach out to our support team.
