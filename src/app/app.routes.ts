import type { Routes } from "@angular/router";
import { authGuard, guestGuard } from "@features/auth/auth.guard";
import { NotFoundComponent } from "@features/not-found/not-found.component";
import { AuthLayoutComponent } from "@layouts/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "@layouts/main-layout/main-layout.component";

export const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    canActivate: [guestGuard],
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
      },
      {
        path: "login",
        loadComponent: () =>
          import("@features/auth/login/login.component").then(
            (m) => m.LoginComponent,
          ),
      },
      {
        path: "register",
        loadComponent: () =>
          import("@features/auth/register/register.component").then(
            (m) => m.RegisterComponent,
          ),
      },
    ],
  },
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        loadComponent: () =>
          import("@features/dashboard/dashboard.component").then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: "profile",
        loadComponent: () =>
          import("@features/profile/profile.component").then(
            (m) => m.ProfileComponent,
          ),
      },
      {
        path: "deck/:deckId",
        loadComponent: () =>
          import("@features/deck/deck.component").then((m) => m.DeckComponent),
      },
    ],
  },
  // Order matters. If we put this router at the beginning,
  // Angular would use it for any route in the app.
  {
    path: "**",
    component: NotFoundComponent,
  },
];
