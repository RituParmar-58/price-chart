# React Chart Dashboard

This project is a simple React-based dashboard that displays a financial summary and a line chart using `chart.js` and `react-chartjs-2`. It provides a user interface to visualize financial data over different durations, including the price fluctuations for the current week.

## Features

- **Header**: Displays the current price along with the percentage change.
- **Summary Section**: A navigation bar with buttons for accessing different sections like Summary, Chart, Statistics, Analysis, and Settings.
- **Duration Selector**: Buttons to select different time periods for viewing the data (1 day, 1 week, 1 month, 6 months, 1 year, and maximum).
- **Chart**: A responsive line chart to visualize the data over a selected time period, showing price movements with an area chart.

## Components

- **ChartComponent**: This component renders the line chart with the price data for each day of the week. It uses `chart.js` to display the chart and `react-chartjs-2` for integration with React.
- **Header**: Displays the current price and percentage change.
- **Summary**: Provides a button navigation for different sections of the dashboard.
- **Duration**: A set of buttons allowing the user to select a time duration for viewing the chart.

## Libraries Used

- `react`: JavaScript library for building user interfaces.
- `chart.js`: A library for creating charts and visualizations.
- `react-chartjs-2`: React wrapper for `chart.js`.

## Setup Instructions
Make sure you have Node.js and npm installed on your system.
1. **Clone the repository**:

   git clone [https://github.com/your-username/react-dashboard.git](https://github.com/RituParmar-58/price-chart.git)
   


2. Install dependencies:

npm install


3. Run the application:

npm start


The app will start on `http://localhost:3000`.

