import {ICompileService, IDirective, IQService} from "angular";
import {CityDetailController} from "./city-detail.controller";

/* @ngInject */
export class CityDetailDirective implements IDirective {

    //#region Properties

    // Directive restriction mode.
    restrict = 'E';

    compile = (): any => {
        let pGetTemplatePromise = this.$q((resolve) => {
            require.ensure([], () => resolve(require('./city-detail.html')));
        });

        return (scope, element) => {
            pGetTemplatePromise
                .then((htmlTemplate) => {
                    element.html(htmlTemplate);
                    this.$compile(element.contents())(scope)
                });
        };
    };

    // Directive controller
    controller = CityDetailController;

    //#endregion

    //#region Constructor

    /*
    * Initialize navigation bar directive with injectors.
    * */
    public constructor(public $q: IQService, public $compile: ICompileService) {
    }

    //#endregion

    //#region Methods


    //#endregion

}
