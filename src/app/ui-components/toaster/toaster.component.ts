import { Component, OnInit, OnDestroy } from '@angular/core';
import { JarvisToasterService } from './toaster.service';
import { Subscription } from 'rxjs';
import { Toaster } from './toaster.model';

@Component({
  selector: 'jar-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class JarvisToasterComponent implements OnInit, OnDestroy {
  toasterSubscription: Subscription = null;
  toasterConfigs: Toaster[] = [];
  constructor(private toasterService: JarvisToasterService) {}

  ngOnInit() {
    if (this.toasterService.showToaster) {
      this.toasterSubscription = this.toasterService.showToaster.subscribe(
        arg => {
          if (arg) {
            this.toasterConfigs.push(arg);
            setTimeout(() => {
              this.toasterConfigs = [];
            }, 3000);
          }
        }
      );
    }
  }

  ngOnDestroy() {
    this.toasterSubscription.unsubscribe();
  }
}
