import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import {GetAllNcrData,NcrDataDelete,UpdateNcr} from "../../services/ncrServices";
// import { PostTaskData } from "../../services/taskService";
// import { PostTaskDataObject } from "../../services/TaskObjectServices";
import { PostNcrModify } from "../../services/ncrmodifyservices";
import { GetAllNcrOptionsData2 } from "../../services/ncroptionServices";


const NcrTotal=()=>{
    const [ncrlength, setncrLength] = useState(() => {
        const storedLength = localStorage.getItem('ncrlength');
        return storedLength ? parseInt(storedLength) : data && data[0] && data[0].ncr ? data[0].ncr.length : 0;
    });


    const { loading2, data, skipCount2 } = useSelector((state) => state.NcrReducer);

    useEffect(() => {
        if (data && data[0] && data[0].ncr) {
            const newncrLength = data[0].ncr.length;
            setncrLength(newncrLength);
            localStorage.setItem('ncrlength', newncrLength);
        }
    }, [data]);

  return (
    <h1 style={{ marginTop: '40px' }}>{ncrlength}</h1>
  );
}

export default NcrTotal;