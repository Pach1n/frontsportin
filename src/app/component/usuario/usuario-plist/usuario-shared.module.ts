import { CommonModule } from '@angular/common';
import { BotoneraRpp } from '../../shared/botonera-rpp/botonera-rpp';
import { Paginacion } from '../../shared/paginacion/paginacion';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BotoneraRpp, Paginacion],
  exports: [BotoneraRpp, Paginacion]
})
export class UsuarioSharedModule {}
