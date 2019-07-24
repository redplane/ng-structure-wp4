import {ICityService} from "../interfaces/city-service.interface";
import {AddCityViewModel} from "../../view-models/city/add-city.view-model";
import {CityViewModel} from "../../view-models/city/city.view-model";
import {EditCityViewModel} from "../../view-models/city/edit-city.view-model";
import {LoadCitiesViewModel} from "../../view-models/city/load-cities.view-model";
import {SearchResultViewModel} from "../../view-models/search-result.view-model";
import {IHttpResponse, IHttpService, IPromise} from "angular";
import {IAppSettings} from "../../interfaces/app-setting.interface";
import {DeleteCityViewModel} from "../../view-models/city/delete-city.view-model";

export class CityService implements ICityService {

    //#region Constructor

    public constructor(protected $http: IHttpService,
                       protected appSettings: IAppSettings) {

    }

    //#endregion

    //#region Methods

    /*
    * Add city to system asynchronously.
    * */
    public addCityAsync(model: AddCityViewModel): IPromise<CityViewModel> {
        const fullUrl = `${this.appSettings.apiEndpoint}/api/city`;
        return this.$http
            .post<CityViewModel>(fullUrl, model)
            .then((addCityResponse: IHttpResponse<CityViewModel>) => addCityResponse.data);
    };

    /*
    * Delete city from system asynchronously.
    * */
    public deleteCityAsync(cityId: string): IPromise<void> {
        const fullUrl = `${this.appSettings.apiEndpoint}/api/city/${cityId}`;
        const model = new DeleteCityViewModel();
        model.shouldRecordHardDeleted = true;

        return this.$http
            .delete(fullUrl, {
                data: model,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(_ => void(0));
    };

    /*
    * Edit city asynchronously.
    * */
    public editCityAsync(cityId: string, model: EditCityViewModel): IPromise<CityViewModel> {
        const fullUrl = `${this.appSettings.apiEndpoint}/api/city/${cityId}`;
        return this.$http
            .put<CityViewModel>(fullUrl, model)
            .then((editCityResponse: IHttpResponse<CityViewModel>) => editCityResponse.data);
    };

    /*
    * Load cities asynchronously.
    * */
    public loadCitiesAsync(condition: LoadCitiesViewModel): IPromise<SearchResultViewModel<CityViewModel>> {
        const fullUrl = `${this.appSettings.apiEndpoint}/api/city/search`;
        return this.$http
            .post<SearchResultViewModel<CityViewModel>>(fullUrl, condition)
            .then((loadCitiesResponse: IHttpResponse<SearchResultViewModel<CityViewModel>>) => loadCitiesResponse.data);
    };

    //#endregion

}
