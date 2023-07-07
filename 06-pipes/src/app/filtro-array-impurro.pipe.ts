import { Pipe } from '@angular/core';
import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpurro',
  pure: false,
})
export class FiltroArrayImpurroPipe extends FiltroArrayPipe {}
