import { Button, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import AccordionOpen from "./AccordionOpen";
import { AttachFile, NotificationsNone } from '@mui/icons-material';


function MenuOpen() {
    const menu = [
        {
            icon: AttachFile,
            title: "謄本",
            content: ["找建物", "找土地"]
        },
        {
            icon: NotificationsNone,
            title: "快訊",
            content: ["訂閱物件", "通知"]
        }
    ]

    return (
        <>
            <Box sx={{ width: 250, padding: 2 }} role="presentation">
                <h2 className="font-bold text-xl">這是漢堡選單2</h2>
                <Typography component="h2" variant="h6" className="font-bold">這是漢堡選單</Typography>
                <div>
                {menu.map((item, index) => {
                    return <AccordionOpen item={item} key={index} />
                })}
                </div>
            </Box>
        </>
    )
};


export default MenuOpen;