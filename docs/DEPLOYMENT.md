# Deployment Guide

## Overview

This guide covers deploying the NHS Cultural Competency Training Application to production environments.

## Prerequisites

- Node.js 18+ runtime
- npm or compatible package manager
- (Optional) PostgreSQL database for persistent storage
- (Optional) OpenAI API key for AI-powered scenario generation
- SSL/TLS certificate for HTTPS (recommended)

## Environment Configuration

### Required Environment Variables

```bash
# Session secret for secure session management
SESSION_SECRET=your-long-random-secret-here

# Node environment
NODE_ENV=production
```

### Optional Environment Variables

```bash
# OpenAI API key for AI scenario generation (optional)
OPENAI_API_KEY=sk-your-openai-api-key

# Database connection (for future PostgreSQL implementation)
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Port configuration (default: 5000)
PORT=5000

# Replit domains (auto-configured on Replit)
REPLIT_DOMAINS=your-replit-domain.replit.app
```

### Generating SESSION_SECRET

```bash
# Generate a secure random secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Deployment Options

### Option 1: Replit Deployment (Recommended)

The application is optimized for Replit deployment with built-in support for:
- Automatic environment variable management
- Zero-config deployment
- Automatic HTTPS
- Built-in database provisioning

#### Steps:

1. **Environment Variables**:
   - Set `SESSION_SECRET` in Secrets panel
   - (Optional) Set `OPENAI_API_KEY` in Secrets panel

2. **Deploy**:
   - Click the "Deploy" button in Replit
   - Application automatically builds and deploys
   - Access via `https://your-repl.replit.app`

3. **Custom Domain** (Optional):
   - Configure custom domain in Deployment settings
   - Update DNS records as instructed
   - SSL/TLS certificates provisioned automatically

### Option 2: Traditional Server Deployment

For deployment on VPS, cloud instances, or dedicated servers.

#### Steps:

1. **Clone Repository**:

```bash
git clone <repository-url>
cd nhs-training-app
```

2. **Install Dependencies**:

```bash
npm ci --production
```

3. **Build Application**:

```bash
npm run build
```

4. **Set Environment Variables**:

```bash
export SESSION_SECRET="your-secret-here"
export NODE_ENV="production"
export OPENAI_API_KEY="your-api-key-here"  # Optional
```

5. **Start Application**:

```bash
npm start
```

6. **Process Manager** (Recommended):

Use PM2 for production process management:

```bash
# Install PM2 globally
npm install -g pm2

# Start application
pm2 start server/index.ts --name nhs-training

# Save PM2 configuration
pm2 save

# Set up auto-restart on system reboot
pm2 startup
```

PM2 Configuration (`ecosystem.config.js`):

```javascript
module.exports = {
  apps: [{
    name: "nhs-training",
    script: "./server/index.ts",
    instances: "max",
    exec_mode: "cluster",
    env: {
      NODE_ENV: "production",
      PORT: 5000
    }
  }]
};
```

### Option 3: Docker Deployment

Deploy using Docker containers for consistent environments.

#### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --production

# Copy application code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 5000

# Set environment to production
ENV NODE_ENV=production

# Start application
CMD ["npm", "start"]
```

#### Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - SESSION_SECRET=${SESSION_SECRET}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    restart: unless-stopped
    
  # Future: PostgreSQL database
  # db:
  #   image: postgres:15-alpine
  #   environment:
  #     - POSTGRES_DB=nhs_training
  #     - POSTGRES_USER=postgres
  #     - POSTGRES_PASSWORD=${DB_PASSWORD}
  #   volumes:
  #     - postgres_data:/var/lib/postgresql/data
  #   restart: unless-stopped

# volumes:
#   postgres_data:
```

#### Deploy with Docker Compose

```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

### Option 4: Cloud Platform Deployment

#### Heroku

```bash
# Create Heroku app
heroku create nhs-training-app

# Set environment variables
heroku config:set SESSION_SECRET="your-secret-here"
heroku config:set OPENAI_API_KEY="your-api-key-here"

# Deploy
git push heroku main

# Open application
heroku open
```

#### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Set environment variables in Vercel dashboard
```

#### Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up

# Set environment variables in Railway dashboard
```

## Reverse Proxy Setup

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    # SSL Certificate
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Proxy to application
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Static assets caching
    location /assets {
        proxy_pass http://localhost:5000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Apache Configuration

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    Redirect permanent / https://your-domain.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName your-domain.com
    
    SSLEngine on
    SSLCertificateFile /path/to/cert.pem
    SSLCertificateKeyFile /path/to/key.pem
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:5000/
    ProxyPassReverse / http://localhost:5000/
    
    <Location />
        Require all granted
    </Location>
</VirtualHost>
```

## Database Migration (Future)

When migrating from in-memory storage to PostgreSQL:

### 1. Provision Database

```bash
# Using Replit
# Database auto-provisioned via Replit interface

# Using external PostgreSQL
createdb nhs_training
```

### 2. Run Migrations

```bash
# Generate migration
npm run db:generate

# Apply migrations
npm run db:push
```

### 3. Update Environment

```bash
export DATABASE_URL="postgresql://user:password@host:5432/nhs_training"
```

### 4. Update Storage Implementation

The application will automatically use PostgreSQL when `DATABASE_URL` is set.

## Health Checks

### Basic Health Endpoint

```bash
# Check if server is running
curl http://localhost:5000/

# Should return HTML or 200 OK
```

### Create Health Check Endpoint

Add to `server/routes.ts`:

```typescript
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
  });
});
```

## Monitoring

### Application Metrics

Recommended monitoring tools:
- **PM2**: Built-in monitoring for Node.js apps
- **New Relic**: Application performance monitoring
- **Datadog**: Infrastructure and application monitoring
- **Sentry**: Error tracking and reporting

### Log Management

```bash
# PM2 logs
pm2 logs nhs-training

# Docker logs
docker-compose logs -f app

# System logs (systemd)
journalctl -u nhs-training -f
```

## Security Considerations

### 1. HTTPS/SSL

**Always use HTTPS in production**:
- Use Let's Encrypt for free SSL certificates
- Configure SSL/TLS properly in reverse proxy
- Enable HSTS headers

### 2. Environment Variables

**Never commit secrets to version control**:
- Use `.env` files locally (add to `.gitignore`)
- Use platform-specific secret management in production
- Rotate secrets regularly

### 3. Rate Limiting

Implement rate limiting (future enhancement):

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

### 4. Security Headers

Install and configure Helmet:

```bash
npm install helmet
```

```typescript
import helmet from 'helmet';
app.use(helmet());
```

### 5. CORS Configuration

```typescript
import cors from 'cors';

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  credentials: true,
}));
```

## Performance Optimization

### 1. Enable Compression

```typescript
import compression from 'compression';
app.use(compression());
```

### 2. Static Asset Caching

Vite build automatically:
- Generates hashed filenames
- Enables long-term caching
- Minifies and optimizes assets

### 3. CDN Integration

For optimal performance, serve static assets via CDN:
- Upload `/dist/assets` to CDN
- Update asset URLs to CDN paths
- Configure proper cache headers

## Backup Strategy

### Current (In-Memory Storage)

No persistent data, no backup needed.

### Future (PostgreSQL)

```bash
# Automated daily backup
0 2 * * * pg_dump -U postgres nhs_training | gzip > /backups/nhs_training_$(date +\%Y\%m\%d).sql.gz

# Retention: Keep last 30 days
find /backups -type f -name "nhs_training_*.sql.gz" -mtime +30 -delete
```

## Rollback Strategy

### Using Git Tags

```bash
# Tag releases
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0

# Rollback to previous version
git checkout v1.0.0
npm ci
npm run build
pm2 restart nhs-training
```

### Using Docker Tags

```bash
# Tag images
docker tag nhs-training:latest nhs-training:v1.0.0

# Rollback
docker-compose down
docker-compose up -d nhs-training:v1.0.0
```

## Troubleshooting

### Application Won't Start

```bash
# Check logs
pm2 logs nhs-training --lines 100

# Verify environment variables
printenv | grep SESSION_SECRET

# Test build
npm run build
```

### High Memory Usage

```bash
# Monitor with PM2
pm2 monit

# Check for memory leaks
node --inspect server/index.ts
```

### Database Connection Errors

```bash
# Test database connection
psql $DATABASE_URL

# Check database logs
tail -f /var/log/postgresql/postgresql.log
```

## Post-Deployment Checklist

- [ ] Environment variables configured
- [ ] HTTPS/SSL enabled
- [ ] Health checks passing
- [ ] Monitoring configured
- [ ] Backups scheduled (if using database)
- [ ] Error tracking configured
- [ ] Rate limiting enabled
- [ ] Security headers configured
- [ ] Performance optimizations applied
- [ ] Documentation updated
- [ ] Team notified of deployment

## Support

For deployment issues:
1. Check application logs
2. Verify environment configuration
3. Review this deployment guide
4. Check health check endpoints
5. Contact development team

---

**Document Version**: 1.0.0  
**Last Updated**: 2024  
**Maintainer**: Development Team
