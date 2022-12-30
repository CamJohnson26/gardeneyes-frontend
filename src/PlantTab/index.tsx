import { useInsertPlantMutation, usePlantQuery } from "../gql/graphql";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Modal, Box, TextField } from '@mui/material';
import { useState } from 'react'

const PlantList = () => {
    const { data } = usePlantQuery();

    const [adding, setAdding] = useState(false);
    const [plantName, setPlantName] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const [insertPlant] = useInsertPlantMutation();

    const onClose = () => {
        setPlantName(null)
        setImageUrl(null)
        setAdding(false)
    }

    if (!data) {
        return <>Loading</>
    }

    return <Grid container direction={'column'} xs={4}>{data.plant.map((plant) => {
        return <Grid item>
            <Card sx={{ minWidth: 275 }}><CardMedia
                sx={{ height: 140 }}
                image={plant.image}
                title={plant.name}
            />
                <CardContent>
                    <Typography variant="h4">{plant.name}</Typography>
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
                // bgcolor: 'background.paper',
                // border: '2px solid #000',
                // boxShadow: 24,
                // p: 4,
            }} p={1}>
                <Grid container spacing={2}><Grid item>
                    <TextField id="plant-name" label="Plant Name" variant="outlined" onChange={(val) => setPlantName(val.target.value || '')} />

                </Grid><Grid item>

                        <TextField id="image-url" label="Image Url" variant="outlined" onChange={(val) => setImageUrl(val.target.value || '')} />
                    </Grid>

                    <Grid item>
                        <Button variant="text" onClick={onClose}>Cancel</Button>
                        <Button variant="contained" onClick={() => {
                            insertPlant({
                                variables: {
                                    name: plantName,
                                    image: imageUrl
                                }
                            })
                            onClose()
                        }}>Create</Button></Grid>
                </Grid>
            </Box>
        </Modal>
    </Grid>
}

export const PlantTab = () => {
    return <PlantList />
}