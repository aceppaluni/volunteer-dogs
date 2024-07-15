import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: "body";
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: "json";
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Dogs {
    items: Dog[];
    //total: total
    page: number;
    perPage: number;
    totalPages: number;
}

export interface Dog {
    name?: string;
    dob?: string;
    age?: number;
    gender?: string;
    breed?: string;
    bio?: string;
    onWalk?: boolean;
    image?: string;
}

export interface PaginationParams {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    perPage: number
}