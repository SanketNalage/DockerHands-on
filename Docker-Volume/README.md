# Docker Volume Guide 🗄️

## 📌 Introduction to Docker Volumes
Volumes are the preferred mechanism for persisting data in Docker containers. Unlike bind mounts, volumes are completely managed by Docker.

### Key Features:
- Persist data beyond container lifecycle
- Share data between containers
- Better performance than bind mounts
- Work on both Linux and Windows
- Can be pre-populated with data

---

## 📂 Volume Types Comparison

| Type          | Storage Location          | Managed by Docker | Use Case                          |
|---------------|---------------------------|-------------------|-----------------------------------|
| **Named**     | `/var/lib/docker/volumes` | ✅ Yes            | Production (recommended)          |
| **Anonymous** | `/var/lib/docker/volumes` | ✅ Yes            | Temporary data                    |
| **Bind Mount**| Host filesystem           | ❌ No             | Development (code sharing)        |
| **tmpfs**     | Host memory only          | ✅ Yes            | Sensitive temporary data          |

---

## 🛠️ Volume Commands Cheat Sheet

### Basic Volume Operations
| Command | Description |
|---------|-------------|
| `docker volume create myvol` | Create named volume |
| `docker volume ls` | List all volumes |
| `docker volume inspect myvol` | Show volume details |
| `docker volume rm myvol` | Remove volume |
| `docker volume prune` | Remove unused volumes |

### Container Usage
| Command | Description |
|---------|-------------|
| `docker run -v myvol:/path/in/container` | Mount named volume |
| `docker run -v /path/on/host:/path/in/container` | Bind mount |
| `docker run --mount source=myvol,target=/app` | Preferred mount syntax |

---

## 📝 Practical Examples

### 1. Creating and Using a Named Volume
```sh
# Create volume
docker volume create app_data

# Run container with volume
docker run -d \
  --name mysql_db \
  -v app_data:/var/lib/mysql \
  mysql:8.0

# Verify data persistence
docker stop mysql_db
docker rm mysql_db
docker run -d -v app_data:/var/lib/mysql --name new_mysql mysql:8.0
```

### 2. Sharing Data Between Containers
```sh
# Create shared volume
docker volume create shared_data

# Writer container
docker run -d \
  --name writer \
  -v shared_data:/data \
  alpine sh -c "echo 'Hello World' > /data/test.txt"

# Reader container
docker run --rm \
  -v shared_data:/data \
  alpine cat /data/test.txt
```

### 3. Backup and Restore
```sh
# Backup volume to tar
docker run --rm \
  -v app_data:/source \
  -v $(pwd):/backup \
  alpine tar cvf /backup/backup.tar /source

# Restore from backup
docker run --rm \
  -v app_data:/target \
  -v $(pwd):/backup \
  alpine tar xvf /backup/backup.tar -C /target --strip 1
```

# Docker Volume Cheat Sheet 🗄️

## 🔍 Inspection Commands

| Command | Description |
|---------|-------------|
| `docker volume ls` | List all volumes |
| `docker volume inspect <volume>` | Show detailed volume info |
| `docker volume stats <volume>` | Show volume usage statistics |

## 🛠️ Management Commands

| Command | Description |
|---------|-------------|
| `docker volume create <name>` | Create new volume |
| `docker volume rm <volume>` | Remove volume |
| `docker volume prune` | Remove all unused volumes |

## 🐳 Container Volume Operations

### Basic Mounting
| Command | Description |
|---------|-------------|
| `docker run -v <volume>:/path/in/container` | Mount named volume |
| `docker run -v /host/path:/container/path` | Bind mount host directory |
| `docker run --mount source=<volume>,target=/path` | Preferred mount syntax |

### Advanced Options
| Command | Description |
|---------|-------------|
| `docker run -v <volume>:/path:ro` | Read-only mount |
| `docker run --mount type=volume,source=<vol>,target=/path,readonly` | Read-only (new syntax) |
| `docker run -v <volume>:/path:z` | SELinux shared context |
| `docker run -v <volume>:/path:Z` | SELinux private context |

## 🔄 Volume Sharing Examples

```sh
# Share between containers
docker run -v shared_vol:/data --name writer alpine touch /data/file.txt
docker run -v shared_vol:/data --name reader alpine ls /data

# Copy files to/from volume
docker cp local.txt mycontainer:/volume/path/
docker cp mycontainer:/volume/path/remote.txt ./
```

## 🧹 Cleanup Commands
```sh
# Remove unused volumes
docker volume prune

# Remove specific volume (force if in use)
docker volume rm -f <volume>

# Remove all volumes not used by containers
docker volume ls -q | xargs docker volume rm
```