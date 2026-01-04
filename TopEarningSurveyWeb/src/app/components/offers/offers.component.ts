import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from 'firebase/analytics';
import { OfferDeatils } from '../../Models/modelVM';
import { MessageService } from '../../services/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent implements OnInit {
  offers: OfferDeatils[] = [
    {
      amount: 6.40,
      offername: "Airtel",
      offeramount: "100",
      offerurl: "https://www.airtel.in/new-connection/prepaid-sim/?&rC=lROJVnj16&refRtn=7895002653&utm_source=referral&utm_medium=7895002653",
      task: "Signup:New user only",
      image: "assets/images/offericon/airtel.png",
      user: ""
    },
    {
      amount: 9.70,
      offername: "AmazonPay",
      offeramount: "50",
      offerurl: "https://www.amazon.in/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fapay%2Fmoney-transfer%2Fsend-money%2Flanding%3FingressType%3DP2PUI%26transactionType%3DPAY%26referralCode%3D3FQRS9%26ref%3Dmm_1_in_pay_upi_referral&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ap4_mobile_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0",
      task: "Signup:Make 1st Payment",
      image: "assets/images/offericon/amazon.png",
      user: ""
    },
    {
      amount: 4.10,
      offername: "Castle: Movies",
      offeramount: "1",
      offerurl: "https://h5-activity.castledownload.pro/en-US/share/download?info=5SLYfjE4%2Fg4jTaO3vp5XTCLLTnxYOag70AgzI6Hnwaxsoca%2BO4PXszVqxX3NnBQo%2FH5msJO02zndi%2FNLmJ6axA%3D%3D",
      task: "Signup:watch free Movies",
      image: "assets/images/offericon/castle.jpg",
      user: ""
    },
    {
      amount: 6.12,
      offername: "DrinkPrime",
      offeramount: "200",
      offerurl: "https://drinkprime.in/app/lp120?referral_code=4DA95QR9&utm_campaign=subscriber_referral&utm_medium=app&utm_source=whatsapp_share_button",
      task: "Signup",
      image: "assets/images/offericon/drinkprime.avif",
      user: ""
    },
    {
      amount: 8.30,
      offername: "GPay",
      offeramount: "21",
      offerurl: "https://pay.google.com/gp/promo/p_referrals/?referrer_id=233ig9a&shareActionId=1e24aaf2-524a-4610-a66e-c48d72944398&authenticationToken=VDMQsKyppaRhRSW7m9eIHA%3D%3D",
      task: "Signup:Make 1st Payment",
      image: "assets/images/offericon/gpay.jpg",
      user: ""
    },
    {
      amount: 12.10,
      offername: "Meesho",
      offeramount: "200",
      offerurl: "https://play.google.com/store/apps/details?id=com.meesho.supply&source_caller=ui&via=5ax49&shortlink=r99th0qd&c=refferal_acquaint&pid=WhatsApp&af_xp=text&host_internal=main",
      task: "Signup",
      image: "assets/images/offericon/meesho.jpg",
      user: ""
    },
    {
      amount: 8.40,
      offername: "PhonePy",
      offeramount: "200",
      offerurl: "https://phon.pe/1dvfzg3t",
      task: "Signup:Make 1st Payment",
      image: "assets/images/offericon/phonepy.png",
      user: ""
    },
    {
      amount: 61.20,
      offername: "Traya",
      offeramount: "500",
      offerurl: "https://form.traya.health/pages/referee?referralCode=EOCxJiAl",
      task: "Signup: Order your 1st kit",
      image: "assets/images/offericon/traya.png",
      user: ""
    }
  ]
  constructor(private analytics: Analytics, private message: MessageService) { }

  ngOnInit() {
    logEvent(this.analytics, 'page_view', {
      page_path: "offer"
    });
  }
  async openOffers(data: OfferDeatils) {
    //await Browser.open({
    //  url: data.offerurl
    //});
    const userid = localStorage.getItem('token') || "";
    logEvent(this.analytics, 'offer_open', {
      offername: data.offername,
      offeramount: data.offeramount,
      offerurl: data.offerurl,
      user: userid
    });
    data.user = userid;
    this.message.sendOffersMessage(data);
  }
}
