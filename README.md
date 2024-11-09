# Gadget Haven

## Project Overview
Gadget Haven is a modern, user-focused platform built to showcase an expertly curated collection of the latest tech gadgets. Designed for tech enthusiasts, Gadget Haven enables users to effortlessly explore categories, view detailed product information, and save their favorite items for future reference, making it a premier destination for discovering cutting-edge technology.

## Live Demo
[Visit Gadget Haven](https://gadgetheaven123.netlify.app/)

## Requirement Document
[Requirements and Specifications](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

## Key React Concepts Applied
- **JSX (JavaScript XML)**: Utilized to blend HTML-like syntax within JavaScript, streamlining the UI structure.
- **Components**: The application comprises reusable, modular functional components, each representing a unique aspect of the UI.
- **State Management (`useState`)**: Manages local component state, enabling dynamic responses to user actions.
- **Effect Hook (`useEffect`)**: Handles side effects, such as API requests, ensuring the UI updates based on external data.
- **Event Handling**: Employs React’s synthetic event system to manage user inputs like clicks and form actions.
- **React Router**: Facilitates smooth page transitions within the SPA framework, enhancing user experience.
- **`useNavigate`**: Supports programmatic navigation, directing users based on their interactions.
- **`useParams`**: Fetches URL parameters to display unique content, such as individual gadget details.
- **`NavLink`**: Provides styled navigation links with active-state styling to improve usability.

## Data Management Strategy
Gadget Haven uses local storage to persist shopping cart and wishlist data, enhancing user convenience by maintaining these lists across sessions. Key functions include:
- **Retrieving Saved Items**: Functions retrieve cart and wishlist items from local storage, allowing users to resume browsing without losing saved selections.
- **Adding Items**: Functions add gadgets to the cart or wishlist, checking for duplicates to prevent redundant entries. If an item already exists, a toast notification informs the user.
- **Removing Items**: Functions delete items from the cart or wishlist, updating local storage accordingly.

## Key Features
- **Browse Gadgets**: Users can explore a broad range of gadgets, organized by category, with each item displaying detailed specifications.
- **Favorite Gadgets**: A heart icon allows users to save gadgets to a favorites list for easy access and comparison.
- **Detailed Gadget Pages**: Each gadget has a dedicated page featuring high-quality images and in-depth descriptions.
- **Intuitive Navigation**: Clear navigation facilitates seamless movement across the platform.
- **Efficient Checkout**: Users can add items to their cart and proceed to checkout, ensuring a smooth purchasing experience.
