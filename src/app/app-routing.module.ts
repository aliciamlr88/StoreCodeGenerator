import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';

const routes: Routes = [
  { path: 'codeGenerator', component: CodeGeneratorComponent },
  { path: '', redirectTo: '/codeGenerator', pathMatch: 'full' },
  { path: '**', component: CodeGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
