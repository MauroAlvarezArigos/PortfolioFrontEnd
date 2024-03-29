import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit{
  edu: Educacion = null;

    constructor(private servicio: EducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.servicio.detail(id).subscribe(data => {
            this.edu = data;
        }, err => {
            alert("Error al intentar modificar la educacion (OnInit)");
            this.router.navigate(['']);
        });
    }

    onUpdate(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.servicio.update(id, this.edu).subscribe(data => {
            alert("Educacion modificada con exito");
            this.router.navigate(['']);
        }, err => {
            alert("Error al intentar modificar la educacion (OnUpdate)");
            this.router.navigate(['']);
        })
    }

}
