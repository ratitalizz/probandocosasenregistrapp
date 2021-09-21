import { Component, OnInit } from '@angular/core';
// importamos BarCodeScanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage implements OnInit {
  //
  qrData= null;
  codigoCreado = null;
  codigoScaneado = null;

  elementType: 'url' | 'img' | 'canvas' = 'canvas'

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }
  
  crearCodigo(){
    this.codigoCreado = this.qrData;
  }

  scannearCodigo(){
    this.barcodeScanner.scan().then
    (barcodeData => 
      {
      this.codigoScaneado = barcodeData.text;
      }
    )
  }

}
