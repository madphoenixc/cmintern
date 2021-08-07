import { Component,ViewChild } from '@angular/core';
export interface IMedia {
  src: string;
  type: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// this.httpClient.get("http://127.0.0.1:3000/api/course").subscribe(
//   data => {
//     this.ml = data;
//     console.log(data);
//   }
// )


export class AppComponent {
  @ViewChild('media') media: any;
  title = 'cmintern1';
  showe :boolean =true;
  playlist: Array<IMedia> = [
    {
      src: 'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4',
      type: 'video/mp4'
  },  
     {
         src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
         type: 'video/mp4'
    },
    {
       src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
       type: 'video/mp4'
    },
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      type: 'video/mp4'
    },

    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      type: 'video/mp4'
    },
    
 
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
      type: 'video/mp4'
    },
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      type: 'video/mp4'
    },
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      type: 'video/mp4'
    },

  ];
  i=100;
  vol=1;
  currentIndex = 0;
  timeLeft: number = 5;
  interval:any;
  currentItem: IMedia = this.playlist[ this.currentIndex ]; 
  res(){
    if(this.showe==true)
    {
      this.timeLeft=5;
    }
  }
  Increment()
  {
  this.currentIndex++;
  if(this.currentIndex==8)
  this.currentIndex=0;
  this.currentItem=this.playlist[ this.currentIndex ]; 
  console.log(this.currentIndex)
  }
  Decrement()
  {
    this.currentIndex--;
    if(this.currentIndex==-1)
    this.currentIndex=7;
    this.currentItem=this.playlist[ this.currentIndex ]; 
    console.log(this.currentIndex)
  }
  inbri(){
    this.i=this.i+10;
    (document.querySelector('#monitor') as HTMLElement).style.filter = 'brightness('+ this.i +'%)';
    console.log(this.i);
  }
  debri(){
    this.i=this.i-10;
    (document.querySelector('#monitor') as HTMLElement).style.filter = 'brightness('+ this.i +'%)';
    console.log(this.i);
  }


tim()
{
     setTimeout(() => 
     {
        this.showe = !this.showe;       
     }, 5000);  
     console.log("Trigerred Auto-Off");
     this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
      this.timeLeft--;
      } else {
        console.log(this.timeLeft);
         this.timeLeft=0;        
      }
    },1000)
  
}
devol(){
  this.vol=this.vol-0.1;
  this.media.nativeElement.volume=this.vol;
  console.log(this.vol);
}
invol(){
  this.vol=this.vol+0.1;
  this.media.nativeElement.volume=this.vol;
  console.log(this.vol);
}
}