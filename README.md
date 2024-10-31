# Voice Synthesis App

## Overview

The Voice Synthesis App provides a conversational interface where users can interact with a rule-based AI that provides responses on various tech-related topics. It includes JWT-based authentication, allowing users to sign up, log in, start conversations, and retrieve conversation histories.

## Features

- **JWT Authentication**: Users must authenticate to access the conversation features.
- **User Signup and Login**: Endpoints for user signup and login to enable secure access.
- **Conversation**: Starts a new conversation with a rule-based AI response system that replies based on specific topics and keywords.
- **Conversation History**: Retrieves past conversations for logged-in users from the MongoDB database.

## API Documentation

For detailed API documentation and usage examples, visit the [API Documentation](https://documenter.getpostman.com/view/18943407/2sAY4vhNem).

## Endpoints

### Authentication

- **POST /api/v1/user/signup**: Register a new user.
- **POST /api/v1/user/login**: Log in and receive a JWT token.

### Conversations

- **POST /api/v1/conversation/converse**: Start a new conversation. (Requires a valid JWT token)
- **GET /api/v1/conversation/history**: Retrieve conversation history for the authenticated user.

## Getting Started

### Prerequisites

- **Node.js** (version 20 or later)
- **MongoDB**: A MongoDB instance for storing user and conversation data.
- **Docker** (optional, for deployment)

## Deployment

- **Docker Deployment**: Built and deployed using Docker to Render.
- **CI/CD Pipeline**: Implemented using GitHub Actions with:
  - **Docker Build**: Builds and pushes the image to Docker Hub
  - **Auto-Deploy**: Triggers auto-deployment to Render

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/voice-synthesis
   cd voice-synthesis
   ```
