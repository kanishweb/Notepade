
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { FacebookRounded, Twitter, Instagram, Pinterest } from '@mui/icons-material/';
//import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import Logo from "../assets/images/flogo.png";
import { Link } from '@mui/material';

function Footer() {
    return (
        <div style={{ left: '0', bottom: '0', width: '100%' }}>
            <Box sx={{ flexGrow: 1, }}>
                <AppBar position="static" style={{ backgroundColor: '#000000', clear: 'both', position: 'fixed', bottom: 0 }}>

                    <Grid container justify="center" >
                        <Grid sm={4} xs={12} justify="center">
                            <img src={Logo} alt='logo' className='lgo' style={{ marginTop: 6 }} />
                        </Grid>

                        <Grid sm={4} xs={12} justify="space-between" >
                            <div className='socialmedia'>
                                <FacebookRounded style={{ marginRight: 12 }} />
                                <Instagram style={{ marginRight: 12 }} />
                                <Twitter style={{ marginRight: 12 }} />
                                <Pinterest />
                            </div>
                        </Grid>

                        <Grid sm={4} xs={12}>

                            <div >
                                <Link className='faqs' type='link' href='./faqs'> <h4>FAQ</h4></Link>
                            </div>
                        </Grid>
                    </Grid>

                </AppBar>
            </Box>
        </div>
    );
}
export default Footer;
