import { environment } from './environment/environment.module';
export class Configuration {
    public APIUrl = environment.apiUrl;

    public DomainName = 'share.com';

    public home = this.APIUrl + '/Quotes';

    public getquotes = this.APIUrl +'/Quotes';

    public editquotes = this.APIUrl + '/Quotes';

    public deletequotes = this.APIUrl + '/Quotes';

}
