# Car Engyisi — React Architecture & Implementation Guide

Stack assumed: React + Vite, React Router v6, Context API (or Redux Toolkit/Zustand if you prefer), Axios, Tailwind CSS, Stripe (or your PSP) for payments.

---

## 1. Full Folder Structure

```
car-engyisi/
├── public/
│   └── assets/
│       ├── images/
│       └── icons/
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── router.jsx                     # central route config
│   │
│   ├── assets/                        # imported images, fonts, lottie files
│   │
│   ├── config/
│   │   ├── env.js                     # reads import.meta.env vars
│   │   ├── axios.js                   # axios instance + interceptors
│   │   └── constants.js               # ROLES, ROUTES, PLAN_TYPES enums
│   │
│   ├── context/
│   │   ├── AuthContext.jsx            # user, token, login, logout, roles
│   │   ├── WarrantyFlowContext.jsx    # selected plan/vehicle across steps
│   │   └── UIContext.jsx              # chat widget open/close, toasts
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useRole.js
│   │   ├── useForm.js                 # generic form state + validation
│   │   ├── useMultiStepForm.js        # vehicle info -> review -> payment
│   │   └── useLocalStorage.js
│   │
│   ├── routes/
│   │   ├── PublicRoute.jsx            # e.g. login page - redirect if already logged in
│   │   ├── PrivateRoute.jsx           # must be authenticated
│   │   ├── RoleBasedRoute.jsx         # must be authenticated + have role
│   │   └── routesConfig.js            # array of {path, element, roles}
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx             # Navbar + Footer (public site)
│   │   ├── AuthLayout.jsx             # centered card layout for login/signup
│   │   └── DashboardLayout.jsx        # Sidebar + Topbar (private area)
│   │
│   ├── components/
│   │   ├── common/                    # dumb, reusable, no business logic
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Select.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Accordion.jsx          # used by FAQ
│   │   │   ├── Badge.jsx
│   │   │   ├── Spinner.jsx
│   │   │   ├── FileUpload.jsx         # vehicle image upload
│   │   │   ├── StepIndicator.jsx
│   │   │   └── Toast.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── DashboardTopbar.jsx
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── SignupForm.jsx
│   │   │   ├── SocialAuthButtons.jsx  # Google + Apple buttons
│   │   │   └── ForgotPassword.jsx
│   │   │
│   │   ├── warranty/
│   │   │   ├── WarrantyPlanCard.jsx   # THE card — handles the redirect logic
│   │   │   ├── PlanComparisonTable.jsx
│   │   │   ├── VehicleInfoForm.jsx
│   │   │   ├── VehicleImageGrid.jsx
│   │   │   ├── ReviewSummary.jsx
│   │   │   ├── PaymentMethodForm.jsx
│   │   │   └── PurchaseSuccess.jsx
│   │   │
│   │   ├── support/
│   │   │   ├── FAQAccordionItem.jsx
│   │   │   ├── FAQSearch.jsx
│   │   │   ├── LiveChatWidget.jsx     # floating bottom-right widget
│   │   │   ├── ContactForm.jsx
│   │   │   ├── SupportInfoBox.jsx     # "one login one small para" box you described
│   │   │   └── ResourceCard.jsx       # brochure / claim guide / T&C / coverage guide
│   │   │
│   │   ├── media/
│   │   │   └── VideoSection.jsx       # "Watch Video" hero section
│   │   │
│   │   └── dashboard/
│   │       ├── WelcomeBanner.jsx
│   │       ├── MyVehicleCard.jsx
│   │       ├── ActiveContractCard.jsx
│   │       ├── RecentClaimsList.jsx
│   │       └── QuickActionsGrid.jsx
│   │
│   ├── pages/
│   │   ├── public/
│   │   │   ├── HomePage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── WarrantyPlansPage.jsx
│   │   │   ├── FAQPage.jsx
│   │   │   └── ContactPage.jsx
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignupPage.jsx
│   │   │
│   │   ├── checkout/                  # PRIVATE — only reachable after login
│   │   │   ├── VehicleInfoPage.jsx    # step 1
│   │   │   ├── ReviewPage.jsx         # step 2
│   │   │   ├── PaymentPage.jsx        # step 3
│   │   │   └── SuccessPage.jsx        # step 4
│   │   │
│   │   ├── dashboard/
│   │   │   ├── DashboardHome.jsx
│   │   │   ├── MyContractsPage.jsx
│   │   │   ├── MyClaimsPage.jsx
│   │   │   ├── RoadsideAssistancePage.jsx
│   │   │   ├── MyVehiclesPage.jsx
│   │   │   ├── PaymentsInvoicesPage.jsx
│   │   │   ├── NotificationsPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   │
│   │   ├── admin/                     # RBAC: role = 'admin'
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── ManageUsersPage.jsx
│   │   │   ├── ManagePlansPage.jsx
│   │   │   └── ManageClaimsPage.jsx
│   │   │
│   │   └── NotFoundPage.jsx
│   │
│   ├── services/                      # all API calls live here, never in components
│   │   ├── authService.js
│   │   ├── vehicleService.js
│   │   ├── planService.js
│   │   ├── paymentService.js
│   │   ├── claimService.js
│   │   └── faqService.js
│   │
│   ├── store/                         # (only if you use Redux Toolkit instead of Context)
│   │   ├── store.js
│   │   └── slices/
│   │       ├── authSlice.js
│   │       └── checkoutSlice.js
│   │
│   ├── utils/
│   │   ├── validators.js              # VIN validation, email, phone, card
│   │   ├── formatters.js              # currency, date, mileage
│   │   └── permissions.js             # canAccess(role, requiredRoles)
│   │
│   └── styles/
│       └── globals.css
│
├── .env
├── package.json
└── vite.config.js
```

---

## 2. Roles & Route Types (RBAC core)


`Sidebar.jsx` renders nav items conditionally based on `user.role` (e.g. only admins see a "Manage Plans" link) — reuse `permissions.js`:

```js
// src/utils/permissions.js
export const canAccess = (userRole, allowedRoles = []) =>
  allowedRoles.length === 0 || allowedRoles.includes(userRole);
```

---

## 8. Suggested Implementation Order

1. **Scaffolding** — set up folders above, install router, axios, Tailwind.
2. **Auth core** — `AuthContext`, `authService`, `PrivateRoute`/`PublicRoute`/`RoleBasedRoute`, login/signup pages with social buttons (stub OAuth first, wire Firebase/Auth0 after UI works).
3. **Public marketing pages** — Home, About, FAQ (with `Accordion`), Contact — these are pure UI, no auth needed, good for early momentum.
4. **Warranty plan selection + guarded redirect** — `WarrantyPlanCard` + `WarrantyFlowContext` + the login-redirect-back logic. Test guest vs logged-in behavior thoroughly here; it's the trickiest UX piece.
5. **Checkout flow** — Vehicle Info → Review → Payment → Success, using `useMultiStepForm`.
6. **Payment integration** — plug in Stripe/PayPal test keys, verify webhook confirms contract activation server-side (don't trust the client alone to mark payment successful).
7. **Dashboard** — once a contract exists, build out the dashboard views.
8. **Admin/RBAC extras** — add `admin` role views last, once the RBAC pattern is proven with regular users.
9. **Polish** — live chat widget, video section, resource downloads, notifications.

---

## 9. A Few Practical Notes

- **Persist the selected plan across the login redirect** using `sessionStorage` (shown above) — otherwise a guest picks a plan, logs in, and lands on checkout with no plan selected.
- **Never trust client-side role checks alone** — `RoleBasedRoute` is a UX convenience; your backend API must independently verify the JWT's role claim on every protected endpoint.
- **Confirm payment success server-side** (via PSP webhook) before activating a contract — don't flip "Active" status purely because the client reached `/checkout/success`.
- Keep all API calls inside `services/`, never inside components — makes it trivial to mock for tests and to swap backends later.

