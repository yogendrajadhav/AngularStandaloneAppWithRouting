import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { authGuard } from './guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { userResolver } from './resolvers/user.resolver';
import { FormpageComponent } from './pages/formpage/formpage.component';
import { leaveFormGuard } from './guards/leave-form.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    // {path:'**',redirectTo:''},
    {
        path: 'contact', loadComponent: () => import('./pages/contact/contact.component')
            .then((m) => m.ContactComponent)
    },
    {
        path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.component')
            .then((m) => m.dashboardRoutes),
        canActivate: [authGuard]
    },
    // {
    //     path: 'dashboard',
    //     loadChildren: () =>
    //         import('./features/dashboard/dashboard.component').then(m => m.dashboardRoutes),
    //     canActivate: [
    //         () => import('./guards/auth.guard').then(m => m.authGuard)
    //     ]
    // },
    {
        path: 'profile/:id', component: ProfileComponent,
        resolve: { user: userResolver }
    },
    // {
    //     path: 'form',
    //     component: FormpageComponent,
    //     canDeactivate: [
    //         () => import('./guards/leave-form.guard').then(m => m.leaveFormGuard)
    //     ]
    // },
    {
        path: 'form',
        component: FormpageComponent,
        canDeactivate: [leaveFormGuard]
    },
    {
        path:'admin',loadComponent:()=>import('./pages/admin/admin.component')
        .then(m=>m.AdminComponent),
        canActivate: [
            //() => import('./guards/role.guard').then(m => m.roleGuard)
            roleGuard
        ],
        data: { roles: ['admin'] }
    }

];
// Note: The `loadComponent` syntax is used for lazy loading components in Angular.
// The `canActivate` and `canDeactivate` guards are used to protect routes and prevent navigation based on certain conditions.  
// The `resolve` property allows you to fetch data before the route is activated, using resolvers.
// The `userResolver` is used to fetch user data before navigating to the profile route.
// The `authGuard` is used to protect routes that require authentication.
// The `leaveFormGuard` is used to prevent users from leaving a form with unsaved changes.
// The `dashboardRoutes` is a lazy-loaded module for the dashboard feature.
// The `routes` array defines the application's routing configuration, mapping paths to components and guards.  
// The `Routes` type is imported from `@angular/router` to define the structure of the routes array.
// The `HomeComponent`, `AboutComponent`, `ProfileComponent`, and `FormpageComponent` are components that will be displayed for their respective routes.
// The `loadChildren` syntax is used to lazy load the dashboard feature module.
// The `CommonModule` and `FormsModule` are imported in the `FormpageComponent` to use Angular's common directives and form functionalities.
// The `CanExit` interface is implemented by the `FormpageComponent` to define a method for checking if the user can exit the form.

