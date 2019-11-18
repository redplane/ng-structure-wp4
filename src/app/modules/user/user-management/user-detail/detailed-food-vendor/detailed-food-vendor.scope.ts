import {DetailedUserViewModel} from "../../../../../view-models/user/detailed-user.view-model";
import {AddressViewModel} from "../../../../../view-models/address.view-model";
import {ICoordinate} from "../../../../../interfaces/coordinate.interface";
import {IScope} from "angular";
import {EditFoodVendorViewModel} from "../../../../../view-models/user/edit-food-vendor.view-model";
import {StateViewModel} from "../../../../../view-models/state/state-view.model";
import {CityViewModel} from "../../../../../view-models/city/city.view-model";

export interface IDetailedFoodVendorScope extends IScope{

    //#region Properties

    detailedUser: DetailedUserViewModel;

    editingVendorProfile: boolean;

    editFoodVendorModel: EditFoodVendorViewModel;

    availableStates: StateViewModel[];

    availableCities: CityViewModel[];

    //#endregion

    //#region Methods

    loadAddressDisplay(address: AddressViewModel): string;

    loadAddressCoordinate(coordinate: ICoordinate): string;

    loadGMapUrl(): string;

    shouldBankDisplayed(): boolean;

    clickEditDetailedFoodVendor(): void;

    shouldCitiesSelectionDisabled(): boolean;

    clickCancelEditFoodVendor(): void;

    //#endregion
}
