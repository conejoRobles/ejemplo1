import { Component } from '@angular/core';
import { Iproduct } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Empresa ACME';
  products: Iproduct[] = [
    {
      "productId": 1,
      "productName": "Zapatillas de lona",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2017",
      "description": "Zapatillas de lona con caña marca conve",
      "price": 19.95,
      "starRating": 50.2,
      "imageUrl": "https://cdn.pixabay.com/photo/2013/07/12/18/20/chucks-153310_960_720.png",
    }, {
      "productId": 2,
      "productName": "Xiaomi 123e",
      "productCode": "GDN-0012",
      "releaseDate": "March 20, 2018",
      "description": "Lampara de lona Xiaomi LED",
      "price": 19.00,
      "starRating": 125.2,
      "imageUrl": "//ae01.alicdn.com/kf/H7514ebbb114b43459f44836d7290f38cP.jpg_200x200.jpg_Q90.jpg",
    },
    {
      "productId": 3,
      "productName": "Auriculares Haylou GT1 TWS Bluetooth",
      "productCode": "GDN-0013",
      "releaseDate": "March 21, 2019",
      "description": "Auriculares Haylou GT1 TWS Bluetooth",
      "price": 19.20,
      "starRating": 11.2,
      "imageUrl": "https://ae01.alicdn.com/kf/H3c28842942924803b7b164fc3b7f7300c.jpg_200x200.jpg_Q90.jpg",
    },
    {
      "productId": 4,
      "productName": "Trípode soporte montaje 36-100cm",
      "productCode": "GDN-0014",
      "releaseDate": "March 22, 2020",
      "description": "Trípode soporte montaje 36-100cm",
      "price": 17.20,
      "starRating": 58.1,
      "imageUrl": "//ae01.alicdn.com/kf/H6e20e86c37f148b693de611dd9599ad0C.png_200x200.png_Q90.png",
    },
    {
      "productId": 5,
      "productName": "Mini proyector AUN W18",
      "productCode": "GDN-0015",
      "releaseDate": "March 23, 2012",
      "description": "Mini proyector",
      "price": 30.00,
      "starRating": 3.5,
      "imageUrl": "https://ae01.alicdn.com/kf/Hca9d529b29d44987a8e2ad431000c342X.jpg_200x200.jpg_Q90.jpg",
    },
    {
      "productId": 6,
      "productName": "Dron L100",
      "productCode": "GDN-0016",
      "releaseDate": "March 24, 2016",
      "description": "Dron a control remoto",
      "price": 30.50,
      "starRating": 2.0,
      "imageUrl": "https://ae01.alicdn.com/kf/H2f844351909f4bbba5ad168c42bb90c34.jpg_200x200.jpg_Q90.jpg",
    },
  ]
}
