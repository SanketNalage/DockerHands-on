# Docker Network Guide

## 🌐 Default Docker Networks Overview

Docker provides three built-in network drivers that handle container networking differently:

| Network Type | Description | Use Case | Example Command |
|--------------|-------------|----------|-----------------|
| **`bridge`** | Default private network with NAT | General purpose containers | `docker run -p 8080:80 nginx` |
| **`host`** | Shares host's network namespace | High-performance networking | `docker run --network=host nginx` |
| **`none`** | No networking enabled | Security-sensitive workloads | `docker run --network=none alpine` |

## 🔍 Detailed Network Comparison

### `bridge` Network (Default)
- **IP Assignment**: Containers get IPs from `172.17.0.0/16` range
- **Port Mapping**: Requires explicit `-p` flag mapping
- **Inter-container Communication**: All containers on same bridge can communicate
- **Isolation Level**: Medium

```sh
# Example bridge network inspection
docker network inspect bridge
```

# Docker Network Types Explained

## 🔧 Key Differences Explained

### 1. `host` Network
🖥️ **How it works**:  
Your container shares the host machine's network stack directly, becoming a full "citizen" of the host's network.

🌐 **Example**:  
If your host has IP `192.168.1.100`, your container will use the exact same IP address.

⚠️ **Important Notes**:
- No network isolation from host
- Port conflicts possible (containers can't reuse host's ports)
- Best for high-performance networking needs

```sh
docker run --network=host nginx
```

## 🌉 2. `bridge` Network (Default)

### 🔧 How it works
Docker creates a private internal network (like a "mini-internet") with NAT translation between containers and the host.

### 📡 Network Details
- **IP Assignment**:  
  Containers get auto-assigned IPs from `172.17.0.0/16` range (e.g., `172.17.0.2`, `172.17.0.3`)
- **DNS Resolution**:  
  Built-in DNS allows containers to communicate using service names
- **External Access**:  
  Requires explicit port mapping using `-p` flag

### 🔄 Communication
| Type                      | Description |
|---------------------------|-------------|
| **Inter-container**       | Containers on the same bridge can communicate by default |
| **Host-to-container**     | Only possible through exposed ports |
| **Internet access**       | Outbound allowed, inbound requires port mapping |

### 🛠️ Basic Usage
```sh
# Run container with port mapping
docker run -d -p 8080:80 --name web nginx

# Verify network
docker network inspect bridge
```

## 3.none Network
The container gets a network stack but no interfaces
Like a computer with no network cables plugged in
Useful for:
Batch jobs that need no network
Security-sensitive processes
Testing network-free scenarios


## 🚫 Cannot Be Removed
- All three are default Docker networks that cannot be deleted:
```sh
docker network rm host  # Error
docker network rm bridge  # Error
docker network rm none  # Error
```

## 💡 Pro Tip
- Create custom networks for better control:
```sh
docker network create my_network
docker run --network=my_network my_app
```