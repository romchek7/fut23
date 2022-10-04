import React, {useEffect, useState} from "react";
import useDispatchCountries from "../../../hooks/useDispatchCountries";
import {fetchCountriesSelector} from "../../../redux/selectors/countriesSelector";
import {useSelector} from "react-redux";
import styles from "./Countries.module.css";

interface CountriesProps {
    setCountryID: React.Dispatch<React.SetStateAction<number>>
    county_id: number
    continentIsReadyToFetch: string
    setContinent: React.Dispatch<React.SetStateAction<string>>
}

const Countries: React.FC <CountriesProps> = ({setCountryID, county_id, continentIsReadyToFetch, setContinent}) => {
    const {fetchCountries} = useDispatchCountries()

    const {countries, loadingCountries, errorCountries} = useSelector(fetchCountriesSelector)

    const continents = ['Africa', 'Asia', 'Europe', 'Oceania', 'North America', 'South America']

    useEffect(() => {
        if (continentIsReadyToFetch != '') {
            fetchCountries(continentIsReadyToFetch)
        }
    }, [continentIsReadyToFetch])

    const handleChangeContinentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            setContinent(e.currentTarget.name)
        } else {
            setContinent('')
        }
    }

    const handleChangeCountryFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            setCountryID(Number(e.currentTarget.id))
        }
        else {
            setCountryID(0)
        }
    }

    if (loadingCountries) {
        return <div>Loading...</div>
    }

    if (errorCountries) {
        return <div>Some error: {errorCountries}</div>
    }

    console.log(continentIsReadyToFetch)

    return (
        <div className={styles.filtersMain}>
            <div className={styles.filters}>
                {continents.map(continent =>
                    <div key={continent} className={styles.listOfCountriesAndContinents}>
                        <div className={styles.continents}>
                            <input type='checkbox'
                                   id={continent}
                                   name={continent}
                                   checked={continent === continentIsReadyToFetch}
                                   onChange={handleChangeContinentInput}/> {continent}
                        </div>
                        <div className={styles.countries}>
                            {countries.length != 0 && continent === continentIsReadyToFetch ? countries.map(country =>
                                <div key={country.country_id}>
                                    <input type='checkbox'
                                           id={`${country.country_id}`}
                                           name={`${country.country_id}`}
                                           checked={country.country_id === county_id}
                                           onChange={handleChangeCountryFilter}/> {country.name}
                                </div>) : <span></span>}
                        </div>
                    </div>)}
            </div>
            <div>
                age filters
            </div>
        </div>
    )
}

export default Countries