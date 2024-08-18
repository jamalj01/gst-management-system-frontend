## GST Management System

## Overview

The GST Management System is a full-stack application designed to manage Goods and Services Tax (GST) for various product categories. It allows admins to set GST rates, create products, record sales, generate bills with calculated taxes, and view sales data. Users can view products, select them for purchase, and generate bills.

## Tech Stack

Frontend: ReactJS, Ant Design
Backend: Node.js, Express
Database: MySQL
ORM: Sequelize

## Getting Started

## Prerequisites

Node.js and npm installed
MySQL server running

## Backend Setup

Clone the Repository
git clone
cd gst-management-system-backend

npm install
node server.js --> to start the BE server


## Frontend Setup

Clone the Repository
git clone
cd gst-management-system-frontend

npm i 
npm start

## How It Works
## Admin Section

Manage Categories: Admins can create, view, and update product categories, including setting GST rates.

Manage Products: Admins can create products, each associated with a category and GST rate.

Record Sales: Admins can record sales transactions, associating products with sales and generating bills.

View Sales Summary: Admins can view summaries or graphs of sales data.

## User Section

View Products: Users can browse a list of available products.

Add to Cart: Users can add products to their cart for purchase.

Generate Bills: Users can generate bills based on selected products, which includes calculated GST.

## Folder Structure

backend/ - Contains the backend application with Express and Sequelize setup.

models/ - Sequelize models for database tables.

routes/ - Express routes for handling API requests.

config/ - Database configuration and environment variables.

frontend/ - Contains the ReactJS application.

src/ - Source files for React components, services, and styles.

public/ - Public assets and HTML template.

Additional Information

## API Endpoints:

GET /categories - Fetch all categories
POST /categories - Create a new category
GET /products - Fetch all products
POST /products - Create a new product
POST /sales - Record a sale

## Frontend Components:

CreateCategory: Form to create new categories and manage GST rates.
ProductPage: Display products and allow users to add them to their cart.
BillGeneration: Generate and display bills based on selected products.

