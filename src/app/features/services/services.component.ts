import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent  {


  serviceCardsData: any = [{
    title: "Service #1",
    subtitle: "subtitle service",
    description: "Service #1 is a practice to join irons togheter and fix damaged objects",
    imgUrl: "../../../assets/images/pexels-pixabay-259984.jpg",
    pageLink: "/"
  },
  {
    title: "Service #2",
    subtitle: "subtitle service",
    description: "Service #2 is a practice to join irons togheter and fix damaged objects",
    imgUrl: "../../../assets/images/pexels-shreeneet-rathi-4007300.jpg",
    pageLink: "/"
  },
  {
    title: "Service #3",
    subtitle: "subtitle service",
    description: "Service #3 is a practice to join irons togheter and fix damaged objects",
    imgUrl: "../../../assets/images/pexels-lars-mai-3997249.jpg",
    pageLink: "/"
  },
  {
    title: "Service #4",
    subtitle: "subtitle service",
    description: "Service #4 is a practice to join irons togheter and fix damaged objects",
    imgUrl: "../../../assets/images/pexels-pavel-chernonogov-2381463.jpg",
    pageLink: "/"
  }];



  deliveryServiceCardsData: any = {
    title: "Home service",
    description: "We provide Door Step services for Metal & Steel Fabrication and Repairs. Click below to reach us.",
    imgUrl1: "../../../assets/images/van_home_service.jpg",
    pageLink: "/"
  }

  materialsCardsData: any = {
    title: "Materials",
    description: "We use only high quality materials for our welding services.",
    imgUrl1: "../../../assets/images/steel-materials.jpg",
    imgUrl2: "../../../assets/images/punta-materials.jpg",
    caption1: `TiCN (titanium carbonitride): Bits made of titanium carbonitride are great for stainless steel, cast iron and aluminum.
              They are harder and more wear-resistant than other coatings.`,
  }

  technologiesCardsData: any = {
    title: "Technologies",
    description: "We adopt the best technologies so far",
    caption1: "Lathe",
    imgUrl1: "../../../assets/images/lathe.jpg",
    caption2: "Tools",
    imgUrl2: "../../../assets/images/tech1.jpg",
    imgUrl3: "../../../assets/images/drill1.jpg",
    imgUrl4: "../../../assets/images/drill-tech.jpg",
    caption3: "We employ tools from the best brands on the market.",
    brandLogoUrl1: "../../../assets/images/miller-welding-logo.webp",
    brandLogoUrl2: "../../../assets/images/Makita_Logo.png",
    brandLogoUrl3: "../../../assets/images/lincolnLogo.png",
    brandLogoUrl4: "../../../assets/images/WALTER-Surface-Technologies-Logo.jpg",
    brandLogoUrl5: "../../../assets/images/milwaki.png",
    brandLogoUrl6: "../../../assets/images/beta.png",
  }





}
