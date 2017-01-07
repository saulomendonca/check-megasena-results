import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ResultsComponent } from './results/results.component';
import { ResultCheckerComponent } from './result-checker/result-checker.component';


const routes: Routes = [
  { path: '', redirectTo: 'checker', pathMatch: 'full'},
  { path: 'checker', component: ResultCheckerComponent},
  { path: 'results', component: ResultsComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}