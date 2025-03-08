# Easy-blogger

Easy-blogger is a full-featured blogging platform inspired by Medium.com. It allows users to create, share, comment on, and collaborate on posts.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture Overview](#architecture-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- _User Authentication & Profiles_  
  Secure registration, login, and profile management.

- _Post Management_  
  Create, edit, delete, and view posts using a rich text editor.

- _Social Interactions_

  - _Likes:_ Users can like or unlike posts.
  - _Comments:_ Engage in threaded commenting on posts.
  - _Shares:_ Easily share posts on external social media platforms.
  - _Collaboration:_ Invite collaborators to edit or suggest changes on posts.

- _Responsive, Minimalist Design_  
  A clean, Medium‑like interface optimized for both desktop and mobile devices.

- _Dashboard & Notifications_  
  User and admin dashboards to manage posts, interactions, and collaborative activities.

## Technology Stack

- _Frontend:_

  - React.js ,vite.js
  - BootStrap

- _Backend:_

  - Node.js with Express
  - MongoDB as the database

- _Authentication:_

  - JWT (JSON Web Tokens)

- _Deployment:_
  - Frontend: Vercel or Netlify
  - Backend: Heroku, AWS, or similar cloud providers

## Architecture Overview

The system is designed with a modular approach. Key processes include:

- _Manage Posts:_  
  Handles creation, editing, retrieval, and deletion of posts (stored in the Posts Database).

- _Comment Management:_  
  Processes and stores user comments (in the Comments Database).

- _Like Management:_  
  Registers user likes/unlikes and updates the Likes Database.

- _Share Management:_  
  Logs share activities and interacts with external social media APIs.

- _Collaboration Management:_  
  Manages collaborative editing and stores collaborative data in a dedicated data store.

For a more detailed view, please refer to the [Level 2 Data Flow Diagram](./DFD_Level2.png) (if available).

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- npm or yarn

### Setup Steps

1. _Clone the Repository:_

   bash
   git clone https://github.com/yourusername/Easy-blogger.git
   cd Easy-blogger

# Easy-blogger

Easy-blogger is a full-featured blogging platform inspired by Medium.com. It allows users to create, share, comment on, and collaborate on posts.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture Overview](#architecture-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication & Profiles**  
  Secure registration, login, and profile management.

- **Post Management**  
  Create, edit, delete, and view posts using a rich text editor.

- **Social Interactions**

  - **Likes:** Users can like or unlike posts.
  - **Comments:** Engage in threaded commenting on posts.
  - **Shares:** Easily share posts on external social media platforms.
  - **Collaboration:** Invite collaborators to edit or suggest changes on posts.

- **Responsive, Minimalist Design**  
  A clean, Medium‑like interface optimized for both desktop and mobile devices.

- **Dashboard & Notifications**  
  User and admin dashboards to manage posts, interactions, and collaborative activities.

## Technology Stack

- **Frontend:**

  - React.js ,vite.js
  - BootStrap

- **Backend:**

  - Node.js with Express
  - MongoDB as the database

- **Authentication:**

  - JWT (JSON Web Tokens)

- **Deployment:**
  - Frontend: Vercel or Netlify
  - Backend: Heroku, AWS, or similar cloud providers

## Architecture Overview

The system is designed with a modular approach. Key processes include:

- **Manage Posts:**  
  Handles creation, editing, retrieval, and deletion of posts (stored in the Posts Database).

- **Comment Management:**  
  Processes and stores user comments (in the Comments Database).

- **Like Management:**  
  Registers user likes/unlikes and updates the Likes Database.

- **Share Management:**  
  Logs share activities and interacts with external social media APIs.

- **Collaboration Management:**  
  Manages collaborative editing and stores collaborative data in a dedicated data store.

For a more detailed view, please refer to the [Level 2 Data Flow Diagram](./DFD_Level2.png) (if available).

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- npm or yarn

### Setup Steps

1. **Clone the Repository:**

   bash
   git clone https://github.com/yourusername/Easy-blogger.git
   cd Easy-blogger
