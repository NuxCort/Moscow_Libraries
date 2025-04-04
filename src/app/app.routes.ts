import { Routes } from '@angular/router';
import { MosDataTableComponent } from './components/mos-data-table/mos-data-table.component';
import { AppComponent } from './app.component';
import { MosDataDetailPageComponent } from './components/mos-data-detail-page/mos-data-detail-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mos-data',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'mos-data', component: MosDataTableComponent },
      { path: 'mos-data-details/:id', component: MosDataDetailPageComponent }
    ],
  },
  { path: '**', redirectTo: 'mos-data' },
];
