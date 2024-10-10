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

3. **Start the application**
   In the project directory, run the following command to build and start the application:

   ```bash
   npm run start-all

   ```

4. **Run Docker Containers**
   **Note: The Keycloak container may take some time to initialize.**
   Open a new terminal window and run the following command to start the Docker container Keycloak:

   ```bash
   docker compose up

   ```

4. **Access the Application**
   Once both the application and the Docker keycloak container are running, visit the following URL in your browser:

   **http://localhost:3000**

5. **Guest - account**
   **username**: ioscrape360@gmail.com  
   **password**: 123123!Aa

   **Note: You will get server error if keycloak container is not fully running.**
