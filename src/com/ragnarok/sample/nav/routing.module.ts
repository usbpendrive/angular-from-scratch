import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "../views/first/first.component";
import { SecondComponent } from "../views/second/second.component";

const routes: Routes = [
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
    { path: '', redirectTo: 'first', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [FirstComponent, SecondComponent],
    exports: [RouterModule]
})
export class AppRoutingModule {}
