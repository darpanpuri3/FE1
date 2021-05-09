import { Validator } from '@lion/form-core';

export class NoNumbersValidator extends Validator{
    execute(value){
        this.num=['0','1','2','3','4','5','6','7','8','9'];
        for (let i=0;i<this.num.length;i+=1){
            if (value.search(this.num[i])!==-1){
                return true;
            }
        }
        return false;
    }

    static get validatorName(){
        return 'NoNumbersValidator';
    }

    static async getMessage(){
        return 'You cannot enter a number';
    }

}