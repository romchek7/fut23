import React from "react";
import {useFormik} from "formik";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import styles from "./AgeFilters.module.css";

interface AgeFiltersProps {
    setMinAge: React.Dispatch<React.SetStateAction<number>>
    setMaxAge: React.Dispatch<React.SetStateAction<number>>
    minAge: number
    maxAge: number
}

const AgeFilters: React.FC <AgeFiltersProps> = ({setMinAge, setMaxAge, minAge, maxAge}) => {
    const formik = useFormik({
        initialValues: {
            minAge: `${minAge}`,
            maxAge: `${maxAge}`
        },
        onSubmit: values => {
            setMinAge(+values.minAge)
            setMaxAge(+values.maxAge)
        }
    })

    return (
        <div className={styles.filtersMain}>
            <form className={styles.filtersForm} onSubmit={formik.handleSubmit}>
                <div>
                    <label>Min age:</label>
                    <input type='number' id='minAge' name='minAge' onChange={formik.handleChange} value={formik.values.minAge} placeholder={'1-100'}/>

                    <label>Max age:</label>
                    <input type='number' id='maxAge' name='maxAge' onChange={formik.handleChange} value={formik.values.maxAge} placeholder={'1-100'}/>

                    <button type='submit' className='SearchBtn'>
                        <SearchOutlined /> Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AgeFilters