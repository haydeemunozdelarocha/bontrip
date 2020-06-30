import * as React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-date-range';
import {GlobalStore} from "../../redux/GlobalStore";
import {userActions} from "../../redux/user/user.actions";
import { ICityDatesFormProps, ICityDatesFormState } from "./CityDatesForm.I";
import * as daterangepicker from "daterangepicker";
import DraggableCardsList from "../DraggableCardsList/DraggableCardsList";
import {City} from "../../models/City";
import {citiesThunks} from "../../redux/cities/cities.thunks";

let colors = [];
const today = new Date();

class CityDatesForm extends React.Component<ICityDatesFormProps, ICityDatesFormState> {
  constructor(props: ICityDatesFormProps) {
    super(props);

    this.state = {
      ranges: [],
      activeRange: [0, 0]
    }
  }
  public componentDidMount() {
    this.createCityDateRanges();
    this.updateActiveRange();
  }

  public componentDidUpdate(prevProps: ICityDatesFormProps) {
    if (prevProps.cities !== this.props.cities) {
      this.createCityDateRanges();
    }

    if (prevProps.activeCityId !== this.props.activeCityId) {
      this.updateActiveRange();
    }
  }

  public updateActiveRange() {
    const activeCityIndex = this.getCurrentActiveCityIndex();

    this.setState({
      activeRange: [activeCityIndex, activeCityIndex]
    })
  }

  public createCityDateRanges() {
    const {cities} = this.props;
    colors = [];

    const ranges = cities.map((city, i) => {
      const lastCity = cities[i - 1];

      if (city) {
        const startDate = city.startDate ? new Date(city.startDate) : lastCity ? new Date(lastCity.endDate) : today;
        const endDate = city.endDate ? new Date(city.endDate) : new Date(new Date().setDate(startDate.getDate() + 1));
        return {
          startDate,
          endDate,
          key: city.id,
        }
      }
    });

    this.setState({
      ranges
    });
  }

  public getCurrentActiveCityIndex() {
    return this.props.cities.findIndex((city) => city && city.id === this.props.activeCityId);
  }

  public handleRangeChange(range: daterangepicker) {
    const getRange = Object.values(range) && Object.values(range).length > 0 && Object.values(range)[0];
    const {key, startDate, endDate } = getRange;
    GlobalStore.dispatch(citiesThunks.rescheduleCity(key, new Date(startDate), new Date(endDate)) as any)
  }

  public clickCard(cityId: string) {
    GlobalStore.dispatch(userActions.setActiveCity({cityId}));
  }

  public handleFocusChange() {
    const currentActiveCityIndex = this.getCurrentActiveCityIndex();
    const nextActiveCity: City = currentActiveCityIndex !== this.props.cities.length - 1 ? this.props.cities[currentActiveCityIndex + 1] : this.props.cities[0];

    GlobalStore.dispatch(userActions.setActiveCity({cityId: nextActiveCity.id}));
  }

  public render() {
    const {colors, cities} = this.props;
    const {ranges, activeRange} = this.state;

    return (
      <React.Fragment>
        <div>
          <p>Select dates:</p>
          <DateRangePicker
            rangeColors={colors}
            focusedRange={activeRange}
            initialFocusedRange={activeRange}
            ranges={ranges}
            onChange={(range: any) => this.handleRangeChange(range)}
            scroll={{enabled: true}}
            direction="vertical"
            months={1}
            moveRangeOnFirstSelection={false}
            onRangeFocusChange={this.handleFocusChange}
          />
          <DraggableCardsList cards={cities} title="Select city:" clickCard={(cityId) => this.clickCard(cityId)}/>
        </div>
      </React.Fragment>
    );
  }
}

export default CityDatesForm;
