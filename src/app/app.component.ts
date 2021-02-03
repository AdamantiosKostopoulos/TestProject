import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { removeAllListeners } from 'process';
import * as $ from 'jquery';
import { Brew } from './brew.model';
import { TestBed } from '@angular/core/testing';
import { coffeeBatch } from './coffeeBatch.model';
import { coffeeBeans } from './coffeeBeans.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

  brewList: string[] = ['Brew 1', 'Brew 2', 'Brew 3'];
  cBatchList: string[] = ['Batch 1', 'Batch 2', 'Batch 3'];
  cBeansList: string[] = ['Beans 1', 'Beans 2', 'Beans 3'];


  brewsList: Brew[] = [
    //new Brew ('test', 12:48, 23, 24, 25, 26, 27, 'testbatch')
  ];

  batchList: coffeeBatch[] = [];

  beansList: coffeeBeans[] = [];


  //TOGGLE PARAMS
  collapsed=false;
  display=false;
  formDisp=false;
  revealItem=false;
  brewsDisplay=false;
  brewListDisplay=false;
  newBrewFormToggle=false;

  batchDisplay=false;
  batchFormDisplay=false;
  batchListDisplay=false;

  beansDisplay=false;
  beansFormDisplay=false;
  beansListDisplay=false;

  //BREW PARAMS
  b_Name: string;
  b_hour: Time;
  b_date: Date;
  b_gramsIn: number;
  b_gramsOut: number;
  b_temp: number;
  b_seconds: number;
  b_rating: number;
  b_cBatch: coffeeBatch;

  //BATCH PARAMS
  batch_Name: string;
  batch_RoastDate: Date;
  batch_Roaster: string;
  batch_Beans: coffeeBeans;

  //BEANS PARAMS
  beans_Name: string;
  beans_Country: string;
  beans_Variety: string;
  beans_Proccess: string;
  beans_Altitude: number;
  beans_Recipe: string;
  beans_TasteProfile: string;




  things: string[]=['thing 1','thing 2','thing 3'];

  listToggle(){
    this.display=!this.display;
    this.newBrewFormToggle=false;
  }

  formToggle(){
    this.formDisp=!this.formDisp;
  }


  addBrew(){
    const newBrew = new Brew (this.b_Name, this.b_hour, this.b_date, this.b_gramsIn, this.b_gramsOut, this.b_temp, this.b_seconds, this.b_cBatch);
    this.brewsList.push(newBrew);
    this.newBrewFormToggle=false;
    console.log("SUBMIT CLICKED");
  }

  newBrewToggle(){
    this.newBrewFormToggle=!this.newBrewFormToggle;
    this.display=false;
  }

  public Reveal(){
    this.revealItem=true;
  }

  brewsToggle(){
    this.brewsDisplay=!this.brewsDisplay;
    this.batchDisplay=false;
    this.beansDisplay=false;
  }

  toggleBrewListDisplay(){
    this.brewListDisplay=!this.brewListDisplay;
  }

  toggleBatch(){
    this.brewsDisplay=false;
    this.beansDisplay=false;
    this.batchDisplay=!this.batchDisplay;
  }

  toggleBatchForm(){
    this.batchListDisplay=false;
    this.batchFormDisplay=!this.batchFormDisplay;
  }

  toggleBatchList(){
    this.batchFormDisplay=false;
    this.batchListDisplay=!this.batchListDisplay;
  }

  addBatch(){
    const newBatch = new coffeeBatch (this.batch_Name, this.batch_RoastDate, this.batch_Roaster, this.batch_Beans);
    this.batchList.push(newBatch);
    this.batchFormDisplay=false;
    console.log("SUBMIT CLICKED");
  }

  toggleBeans(){
    this.brewsDisplay=false;
    this.batchDisplay=false;
    this.beansDisplay=!this.beansDisplay;
  }

  toggleBeansForm(){
    this.beansListDisplay=false;
    this.beansFormDisplay=!this.beansFormDisplay;
  }

  toggleBeansList(){
    this.beansFormDisplay=false;
    this.beansListDisplay=!this.beansFormDisplay;
  }
  addBeans(){
    const newBeans = new coffeeBeans(this.beans_Name, this.beans_Country, this.beans_Variety, this.beans_Proccess, this.beans_Altitude, this.beans_Recipe, this.beans_TasteProfile);
    this.beansList.push(newBeans);
    this.beansFormDisplay=false;
    console.log("SUBMIT CLICKED");
  }
}




