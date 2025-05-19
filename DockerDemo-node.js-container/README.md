# Node.js Dockerized Application

A simple Node.js application containerized with Docker that demonstrates basic Docker workflows.

![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## Features
- Node.js Express server running in a Docker container
- Proper Dockerfile configuration
- Port mapping demonstration
- Health check endpoint
- Easy deployment instructions

## Prerequisites
- Docker installed ([Install Docker](https://docs.docker.com/get-docker/))
- Node.js (optional for local development)

## Project Structure
├── Dockerfile
├── main.js
├── package.json
├── package-lock.json
└── README.md

### 1. Build the Docker Image
```bash
docker build -t node-app .
```

### 2. Stop and remove old container:
```bash
docker stop my-node-app && docker rm my-node-app
```

### 3. Run the Docker Container
```bash
docker run -d -p 8000:8000 --name my-node-app node-app
```

## 🐳 Docker Commands Cheat Sheet

### Container Management
| Command | Description | Example |
|---------|-------------|---------|
| `docker run` | Run a container from an image | `docker run -p 8000:8000 node-app` |
| `docker ps` | List running containers | `docker ps -a` (show all containers) |
| `docker stop` | Stop a running container | `docker stop my-node-app` |
| `docker start` | Start a stopped container | `docker start my-node-app` |
| `docker restart` | Restart a container | `docker restart my-node-app` |
| `docker rm` | Remove a container | `docker rm my-node-app` |
| `docker exec` | Execute command in running container | `docker exec -it my-node-app bash` |

### Image Management
| Command | Description | Example |
|---------|-------------|---------|
| `docker build` | Build an image from Dockerfile | `docker build -t node-app .` |
| `docker images` | List all images | `docker images` |
| `docker rmi` | Remove an image | `docker rmi node-app` |
| `docker pull` | Pull an image from registry | `docker pull node:18` |
| `docker push` | Push an image to registry | `docker push myrepo/node-app:latest` |

### Networking & Ports
| Command | Description | Example |
|---------|-------------|---------|
| `docker network ls` | List networks | `docker network ls` |
| `docker port` | Show port mappings | `docker port my-node-app` |

### Logs & Monitoring
| Command | Description | Example |
|---------|-------------|---------|
| `docker logs` | View container logs | `docker logs -f my-node-app` |
| `docker stats` | Show container resource usage | `docker stats` |
| `docker top` | Display running processes | `docker top my-node-app` |

### Cleanup
| Command | Description | Example |
|---------|-------------|---------|
| `docker system prune` | Remove unused data | `docker system prune -a` |
| `docker volume prune` | Remove unused volumes | `docker volume prune` |

### Useful Flags
| Flag | Description | Usage Example |
|------|-------------|--------------|
| `-d` | Detached mode (run in background) | `docker run -d node-app` |
| `-p` | Port mapping (host:container) | `docker run -p 8000:8000 node-app` |
| `-v` | Volume mounting | `docker run -v /data:/app/data node-app` |
| `-e` | Set environment variables | `docker run -e NODE_ENV=production node-app` |
| `--name` | Assign container name | `docker run --name my-node-app node-app` |
| `-it` | Interactive terminal | `docker exec -it my-node-app bash` |

💡 **Pro Tip:** Add `--rm` flag to automatically remove container when it stops:  
`docker run --rm -p 8000:8000 node-app`