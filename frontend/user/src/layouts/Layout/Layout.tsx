import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ============================================================
 * HOME
 * ============================================================ */

import { HomePage } from "@/features/home";

/* ============================================================
 * ADDRESSES
 * ============================================================ */

import {
  DeleteAddressConfirmationPage,
  AddAddressPage,
  EditAddressPage,
  SelectAddressPage,
} from "@/features/addresses";

/* ============================================================
 * CARTS
 * ============================================================ */

import {
  ShoppingCartPage,
  CheckoutDeliveryAddressPage,
  CheckoutPaymentMethodPage,
  CheckoutReviewOrderPage,
} from "@/features/carts";

/* ============================================================
 * CATEGORIES
 * ============================================================ */

import {
  CategoriesPage,
  CategoryPage,
  SearchResultsCategoriesPage,
  FilterOptionsCategoriesPage,
  FilterModalCategoriesPage,
} from "@/features/categories";

/* ============================================================
 * SUBCATEGORIES
 * ============================================================ */

import {
  SubcategoriesPage,
  SubcategoryPage,
  FilterModalSubcategoriesPage,
  FilterOptionsSubcategoriesPage,
  SearchResultsSubcategoriesPage,
} from "@/features/subcategories";

/* ============================================================
 * PRODUCTS
 * ============================================================ */

import {
  ProductDetailsPage,
  ProductGalleryPage,
  CustomerReviewsPage,
  WriteReviewPage,
} from "@/features/products";

/* ============================================================
 * ORDERS
 * ============================================================ */

import {
  OrderConfirmationPage,
  OrdersListPage,
  OrderDetailsPage,
} from "@/features/orders";

/* ============================================================
 * PROFILES
 * ============================================================ */

import {
  UserProfileDashboardPage,
  SellerProfileDashboardPage,
} from "@/features/profiles";

/* ============================================================
 * WISHLISTS
 * ============================================================ */

import { WishlistPage } from "@/features/wishlists";

/* ============================================================
 * AUTH
 * ============================================================ */

import {
  SignInPage,
  SignUpPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  OTPVerificationPage,
  OnboardingPage,
} from "@/features/auth";

/* ============================================================
 * CHECKOUT
 * ============================================================ */

import { ReviewOrderPage } from "@/features/checkout";

/* ============================================================
 * LEGAL
 * ============================================================ */

import {
  PrivacyPolicyPage,
  TermsOfSalePage,
  TermsOfUsePage,
  ReturnRefundPolicyPage,
  WarrantyPolicyPage,
  ShippingPolicyPage,
} from "@/features/legal";

/* ============================================================
 * SETTINGS
 * ============================================================ */

import {
  CurrencySettingsPage,
  DeleteAccountConfirmationPage,
  LanguageSettingsPage,
  ManageDevicesSettingsPage,
} from "@/features/settings";

/* ============================================================
 * SYSTEM
 * ============================================================ */

import {
  NotFoundPage,
  GenericErrorPage,
  ServerErrorPage,
  MaintenancePage,
  PermissionRequiredPage,
  SessionExpiredPage,
} from "@/features/system";

export const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ======================================================
         * HOME
         * ====================================================== */}

        <Route path="/" element={<HomePage />} />

        {/* ======================================================
         * AUTH
         * ====================================================== */}

        <Route path="/signin" element={<SignInPage />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route path="/verify-otp" element={<OTPVerificationPage />} />

        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* ======================================================
         * ADDRESSES
         * ====================================================== */}

        <Route
          path="/addresses/delete"
          element={<DeleteAddressConfirmationPage />}
        />

        <Route path="/addresses/add" element={<AddAddressPage />} />

        <Route path="/addresses/edit/:id" element={<EditAddressPage />} />

        <Route path="/addresses/select" element={<SelectAddressPage />} />

        {/* ======================================================
         * CARTS
         * ====================================================== */}

        <Route path="/cart" element={<ShoppingCartPage />} />

        <Route
          path="/checkout/delivery-address"
          element={<CheckoutDeliveryAddressPage />}
        />

        <Route
          path="/checkout/payment-method"
          element={<CheckoutPaymentMethodPage />}
        />

        <Route path="/checkout/review" element={<CheckoutReviewOrderPage />} />

        {/* ======================================================
         * CATEGORIES
         * ====================================================== */}

        <Route path="/categories" element={<CategoriesPage />} />

        <Route path="/categories/:id" element={<CategoryPage />} />

        <Route
          path="/categories/search"
          element={<SearchResultsCategoriesPage />}
        />

        <Route
          path="/categories/filter-options"
          element={<FilterOptionsCategoriesPage />}
        />

        <Route
          path="/categories/filter"
          element={<FilterModalCategoriesPage />}
        />

        {/* ======================================================
         * SUBCATEGORIES
         * ====================================================== */}

        <Route path="/subcategories" element={<SubcategoriesPage />} />

        <Route path="/subcategories/:id" element={<SubcategoryPage />} />

        <Route
          path="/subcategories/search"
          element={<SearchResultsSubcategoriesPage />}
        />

        <Route
          path="/subcategories/filter-options"
          element={<FilterOptionsSubcategoriesPage />}
        />

        <Route
          path="/subcategories/filter"
          element={<FilterModalSubcategoriesPage />}
        />

        {/* ======================================================
         * PRODUCTS
         * ====================================================== */}

        <Route path="/products/:id" element={<ProductDetailsPage />} />

        <Route path="/products/:id/gallery" element={<ProductGalleryPage />} />

        <Route path="/products/:id/reviews" element={<CustomerReviewsPage />} />

        <Route
          path="/products/:id/reviews/write"
          element={<WriteReviewPage />}
        />

        {/* ======================================================
         * ORDERS
         * ====================================================== */}

        <Route path="/orders" element={<OrdersListPage />} />

        <Route path="/orders/:id" element={<OrderDetailsPage />} />

        <Route
          path="/orders/confirmation"
          element={<OrderConfirmationPage />}
        />

        {/* ======================================================
         * PROFILES
         * ====================================================== */}

        <Route path="/profile" element={<UserProfileDashboardPage />} />

        <Route
          path="/seller/profile"
          element={<SellerProfileDashboardPage />}
        />

        {/* ======================================================
         * WISHLISTS
         * ====================================================== */}

        <Route path="/wishlist" element={<WishlistPage />} />

        {/* ======================================================
         * CHECKOUT
         * ====================================================== */}

        <Route path="/checkout/review-order" element={<ReviewOrderPage />} />

        {/* ======================================================
         * LEGAL
         * ====================================================== */}

        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        <Route path="/terms-of-sale" element={<TermsOfSalePage />} />

        <Route path="/terms-of-use" element={<TermsOfUsePage />} />

        <Route
          path="/return-refund-policy"
          element={<ReturnRefundPolicyPage />}
        />

        <Route path="/warranty-policy" element={<WarrantyPolicyPage />} />

        <Route path="/shipping-policy" element={<ShippingPolicyPage />} />

        {/* ======================================================
         * SETTINGS
         * ====================================================== */}

        <Route path="/settings/currency" element={<CurrencySettingsPage />} />

        <Route
          path="/settings/delete-account"
          element={<DeleteAccountConfirmationPage />}
        />

        <Route path="/settings/language" element={<LanguageSettingsPage />} />

        <Route
          path="/settings/devices"
          element={<ManageDevicesSettingsPage />}
        />

        {/* ======================================================
         * SYSTEM PAGES
         * ====================================================== */}

        <Route path="/error" element={<GenericErrorPage />} />

        <Route path="/server-error" element={<ServerErrorPage />} />

        <Route path="/maintenance" element={<MaintenancePage />} />

        <Route
          path="/permission-required"
          element={<PermissionRequiredPage />}
        />

        <Route path="/session-expired" element={<SessionExpiredPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
