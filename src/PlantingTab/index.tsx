import { useInsertPlantingMutation, useInsertPlantMutation, useInsertSectionMutation, usePlantingQuery, usePlantQuery, useSectionQuery } from "../gql/graphql";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Modal, Box, TextField, Autocomplete } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from 'react'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const PlantingList = () => {
    const { data } = usePlantingQuery();

    const [adding, setAdding] = useState(false);
    const [sectionId, setSectionId] = useState<string | null>(null);
    const [plantId, setPlantId] = useState<string | null>(null);
    const [date, setDate] = useState<Date | null>(null);
    const [notes, setNotes] = useState<string | null>(null);

    const { data: plantData } = usePlantQuery();
    const { data: sectionData } = useSectionQuery();

    const plants = plantData?.plant?.map(plant => {
        return {
            label: plant.name,
            id: plant.id
        }
    }) || [];
    const sections = sectionData?.section?.map(section => {
        return {
            label: section.name,
            id: section.id
        }
    }) || [];


    const [insertPlanting] = useInsertPlantingMutation();

    const onClose = () => {
        setSectionId(null)
        setPlantId(null)
        setDate(null)
        setAdding(false)
    }

    if (!data) {
        return <>Loading</>
    }

    return <Grid container direction={'column'} xs={4}>{data.planting.map((planting) => {
        return <Grid item>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={planting.plantByPlant.image}
                    title={planting.plantByPlant.name}
                />
                <CardContent>
                    <Typography variant="h4">{planting.date}</Typography>
                    <Typography variant="h5">{planting.sectionBySection.name}</Typography>
                    <Typography>{planting.notes}</Typography>
                </CardContent></Card></Grid>
    })}
        <Button onClick={() => setAdding(true)}>Add New</Button>
        <Modal
            open={adding}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box style={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                backgroundColor: 'white',
                borderRadius: 5,
            }} p={1}>
                <Grid container spacing={2} direction={"column"}><Grid item>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/DD/YYYY"
                            value={date}
                            onChange={(value) => setDate(value)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                </Grid>
                    <Grid item><Autocomplete
                        disablePortal
                        id="plants"
                        options={plants}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Plant" />}
                        onInputChange={(event, newInputValue) => {
                            console.log(newInputValue)

                            const matches = plants.filter(plant => plant.label === newInputValue)
                            const id = matches.length ? matches[0].id : null

                            setPlantId(id);
                        }}
                    /></Grid>
                    <Grid item><Autocomplete
                        disablePortal
                        id="sections"
                        options={sections}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Section" />}
                        onInputChange={(event, newInputValue) => {

                            const matches = sections.filter(section => section.label === newInputValue)
                            const id = matches.length ? matches[0].id : null
                            setSectionId(id);
                        }}
                    /></Grid>
                    <Grid item>

                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            onChange={(val) => setNotes(val.target.value || '')}
                        />
                    </Grid>

                    <Grid item>
                        <Button variant="text" onClick={onClose}>Cancel</Button>
                        <Button variant="contained" onClick={() => {
                            if (!date || !plantId || !sectionId) {
                                alert('Missing some data!')
                            } else {

                                insertPlanting({
                                    variables: {
                                        date,
                                        plant: plantId,
                                        section: sectionId,
                                        notes,
                                    }
                                })
                                onClose()
                            }
                        }}>Create</Button></Grid>
                </Grid>
            </Box>
        </Modal>
    </Grid>
}

export const PlantingTab = () => {
    return <PlantingList />
}