import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/rentals', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
