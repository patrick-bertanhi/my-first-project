
import { HomeComponent } from './home/home.component';
import { BuscaEnderecosComponent } from './busca-enderecos/busca-enderecos.component';
import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';
import { GeradorComponent } from './gerador/gerador.component';
import { ValidadorComponent } from './validador/validador.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginResolver } from '../resolver/login.resolver';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'gerador',
  component: GeradorComponent,
  resolve: { aut: LoginResolver }
},
{
  path: 'enderecos',
  component: EnderecosListComponent,
  resolve: { aut: LoginResolver }

},
{
  path: 'busca-enderecos',
  component: BuscaEnderecosComponent,
  resolve: { aut: LoginResolver }
},
{
  path: 'validador',
  component: ValidadorComponent,
  resolve: { aut: LoginResolver }

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoginResolver]
})
export class FeaturesRoutingModule { }
