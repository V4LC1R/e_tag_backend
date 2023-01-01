import { Router } from 'express';
export interface RouterProviderInterface{
    routes : Router
    register() : void
    getRoutes() : Router
}

