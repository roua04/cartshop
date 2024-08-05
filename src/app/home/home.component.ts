import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerImgs = [
    {
      id: 1,
      img: 'https://th.bing.com/th/id/OIP.e8EOo7MZQk87LDYHZgcOpAHaDN?w=700&h=303&rs=1&pid=ImgDetMain',
    },
    {
      id: 2,
      img:'https://img.freepik.com/premium-vector/online-shopping-social-media-mobile-apps-website-concepts-web-banner_638409-60.jpg',
    },
    {
      id: 3,
      img: 'https://image.shutterstock.com/image-vector/online-shopping-banner-isometric-cart-260nw-1048681022.jpg',
    },
  ];

  getCategorisData:any;
  getpcProductData:any=[];
  getsmartphonesProductData:any=[];

    constructor(private getData:GetDataService){}
  
    ngOnInit(): void {
        this.getCategorisData = this.getData.categoriesData;
        
        this.getData.productData.filter((ele:any)=>{

            if(ele.pdCategory == 'pc')
            {
                this.getpcProductData.push(ele);
            }
            if(ele.pdCategory=='smartphones')
            {
                this.getsmartphonesProductData.push(ele);
            }
        
            
          });
    

      }




}
