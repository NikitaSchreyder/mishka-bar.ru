import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const {authorization} = context.switchToHttp().getRequest().headers;
    
    if(authorization === 'fggdfgserg654365ytvfgdsad23re423erwqr')
      return true
    
    return false;
  }
}