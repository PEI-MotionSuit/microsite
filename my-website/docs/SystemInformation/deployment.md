---
sidebar_position: 10
---

# CI/CD Pipeline and Deployment

The MotionSuit system adopts a fully automated **Continuous Integration and Continuous Deployment (CI/CD)** strategy implemented with GitHub Actions. Each subsystem (backend, frontend, and sensor server) has its own independent pipeline, ensuring that changes to one component do not block or interfere with the others.

## Continuous Integration (CI)

The CI pipeline runs on every `push` or `pull request` to the `main` and `dev` branches. Before code can be merged, it must pass a **quality gate** covering three areas:

### 1. Security Audits
- **Backend**: `pip-audit` scans `requirements.txt` for known vulnerabilities in Python packages.
- **Frontend**: `pnpm audit --prod` checks production dependencies.

### 2. Static Code Analysis
- **SonarQube** performs static application security testing (SAST), detecting security code smells, SQL injection vectors, and XSS vulnerabilities.

### 3. Automated Tests

#### Backend (Pytest)
- **Unit tests**: Test individual components in isolation (authentication, API response shapes, sensor data transformation, ergonomic score computation, gamification rules, data export formatting).
- **Integration tests**: Send real HTTP requests through the full application stack, validating user workflows, alert rules, session handling, posture scoring, researcher features, and data isolation between accounts.
- Tests that require a physical Raspberry Pi are excluded from CI runs.

#### Frontend (Vitest + React Testing Library)
- Simulated browser environment with mocked authentication and sensor data providers.
- Tests cover: onboarding and authentication flow, dashboard posture widgets, alerts page (filtering, read/unread), goal and gamification management, profile and settings, admin panel, and researcher platform.
- A full production build is also executed, which performs type checking across the entire project.

## Continuous Deployment (CD)

The CD pipeline is triggered **exclusively on pushes to `main`**, ensuring only validated code reaches production. It runs in two sequential jobs:

1. **Docker image build** – An image is built for the affected subsystem and pushed to the GitHub Container Registry under the organisation’s namespace.
2. **Production deployment** – An SSH connection opens to the production server, which pulls the new image and restarts the corresponding service.

## Deployment Infrastructure
The platform is deployed at https://20.70.128.205/ and its infrastructure consists of:
- **Hosting**: The backend runs on a Microsoft Azure virtual machine (VM). This provides a public, stable IP address required for the Raspberry Pi to establish outbound WebSocket and REST connections.
- **Networking**: The Raspberry Pi operates on a local network. To securely connect both nodes without opening public firewall ports, a Tailscale mesh VPN overlay bridges them into the same logical subnet.
- **Web server**: An Nginx reverse proxy sits at the cloud perimeter, handling SSL/TLS termination (TLS 1.3) and routing API requests to the FastAPI container.


## Security & Quality Gates

Additional measures are integrated into the development pipeline:

- **Gitleaks pre‑commit hooks** – Scan all staged files for high‑entropy strings, passwords, and private certificates. Commits containing secrets are blocked locally.
- **Dependency scanning** – Already covered by `pip-audit` and `pnpm audit`.
- **Static analysis** – SonarQube enforces code quality and security rules.

## Performance & Load Testing

Beyond functional tests, the system was validated with **Locust** to simulate concurrency:

- **Nominal load (250 users)**: 109.52 requests per second with 0% failure rate.
- **Stress test (1,000 users)**: After architectural optimisations (connection pooling, atomic UPSERTs, eager loading, Gzip compression, in‑memory caching, composite indexing), the system handled 200 RPS with 0% failures.
- **Extreme tier (100,000 users)**: The infrastructure reached OS‑level limits (TCP backlog, file descriptors), but no application‑level errors occurred.