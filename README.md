# Loan App Notifier

Loan App Notifier is a web application built using Fulcrum for data collection, integrated with data validation features, and a notification system. It allows users to submit loan applications through customizable forms, validates the entered data in real-time, and notifies administrators of any validation failures.

## Features

- **Data Collection:** Users can fill out loan application forms with various fields tailored to specific requirements.
- **Real-time Data Validation:** Validation rules are applied to each form field to ensure data accuracy and consistency.
- **Notification System:** Administrators are notified of any validation failures, either through a Node.js server or email.

## Installation

1. Clone the repository:
    git clone https://github.com/BlackTitanX/loanappnotifier.git

2. Install dependencies:
   cd loanappnotifier
   npm install

## Configuration

### Fulcrum Configuration

1. Log in to your Fulcrum account and create forms with the necessary fields for loan applications.
2. Define validation rules for each form field to ensure data integrity.

### Node.js Server Setup

1. Set up a Node.js server to receive notification requests from the Fulcrum application.
2. Implement API endpoints to handle notification requests and integrate with the Fulcrum application.

### Email Service Configuration

1. Choose an email service provider (e.g., SendGrid, Amazon SES) and set up credentials.
2. Configure email templates for notification emails to be sent to administrators.

## Usage

1. Start the Node.js server:
   npm start

2. Access the Fulcrum application to submit loan applications.
3. Monitor the Node.js server logs for incoming notification requests and processing.

## Security Considerations

- Ensure that data transmission between the Fulcrum application and the Node.js server is encrypted using HTTPS.
- Implement authentication mechanisms to restrict access to sensitive endpoints and data.
- Use secure email transmission protocols (e.g., SMTP with TLS) to protect sensitive information in notification emails.

## Contributing

Contributions are welcome! Please feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or support, please contact [Israel](mailto:israelperezmasle2@gmail.com).
