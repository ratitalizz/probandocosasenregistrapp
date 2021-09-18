import { Component, OnInit } from '@angular/core';
// importamos BarCodeScanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage implements OnInit {
  qrData="https://www.youtube.com/watch?v=vfK82zh_rOI";
  elementType: 'url' | 'img' | 'canvas' = 'canvas'

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

}
