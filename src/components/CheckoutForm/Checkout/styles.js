import { makeStyles } from '@material-ui/core/styles';
import { Autorenew } from '@material-ui/icons';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    layout: {
        marginTop: '5%',
        width: 'auto',
        margin: '0 auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          },
    },
    paper: {
        padding: '10px 20px'
    }
}));