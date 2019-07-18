import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../app/environment';
import {AlertController, LoadingController, ToastController} from 'ionic-angular';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  loader: any;

  constructor(public http: HttpClient, public alertCtrl: AlertController,
              public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    console.log('Hello DataProvider Provider');
  }

  /**
   * This is a toast message function
   * @param message - string of message to be shown
   */
  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      position: 'bottom',
      duration: 2000
    }).present();
  }

  /** ALert message popup.
   * @param {String} error - Error message to display
   */
  errorALertMessage(error: string) {
    this.alertCtrl.create({
      title: 'Error',
      message: error,
      enableBackdropDismiss: false,
      buttons: ['Ok']
    }).present();
  }

  /** Show Loading popup. */
  showLoading() {
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loader.present();
  }

  /** Hide loading popup. */
  hideLoading() {
    if(this.loader){
      this.loader.dismissAll();
    }
  }

  /**
   * convert base 64 data to file
   * @param base64data base 64 string
   */
  dataURLtoFile(base64data): Promise<any> {
    return new Promise((resolve) => {
      let sliceSize = 1024;
      var block = base64data.split(";");
      var contentType = block[0].split(":")[1];// In this case "image/gif"
      var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

      let byteCharacters = atob(realData);
      var byteArrays = [];
      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      let blob = new Blob(byteArrays, {type: contentType});
      resolve(blob);
    })
  }

  getHomePagePosts(): Promise<any> {
    return new Promise((resolve, reject) => {
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.get(environment.serverURL + 'homePagePosts', {headers: header}).subscribe((response) => {
        resolve(response);
      })
    })
  }

  getPostDetails(data): Promise<any> {
    return new Promise((resolve, reject) => {

      console.log(data);
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.serverURL + 'getHomePostDetail', JSON.stringify(data), {headers: header}).subscribe((response: any) => {
        if (response.status == 'Success') {
          resolve(response.data);
        } else {
          reject("Unable to find the detail");
        }
      }, (err) => {
        console.log(err);
      })
    })
  }

  getStarinParentCategories(): Promise<any> {
    return new Promise((resolve, reject) => {
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.get(environment.serverURL + 'getStarinParentCategories', {headers: header}).subscribe((response) => {
        resolve(response);
        console.log(response)
      })
    })
  }

  getUserProfileDetails(data): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log(data);
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.serverURL + 'getUserProfileDetails', JSON.stringify(data), {headers: header}).subscribe((response: any) => {
        if (response.Status == 'Success') {
          // console.log(response);
          resolve(response.Userdetails);
        } else {
          reject("Unable to find the detail");
        }
      }, (err) => {
        console.log(err);
      })
    })
  }

  getUserPortalsData(data): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log(data);
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.serverURL + 'getUserPortalsData', JSON.stringify(data), {headers: header}).subscribe((response: any) => {
        if (response.Status == 'Success') {
          // console.log(response);
          resolve({allPortalsData: response.Userportals});
        } else {
          reject("Unable to find the detail");
        }
      }, (err) => {
        console.log(err);
      })
    })
  }

  getSpecificUserPortalData(data): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log(data);
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.serverURL + 'getSpecificUserPortalData', JSON.stringify(data), {headers: header}).subscribe((response: any) => {
        if (response.Status == 'Success') {
          // console.log(response);
          resolve(response.Portaldata);
        } else {
          reject("Unable to find the detail");
        }
      }, (err) => {
        console.log(err);
      })
    })
  }

  getPortalProfile(data): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log(data);
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.serverURL + 'getPortalProfileData', JSON.stringify(data), {headers: header}).subscribe((response: any) => {
        if (response.Status == 'Success') {
          console.log(response);
          resolve({
            portalData: response.Portaldata,
            portalPosts: response.Portalposts,
            openStat: response.Openstatus,
            storeType: response.Storetype
          });
        } else {
          reject("Unable to find the detail");
        }
      }, (err) => {
        console.log(err);
      })
    })
  }

  getStrainCategoryData(data): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log(data);
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.serverURL + 'getStrainCategoryData', JSON.stringify(data), {headers: header}).subscribe((response: any) => {
        if (response.Status == 'Success') {
          console.log(response);
          resolve({categoryData: response.Category, categoryStrains: response.Strains});
        } else {
          reject("Unable to find the detail");
        }
      }, (err) => {
        console.log(err);
      })
    })
  }

  getStrainDetailsData(data): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log(data);
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.serverURL + 'getStrainDetails', JSON.stringify(data), {headers: header}).subscribe((response: any) => {
        if (response.Status == 'Success') {
          console.log(response);
          resolve({strainData: response.Strain, strainInventory: response.Inventory, strainPics: response.Strainpics});
        } else {
          reject("Unable to find the detail");
        }
      }, (err) => {
        console.log(err);
      })
    })
  }

  getPortalProfileMenu(data): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log(data);
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.serverURL + 'getPortalProfileMenu', JSON.stringify(data), {headers: header}).subscribe((response: any) => {
        if (response.Status == 'Success') {
          // console.log(response);
          resolve({strainCats: response.Straincats, strainList: response.Strains});
        } else {
          reject("Unable to find the detail");
        }
      }, (err) => {
        console.log(err);
      })
    })
  }

  getImagePageDetails(data): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log(data);
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.serverURL + 'getImageFullDetails', JSON.stringify(data), {headers: header}).subscribe((response: any) => {
        if (response.Status == 'Success') {
          console.log(response);
          resolve({imageDetails: response.ImageData});
        } else {
          reject("Unable to find the detail");
        }
      }, (err) => {
        console.log(err);
      })
    })
  }

  searchStrains(searchKey) {
    return new Promise((resolve, reject) => {
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.get(environment.serverURL + 'search_strain?term=' + searchKey, {headers: header}).subscribe((response: any) => {
        resolve(response);
      }, (err) => {
        console.log(err);
      });
    });
  }

  savePortalMenuData(data, file): Promise<any> {
    return new Promise((resolve, reject) => {
      let header = new HttpHeaders();
      //let body: FormData = this.makeObjectToUrlParams(data);
      let body = new FormData();
      body.set('data', JSON.stringify(data));

      if (file != '') {
        body.set('strain_image', file);
      }

      this.http.post(environment.serverURL + 'Rider/update_rider_profile', body, {headers: header}).subscribe((response: any) => {
        if (response.success == 'true' || response.success == true) {
          resolve(response.data);
        } else {
          reject(response.message);
        }
      }, (error) => {
        reject(error.message);
      })
    })
  }

  getEmojis() {
    const EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
      " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
      " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
      " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
      " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
      " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
      "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
      " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
      " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
      " 🕶 🌂 ☂️";

    const EmojiArr = EMOJIS.split(' ');
    const groupNum = Math.ceil(EmojiArr.length / (24));
    const items = [];

    for (let i = 0; i < groupNum; i++) {
      items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
    }

    return items
  }

}
