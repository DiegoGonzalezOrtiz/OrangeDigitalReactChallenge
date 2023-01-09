import './Body.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


const Body = ({ VideoDetails, PicturesDetails }: any) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    console.log(PicturesDetails);
    return <div className="mainBody">
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} >
                    <Tab sx={{ width: '50%' }} label="Videos" {...a11yProps(0)} />
                    <Tab sx={{ width: '50%' }} label="Photos" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div >
                    {VideoDetails === undefined ? 'Cargando...' : VideoDetails.map((item: any) =>
                        <div className='videoList'>
                            <video src={item.url} width="100%" controls></video>
                            <ThumbUpIcon className='like'></ThumbUpIcon>
                        </div>
                    )}

                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='photoList'>
                    {PicturesDetails === undefined ? 'Cargando...' : PicturesDetails.map((item: any) =>
                        <div className='row'>
                            <img src={item.url} width="100%" alt=""></img>
                            <div>
                                <h4>{item.name}</h4>
                                <h5>{item.description}</h5>
                            </div>
                        </div>
                    )}
                </div>
            </TabPanel>
        </Box>

    </div>
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default Body;