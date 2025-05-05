# Django React Pre-rendering Demo

This project demonstrates how to pre-render React components on the server side and integrate them into Django templates. This approach combines the best of both worlds: React's component-based architecture and Django's robust templating system.

## Project Overview

The project showcases a practical implementation of server-side React rendering that can be integrated into Django templates. This is particularly useful for:

-   Improving initial page load performance
-   Better SEO (Search Engine Optimization)
-   Progressive enhancement of web applications

## Setup Instructions

1. **Python Environment Setup**

    ```bash
    # Create and activate virtual environment
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate

    # Install Django dependencies
    pip install django
    ```

2. **Node.js Setup**

    ```bash
    # Install Node.js dependencies
    cd django_app
    npm install
    ```

3. **Build Process**

    ```bash
    # Build React components
    npm run build
    ```

4. **Run Django Server**
    ```bash
    python manage.py runserver
    ```

## How It Works

1. React components are written in the `static/js` directory
2. The pre-rendering script (`prerender.js`) renders these components to static HTML
3. The generated HTML is stored in `static/dist/prerendered.html`
4. Django templates include this pre-rendered HTML
5. The page loads with the pre-rendered content, then hydrates with React for interactivity

## Key Features

-   Server-side rendering of React components
-   Seamless integration with Django templates
-   Build process for generating static HTML
-   Progressive enhancement approach

## Dependencies

-   Django
-   React 18
-   Node.js
-   Babel for transpilation

## Development

To modify the React components:

1. Edit the components in `static/js`
2. Run `npm run build` to generate new pre-rendered HTML
3. Refresh your Django page to see changes

## License

MIT License
