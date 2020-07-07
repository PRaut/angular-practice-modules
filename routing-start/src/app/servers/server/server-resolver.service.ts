import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Server } from "src/app/shared/server.model";
import { Observable } from "rxjs/observable";
import { ServersService } from "../servers.service";

@Injectable({
    providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server>{
    constructor(private serversService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        return this.serversService.getServer(+route.params['id']);
    }

}