interface checkServiceUseCase{
    execute(url : string) :Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error : string) => void;

export class CheckService implements checkServiceUseCase{

    constructor(

        private readonly successCallBack:                          SuccessCallback,
        private readonly errorCallback:                            ErrorCallback

    ){}

    public async execute (url: string): Promise<boolean> {

        try {
            
            const req = await fetch( url );

            if( !req.ok ) throw new Error(`error on check service: ${url}`);

            this.successCallBack();

            return true;

        } catch (error) {

            this.errorCallback(`the error catch was : ${error}`);

            return false;
        }
    }
}