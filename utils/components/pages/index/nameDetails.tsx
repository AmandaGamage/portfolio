import { Avatar, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "../../../../styles/Home.module.css";
import { Time, getTime } from "../../../functions/common";
import CommonDivider from "../../common/commonDivider";

export default function NameDetails({ data }) {

    return (
        <>
            <div className={ styles["nameContainer"] }>
                <Grid spacing={ 4 } container direction="column" alignItems="center" justifyContent="center">
                    <Grid item>
                        <Avatar
                            className={ styles["me-avatar"] }
                            alt= { data.content[0].meImage.alt }
                            src={ data.content[0].meImage.image }
                        />
                    </Grid>
                    <Grid item>
                        <Stack className={ styles["stack"] } spacing={ 3 } justifyContent="center" alignItems="center">
                            <Stack spacing={ 1 } justifyContent="center" alignItems="center">
                                <Salutation salutationData={ data.content[1] } />
                                <MyNameIs myNameIs={ data.content[2] } />
                            </Stack>
                            <Name name={ data.content[3] } />
                            <Stack spacing={ 1 } justifyContent="center" alignItems="center">
                                <MyNameIs myNameIs={ data.content[4] } />
                                <Scholarship scholarship={ data.content[5] } /> {/* Add this line */}
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
            <CommonDivider />
        </>
    );
}

function Salutation({ salutationData }) {
    const [ time, setTime ] = useState(Time.MORNING);
    const [ salutation, setSalutation ] = useState(salutationData.morningSalute);

    useEffect(() => {
        setTime(getTime());
    }, [ setTime, getTime ]);

    useEffect(() => {
        switch (time) {
            case Time.MORNING:
                setSalutation(salutationData.morningSalute);
                break;
            case Time.AFTERNOON:
                setSalutation(salutationData.afternoonSalute);
                break;
            case Time.EVENING:
                setSalutation(salutationData.eveningSalute);
                break;
            default:
                break;
        }
    }, [ setSalutation, time ]);

    return (
        <Typography variant="body1" color="text.primary" align="center">
            { salutationData.body } { salutation }
        </Typography>
    );
}

function MyNameIs({ myNameIs }) {
    return (
        <Typography variant="body1" color="text.primary" align="center">
            { myNameIs.body }
        </Typography>
    );
}

function Name({ name }) {
    return (
        <Typography variant="h2" color="text.primary" align="center" className={ styles["name"] }>
            <b>{ name.body }</b>
        </Typography>
    );
}

function Occupation({ occupation }) {
    return (
        <Typography variant="h3" color="text.primary" align="center">
            <TypeAnimation
                sequence={ occupation.body }
                cursor={ true }
                repeat={ Infinity }
                speed={ 1 }
                deletionSpeed={ 1 }
            />
        </Typography>
    );
}

function Scholarship({ scholarship }) {
    return (
        <Typography variant="body1" color="text.primary" align="center">
            { scholarship.body }
        </Typography>
    );
}
