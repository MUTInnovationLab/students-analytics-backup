import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./FacultyMember/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'add-student',
    loadChildren: () => import('./FacultyMember/add-student/add-student.module').then( m => m.AddStudentPageModule)
  },
  {
    path: 'upload-spreadsheet',
    loadChildren: () => import('./FacultyMember/upload-spreadsheet/upload-spreadsheet.module').then( m => m.UploadSpreadsheetPageModule)
  },
  {
    path: 'fm-profile',
    loadChildren: () => import('./fm-profile/fm-profile.module').then( m => m.FMProfilePageModule)
  },
  {
    path: 'add-mentor',
    loadChildren: () => import('./add-mentor/add-mentor.module').then( m => m.AddMentorPageModule)
  },

  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'add-member',
    loadChildren: () => import('./add-member/add-member.module').then( m => m.AddMemberPageModule)
  },
  {
    path: 'member',
    loadChildren: () => import('./member/member.module').then( m => m.MemberPageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
  
  {
    path: 'add-m-modal',
    loadChildren: () => import('./add-m-modal/add-m-modal.module').then( m => m.AddMModalPageModule)
  },

  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
