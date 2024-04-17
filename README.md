# Personal Finance Management Application

## Overview

The Personal Finance Management Application is a web-based tool designed to help users track their income, expenses, and savings goals. The application provides a comprehensive set of features for managing finances effectively, including expense tracking, budget management, savings goal tracking, transaction analysis, and financial health assessment.

## Features

- **Expense Tracking**: Categorize and track expenses, including recurring bills, one-time purchases, and discretionary spending.
- **Budget Management**: Set budget limits for different expense categories and receive notifications when predefined thresholds are exceeded.
- **Savings Goal Tracking**: Set savings goals and track progress over time, with visual indicators and milestone notifications.
- **Transaction Analysis**: Gain insights into spending patterns and trends through interactive charts and graphs.
- **Financial Health Assessment**: Receive general recommendations and tips to improve financial literacy, manage debt, and optimize savings.
- **Secure Data Storage**: Encrypt and store user financial data securely to protect privacy and prevent unauthorized access.
- **Expense Reminders and Alerts**: Implement reminders and alerts to notify users of upcoming bill payments, due dates, and budget milestones.
- **Customizable Reporting**: Generate customized financial reports, export data to spreadsheets, and analyze financial history.
- **Integration with Financial Institutions**: Explore options for integrating with banks and financial institutions to automate transaction imports and account reconciliation.

## Installation and Setup

1. **Clone the Repository**: `git clone https://github.com/yourusername/finance-management-app.git`
2. **Install Dependencies**: `npm install`
3. **Run the Application**: `npm start`
4. **Access the Application**: Open your web browser and navigate to `http://localhost:3000`

## Deployment

The application can be deployed on a cloud platform such as Vercel, Netlify, or Heroku for easy access by users. Ensure that environment variables for sensitive information (e.g., database credentials) are properly configured before deployment.

## Documentation

- **README**: Provides setup instructions, dependencies, and an overview of the project.
- **Code Comments**: Ensure code comments are included to explain the functionality of different components and modules.
- **Function/Module Descriptions**: Provide descriptions for functions and modules to facilitate understanding and maintainability.

## Evaluation Criteria

- Adherence to project requirements.
- Cleanliness and organization of code.
- UI/UX design and usability.
- Implementation of language and OpenAI features.

## UserModel
| Field              | Type                           | Default     | Required | Description                                 |
|--------------------|--------------------------------|-------------|----------|---------------------------------------------|
| password           | String                         |             | true     | User's password                             |
| name               | String                         |             | true     | User's name                                 |
| age                | Number                         |             | true     | User's age                                  |
| gender             | String                         |             | true     | User's gender                               |
| profilePhoto       | String                         |             |          | URL of user's profile photo                 |
| email              | String                         |             | true     | User's email                                |
| userId             | String                         |             |          | User ID                                     |
| username           | String                         |             |          | User's username                             |
| phone              | String                         |             |          | User's phone number                         |
| profession         | String                         | "Other"     |          | User's profession                           |
| annualIncome       | Number                         |             | true     | User's annual income                        |
| expenses           | Array of mongoose ObjectIds    |             |          | Expenses associated with the user          |
| spentLimit         | Number                         | 1000        |          | User's spending limit                      |
| loanedFromLimit    | Number                         | 1000        |          | User's limit for loans given to others     |
| loanedToLimit      | Number                         | 1000        |          | User's limit for loans received from others|
| activeNotifications| Array                          |             |          | Active notifications for the user          |
| timestamps         | Boolean                        | true        |          | Automatically generated timestamps         |

## ExpenseModel
| Field        | Type                           | Default | Required | Description                                   |
|--------------|--------------------------------|---------|----------|-----------------------------------------------|
| userId       | ObjectId (Reference to User)   |         | true     | ID of the user associated with the expense    |
| amount       | Number                         |         |          | Amount of the expense                         |
| date         | String                         |         |          | Date of the expense                           |
| title        | String                         |         |          | Title of the expense                          |
| category     | String                         |         |          | Category of the expense                       |
| subCategory  | String                         |         |          | Subcategory of the expense                    |
| type         | String (Enum)                  |         |          | Type of expense (Spent, Earned, Loaned, etc.)|
| friendName   | String                         |         |          | Name of the friend involved in the transaction|


## Contributing

Contributions to the project are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE).
