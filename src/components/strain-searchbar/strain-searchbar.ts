import {Component, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import { StrainsubdetailPage } from '../../pages/strainsubdetail/strainsubdetail';
import {Scroll, Searchbar} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the StrainSearchbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'strain-searchbar',
  templateUrl: 'strain-searchbar.html'
})
export class StrainSearchbarComponent implements AfterViewInit {

  @ViewChild('strainSearchbar') strainSearchbar: Searchbar;
  @ViewChild('strainList') strainList: any;

  titleText: string = "";
  searchText: string = "";
  filterItems: any[] = [];
  selectedItems: any[] = [];

  visibleDropdown = false;
  @Input() strains: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider:DataProvider) {

  }

  ngAfterViewInit(): void {

  }

  FilterItems() {
    this.visibleDropdown = true;
    this.dataProvider.searchStrains(this.searchText).then((response) => {
      this.filterItems = [];
      for(var i in response)
      this.filterItems.push(response[i]);
      console.log(this.filterItems);
    });
  }

  // onSearchFocus() {
  //   this.visibleDropdown = true;
  //   var rt = this.strainSearchbar._searchbarInput.nativeElement.getBoundingClientRect();
  //   this.strainList.nativeElement.style.width = '' + rt.width + 'px';
  //   this.strainList.nativeElement.style.left = '' + rt.left + 'px';
  //   console.log("Strains:" + this.strains);
  // }

  onSearchFocus() {
    this.visibleDropdown = true;
    const rt = this.strainSearchbar._searchbarInput.nativeElement.getBoundingClientRect();
    this.strainList._scrollContent.nativeElement.style.width = '' + rt.width + 'px';
    this.strainList._scrollContent.nativeElement.style.left = '' + rt.left + 'px';
    console.log("Strains:" + this.strains);
  }

  onSearchLostFocus() {

    // this.visibleDropdown = false;
    setTimeout(() => {
        this.visibleDropdown = false;
    },150);
    // this.filterItems = [];
  }

  openSpecificStrainDetail(strainId:any, slug:any){
    this.navCtrl.push("StrainsubdetailPage",{strainKey:strainId,strainName:slug}, {animate:false})
  }

  getCategoryDetail(strainSlug: any) {
    this.navCtrl.push("StraindetailPage", {slug: strainSlug}, {animate: false})
  }

  ionViewDidEnter() {

  }
}
