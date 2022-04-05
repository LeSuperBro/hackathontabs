import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-geoloc-hack',
  templateUrl: './geoloc-hack.page.html',
  styleUrls: ['./geoloc-hack.page.scss'],
})
export class GeolocHackPage {

  map: Map;
  lat:any=0.0;
  lng:any=0.0;

  cityMarkers: any = [
    {
      latitude : 50.637433978774155,
      longitude : 3.074842113639087,
      name: 'nuit_code_citoyen'
    },
    {
      latitude : 46.67417991034442,
      longitude : -1.4356003610191457,
      name: 'hack_climat'
    },
    {
      latitude : 48.860618748015256,
      longitude : 2.3540807985634475,
      name: 'womenhack'
    },
    {
      latitude : 50.634127964304575,
      longitude : 3.0208425716286844,
      name: 'hacksummer'
    },
    {
      latitude : 47.21302632369189,
      longitude : -1.563430130317741,
      name: 'innnovhathon'
    },
    {
      latitude : 47.20727394940971,
      longitude : -1.558866230317893,
      name: 'hackhealth'
    },
  ]

  constructor(private geolocation: Geolocation)
  {
    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //  // data can be a set of coordinates, or an error (if an error occurred).
    //  // data.coords.latitude
    //  // data.coords.longitude
    
    //   console.log(data.coords);
  }

  ionViewDidEnter() {
    this.geolocation.getCurrentPosition().then((data) => {
      // resp.coords.latitude
      // resp.coords.longitude
    
      console.log(data.coords);
      this.lat=data.coords.latitude;
      this.lng=data.coords.longitude;
      return this.initMap();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
}

initMap() {

  // Centrer la carte sur la France
  this.map = new Map('map').setView([46.232193, 2.209667], 5);

  // Ajout des mentions OpenStreetMap, obligatoire
  tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

  }).addTo(this.map);

  //Position actuelle
  marker([this.lat, this.lng]).addTo(this.map)
  .bindPopup("Position actuelle")
  .openPopup();

  //Nuit du code - Lille
  marker([50.637433978774155, 3.074842113639087]).addTo(this.map)
  .bindPopup("La nuit du code citoyen")
  .openPopup();

  //Changement climatique - La roche sur Yon
  marker([46.67417991034442, -1.4356003610191457]).addTo(this.map)
  .bindPopup("Hackathon sur le changement climatique et la protection de la biodiversité")
  .openPopup();

  //WomenHack - Paris
  marker([48.860618748015256, 2.3540807985634475]).addTo(this.map)
  .bindPopup("WomenHack")
  .openPopup();

  //Summer Space - Lille
  marker([50.634127964304575, 3.0208425716286844]).addTo(this.map)
  .bindPopup("Hackathon Summer Space Festival")
  .openPopup();

  //InnovHathon - Nantes
  marker([47.21302632369189, -1.563430130317741]).addTo(this.map)
  .bindPopup("InnovHathon")
  .openPopup();

  //Hacking Health - Nantes
  marker([47.20727394940971, -1.558866230317893]).addTo(this.map)
  .bindPopup("Hacking Health")
  .openPopup();;

  return;

}

}
