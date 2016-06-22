
import {Pipe} from '@angular/core';

@Pipe({name: 'round'})
export class RoundOfPipe {
    transform(value, args:string[]):any {
        if(isNaN(value)){
            return 0;
        }
        else{
            return value.toFixed(args);
        }
    }
}
