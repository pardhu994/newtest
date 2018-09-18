import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'; 
// import { interval } from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // displayBlock:boolean=true;
  table1:any;
  table2:any;
  table3:any;
  table4:any;
  table5:any;
  table6:any;
  itemValue:any;
  sub:any;

tables:any=[

  {
    "id":1,
    "data":[
      {"one":25, "two":"", "three":""},
      {"one":"", "two":25, "three":""},
      {"one":"", "two":"", "three":25},
      {"one":25, "two":"", "three":""},
      
    ]
},
{
  "id":2,
  "data":[
    {"one":"", "two":"", "three":25},
    {"one":"", "two":25, "three":""},
    {"one":"", "two":25, "three":25},
    {"one":25, "two":2, "three":""},
    {"one":5, "two":21, "three":""},
    {"one":"", "two":"", "three":30},
    {"one":"", "two":"", "three":2}
  ]
},
{
  "id":3,
  "data":[
    {"one":25, "two":"", "three":""},
    {"one":30, "two":25, "three":""},
    {"one":"", "two":"", "three":25},
    {"one":2, "two":"", "three":""},
    {"one":"", "two":2, "three":""},
    {"one":"", "two":25, "three":""},
    {"one":25, "two":"", "three":2}
  ]
},
{
  "id":4,
  "data":[
    {"one":"", "two":5, "three":""},
    {"one":"", "two":25, "three":""},
    {"one":"", "two":"", "three":25},
    {"one":"", "two":"", "three":25},
    {"one":25, "two":"", "three":""},
    {"one":"", "two":2, "three":""},
    {"one":25, "two":"", "three":2}
  ]
},
{
  "id":5,
  "data":[
    {"one":25, "two":"", "three":""},
    {"one":"", "two":25, "three":""},
    {"one":"", "two":"", "three":25},
    {"one":25, "two":"", "three":""},
    {"one":25, "two":"", "three":""},
    {"one":"", "two":25, "three":""},
    {"one":25, "two":"", "three":2}
  ]
},
{
  "id":6,
  "data":[
    {"one":"", "two":"", "three":25},
    {"one":"", "two":25, "three":""},
    {"one":"", "two":25, "three":25},
    {"one":25, "two":2, "three":""},
    {"one":5, "two":"", "three":""},
    {"one":"", "two":"", "three":30},
    {"one":"", "two":"", "three":2}
  ]
}

]

constructor(){

  var movie1 = {
    name: 'Star Wars',
    episode: 7
  };
  
   
  console.log(movie1); // writes 7
  console.log(movie1.episode); // writes 8


  console.log(this.tables[0].data)
 
}
ngOnInit(){
  
      this.table1=this.tables[0].data;
      this.table2=this.tables[1].data;
      this.table3=this.tables[2].data;
      this.table4=this.tables[3].data;
      this.table5=this.tables[4].data;
      this.table6=this.tables[5].data;
      console.log("theres")
    // });
 
}
  title = 'app';

  dispalayItem(){
    // this.displayBlock=false;
  }

  submitId(){
    for (let index = 0; index < this.tables.length; index++) {
      const element = this.tables[index];
      console.log(element.id)
      if(this.itemValue == element.id){
        console.log("there");
        console.log(element);
        // Object.assign(element.data[0], { "statusData": "Active" });
        this.tables.splice(element, 1);
        // this.table1=[];
      }
    }

    console.log(this.tables, this.tables[1].data);
    
  }
}
