# Movie Project

**Movie Project** is a movie app built using React Native, Expo, TypeScript, and a custom MovieSDK. It allows users to search for movies, view movie details.

## **Getting Started**

1. Install Node.js (version 18 or higher) from **[https://nodejs.org/en/download/](https://nodejs.org/en/download/)**
2. Install Yarn (version 1.22.0 or higher) from **[https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)**
3. Clone this repository:

```
git clone https://github.com/miliracle/movie-project.git
cd movie-project

```

1. Install dependencies:

```
yarn
```

1. Start the app:

```
cd apps/movie-app
yarn start

```

1. Open the app in the Expo client or build and run it on a device.

## **Features**

- Search for movies by title, genre, or actor.
- View movie details, including poster, release date, genre, and plot.

## **Done**

- Home Page
- Search Functionality
- Movie Detail Screen
- Business Logic Separation Development: Using Yarn Workspace to:
  - Implement the MovieSDK as a seprated packaged
  - Intergrate well with the application
- Cross-Platform Compatibility:
  - The app runs smoothly on all major browsers (Chrome, Edge)
  - Support responsive
- State Manager Solution: Using Redux to manage the state

## **Todo**

- Optimize Loading Animation: Using Skeleton Effect
- Optimize Loading Image Animation
- Build the project as a cross-platform desktop app in Electron
