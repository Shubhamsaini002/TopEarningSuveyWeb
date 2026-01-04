import { Injectable } from '@angular/core';
import { Database, push, ref } from '@angular/fire/database';
import { HelpMessage, OfferDeatils } from '../Models/modelVM';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private db: Database) { }

 
  sendMessage = async (message: HelpMessage): Promise<void> => {
      await push(ref(this.db, 'topearningsurvey/help'), message);
  };

  sendOffersMessage = async (message: OfferDeatils): Promise<void> => {
    await push(ref(this.db, 'topearningsurvey/offers'), message);
  };
}
