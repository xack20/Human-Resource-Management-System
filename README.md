# Human Resource Management System

## Overview
A comprehensive web-based Human Resource Management System (HRMS) built with Spring Boot backend and modern frontend technologies. This application streamlines HR processes including employee management, attendance tracking, leave management, payroll, and performance evaluations.

## Features
- **Employee Management**: Create, update, view, and archive employee profiles with comprehensive information
- **Attendance Tracking**: Monitor employee check-ins and check-outs
- **Leave Management**: Process leave applications with approval workflows
- **Payroll System**: Calculate salaries based on attendance, leaves, and other factors
- **Performance Evaluation**: Conduct and track employee performance reviews
- **User Management**: Role-based access control for different user types (HR, Managers, Employees)
- **Reporting**: Generate reports on various HR metrics

## Technology Stack
- **Backend**: Spring Boot, Java
- **Database**: MySQL/PostgreSQL
- **Build Tool**: Maven/Gradle
- **Frontend**: JavaScript/React/Angular (based on your implementation)
- **Authentication**: Spring Security with JWT

## Prerequisites
- JDK 11 or later
- Maven 3.6+ or Gradle 7.0+
- MySQL/PostgreSQL database
- Node.js and npm (for frontend, if applicable)

## Getting Started

### Backend Setup
1. Clone the repository

git clone https://github.com/xack20/Human-Resource-Management-System.git cd Human-Resource-Management-System/server


2. Configure the database
Edit `src/main/resources/application.properties` to set up your database connection:

spring.datasource.url=jdbc:mysql://localhost:3306/hrms_db spring.datasource.username=root spring.datasource.password=your_password


3. Build and run the application

mvn clean install mvn spring-boot:run

The backend server will start on http://localhost:8080

### Frontend Setup (if applicable)
1. Navigate to the frontend directory

cd ../client


2. Install dependencies

npm install


3. Start the development server

npm start

The frontend will be accessible at http://localhost:3000

## API Documentation
The REST API endpoints can be accessed through Swagger UI at http://localhost:8080/swagger-ui.html when the application is running.

## Database Schema
The application uses a relational database with the following core tables:
- Employees
- Departments
- Positions
- Attendance
- Leaves
- Payroll
- Performance

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Running Tests

mvn test


## Deployment
Guidelines for deploying to production environments:
1. Set up appropriate environment variables
2. Configure production database settings
3. Build for production (`mvn clean package -Pprod`)
4. Deploy the JAR file to your server

## License
This project is licensed under the Apache 2.0 License - see the LICENSE file for details.

## Acknowledgments
- Spring Boot team for the excellent framework
- The open-source community for various libraries used in this project

## Contact
- Developer: [Zakaria Hossain Foysal](https://github.com/xack20)
- Project Link: [https://github.com/xack20/Human-Resource-Management-System](https://github.com/xack20/Human-Resource-Management-System)

