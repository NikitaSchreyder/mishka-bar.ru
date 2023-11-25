import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const {authorization} = context.switchToHttp().getRequest().headers;
    
    if(authorization === 'nfbfdsjgbskdfjg35igtu3w45h9t3htfgjgh')
      return true
    
    return false;
  }
}