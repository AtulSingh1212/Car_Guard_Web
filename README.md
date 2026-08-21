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

```js
// src/config/constants.js
export const ROLES = {
  GUEST: 'guest',
  USER: 'user',
  ADMIN: 'admin',
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  WARRANTY_PLANS: '/warranty-plans',
  CHECKOUT_VEHICLE: '/checkout/vehicle',
  CHECKOUT_REVIEW: '/checkout/review',
  CHECKOUT_PAYMENT: '/checkout/payment',
  CHECKOUT_SUCCESS: '/checkout/success',
  DASHBOARD: '/dashboard',
};
```

```js
// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);       // { id, name, email, role }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // rehydrate session from token on refresh
    authService.getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const login = async (credentials) => {
    const loggedInUser = await authService.login(credentials);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const loginWithProvider = async (provider) => {
    // provider = 'google' | 'apple'
    const loggedInUser = await authService.oauthLogin(provider);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated, login, loginWithProvider, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

```js
// src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => useContext(AuthContext);
```

### Route guards

```jsx
// src/routes/PrivateRoute.jsx
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Spinner from '../components/common/Spinner';

export default function PrivateRoute() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Spinner fullScreen />;

  if (!isAuthenticated) {
    // remember where they were headed so we can send them back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
```

```jsx
// src/routes/RoleBasedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function RoleBasedRoute({ allowedRoles }) {
  const { user } = useAuth();

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />; // or a 403 page
  }

  return <Outlet />;
}
```

```jsx
// src/routes/PublicRoute.jsx
// For login/signup pages: if already logged in, skip straight to dashboard
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function PublicRoute() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
}
```

```jsx
// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import RoleBasedRoute from './routes/RoleBasedRoute';
import { ROLES } from './config/constants';

// pages...
import HomePage from './pages/public/HomePage';
import WarrantyPlansPage from './pages/public/WarrantyPlansPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import VehicleInfoPage from './pages/checkout/VehicleInfoPage';
import ReviewPage from './pages/checkout/ReviewPage';
import PaymentPage from './pages/checkout/PaymentPage';
import SuccessPage from './pages/checkout/SuccessPage';
import DashboardHome from './pages/dashboard/DashboardHome';
import AdminDashboard from './pages/admin/AdminDashboard';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/warranty-plans', element: <WarrantyPlansPage /> },
      // ...about, faq, contact
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          { path: '/login', element: <LoginPage /> },
          { path: '/signup', element: <SignupPage /> },
        ],
      },
    ],
  },
  {
    // checkout flow — guarded
    element: <MainLayout />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          { path: '/checkout/vehicle', element: <VehicleInfoPage /> },
          { path: '/checkout/review', element: <ReviewPage /> },
          { path: '/checkout/payment', element: <PaymentPage /> },
          { path: '/checkout/success', element: <SuccessPage /> },
        ],
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: '/dashboard', element: <DashboardHome /> },
          {
            element: <RoleBasedRoute allowedRoles={[ROLES.ADMIN]} />,
            children: [
              { path: '/admin', element: <AdminDashboard /> },
            ],
          },
        ],
      },
    ],
  },
]);
```

---

## 3. The Warranty Card → Login → Payment Flow

This is the key UX behavior you described: clicking a plan card sends a **guest** to login/signup first, but sends a **logged-in user** straight to payment/checkout.

```jsx
// src/components/warranty/WarrantyPlanCard.jsx
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useContext } from 'react';
import { WarrantyFlowContext } from '../../context/WarrantyFlowContext';
import Button from '../common/Button';

export default function WarrantyPlanCard({ plan }) {
  const { isAuthenticated } = useAuth();
  const { setSelectedPlan } = useContext(WarrantyFlowContext);
  const navigate = useNavigate();

  const handleSelectPlan = () => {
    setSelectedPlan(plan); // persist choice so it survives the login redirect

    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/checkout/vehicle', plan } });
      return;
    }

    navigate('/checkout/vehicle');
  };

  return (
    <div className="plan-card">
      <h3>{plan.name}</h3>
      <p className="price">${plan.price}/year</p>
      <ul>
        {plan.features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <Button onClick={handleSelectPlan}>Select Plan</Button>
    </div>
  );
}
```

```jsx
// src/context/WarrantyFlowContext.jsx
import { createContext, useState } from 'react';

export const WarrantyFlowContext = createContext(null);

export function WarrantyFlowProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = useState(() => {
    const saved = sessionStorage.getItem('selectedPlan');
    return saved ? JSON.parse(saved) : null;
  });
  const [vehicleData, setVehicleData] = useState(null);

  const persistPlan = (plan) => {
    setSelectedPlan(plan);
    sessionStorage.setItem('selectedPlan', JSON.stringify(plan));
  };

  return (
    <WarrantyFlowContext.Provider value={{ selectedPlan, setSelectedPlan: persistPlan, vehicleData, setVehicleData }}>
      {children}
    </WarrantyFlowContext.Provider>
  );
}
```

On the **Login page**, after a successful login, redirect back to where the user came from:

```jsx
// src/pages/auth/LoginPage.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from '../../components/auth/LoginForm';
import SocialAuthButtons from '../../components/auth/SocialAuthButtons';

export default function LoginPage() {
  const { login, loginWithProvider } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectAfterLogin = () => {
    const destination = location.state?.from || '/dashboard';
    navigate(destination, { replace: true });
  };

  const handleLogin = async (credentials) => {
    await login(credentials);
    redirectAfterLogin();
  };

  const handleSocial = async (provider) => {
    await loginWithProvider(provider);
    redirectAfterLogin();
  };

  return (
    <div className="login-card">
      <LoginForm onSubmit={handleLogin} />
      <SocialAuthButtons onSelect={handleSocial} />
    </div>
  );
}
```

```jsx
// src/components/auth/SocialAuthButtons.jsx
export default function SocialAuthButtons({ onSelect }) {
  return (
    <div className="social-auth">
      <button onClick={() => onSelect('google')} className="btn-social">
        <img src="/assets/icons/google.svg" alt="" /> Google
      </button>
      <button onClick={() => onSelect('apple')} className="btn-social">
        <img src="/assets/icons/apple.svg" alt="" /> Apple
      </button>
    </div>
  );
}
```

> Backend note: Google/Apple sign-in is usually done via Firebase Auth, Auth0, or Supabase Auth rather than hand-rolled OAuth — much less to maintain. `loginWithProvider` in `authService.js` would call whichever provider SDK you choose.

---

## 4. Multi-Step Checkout Form (Vehicle Info → Review → Payment)

Use one shared hook to manage the flow so state persists across steps and each page stays simple.

```js
// src/hooks/useMultiStepForm.js
import { useState } from 'react';

export function useMultiStepForm(steps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => Math.min(i + 1, steps.length - 1));
  const back = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  const goTo = (i) => setCurrentIndex(i);

  return {
    step: steps[currentIndex],
    currentIndex,
    isFirst: currentIndex === 0,
    isLast: currentIndex === steps.length - 1,
    next,
    back,
    goTo,
  };
}
```

Vehicle form uses a generic `useForm` hook so it's reusable for other forms (contact form, callback request form, etc.):

```js
// src/hooks/useForm.js
import { useState } from 'react';

export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setValues((v) => ({ ...v, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (onValid) => (e) => {
    e.preventDefault();
    const validationErrors = validate ? validate(values) : {};
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) onValid(values);
  };

  return { values, errors, handleChange, handleSubmit, setValues };
}
```

```jsx
// src/pages/checkout/VehicleInfoPage.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { WarrantyFlowContext } from '../../context/WarrantyFlowContext';
import VehicleInfoForm from '../../components/warranty/VehicleInfoForm';

export default function VehicleInfoPage() {
  const { setVehicleData, selectedPlan } = useContext(WarrantyFlowContext);
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    setVehicleData(data);
    navigate('/checkout/review');
  };

  return (
    <div className="checkout-grid">
      <VehicleInfoForm onSubmit={handleSubmit} />
      {/* right sidebar: <SelectedPlanSummary plan={selectedPlan} /> */}
    </div>
  );
}
```

`VehicleInfoForm.jsx` maps directly to your uploaded screenshot: Year/Make/Model/Trim, VIN with validation, mileage, condition dropdown, then a 4–8 image `FileUpload` grid (Front/Rear/Left/Right views). Keep VIN validation in `utils/validators.js` (17-char alphanumeric, no I/O/Q).

---

## 5. Payment Integration

Keep the PSP SDK isolated inside `paymentService.js` so swapping Stripe/PayPal/Razorpay later doesn't touch your components.

```js
// src/services/paymentService.js
import api from '../config/axios';

export default {
  createPaymentIntent: (payload) => api.post('/payments/intent', payload).then(r => r.data),
  confirmPayment: (payload) => api.post('/payments/confirm', payload).then(r => r.data),
};
```

```jsx
// src/pages/checkout/PaymentPage.jsx (Stripe Elements example)
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentMethodForm from '../../components/warranty/PaymentMethodForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function PaymentPage() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentMethodForm />
    </Elements>
  );
}
```

`PaymentMethodForm.jsx` handles card vs PayPal toggle (matches your screenshot), calls `paymentService.createPaymentIntent`, confirms with Stripe, then on success calls `planService.activateContract()` and routes to `/checkout/success`.

**Never** store raw card numbers in your own state/DB — let Stripe Elements/PayPal SDK tokenize it. That keeps you out of PCI-DSS scope.

---

## 6. Reusable Components Reference

| Component | Used in |
|---|---|
| `Button`, `Input`, `Select`, `Card`, `Modal` | everywhere |
| `Accordion` / `FAQAccordionItem` | FAQ page (expands downward on click, exactly like your screenshot) |
| `FileUpload` | vehicle images, claim photo evidence |
| `StepIndicator` | checkout flow progress |
| `SocialAuthButtons` | login + signup |
| `ResourceCard` | Warranty Brochure / Claim Guide / T&C / Coverage Guide tiles |
| `SupportInfoBox` | the small "1 login, 1 paragraph, then direct support" box |
| `LiveChatWidget` | floating, mounted once in `MainLayout`, controlled via `UIContext` |

```jsx
// src/components/common/Accordion.jsx
import { useState } from 'react';

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="accordion">
      {items.map((item) => (
        <div key={item.id} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
          >
            {item.question}
            <span>{openId === item.id ? '−' : '+'}</span>
          </button>
          {openId === item.id && (
            <div className="accordion-body">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
```

```jsx
// src/components/support/SupportInfoBox.jsx
import ResourceCard from './ResourceCard';

export default function SupportInfoBox() {
  return (
    <div className="support-box">
      <p>
        Need help with a claim or your coverage? Our support team is
        available 24/7 to assist you.
      </p>
      <div className="resource-links">
        <ResourceCard title="Warranty Brochure" href="/docs/brochure.pdf" />
        <ResourceCard title="Claim Guide" href="/docs/claim-guide.pdf" />
        <ResourceCard title="Terms & Conditions" href="/terms" />
        <ResourceCard title="Coverage Guide" href="/docs/coverage-guide.pdf" />
      </div>
      <a href="/faq" className="direct-support-link">Direct Support / FAQ →</a>
    </div>
  );
}
```

```jsx
// src/components/support/LiveChatWidget.jsx
import { useContext } from 'react';
import { UIContext } from '../../context/UIContext';

export default function LiveChatWidget() {
  const { chatOpen, toggleChat } = useContext(UIContext);
  return (
    <div className="live-chat-widget">
      <button className="chat-fab" onClick={toggleChat}>💬</button>
      {chatOpen && (
        <div className="chat-panel">
          {/* embed Intercom / Crisp / Tawk.to iframe, or your own socket chat */}
        </div>
      )}
    </div>
  );
}
```

Mount `<LiveChatWidget />` and `<VideoSection />` once in `MainLayout.jsx` (or just the FAB globally) so they're available site-wide without re-implementing per page.

---

## 7. Dashboard (Post-Login Area)

Matches your last screenshot: sidebar nav + main welcome banner + vehicle card + active contract + quick actions.

```jsx
// src/layouts/DashboardLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import DashboardTopbar from '../components/layout/DashboardTopbar';

export default function DashboardLayout() {
  return (
    <div className="dashboard-shell">
      <Sidebar />
      <div className="dashboard-main">
        <DashboardTopbar />
        <Outlet />
      </div>
    </div>
  );
}
```

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