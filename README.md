# BrickCustomizer

BrickCustomizer is a web-based tool for customizing LEGO® models. It allows you to:  
- Load and preview **LDraw models**  
- Apply custom **colors, textures, and transparency**  
- Adjust the **background and lighting**  
- View and export **UV maps** for texture customization  
- Save and upload scene state as JSON  

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (>= 18.x recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  

### Installation
```bash
git clone https://github.com/your-username/BrickCustomizer.git
cd BrickCustomizer
npm install
# or
yarn install
```

### Build & Development
```bash
npm run build
npm run preview
```

### Local Deployment
```bash
npm run dev
```
The app will be available at http://localhost:5173/BrickCustomizer/.

### GitHub Pages Deployment
```bash
npm run deploy
```
The app will be available at https://mihao2002.github.io/BrickCustomizer/.

### Usage
Toolbar
- import or export the current scene
- Upload scene customization
- Generate UV map template

Controls Panel
- Select a model from predefined options
- Set model color
- Set background color
- Toggle transparency
- Set texture through image file

Viewer
- Rotate, pan, and zoom the 3D model
- Automatically generates a UV map when the mesh is ready

Status Bar
- Displays system messages, errors, and success notifications

### Project Structure
```
src/
  components/     # React components (App, Toolbar, Viewer, ControlsPanel, StatusBar)
  models/         # Type definitions (SceneState, Status types, etc.)
  services/       # Service API
  utils/          # UV mapping, validation helpers
  main.tsx        # Main app
public/
  LDraw           # LDraw part library
  sampletextures  # Sample textures
```

