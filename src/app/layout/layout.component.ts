import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [AppService],
})
export class LayoutComponent {
  constructor(_service: AppService) {
    console.log(_service);
  }

  @Input() public set appTitle(appTitle: string) {
    console.log(appTitle);
    this._appTitle = appTitle;
  }

  public get appTitle(): string {
    return this._appTitle;
  }

  private _appTitle = '';

  onAlertClick(value: string): void {
    alert(value);
  }
}
