import { useInsertPlantMutation, useInsertSectionMutation, useSectionQuery } from "../gql/graphql";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Modal, Box, TextField } from '@mui/material';
import { useState } from 'react'

const SectionList = () => {
    const { data } = useSectionQuery();

    const [adding, setAdding] = useState(false);
    const [sectionName, setSectionName] = useState<string | null>(null);
    const [notes, setNotes] = useState<string | null>(null);

    const [insertSection] = useInsertSectionMutation();

    const onClose = () => {
        setSectionName(null)
        setAdding(false)
    }

    if (!data) {
        return <>Loading</>
    }

    return <Grid container direction={'column'} xs={4}>{data.section.map((section) => {
        return <Grid item>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h4">{section.name}</Typography>
                    <Typography>{section.notes}</Typography>
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
                    <TextField id="section-name" label="Section Name" variant="outlined" onChange={(val) => setSectionName(val.target.value || '')} />

                </Grid>
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
                            if (!sectionName) {
                                alert('Missing data!')
                            } else {

                                insertSection({
                                    variables: {
                                        name: sectionName,
                                        notes: notes
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

export const SectionTab = () => {
    return <SectionList />
}