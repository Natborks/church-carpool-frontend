import React from "react";
import styles from "./table.module.css";

function Table({columns, data}) {
    return(
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((colData, colIndex) => (
                        <th key={colIndex}>{colData}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((rowData, rowIndex) => (
                    <tr key={rowIndex}>
                        {rowData.map((cellData, cellIndex) => (
                            <td key={cellIndex}>{cellData}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;