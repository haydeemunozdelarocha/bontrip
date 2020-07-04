import * as React from 'react';
import { DateRangePicker } from 'react-date-range';
import { GlobalStore } from '../../redux/GlobalStore';
import { userActions } from '../../redux/user/user.actions';
import { ICityDatesFormProps } from './CityDatesForm.I';
import { City } from '../../models/City';
import { citiesThunks } from '../../redux/cities/cities.thunks';
import CityDraggableCardsList from '../CityDraggableCardsList/CityDraggableCardsList';
import {useEffect, useState} from "react";

const today = new Date();

export const CityDatesForm: React.FC<ICityDatesFormProps> = (props) => {
    const [ranges, setRanges] = useState([]);
    const [activeRange, setActiveRange] = useState([0,0]);
    const { colors, cities, activeCityId } = props;

    useEffect(() => {
        createCityDateRanges();
    }, [cities]);

    useEffect(() => {
        const currentActiveCityIndex = getCurrentActiveCityIndex();
        setActiveRange([currentActiveCityIndex, currentActiveCityIndex])
    }, [cities]);

    const handleRangeChange = (range: any) => {
        const getRange: any = Object.values(range) && Object.values(range).length > 0 && Object.values(range)[0];
        const { key, startDate, endDate } = getRange;
        GlobalStore.dispatch(citiesThunks.rescheduleCity(key, new Date(startDate), new Date(endDate)) as any);
    }

    const createCityDateRanges = () => {
        const ranges: any = cities.map((city, i) => {
            const lastCity = cities[i - 1];

            if (city) {
                const startDate = city.startDate ? new Date(city.startDate) : lastCity ? new Date(lastCity.endDate) : today;
                const endDate = city.endDate ? new Date(city.endDate) : new Date(new Date().setDate(startDate.getDate() + 1));
                return {
                    startDate,
                    endDate,
                    key: city.id,
                };
            }
        });

        setRanges(ranges);
    };

    const getCurrentActiveCityIndex = () => cities.findIndex((city) => city && city.id === activeCityId);

    const handleFocusChange = () => {
        const currentActiveCityIndex = getCurrentActiveCityIndex();
        const nextActiveCity: City = currentActiveCityIndex !== cities.length - 1 ? cities[currentActiveCityIndex + 1] : cities[0];

        GlobalStore.dispatch(userActions.setActiveCity({ cityId: nextActiveCity.id }));
    };

    const clickCard = (cityId: string) => GlobalStore.dispatch(userActions.setActiveCity({ cityId }));

    return (
        <React.Fragment>
            <div>
                <p>Select dates:</p>
                <DateRangePicker
                    rangeColors={colors}
                    focusedRange={activeRange}
                    initialFocusedRange={activeRange}
                    ranges={ranges}
                    onChange={(range: any) => handleRangeChange(range)}
                    scroll={{ enabled: true }}
                    direction="vertical"
                    months={1}
                    moveRangeOnFirstSelection={false}
                    onRangeFocusChange={handleFocusChange}
                />
                <CityDraggableCardsList cards={cities} title="Select city:" clickCard={(cityId: any) => clickCard(cityId)} />
            </div>
        </React.Fragment>
    );
}

export default CityDatesForm;
