# Employee CRUD Management

A modern Angular application for managing employee records through a clean CRUD workflow. The project demonstrates component-based UI development, form handling, routing, reusable services, and HTTP-based data operations.

## Highlights

- Employee create, read, update, and delete workflows
- Angular components and services with a structured application layout
- Reactive/form-based employee data handling
- HTTP communication through Angular `HttpClient`
- Bootstrap-based responsive UI
- Font Awesome icons for interface actions

## Tech Stack

- **Angular 19**
- **TypeScript 5.6**
- **RxJS 7.8**
- **Bootstrap 5**
- **Angular HttpClient**
- **Font Awesome**

## Project Structure

```text
src/app/
├── components/   # UI components
├── model/        # Employee data model
└── service/      # Reusable HTTP/data services
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Angular CLI

### Install

```bash
npm install
```

### Run

```bash
ng serve
```

Open `http://localhost:4200/` in your browser.

## Data API

The current service is configured for an employee REST endpoint at:

```text
http://localhost:3000/Employee
```

Run the corresponding local API/mock server when using the application's data operations.

## Build

```bash
ng build
```

## Why This Project

This project showcases practical Angular application development: separating UI components from data services, working with forms, and integrating a frontend with HTTP-based CRUD operations.

---

**Author:** Bineet Chauhan  
**GitHub:** [Bineetch32](https://github.com/Bineetch32)
