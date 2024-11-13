# Installation and Running Guide

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd tulfa-test
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env` if required
   - Configure any necessary environment variables

## Running the Project

### Development Mode
```bash
npm run dev
```
- Opens development server at `http://localhost:5173`
- Includes hot module replacement
- Development-specific features enabled

### Production Build
```bash
npm run build
```
- Creates optimized production build in `dist/`
- Minifies and bundles all assets

### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally

### Deployment
```bash
npm run deploy
```
- Builds and deploys to GitHub Pages
- Accessible at: https://alexandra2888.github.io/Tulfa/

## Common Issues and Solutions

### Build Issues
- Clear `node_modules` and package-lock.json
- Run `npm install` fresh
- Check Node.js version compatibility

### Development Server Issues
- Check port availability
- Verify environment variables
- Clear Vite cache if needed

## Development Tools

### Code Quality
```bash
npm run lint
```
- Runs ESLint checks
- Ensures code style consistency