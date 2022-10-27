import React, {useEffect, useState} from "react";
import useDispatchCountries from "../../hooks/useDispatchCountries";
import {fetchCountriesSelector} from "../../redux/selectors/countriesSelector";
import {useSelector} from "react-redux";
import styles from "./Countries.module.css";
import {Trans, useTranslation} from "react-i18next";

interface CountriesProps {
    setCountryID: React.Dispatch<React.SetStateAction<number>>
    county_id: number
    continentIsReadyToFetch: string
    setContinent: React.Dispatch<React.SetStateAction<string>>
}

const Countries: React.FC <CountriesProps> = ({setCountryID, county_id, continentIsReadyToFetch, setContinent}) => {
    const {t} = useTranslation()

    const {fetchCountries} = useDispatchCountries()

    const {countries, loadingCountries, errorCountries} = useSelector(fetchCountriesSelector)

    const continents = ['Africa', 'Asia', 'Europe', 'Oceania', 'North America', 'South America']

    useEffect(() => {
        window.scrollTo({behavior: 'smooth', top: 0})
    }, [])

    useEffect(() => {
        if (continentIsReadyToFetch != '') {
            fetchCountries(continentIsReadyToFetch)
        }
        else {
            setCountryID(0)
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

    return (
        <div className={styles.filtersMain}>
            <div className={styles.filters}>
                <h1><Trans t={t}>Country</Trans>:</h1>
                {continents.map(continent =>
                    <div key={continent} className={styles.listOfCountriesAndContinents}>
                        <div className={styles.continents}>
                            <span>
                                <input type='checkbox'
                                       id={continent}
                                       name={continent}
                                       checked={continent === continentIsReadyToFetch}
                                       onChange={handleChangeContinentInput}/>
                                <span> </span>
                                <Trans t={t}>{continent}</Trans>
                            </span>
                        </div>
                        <div className={styles.countries}>
                            {countries.length != 0 && continent === continentIsReadyToFetch ? countries.map(country => country.name === continent
                                ? <span key={country.country_id}></span>
                                : <div key={country.country_id}>
                                    <span>
                                        <input type='checkbox'
                                               id={`${country.country_id}`}
                                               name={`${country.country_id}`}
                                               checked={country.country_id === county_id}
                                               onChange={handleChangeCountryFilter}/>
                                        <span> </span>
                                        <Trans t={t}>{country.name}</Trans>
                                    </span>
                                </div>) : <span></span>}
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Countries