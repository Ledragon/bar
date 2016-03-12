declare module "angular2-polyfill/core/interfaces/ComponentMetadata" {
    export interface ComponentMetadata {
        selector?: string;
        inputs?: string[];
        outputs?: string[];
        host?: {
            [key: string]: string;
        };
        exportAs?: string;
        template?: string;
        templateUrl?: string;
        styles?: string[];
        styleUrls?: string[];
        directives?: any[];
        providers?: any[];
        pipes?: any[];
    }
}
declare module "angular2-polyfill/utils" {
    /**
     * Helper functions
     */
    export function annotate(target: any, key: any, value: any): void;
}
declare module "angular2-polyfill/core/decorators/Component" {
    import { ComponentMetadata } from "angular2-polyfill/core/interfaces/ComponentMetadata";
    export function Component(component: ComponentMetadata): (target: any) => void;
}
declare module "angular2-polyfill/core/interfaces/DirectiveMetadata" {
    export interface DirectiveMetadata {
        selector?: string;
        inputs?: string[];
        outputs?: string[];
        host?: {
            [key: string]: string;
        };
        providers?: any[];
    }
}
declare module "angular2-polyfill/core/decorators/Directive" {
    import { DirectiveMetadata } from "angular2-polyfill/core/interfaces/DirectiveMetadata";
    export function Directive(options: DirectiveMetadata): (target: any) => void;
}
declare module "angular2-polyfill/core/decorators/Inject" {
    export function Inject(token: any): (target: any, propertyKey: string | symbol, parameterIndex: number) => void;
}
declare module "angular2-polyfill/core/decorators/Injectable" {
    export function Injectable(): (target: any) => void;
}
declare module "angular2-polyfill/core/decorators/Input" {
    export function Input(bindingPropertyName?: string): (target: any, propertyKey: string) => void;
}
declare module "angular2-polyfill/core/decorators/Output" {
    export function Output(bindingPropertyName?: string): (target: any, propertyKey: string) => void;
}
declare module "angular2-polyfill/core/interfaces/PipeMetadata" {
    export interface PipeMetadata {
        name: string;
        pure: boolean;
    }
}
declare module "angular2-polyfill/core/decorators/Pipe" {
    import { PipeMetadata } from "angular2-polyfill/core/interfaces/PipeMetadata";
    export function Pipe(pipe: PipeMetadata): (target: any) => void;
}
declare module "angular2-polyfill/core/interfaces/OnInit" {
    export interface OnInit {
        ngOnInit(): void;
    }
}
declare module "angular2-polyfill/core/interfaces/OnDestroy" {
    export interface OnDestroy {
        ngOnDestroy(): void;
    }
}
declare module "angular2-polyfill/core/interfaces/PipeTransform" {
    export interface PipeTransform {
        transform(value: any, args: any[]): any;
    }
}
declare module "angular2-polyfill/core/core" {
    export { Component } from "angular2-polyfill/core/decorators/Component";
    export { Directive } from "angular2-polyfill/core/decorators/Directive";
    export { Inject } from "angular2-polyfill/core/decorators/Inject";
    export { Injectable } from "angular2-polyfill/core/decorators/Injectable";
    export { Input } from "angular2-polyfill/core/decorators/Input";
    export { Output } from "angular2-polyfill/core/decorators/Output";
    export { Pipe } from "angular2-polyfill/core/decorators/Pipe";
    export { OnInit } from "angular2-polyfill/core/interfaces/OnInit";
    export { OnDestroy } from "angular2-polyfill/core/interfaces/OnDestroy";
    export { PipeTransform } from "angular2-polyfill/core/interfaces/PipeTransform";
}
declare module "core" {
    export * from "angular2-polyfill/core/core";
}
declare module "angular2-polyfill/http/interfaces/RequestOptionsArgs" {
    export interface RequestOptionsArgs {
        params?: string | any;
        data?: string | any;
        headers?: any;
        xsrfHeaderName?: string;
        xsrfCookieName?: string;
        transformRequest?: Function | Function[];
        transformResponse?: Function | Function[];
        paramSerializer?: string | Function;
        cache?: boolean | any;
        timeout?: number | Promise<any>;
        withCredentials?: boolean;
        responseType?: string;
    }
}
declare module "angular2-polyfill/http/interfaces/Response" {
    import { RequestOptionsArgs } from "angular2-polyfill/http/interfaces/RequestOptionsArgs";
    export interface Response {
        data: string | any;
        status: number;
        headers: Function;
        config: RequestOptionsArgs;
        statusText: string;
    }
}
declare module "angular2-polyfill/http/http.service" {
    import { RequestOptionsArgs } from "angular2-polyfill/http/interfaces/RequestOptionsArgs";
    import { Response } from "angular2-polyfill/http/interfaces/Response";
    export class Http {
        private http;
        constructor(http: any);
        get(url: string, options?: RequestOptionsArgs): Promise<Response>;
        post(url: string, body: any, options?: RequestOptionsArgs): Promise<Response>;
        put(url: string, body: any, options?: RequestOptionsArgs): Promise<Response>;
        delete(url: string, options?: RequestOptionsArgs): Promise<Response>;
        patch(url: string, body: any, options?: RequestOptionsArgs): Promise<Response>;
        head(url: string, options?: RequestOptionsArgs): Promise<Response>;
    }
}
declare module "angular2-polyfill/http/providers" {
    import { Http } from "angular2-polyfill/http/http.service";
    export const HTTP_PROVIDERS: typeof Http[];
}
declare module "http" {
    export { Http } from "angular2-polyfill/http/http.service";
    export { HTTP_PROVIDERS } from "angular2-polyfill/http/providers";
}
declare module "angular2-polyfill/router/instruction" {
    export class RouteParams {
        private stateParams;
        constructor(stateParams: any);
        get(param: string): string;
    }
    export class Instruction {
        _state: string;
        urlPath: string;
        urlParams: string;
    }
}
declare module "angular2-polyfill/router/router" {
    import { Instruction } from "angular2-polyfill/router/instruction";
    export class Router {
        private state;
        constructor(state: any);
        isRouteActive(instruction: Instruction): boolean;
        navigate(linkParams: any[]): Promise<any>;
        renavigate(): Promise<any>;
        generate(linkParams: any[]): Promise<Instruction>;
    }
}
declare module "angular2-polyfill/router/interfaces" {
    export interface RouteDefinition {
        path?: string;
        component?: any;
        as?: string;
        name?: string;
        useAsDefault?: boolean;
    }
}
declare module "angular2-polyfill/router/decorators/RouteConfig" {
    import { RouteDefinition } from "angular2-polyfill/router/interfaces";
    export function RouteConfig(routes: RouteDefinition[]): (target: any) => void;
}
declare module "angular2-polyfill/router/lifecycle/lifecycle_annotations" {
    import { Instruction } from "angular2-polyfill/router/instruction";
    export function CanActivate(hook: Function | ((next: Instruction, prev: Instruction) => Promise<boolean> | boolean)): (target: any) => void;
    export interface CanActivate {
        routerCanActivate(next: Instruction, prev: Instruction): Promise<boolean> | boolean;
    }
}
declare module "angular2-polyfill/router/providers" {
    import { Router } from "angular2-polyfill/router/router";
    import { RouteParams } from "angular2-polyfill/router/instruction";
    export const ROUTER_PROVIDERS: (typeof Router | typeof RouteParams)[];
}
declare module "router" {
    export { Router } from "angular2-polyfill/router/router";
    export { RouteParams } from "angular2-polyfill/router/instruction";
    export { Instruction } from "angular2-polyfill/router/instruction";
    export { RouteConfig } from "angular2-polyfill/router/decorators/RouteConfig";
    export { CanActivate } from "angular2-polyfill/router/lifecycle/lifecycle_annotations";
    export * from "angular2-polyfill/router/interfaces";
    export { ROUTER_PROVIDERS } from "angular2-polyfill/router/providers";
}
declare module "platform/browser" {
    export function bootstrap(base: any): void;
}
declare module "angular2-polyfill/platform/bootstrap/core" {
    export function bootstrap(ngModule: any, component: any): void;
}
declare module "angular2-polyfill/platform/bootstrap/component" {
    export function bootstrap(ngModule: any, target: any, parentState?: any): string;
}
declare module "angular2-polyfill/platform/bootstrap/directive" {
    export function bootstrap(ngModule: any, target: any): void;
}
declare module "angular2-polyfill/platform/bootstrap/pipe" {
    export function bootstrap(ngModule: any, target: any): any;
}
declare module "angular2-polyfill/platform/bootstrap/injectable" {
    export function bootstrap(ngModule: any, target: any): any;
}
declare module "angular2-polyfill/platform/bootstrap/utils" {
    export function inject(target: any): void;
    export function bindInput(target: any, directive: any): void;
    export function bindOutput(target: any, directive: any): void;
    export function parseHosts(hostBindings: {
        string: string;
    }[]): {
        attrs: {};
        events: {};
        props: {
            raw: {};
            expressions: {};
        };
    };
    export function bindHostBindings(scope: any, el: angular.IRootElementService, hostBindings: any, controllerAs?: string): void;
    export function bootstrapHelper(ngModule: any, target: any): any;
}
declare module "angular2-polyfill/platform/upgrade" {
    export function bootstrap(ngModule: any, component: any, providers?: any[]): void;
}
declare module "platform/upgrade" {
    export { bootstrap } from "angular2-polyfill/platform/upgrade";
}
