import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';

@Injectable()
export class GlobalErrorHandleService implements ErrorHandler {

  constructor(private inject: Injector) {
  }

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.inject.get(ErrorService);
    let message: string;
    let stackTrace: any;
    if (error instanceof HttpErrorResponse) {
      message = errorService.getServerErrorMessage(error);
      stackTrace = errorService.getServerStack(error);
    } else {
      message = errorService.getClientErrorMessage(error);
    }
    /**
     * aca se puede llamar un servicio para el log y o notificacion del error
     */
    console.log(`Error: ${message}`);
  }
}
