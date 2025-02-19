import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionOpen({ item }) {
    const IconComponent = item.icon;

    return (
        <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ padding:0 }}
            >
                {IconComponent && <IconComponent className="mr-2.5" />}
                <h3>{item.title}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <ul>
                    {item.content.map((content, index) => {
                        return <li key={index}><button type="button" className="p-2 cursor-pointer">{content}</button></li>
                    })}
                </ul>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionOpen;