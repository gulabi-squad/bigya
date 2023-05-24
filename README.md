# Bigya:Find Experts You Need

Bigya is an expert hiring platform where users can hire experts by submitting a form. The platform allows experts to review the requests and react accordingly. This project is built using React.js for the front-end and Django REST Framework for the back-end.

## Features

- User registration and authentication
- User select required experts and send hire requests
- Expert review and response to requests
- Rate and Review the Experts
- Discussion forums for any queries
- API documentation with Swagger

## Technologies Used

- React.js
- Tailwind CSS
- Django
- Django REST Framework
- MySQL
- Redis

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)
- Python and pip (Python Package Installer)
- MySQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gulabi-squad/bigya.git
   ```

2. Change to the project directory:

   ```bash
   cd bigya
   ```

3. Set up MySQL
    - Open mysql shell
    - create the database
      ```bash
      CREATE DATABASE newbigya
      ```


4. Set up the backend:

   - Create a virtual environment (optional but recommended):

     ```bash
     source bigyavenv/bin/activate  # For Linux/Mac
     bigyavenv\Scripts\activate  # For Windows
     ```

   - Change to backend directory
    ```bash
    cd bigyaback
    ```

   - Install the Python dependencies:

     ```bash
     pip install -r requirements.txt
     ```

   - Apply database migrations:

     ```bash
     python manage.py migrate
     ```

5. Set up the frontend:

   - Change to the `frontend` directory:

     ```bash
     cd bigya-sagar
     ```

   - Install the JavaScript dependencies:

     ```bash
     npm install
     ```

### Usage

1. Start the backend server:

   ```bash
   python manage.py runserver
   ```

   The backend server will be running at `http://localhost:8000/`.

2. Start the frontend development server:

   ```bash
   npm start
   ```

   The frontend development server will be running at `http://localhost:5173/`.

3. Open your web browser and access the Bigya application at `http://localhost:5173/`.

### API Documentation

The API documentation is available at `http://localhost:8000/swagger/`. You can use Swagger UI to explore and interact with the API endpoints.

## Contributing

Thank you for considering contributing to the Bigya project! If you would like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch from the `master` branch for your feature/bug fix.
3. Make the necessary changes and commit them.
4. Push the changes to your forked repository.
5. Submit a pull request describing the changes you made.

## Contact

For any inquiries or issues, please contact the project maintainer:
- Email: teambigya@gmail.com
