# NairaSave — User Acquisition Landing Page & Savings Estimator

Welcome to the production repository for **NairaSave**, a premium, high-fidelity single-page user acquisition landing page. This platform acts as an early signup mechanism for a fictional fintech startup allowing users to build dollar-denominated wealth while effortlessly calculating equivalent value in Naira[cite: 651, 652].

This project was built from scratch as part of a high-pressure 48-hour design sprint for **Week 1 (Pre-Launch Phase)** of the **Nigerian Tech Talent Spotlight (NTTS)**[cite: 644, 648, 649].

---

## Purpose of the Application
The application is engineered to operate as a high-converting marketing framework for an upcoming mobile dollar-savings product[cite: 651]. It fulfills two central professional-grade objectives[cite: 653]:
1. **User Acquisition & Conversion Strategy:** Features a clear value proposition, prominent interactive call-to-actions (CTAs), lead capture mechanisms, and structural trust configurations to capture early user intent ("Notify Me" / "Join Waitlist")[cite: 654, 655, 665].
2. **Instant Parallel Market Calculator:** An embedded mathematical interactive widget demonstrating clean user data entries where typed USD savings inputs instantly calculate the exact local Naira valuation based on a static parallel exchange rate[cite: 655, 663].

---

## Tech Stack
This architecture completely eliminates heavy third-party utility frameworks or pre-processors (such as Tailwind) to ensure maximum layout optimization, clean script tracing, and straightforward auditing for review teams:

* **Framework Core:** React.js (Functional Components with Hooks architecture)
* **Styling Infrastructure:** Vanilla CSS3
  * Comprehensive CSS Custom Properties (`:root` layout variables) for design system alignment.
  * Fluid Flexbox and multi-axis explicit CSS Grid structures for visual alignment.
  * Mobile-defensive conditional media queries to manage device breakpoints.
* **Build System:** Vite (Optimized production asset bundles)
* **Fonts & Icons:** Google Fonts Interface ('Inter') & Material Symbols Outlined

---

## System Requirements & Specifications

To comply with the engineering protocols of the design sprint brief, the application strictly respects the following system parameters[cite: 659]:

| Requirement Area | Specification Implemented |
| :--- | :--- |
| **Layout Semantics** | Strictly HTML5 layout markup elements (`<header>`, `<main>`, `<section>`, `<footer>`) to bypass "div soup" patterns[cite: 661]. |
| **Calculator Mechanics** | Numerical float constraints mapping instantly on state adjustments without manual click/trigger button overhead[cite: 662, 664]. |
| **Hardcoded Exchange Rate** | Locked parallel rate tracking strictly at **1 USD = 1,550 NGN**[cite: 663]. |
| **Mobile Adaptability** | Viewport responsive layouts handling device constraints down to a thin 390px horizontal screen width with zero horizontal scroll breakage[cite: 662]. |
| **Touch Layout Target** | Minimum interaction bounds of 48px on form inputs and control buttons for physical device mobile usage. |

---

## Architectural Decisions & Senior Design Patterns

### 1. Derived State Optimization (Calculator Engine)
Instead of enforcing heavy synchronous lifecycle hooks or matching binary state variables (`usdAmount` and `nairaAmount` updating in tandem), the calculator implements a **Derived State pattern**. The Naira output value is evaluated on-the-fly directly inside the render cycle. When a user creates a layout entry or typing event inside the input element, React flags the variable change and renders the formatted conversion output immediately on the next layout pass—eliminating state race conditions or UI input stutter.

### 2. Desktop-First to Mobile Grid Flipping
To guarantee compatibility with Safari, Chrome, and Firefox mobile browser viewports, side-by-side elements (such as the Hero split-layout and the 3-column benefits cards) utilize a fluid percentage structure[cite: 691]. At a layout breakpoint of `768px`, the grid system automatically forces elements to stack vertically. The form components are defensively prioritized to shift above image mockups on phones, ensuring that call-to-actions are never buried beneath visual assets.

---

## Getting Started & Local Installation

Follow these steps to spin up the local development server on your machine:

### 1. Prerequisites
Ensure you have **Node.js (v18 or higher)** and **npm** installed on your terminal profile.

### 2. Installation Pipeline
Clone this repository locally, move into the directory path, and unpack the layout dependencies:
```bash
# Clone the repository
git clone [https://github.com/YOUR_GITHUB_USERNAME/nairasave-landing-page.git](https://github.com/YOUR_GITHUB_USERNAME/nairasave-landing-page.git)

# Navigate into the project folder
cd nairasave-landing-page

# Install standard React and tool packages
npm install