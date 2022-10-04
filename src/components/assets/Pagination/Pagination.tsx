import React from "react";
import {Pagination} from 'antd';
import styles from "./Pagination.module.css";

interface PaginationProps {
    setPageSize: React.Dispatch<React.SetStateAction<number>>
    pageSize: number
    currentPage: number
    totalCount: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    setMinIndex: React.Dispatch<React.SetStateAction<number>>
    setMaxIndex: React.Dispatch<React.SetStateAction<number>>
}

const PaginationFC: React.FC <PaginationProps> = ({setPageSize, pageSize, currentPage, totalCount,
                                                      setCurrentPage, setMinIndex, setMaxIndex}) => {
    const handleChange = (page: number) => {
        setCurrentPage(page)
        setMinIndex((page - 1) * pageSize)
        setMaxIndex(page * pageSize)
        window.scrollTo({behavior: 'smooth', top: 0})
    };

    return (
        <div className={styles.paginationWrapper}>
            <select id="items" onChange={
                (e) => {
                    setPageSize(+e.target.value)
                }
            }>
                <option value={12}>12</option>
                <option value={24}>24</option>
            </select>
            <Pagination pageSize={pageSize} showSizeChanger={false} current={currentPage} onChange={handleChange}
                        total={totalCount}/>
        </div>
    )
}

export default PaginationFC