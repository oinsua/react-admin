import * as React from "react";
import { useRecordContext } from 'react-admin';
import { makeStyles } from "@material-ui/styles";
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        height: '0.5em',
        paddingLeft: 2,
    }
});

const MyUrlField = ({source}) => {
    const record = useRecordContext();
    const clasess = useStyles();

    return record ? (
                     <a href={record[source]} className={clasess.link}>
                         {record[source]}
                         <LaunchIcon className={clasess.icon}/>
                      </a>
                     )
                  : null
}

export default MyUrlField;