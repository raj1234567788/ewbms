import { AllComplaint } from './pages/all-complaint/all-complaint';
import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomeLayout,
        children: [
            {
                path: 'login',
                loadComponent: () =>
                    import('./homepages/login/login')
                        .then(m => m.Login)
            },
            {
                path: 'setmpin',
                loadComponent: () =>
                    import('./homepages/setmpin/setmpin')
                        .then(m => m.Setmpin)
            },
            {
                path: 'VerifyMpin',
                loadComponent: () =>
                    import('./homepages/verifympin/verifympin')
                        .then(m => m.Verifympin)
            },
            {
                path: 'VerifyOtp',
                loadComponent: () =>
                    import('./homepages/verifyotp/verifyotp')
                        .then(m => m.Verifyotp)
            }
        ]
    },
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./pages/dashboard/dashboard')
                        .then(m => m.Dashboard)
            },
            {
                path: 'AllComplaint',
                loadComponent: () =>
                    import('./pages/all-complaint/all-complaint')
                        .then(m => m.AllComplaint)
            },
            {
                path: 'ApprovedComplaint',
                loadComponent: () =>
                    import('./pages/approvedcomplaint/approvedcomplaint')
                        .then(m => m.Approvedcomplaint)
            },
            {
                path: 'RegisterComplaint',
                loadComponent: () =>
                    import('./pages/register-complaint/register-complaint')
                        .then(m => m.RegisterComplaint)
            }
        ]
    },
    { path: '**', redirectTo: 'login' }
];
