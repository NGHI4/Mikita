import {Component, Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'thoitiet',
  templateUrl: './thoitiet.html'
})
export  class thoitietcomponents{
    city: string = 'HaNoi'
    temp: number = 30;
    hump: number = 70;
    press: number = 1000;
    constructor(private http: HttpClient) {
    }

    ngOnInit(){ // hàm này tự động chạy sau khi in ra html
      this.hanoi();
    }


    hanoi(){
      // lay thong tin nhiet do thoi tiet ha noi
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
      this.http.get<any>(url)
        .subscribe(data=>{
          this.temp = data.main.temp;
          this.hump = data.main.humidity;
          this.press = data.main.pressure;
          this.city = data.name +","+ data.sys.country;
        })
    }
}


