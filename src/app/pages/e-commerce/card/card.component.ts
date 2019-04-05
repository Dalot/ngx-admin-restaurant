import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nb-card-colors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
})
export class CardComponent {
}