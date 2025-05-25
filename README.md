# Docker Essentials

Docker is a popular containerization platform that allows developers to package applications and their dependencies into lightweight, portable containers. These containers can run consistently across different environments, making software deployment more efficient and reliable.

## Table of Contents
- [Key Concepts](#key-concepts)
- [Basic Docker Commands](#basic-docker-commands)
- [Dockerfile Example](#dockerfile-example)
- [Getting Started](#getting-started)

## Key Concepts

### Container
A lightweight, standalone executable package that includes everything needed to run an application (code, runtime, libraries, environment variables).

Unlike virtual machines (VMs), containers share the host OS kernel, making them faster and more resource-efficient.

### Image
A read-only template used to create containers. Images are built from a Dockerfile (a script containing instructions).

Example: `nginx`, `ubuntu`, `python:3.9`.

### Dockerfile
A text file with commands to build a Docker image (e.g., `FROM`, `RUN`, `COPY`, `CMD`).

### Docker Engine
The core component that runs and manages containers on a host system.

### Docker Hub
A public registry (like GitHub for Docker images) where users can share and download pre-built images.

### Volumes
Persistent storage for containers (data isn't lost when a container stops).

### Networking
Docker provides network isolation, allowing containers to communicate securely.

## Dockerfile Example

```dockerfile
FROM python:3.9
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
```

## 🐳 Docker Command Cheat Sheet

### 📌 Basic Commands
| Command | Description |
|---------|-------------|
| `docker --version` | Check Docker version |
| `docker info` | Show system-wide information |
| `docker --help` | List all available commands |

### 🚀 Container Management
| Command | Description |
|---------|-------------|
| `docker run -d --name my_container nginx` | Run a container in detached mode |
| `docker ps` | List running containers |
| `docker ps -a` | List all containers (including stopped) |
| `docker stop my_container` | Stop a container |
| `docker start my_container` | Start a stopped container |
| `docker rm my_container` | Remove a container |

### 📦 Image Management
| Command | Description |
|---------|-------------|
| `docker images` | List downloaded images |
| `docker pull ubuntu` | Pull image from Docker Hub |
| `docker rmi nginx` | Remove an image |

### 🛠️ Build and Push
| Command | Description |
|---------|-------------|
| `docker build -t my_image .` | Build image from Dockerfile |
| `docker tag my_image myrepo/my_image:v1` | Tag an image |
| `docker push myrepo/my_image:v1` | Push image to registry |

### 🔗 Networking
| Command | Description |
|---------|-------------|
| `docker network ls` | List networks |
| `docker network create my_network` | Create a network |
| `docker network connect my_network my_container` | Connect container to network |

### 💾 Volume Management
| Command | Description |
|---------|-------------|
| `docker volume ls` | List volumes |
| `docker volume create my_volume` | Create a volume |
| `docker run -v my_volume:/data nginx` | Mount volume to container |

### 🏗️ Docker Compose
| Command | Description |
|---------|-------------|
| `docker-compose up -d` | Start services |
| `docker-compose down` | Stop services |
| `docker-compose logs` | View service logs |

### 📌 Variable Commands
| Command | Description |
|---------|-------------|
| `docker exec focused_yalow printenv APP_COLOR` | To checck the varibale inside the app |
| `docker exec focused_yalow env ` | To see ALL environment variables: |

### Docker Container Deployment Guide

### 🐳 Running the Blue App Container

### Basic Deployment Command
```bash
docker run -d \
  --name blue-app \
  -e APP_COLOR=blue \
  -p 38282:8080 \
  kodekloud/simple-webapp
```
## 🛠️ Command Breakdown

| Parameter               | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| `docker run`            | Creates and starts a new container                                         |
| `-d`                    | Runs container in detached mode (background)                               |
| `--name blue-app`       | Assigns the name "blue-app" to the container                               |
| `-e APP_COLOR=blue`     | Sets environment variable `APP_COLOR` to value "blue"                      |
| `-p 38282:8080`         | Maps host port 38282 to container port 8080                                |
| `kodekloud/simple-webapp` | Docker image used for the container (pulls from Docker Hub if not present) |


### 🧹 Cleanup
| Command | Description |
|---------|-------------|
| `docker container prune` | Remove stopped containers |
| `docker system prune -a` | Remove all unused objects |

---

🚀 **Happy Dockering!**
