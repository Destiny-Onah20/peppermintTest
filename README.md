# Product Registration System
Overview
A simple system where users can register and view a list of products. Built with MongoDB Atlas, this project includes collections, functions, and triggers to manage user data and product information effectively.

Setup
1. Run npm install 
Allows you install all packages used.
2. MongoDB Atlas Setup
Create a Cluster: Sign in to MongoDB Atlas and create a new cluster.
Collections: Set up two collections:
users: Stores registered user information.
products: Stores information about available products.
3. Atlas Triggers
Registration Log Trigger: Set up a trigger that logs each user registration event for tracking purposes.
