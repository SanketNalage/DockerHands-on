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