import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  dataInfo: any = []

  message: string = "";
  email = '';
  pass = '';
  constructor(public service: ServicioService) {
  }

  ngOnInit(): void {
    // this.service.GetPrincesas().subscribe((res:any)=>{
    //   console.log(res.princesas)
    //   this.dataInfo = JSON.stringify(res.princesas)
    // })

  }

  enviar() {
    if (this.email == "ana@gmail.com" && this.pass == "123") {
      this.message = "Bienvenido";
    }else{
      this.message = "Error";
    }
  }


}
