# Intugine Dashboard

## Prerequisites

Make sure Docker is installed on your machine. You can download and install Docker from [here](https://www.docker.com/get-started).

## Running the App with Docker

### Steps:

1. **Clone the Repository**  
   First, clone the repository by running the following command:

   ```bash
   git clone https://github.com/TanithFlory/intugine-dashboard

   ```

2. **Change directory to intugine-dashboard**

   ```bash
   cd intugine-dashboard

   ```

3. **Build and Start the Containers**
   Run the following command to build and start the Docker containers for both Next.js and Keycloak:

   ```bash
   docker compose up --build

   This command will spin up two containers: one for the Next.js app and one for Keycloak.

   **Note: The Keycloak container may take some time to initialize.**

   ```

4. **Access the Application**
   Once both containers are running, visit the following URL in your browser:

**http://localhost:3000**

5. **Guest - account**
   **username**:ioscrape360@gmail.com
   **password**:123123!Aa

   **Note: You will get server error if keycloak container is not fully running.**
