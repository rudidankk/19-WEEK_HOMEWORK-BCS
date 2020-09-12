import React, { useContext } from "react";
import DataBody from "../data-body";
import "./data-table.css";
import DataAreaContext from "../../utils/dataAreaContext";

const DataTable = () => {
    const context = useContext(DataAreaContext);

    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th className="col" key={name} style={{ width }} onClick={() => { context.handleSort(name.toLowerCase()); }} > {name}
                                    <span className="auto"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <DataBody />
            </table>
        </div>
    );
}

export default DataTable;