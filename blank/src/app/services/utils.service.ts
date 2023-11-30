import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toastCrtl = inject (ToastController);
  modalCtrl = inject (ModalController)
  router = inject(Router)

  loading(){
    return this.loadingCtrl.create({spinner: 'crescent'})

  }



  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCrtl.create(opts);
    toast.present();
  }

  routerLink(url:string){
    return this.router.navigateByUrl(url);

  }

  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))  
  }


  //modal

  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);
    await modal.present();

    const {data} = await modal.onWillDismiss();
    if (data) return data;
  
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data)

  }
}
