# ProductivityPlanner

A webapp for personal productivity using Pomodoro technique.

## Getting started

Run ‘npm install‘ Run ‘npm start‘

## Deployment to Firebase

This project is automatically deployed to Firebase Hosting when changes are pushed to the master branch. The deployment is handled by a GitHub Actions workflow.

### Setting up Firebase deployment

To set up Firebase deployment for this project:

1. Install Firebase CLI globally:
   ```
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```
   firebase login
   ```

3. Generate a CI token for GitHub Actions:
   ```
   firebase login:ci
   ```

4. Add the token as a GitHub secret:
   - Go to your GitHub repository
   - Navigate to Settings > Secrets and variables > Actions
   - Create a new repository secret named `FIREBASE_TOKEN` with the token value

5. Make sure your Firebase configuration is set up as a GitHub secret named `FIREBASE_CONFIG` containing the environment configuration.

### Manual deployment

If you need to deploy manually:

Option 1: Using the deploy script
```
npm run deploy
```

Option 2: Step by step
1. Build the project:
   ```
   npm run build
   ```

2. Deploy to Firebase:
   ```
   firebase deploy --only hosting
   ```

## DoD

Create feature branch delivery (e.g, 'Feature/#1') Open PR to merge in 'develop'. One reviewer is required. CI steps are mandatory. Then merge accepted !
