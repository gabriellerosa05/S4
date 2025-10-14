import { Component } from '@angular/core';
import { ignoreElements } from 'rxjs';

interface IPlano{
  infos: IIinfos;
}

interface IIinfos{
  tipo: string;
  preco:number;
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  //@ts-ignore
   plano: IPlano = {
    infos:{
      tipo: 'Simples',
      preco:100,
    }
   };
}
