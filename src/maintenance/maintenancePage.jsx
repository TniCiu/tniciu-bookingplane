import { Box, Typography } from "@mui/material";
const maintenancePage = () => {
    return(
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Typography variant="h3" gutterBottom>
                🚧 Hệ thống đang bảo trì
            </Typography>
            <Typography variant="h6" gutterBottom>
                Chúng tôi đang thực hiện bảo trì. Vui lòng quay lại sau.
            </Typography>

        </Box>
    )
}
export default maintenancePage;