import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
    providedIn: 'root'
})
export class ProyectosService {
    //URL = 'http://localhost:8080/proyectos/';
    URL = 'https://portfoliowebbackend.rj.r.appspot.com/proyectos/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Proyectos[]> {
        return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<Proyectos> {
        return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
    }

    public save(proyecto: Proyectos): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'create', proyecto);
    }

    public update(id: number, proyecto: Proyectos): Observable<any> {
        return this.httpClient.put<any>(this.URL + `update/${id}`, proyecto);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }
}
